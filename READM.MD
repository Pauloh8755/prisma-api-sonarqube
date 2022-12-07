## SonarQube
```
# Download do container docker
docker pull sonarqube:9.7.1-community

# Limpar volumes
docker system prune
```

```
# Rodar container
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:9.7.1-community
```

```
# Sonar-Scanner
cd tmp
sudo wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.7.0.2747-linux.zip

unzip sonar-scanner-cli-4.7.0.2747-linux.zip

mv sonar-scanner-cli-4.7.0.2747-linux /opt/sonar-scanner

sudo nano /opt/sonar-scanner/conf/sonar-scanner.properties
sonar.host.url=http://sonarqube_ip:9000
sonar.sourceEncoding=UTF-8
```