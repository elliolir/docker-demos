docker build -t=example-one .
docker run -d -p 8080:8080 -e PORT=8080 example-one