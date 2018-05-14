pipeline {
    agent any
    stages {
        
        stage('setup') {
            steps {
                sh 'npm install'
               }
        
        stage('Test') {
            steps {
                
                sh 'gulp test:e2e'
                  }
        }
    }
 }
