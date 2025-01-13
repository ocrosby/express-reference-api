# Makefile to build Docker image

# Variables
IMAGE_NAME = express-reference-api
TAG = latest

# Default target
.PHONY: all build push clean swagger
all: build

# Build Docker image
build: swagger
	docker build -t $(IMAGE_NAME):$(TAG) .

# Push Docker image to registry
push:
	docker push $(IMAGE_NAME):$(TAG)

# Clean up Docker images
clean:
	-docker rmi $(IMAGE_NAME):$(TAG)
	docker system prune -f

# Generate Swagger documentation
swagger:
	node swagger.js

# Run Docker image
run: build
	docker run -p 3000:3000 $(IMAGE_NAME):$(TAG)

# Start database and cache containers
db:
	docker-compose -f docker-compose.db.yml up

# Start API, database, and cache containers
api:
	docker-compose -f docvker-compose.api.yml up