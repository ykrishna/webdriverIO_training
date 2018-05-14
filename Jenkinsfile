pipeline {
    agent any
    stages {
        stage('Test') {
            steps {
                sh 'npm install'
                sh 'gulp test:e2e'
            }
        }
    }
    post {
        always {
            echo "good bye"
        }
    }
}
