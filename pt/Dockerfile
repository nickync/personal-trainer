#
# Build stage
#
FROM maven:3.8.2-openjdk-17 AS build
COPY . .
RUN mvn clean package

#
# Package stage
#
FROM openjdk:17
COPY --from=build /target/pt-0.0.1-SNAPSHOT.jar pt.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","pt.jar"]