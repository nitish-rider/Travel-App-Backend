# Travel APP Backend

Clone the repo:

```bash
git clone https://github.com/nitish-rider/Travel-App-Backend.git
cd Travel-App-Backend
```
Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and add the <OPENAI_API_KEY>
```

Docker: Start Docker Desktop

```bash
# run docker container in development mode
yarn docker:dev
```

Creating user in DB:
Run the following in a terminal or import into postman and call the API

```bash
curl -X 'POST' \
  'http://localhost:3001/v1/auth/register' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "name": "Test Username",
  "email": "testUser@test.com",
  "password": "testPassword1"
}’
```

## Commands

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Mongoose models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\
`POST /v1/auth/send-verification-email` - send verification email\
`POST /v1/auth/verify-email` - verify email

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

**Planner routes**:\
`Get /places` - get all places stored in DB\
`POST /places/suggest` - get suggestions for places from Open AI\
`Delete /places/:id` - delete a place from DB

