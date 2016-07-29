# Docker

## Docker what is it and how does it work

Docker main site: https://www.docker.com

Docker documentation: https://docs.docker.com

Do 'Getting started with Docker tutorial': https://docs.docker.com/engine/getstarted/

Things to understand: 

* docker ps / docker ps -a 
* images, names, run
* Dockerhub, searching and pulling images (lots of different images eg Geth)
* Dockerfiles: FROM, RUN, CMD
* docker build + Look at build process (see layers building up)


Useful Commands (reference at https://docs.docker.com/engine/reference/commandline/

* docker ps / docker ps -a 
* docker images
* docker run + flags -i -t -P -p
* docker rmi (remove image)
* docker rm (removes container) 
* docker exec
* docker kill

Points to cover:

* Cleaning up after docker (big images) + unnamed images
* Logging on to a running machine using 'exec' command
* Configure the VM (must have 2GB for  each Geth)
* Docker-machine ip address (different for PC??)

## Dockerfiles

Dockerfile reference: https://docs.docker.com/engine/reference/builder/

* Look at some examples on dockerhub
* Go through the reference to understand what they are doing














