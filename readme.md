# Notes API 
This is a simple backend API built using Node.js for performing CRUD  operations on notes and containerised the application using docker.

## Prerequisites
- Git & Docker install on your machine.

## API endpoints

- `GET /notes/`: Get all notes.
- `POST /notes/create/`: Create a note.
- `GET /notes/:id/`: Get a specific note.
- `PUT /notes/:id`: Update a specific note.
- `DELETE /notes/:id`: Delete a specific note.

**Postman collection link: 🔗 [click-here](https://www.postman.com/iamsindhuinti/workspace/notes-api/collection/25445399-c5886cfc-8afd-4eb6-9629-6ffa99f17ee5?action=share&creator=25445399)**

## Docker Containers
This application is containerized using Docker and is composed of two containers:

- `notes-app`: This container runs the Node.js server and serves the API.
- `mongodb`: This container runs a MongoDB database instance.

## Getting Started
1. Clone the repository and navigate to the project directory.

```
git clone https://github.com/Sindhuinti/notes-api-docker.git
cd notes-api-docker
```

2. Run the application in Docker.
```
docker-compose -f docker-compose.yml up
```

## Explanation

Docker Compose is a tool used for defining and running multi-container Docker applications. It allows you to define the services, networks, and volumes required by your application in a single YAML file, and then use that file to start up your entire application stack with a single command.

Docker Compose simplifies the process of deploying a complex application by allowing you to define multiple containers and the relationships between them in a single file. It helps to manage the dependencies between these containers, making it easy to start, stop, and scale your application as required.

The `Dockerfile` contains instructions on how to build a Docker image, which can then be used to create a container for our notes app. 

Here by applying the `docker-compose.yml` file. The docker environment will build the  `notes-api` image and pulls `mongo` image from docker hub.

`mongo` container binds to the port `27017` and the `notes-api` container binds to the port `3000`.
