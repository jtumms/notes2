# Notes Demo App

React app with Spring Boot v2.2.0 REST API backend with embedded Apache Tomcat. Demonstrates basic CRUD operations. Utilizes a Maven build using Yarn and the frontend-maven-plugin to build the js into the JAR.

## Installation

Download the included jar file to your local [notes2-0.0.1-SNAPSHOT.jar](https://github.com/jtumms/notes2/blob/master/notes2-0.0.1-SNAPSHOT.jar) Be sure to have an active JVM runtime on your local host.

The jar includes the backend and frontend React files. From the same folder to which you downloaded the jar, run the app with the following command 

```bash
java -jar notes2-0.0.1-SNAPSHOT.jar
```

## Usage

```python
http://localhost:8080
```

#### For direct access to the REST API:

```python
http://localhost:8080/api/v1/notes
http://localhost:8080/api/v1/notes/{noteId}


```


## Contributing
Pull requests are welcome.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
