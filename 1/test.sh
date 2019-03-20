docker build -t=example-one .
docker run -d -p 8080:4000 -e PORT=4000 example-one