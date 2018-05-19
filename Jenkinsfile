pipeline {
    // if we declare tools block there should be at least one tool should be declared
    //tools { 
        //maven "apache-maven-3.5.3"
        //jdk "default"
   //}

    agent any

    stages {
         stage("clone repository"){
                 steps{
                         dir("webdriverIO_training"){
                               git changelog: false, poll: false, url: 'git@github.com:ykrishna/webdriverIO_training.git', branch: 'master'  
                               echo "cloning completed"
                         }
                 }
         }
         
         stage("install dependencies"){
                 steps{
                        sh 'npm install'  
                        echo 'dependencies installed' 
                 }
         }
            
         stage("run webdriverIO tests") {
            steps {
                 sh 'gulp test:e2e'
                 echo 'test execution completed'                
            }
         }
    }

    post {
        always {
              //archiveArtifacts "reports/**/*"
                echo "The End" 
        }
    }
}
