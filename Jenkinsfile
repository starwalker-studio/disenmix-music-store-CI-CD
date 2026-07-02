pipeline {
    agent any

    environment {
        COMPOSE_FILE_DEV  = 'docker-compose.dev.yml'
        COMPOSE_FILE_PROD = 'docker-compose.yml'
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                echo 'Clonando repositorio...'
                checkout scm
            }
        }

        stage('Construir imágenes') {
            steps {
                echo 'Construyendo imágenes Docker...'
                sh 'sudo docker compose -f ${COMPOSE_FILE_PROD} build'
            }
        }

        stage('Correr contenedores') {
            steps {
                echo 'Levantando contenedores...'
                sh 'sudo docker compose -f ${COMPOSE_FILE_PROD} up -d'
            }
        }

        stage('Verificar') {
            steps {
                echo 'Verificando contenedores corriendo...'
                sh 'sudo docker ps'
            }
        }
    }

    post {
        success {
            echo 'Deploy completado exitosamente'
        }
        failure {
            echo 'El deploy falló, revisa los logs'
        }
    }
}
