pipeline{
    agent any
    environment{
        DOCKER_IMAGE="home_price"
        TAG="v1"
        DOCKER_USER="mjid6"
        DOCKER_KEY="dckr_pat_knjjAjvRy6Qsy1arF36wVnB2Wug"        
    }
    stages{
        stage("clone the project"){
            steps{
                script{
                    branch "master",url "https://github.com/elidrissi-abdelmajid/home_price"
                }
            }   
        }
        stage("build the image"){
            steps{
                script{
                    bat "docker build -t ${DOCKER_IMAGE}:${TAG}"
                }
            }
        }

        stage("Login to dockerhub"){
            steps{
                script{
                    bat "docker login -u ${DOCKER_USER} -p ${DOCKER_KEY}"
                }
            }
        }

        stage("Build the docker image"){
            script{
                bat "docker build -b ${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
            }
        }
        stage("Push the docker image"){
            script{
                bat "docker push  ${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
            }
        }
    }
}