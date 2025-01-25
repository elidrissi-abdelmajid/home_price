pipeline {
    agent any
    stages {

        stage("Build the Docker image") {
            steps {
                script {
                    // Make sure to include the current directory as the build context.
                    bat "docker build -t ${DOCKER_IMAGE}:${TAG} ."
                }
            }
        }

        stage("Login to Docker Hub") {
            steps {
                script {
                    // Login to Docker Hub using the provided credentials.
                    bat "docker login -u ${DOCKER_USER} -p ${DOCKER_KEY}"
                }
            }
        }

        stage("Push the Docker image") {
            steps {
                script {
                    // Push the built image to Docker Hub.
                    bat "docker push ${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
                }
            }
        }
    }
}
