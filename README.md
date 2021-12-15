# the-jobs-api 💻

Hello and welcome! This Node.JS  project demonstrates a simple architecture building a full API with Node.JS, Express.JS, and MongoDB presents an architectural demo of these features:

- Built with Node.js and Express
- Mongoose ODM
- REST API

## Express Router and Routes

| Route               | HTTP Verb | Route Middleware   | Description                          |
| --------------------| --------- | ------------------ | ------------------------------------ |
| /api/helloworld     | GET       |                    | Show a simple message                |
| /api/notes          | GET       |                    | Get list of notes                    |
| /api/notes          | POST      | `isAuthenticated()` | Creates a new notes                  |
| /api/notes/:id      | GET       |                    | Get a single notes                   |
| /api/notes/:id      | DELETE    |`hasRole(['company', 'viewer'])`| Deletes a task                       |


## Usage
The use of endpoints is very simple, previously you could see a table of endpoints that you can call, if you need to create a note or log in, here we have some examples.

### Authentication **user** `/auth/local/login`:

Request Body:
```json
{
  "email": "kz@mz.com",
  "password": "12345"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFjNjM1MTljZjlkNTQ5YjA3YWU2NTEiLCJpYXQiOjE2MjE5MTMyNjIsImV4cCI6MTYyMTk5OTY2Mn0.WkptwtzkfxNu5sQ28idbt4bJ7RDbXvVNlZXF0Z0ht-0"
}
```
### Basic example **Create User** `/api/user`:

Request Body:
```json
{
  "firstName": "john",
  "lastName": "doe",
  "password": "123456",
  "email": "myemail@mail.com"
}
```

Response:

```json
{
  "fullname": "JOHN doe",
  "role": "viewer",
  "email": "myemail.moreno@mail.com"
}
```

### Basic example **Create NOTE** `/api/notes`:

Request Body:
```json
{
  "content": "Create project nodejs",
  "date": "2021-05-30T17:30:31.098Z",
  "important": true
}
```

Response:
```json
{
  "content": "Create project nodejs",
  "important": true,
  "date": "2021-05-30T17:30:31.098Z",
  "_id": "61b370d4d36823961380d96f",
  "createdAt": "2021-12-10T15:23:00.603Z",
  "updatedAt": "2021-12-10T15:23:00.603Z",
  "__v": 0
}
```

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 14.15.x, npm >= 6.14.x
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Configure the env
```shell
$ cp .env.example .env
```

3. Update `.env` with the required info

4. Run `npm run dev` to start the development server.
