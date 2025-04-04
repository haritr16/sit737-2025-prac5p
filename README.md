# sit737-2025-prac5p

Steps to Dockerize the application
1.	Install docker desktop
    •	Download and install docker from docker website
    •	Verify the docker installation using the command – docker –version
    •	Create an account in docker hub
2.	Install required dependencies
    •	Install node modules and required dependencies 
3.	Clone the application to a new folder
    •	Develop a simple hello world program in node.
    •	Clone the project in a new folder to dockerize the application
4.	Develop a Docker file 
    •	Create the docker file in the folder. 
5.	Test the application 
    •	Test the application locally and check the port.
6.	Build the docker image
    •	Build the docker image using the command – 
        docker build -t hari1661/week4.
    •	Open docker desktop to verify the image
7.	Push the docker image to docker hub
    •	Use the command docker ps in the terminal to check the container and docker image
8.	Test the website
    •	Use docker logs to check the log
    •	Open the port and check that the website is running successfully.
9.	Include health check
    •	Modify the docker file to include the health check
    •	Build the docker and run the application
    •	Use docker ps command to check the health status of the container
10.	Push the code to Github
    •	 Initialize a Git repository (git init).
    •	Add and commit files using the commands - git add . & git commit -m "Initial commit".
    •	Push to a GitHub repository.
