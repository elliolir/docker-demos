docker build -t=example-one .
docker volume create first-volume
docker run -d -p 8080:4000 -v first-volume:/app/logs -e PORT=4000 example-one