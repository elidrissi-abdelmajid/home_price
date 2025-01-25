pipeline{
    agent any
    environment{
        DOCKER_IMAGE="home_price"
        TAG="v1"
        DOCKER_USER=""
        DOCKER_KEY=""        
    }
    stages{
        stage("clone the project"){
            steps{
                   git branch :"master",url: "https://github.com/elidrissi-abdelmajid/home_price"
                
            }   
        }
        stage("build the image"){
            steps{
                script{
                    bat "docker build -t ${DOCKER_USER}/${DOCKER_IMAGE}:${TAG} ."
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

        stage("Push the docker image"){
            steps{
                script{
                    bat "docker push  ${DOCKER_USER}/${DOCKER_IMAGE}:${TAG}"
                }
            }
        }
    }
}