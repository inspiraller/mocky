# How to setup sonar
- right click cmd > run as administrator
```bash
cd sonar 
docker-compose up -d
```

# Create project in sonar - react-mocky
```
browser - http://localhost:9000 > login - user: admin, pass: admin > [click] + next to A - Create New project > Project key - type: react-mocky > Set up > Generate a token - react-mocky > 
creates token: 5572bccc05a0c948701242f7f9703b73b728090e > continue
```

save token 8655a7b0d0e551197f5e8e0f99f9161dfa7fa43b

# replace file: sonar-project.properties with token
```
sonar.login=8655a7b0d0e551197f5e8e0f99f9161dfa7fa43b
```

# go back to root of project and run 
```
npm run sonar 
```
- this creates folder  and file
C:\Users\Steve\.sonar\native-sonar-scanner\sonar-scanner-4.4.0.2170-windows\bin\sonar-scanner.bat 
- Allow through firewall/ or anti virus

# troubleshoot - authorization
- check your token is copied correctly into sonar-project.properties 

# troubleshoot - Error during parsing of generic test execution report 'C:\baps\react_all\react-mocky\reports\test-reporter.xml'. Look at the SonarQube documentation to know the expected XML format.
- make sure you have built a coverage report 
```
npm run test -- --coverage 
```

# troubleshoot - not finding file
 - switch off your anti virus protection or allow cmd to create 'sonar-scanner.bat' via commandline 
 - delete the folder
 - try again

# revisit browser to see sonar coverage for react-mocky
http://localhost:9000 
