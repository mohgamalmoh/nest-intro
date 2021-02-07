- I assumed that we have one big group chat

- The system simply depends on socketio implementation on server side with redis adapter to broadcast the messages among 
the different instances of the server (if we use multiple instances in a microservices scalable architecture).

- I use jwt autentication with cookies authentication headers

- The fullstack should be up and running using docker compose

- This endpoint is used to get the group chat history from database "/messages" (GET Method)

- Using any socketio client you can connect to my socketio server on the port "3004"

- You can authenticate yourself using the endpoint "authentication/register" using name,email,password

- You can login using this endpoint "authentication/login" using the registered email and password