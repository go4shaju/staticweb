pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install & Build') {
            steps {
                sh 'cd react-app && npm install && npm run build'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker-compose build react-nginx'
            }
        }
        stage('Restart React nginx Container') {
            steps {
                sh 'docker-compose up -d --force-recreate react-nginx'
            }
        }
    }
}
