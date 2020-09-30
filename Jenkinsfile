pipeline {
    agent {
        label 'docker'
    }
    environment {
        APPLICATION_NAME='nodejs-unit-testing'
        npm_config_cache='npm-cache'
        HOME = '.'
    }
    stages {
        stage('Build and Test Applicaion') {
            agent {
                docker {
                    reuseNode true
                    image 'node:8-alpine'
                }
            }
            steps {
                sh 'ls -lrta'
                sh 'npm install'
                sh 'npm run build'
                sh 'ls -lrta'
            }
        }

        stage('Code Analysis') {
            steps {
                script {
                    sh "echo 'Running Sonar Code Analysis'"
                }
            }
        }
    }

    cleanup {
        cleanWs()
    }
}