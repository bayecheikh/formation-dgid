pipeline {
	agent none  stages {
  	stage('Maven Install') {
    	agent {
      	docker {
        	image 'maven:3.5.0'
        }
      }
      steps {
      	sh 'mvn clean install'
      }
    }
    stage('Docker Build') {
    	agent any
      steps {
      	sh 'docker build -t ${Repo_Name}:${Image_Tag} -f ${Dockerfile_Name}'
      }
    }
    stage('Docker Push') {
    	agent any
      steps {
      	withCredentials([usernamePassword(credentialsId: 'Docker-Hub-m2m2d0u', passwordVariable: 'Docker-Hub-m2m2d0uPassword', usernameVariable: 'Docker-Hub-m2m2d0uUser')]) {
        	sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
          sh 'docker push ${Repo_Name}'
        }
      }
    }
  }
}
