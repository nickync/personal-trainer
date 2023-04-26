#
# Build stage
#
FROM maven:3.8.2-jdk-11 AS build
COPY pom.xml /app
RUN mvn clean package

#
# Package stage
#
FROM openjdk:17
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar pt.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","pt.jar"]