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

