#!groovy


pipeline{
    agent any

    // tools {nodejs "nodejs"}

    options{
        disableConcurrentBuilds()
        timeout(time:5,unit:'MINUTES')
    }

    environment{
        NODE_ENV="production"
    }

    stages{
        // stage("SETUP"){
        //     steps{
        //         script{
                    
        //         }
        //     }
        // }
        stage("BUILD"){
            steps{
                script{
                   sh "docker build -t tribus/martireisen-ui:latest .  --network=host"
                }
            }
        }
        stage("RUN"){
            agent{
                docker{
                    image "tribus/martireisen-ui:latest"     
                }
            }
            stages{
                // stage("INSTALL"){
                //     steps{
                //         script {
                //             sh "npm ci"
                //         }
                //     }
                // }
                // stage("LINT"){
                //     steps {
                //         script {
                //             sh "npm run lint"
                //         }
                //     }
                // }
                // stage("TEST"){
                //     steps{
                //         script{
                //             sh "npm run test"
                //         }
                //     }
                // }
                stage("DEPLOY"){
                    steps{
                        script{
                            sshPublisher(publishers: [sshPublisherDesc(configName: 'Plesk', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: '/var/www/vhosts/martireisen.at/tools.tribus-business.at/', remoteDirectorySDF: false, removePrefix: 'marti-ui/.ouput/', sourceFiles: 'marti-ui/.output/*/**')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)])
                            // BUILT_TAG=sh(script:"docker images --quiet", returnStdout: true).trim()
                            // sh "docker logout"
                            // sh "docker login --password 7d9bd3de-8577-4d4c-b1f7-34b3a8173b69 --username if20b034"
                            // sh "docker tag if20b034/conint:$COMMIT_HASH if20b034/conint:$COMMIT_HASH"
                            // sh "docker push if20b034/conint:$COMMIT_HASH"
                        }
                    }
                }
            }
        }
    }
    post {
        always{
            sh "docker image rm tribus/martireisen-ui:latest"
            cleanWs()
        }
    }
}