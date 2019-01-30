# Install requirements

git bash: 
`git clone https://github.com/MikaelStenstrand/consultant-app.git`

## Front

Open project folder /front in VS Code.
In VS Code terminal: 
- `npm install`
- `npm start`

Front folder structure:
- components = dumb components
- containers = smart components
- views


## Back
Docker
-Download  https://www.docker.com/get-started
-If Hyper V is not enabled, do it by pushing ok when opening Docker (your computer will restart).

Run application on Docker
-On the commandline go to the root directory and write

`docker-compose up`

- This will load files needed for setting up Docker and MongoDB and starts them.





You are ready to run!

When you pull new version of WebApi you need to run `docker-compose build` before `docker-compose up`
