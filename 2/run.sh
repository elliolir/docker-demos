docker build -t=example-two .
#docker volume create first-volume
#docker run -d -p 8080:4000 -v first-volume:/app/data -e PORT=4000 example-two
docker run -d -p 8080:4000 -v $PWD/../container-data:/app/data -e PORT=4000 example-two
