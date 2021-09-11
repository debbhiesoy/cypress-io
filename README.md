# Make sure to install npm and node
Install npm by using command
```npm install -g```
Make sure that npm is installed. Check version of the npm installed by  ```npm -v```
Make sure that node is installed. Check version of the node installed by ```node -v```

Your good to go to create your first cypress.io test. To do follow the steps:
1) ```npm init -y``` - initialize directory as npm package. It will generate package.json. This will output

Wrote to /Users/debby/IdeaProjects/Personal-Tuts/cypress.io/package.json:

{
  "name": "cypress.io",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

2) Install cypress ```npm install --save-dev cypress``` into a project to run in cypress
3) Open Cypress interface by running command ```npx cypress open```

# References
* https://docs.cypress.io/guides/getting-started/writing-your-first-test?utm_source=Test%20Runner&utm_medium=New%20Project%20Banner&utm_campaign=How%20To#Add-a-test-file 
* https://www.linkedin.com/learning/end-to-end-javascript-testing-with-cypress-io/writing-your-first-cypress-test?u=81316978
* https://www.cypress.io/
