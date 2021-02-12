sudo kill -9 `sudo lsof -t -i:8000`
sudo kill -9 `sudo lsof -t -i:3000`

cd ./cookbook
. ./env/bin/activate
python manage.py runserver &
cd ../web
npm run dev