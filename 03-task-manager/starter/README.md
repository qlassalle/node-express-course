Create mongodb container:
> docker run -it -p 27017:27017 --name task-manager-db -d mongo:latest

Mongoose will create the collection on its own

Query documentation: https://www.mongodb.com/docs/mongodb-shell/crud/read/