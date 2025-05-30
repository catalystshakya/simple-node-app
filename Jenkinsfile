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

        stage('Code Quality') {
            steps {
                // Run ESLint for code quality check, but don't fail pipeline on lint errors
                bat 'npx eslint . || exit 0'
            }
        }

        stage('Security') {
            steps {
                // Run npm audit and save report
                bat 'npm audit --json > audit-report.json'
                echo 'Security audit report generated: audit-report.json'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Starting app for testing...'
                // Run app in background
                bat 'start /b node app.js'
                // Wait a bit to let app start
                sleep time: 30, unit: 'SECONDS'
                echo 'App should be running on http://localhost:3000'
            }
        }
    }
}