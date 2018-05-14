node {
        stage('stage 1')
        { 
           echo 'Hello World'
           sh 'npm -v'
           echo 'stage 1'
        }
    
        stage('stage 2')
        {
           sh 'npm install'  
           echo 'stage 2'
        }
       
        stage('stage 3')
        {
           sh 'gulp test:e2e'
           echo 'stage 3'
        }
}

