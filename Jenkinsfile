pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Validate') {
            steps {
                sh 'cd staticweb && npm install'
                sh 'cd staticweb && npm run lint'
                sh 'cd staticweb && npm test'
            }
        }
        stage('Package') {
            steps {
                sh 'cd staticweb && npm run build'
            }
        }
        stage('Deploy to Nginx') {
            steps {
                // Replace nginx_container with your actual container name or ID
                sh 'docker cp staticweb/build/. web:/usr/share/nginx/html/'
            }
        }
    }
}
