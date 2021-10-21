# My Restaurant App

This project uses a mongoDB database, to make it work it is required to have mongo running on port 27017.

One way to do this is by running mongoDB with Docker:

  - Install Docker: https://docs.docker.com/get-docker/
  - Once done run in the terminal: docker pull mongo:latest
  - And then: docker run -p 27017:27017 mongo

Now to get the project running:

## - Step 1: Create a folder and add 2 more folders inside. One for the Frontend and one for the Backend.
  
  Main folder <br/>
    -Frontend <br/>
    -Backend
    
## - Step 2: Clone all the repositories in their corresponding folders

  Main folder: git clone https://github.com/GerMont01/myapp-meta.git <br/>
  Frontend: git clone https://github.com/GerMont01/myapp-frontend.git <br/>
  Backend: git clone https://github.com/GerMont01/myapp-backend.git
  
##- Step 3: Install all modules and dependencies

  Inside each folder run: npm install
  
## - Step 4: Start project

  Open two terminals and go inside the main folder on each and run:
  
  To initialize server (in one terminal): npm start <br/>
  To initialize client (in the second terminal): npm run start-client
  
Project is running now!
