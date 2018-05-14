pipeline {
  agent {
    node {
      label 'test'
    }

  }
  stages {
    stage('test') {
      steps {
        sh '''npm install

gulp test:e2e'''
      }
    }
  }
}