# Makefile to build Docker image

# Variables
IMAGE_NAME = express-reference-api
TAG = latest

# Default target
.PHONY: all
all: build

# Build Docker image
.PHONY: build
build:
	docker build -t $(IMAGE_NAME):$(TAG) .

# Push Docker image to registry
.PHONY: push
push:
	docker push $(IMAGE_NAME):$(TAG)

# Clean up Docker images
.PHONY: clean
clean:
	-docker rmi $(IMAGE_NAME):$(TAG)
	docker system prune -f

# Geneate Swagger documentation
.PHONY: swagger
swagger:
	node swagger.js
