FROM openjdk:latest
RUN groupadd spring && useradd spring -g spring
USER spring:spring
# TODO: Copy all files from target folder
# TODO: Set environment variables
# TODO: Setup SQL
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]