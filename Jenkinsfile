pipeline {

    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Lakshmiprasad234/movie-recommendation-system.git'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                bat 'docker build -t movie-backend ./backend'
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                bat 'docker build -t movie-frontend ./frontend'
            }
        }

        stage('Docker Compose Up') {
            steps {
                bat 'docker compose up -d'
            }
        }

    }
}