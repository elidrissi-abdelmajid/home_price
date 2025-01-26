pipeline {
    agent any

    environment {
        DOCKER_IMAGE_BACKEND = "home_price_backend"
        TAG = "v1"
        DOCKER_IMAGE_FRONTEND = "home_price_frontend"
        DOCKER_USER = ""
        DOCKER_KEY = ""
    }

    stages {
        stage("Clone the project") {
            steps {
                git branch: "master", url: "https://github.com/elidrissi-abdelmajid/home_price"
            }
        }

        stage("Build Docker image of the backend") {
            steps {
                script {
                    dir('service') {
                        bat "docker build -t ${DOCKER_IMAGE_BACKEND}:${TAG} ."
                    }
                }
            }
        }

        stage("Build Docker image of the frontend") {
            steps {
                script {
                    dir('client') {
                        bat "docker build -t ${DOCKER_IMAGE_FRONTEND}:${TAG} ."
                    }
                }
            }
        }
        stage("Login to DockerHub") {
            steps {
                script {
                    bat "docker login -u ${DOCKER_USER} -p ${DOCKER_KEY}"
                }
            }
        }

        stage("Push Docker images to DockerHub") {
            steps {
                script {
                    
                    bat "docker tag ${DOCKER_IMAGE_BACKEND}:${TAG} ${DOCKER_USER}/${DOCKER_IMAGE_BACKEND}:${TAG}"
                    bat "docker push ${DOCKER_USER}/${DOCKER_IMAGE_BACKEND}:${TAG}"
                    
                    bat "docker tag ${DOCKER_IMAGE_FRONTEND}:${TAG} ${DOCKER_USER}/${DOCKER_IMAGE_FRONTEND}:${TAG}"
                    bat "docker push ${DOCKER_USER}/${DOCKER_IMAGE_FRONTEND}:${TAG}"
                }
            }
        }


        stage("Deploy backend to Kubernetes") {
            steps {
                script {
                  
                    bat 'kubectl apply -f kubernetes/deployment-backend.yaml --validate=false --kubeconfig=C:\\Users\\USER\\.kube\\config'
                    bat 'kubectl apply -f kubernetes/service-backend.yaml --validate=false --kubeconfig=C:\\Users\\USER\\.kube\\config'

                    
                    bat 'kubectl get deployments --kubeconfig=C:\\Users\\USER\\.kube\\config'
                    bat 'kubectl get services --kubeconfig=C:\\Users\\USER\\.kube\\config'
                }
            }
        }

        stage("Deploy frontend to Kubernetes") {
            steps {
                script {
                    
                    bat 'kubectl apply -f kubernetes/deployment-frontend.yaml --validate=false --kubeconfig=C:\\Users\\USER\\.kube\\config'
                    bat 'kubectl apply -f kubernetes/service-frontend.yaml --validate=false --kubeconfig=C:\\Users\\USER\\.kube\\config'

                    
                    bat 'kubectl get deployments --kubeconfig=C:\\Users\\USER\\.kube\\config'
                    bat 'kubectl get services --kubeconfig=C:\\Users\\USER\\.kube\\config'
                    bat "kubectl get pods --selector=app=homeprice-frontend --kubeconfig=C:\\Users\\USER\\.kube\\config"
                }
            }
        }
    }
}
