# cookbook/schema.py
import graphene
from graphene_django import DjangoObjectType
from django.db.models import Q

from cookbook.ingredients.models import Category, Ingredient


class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = ("id", "name", "ingredients")


class IngredientType(DjangoObjectType):
    class Meta:
        model = Ingredient
        fields = ("id", "name", "notes", "category")


class Query(graphene.ObjectType):
    all_ingredients = graphene.List(IngredientType)
    category_by_name = graphene.Field(
        CategoryType,
        name=graphene.String(required=True),
    )
    ingredient_by_name = graphene.Field(
        IngredientType,
        name=graphene.String(required=True),
    )
    search_ingredient = graphene.List(
        IngredientType,
        description="Search ingredients by the name it may start with",
        name=graphene.String(
            required=True,
            description="name that ingredient starts with",
        ),
    )

    def resolve_search_ingredient(root, info, name):
        try:
            return list(Ingredient.objects.filter(Q(name__startswith=name)))
        except Ingredient.DoesNotExist:
            return None

    def resolve_ingredient_by_name(root, info, name):
        try:
            return Ingredient.objects.get(name=name)
        except Ingredient.DoesNotExist:
            return None

    def resolve_all_ingredients(root, info):
        # We can easily optimize query count in the resolve method
        return Ingredient.objects.select_related("category").all()

    def resolve_category_by_name(root, info, name):
        try:
            return Category.objects.get(name=name)
        except Category.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
