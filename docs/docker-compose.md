# Docker Compose

## Docker Compose what is it and how does it work

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a Compose file to configure your application’s services. Then, using a single command, you create and start all the services from your configuration.

Documentation: https://docs.docker.com/compose/

Overview: https://docs.docker.com/compose/overview/

Install: https://docs.docker.com/compose/install/


## Getting started

* Run through the getting started example


## Docker Compose command line

Command Line ref: https://docs.docker.com/compose/reference/

Commands to know: 

* up
* down
* ps
* build (need to run if changed dockerfiles)


## Docker Compose file reference

docker-compose file reference: https://docs.docker.com/compose/compose-file/

Note, if renaming yml file will need to run docker-compose with the -f <file> flag, eg

```script
$ docker-compose -f 'docker-compose.2nodes.yml' up
```

if you bring something up with the -f you also need to use it everytime you referenceit, eg when you bring it down:

```script
$ docker-compose -f 'docker-compose.2nodes.yml' down
```


## Logging

To log all container output, redirect the output of docker-compose to a file, eg: 

```script
$ docker-compose -f 'docker-compose.2nodes.yml' up >> test_log.txt &          
```

'>>' redirects the output to the file
 '&' detaches the command from stdin so the shell isn't tied up
 This may work differently on a PC
 
 On a mac you can follow the output using the Console app (probably in Applications/Utilities/Console)