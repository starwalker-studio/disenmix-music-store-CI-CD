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

        stage('Preparar variables de entorno') {
            steps {
                withCredentials([file(credentialsId: 'wavestore-env-docker', variable: 'ENV_FILE')]) {
                    sh '''
                        whoami
                        ls -la
                        ls -la wavestore-backend-light-version/
                        chmod 755 wavestore-backend-light-version
                        cp $ENV_FILE wavestore-backend-light-version/.env.docker
                    '''
                }
            }
        }

        stage('Construir imágenes') {
            steps {
                echo 'Construyendo imágenes Docker...'
                sh 'docker compose -f ${COMPOSE_FILE_PROD} build'
            }
        }

        stage('Correr contenedores') {
            steps {
                echo 'Levantando contenedores...'
                sh 'docker compose -f ${COMPOSE_FILE_PROD} up -d'
            }
        }

        stage('Verificar') {
            steps {
                echo 'Verificando contenedores corriendo...'
                sh 'docker ps'
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
