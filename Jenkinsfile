pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t simple-node-app .'
                sh 'docker run -d -p 3000:3000 simple-node-app'
            }
        }
    }
}