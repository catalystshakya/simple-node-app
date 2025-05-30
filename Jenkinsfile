pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                bat 'docker build -t simple-node-app .'
                bat 'docker run -d -p 3000:3000 simple-node-app'
            }
        }
    }
}