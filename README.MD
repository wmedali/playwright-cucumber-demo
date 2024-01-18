## To run tests execute : 
`./node_modules/.bin/cucumber-js --exit`

OR : 

`npm run cucumber`

# To run tests and generate json reports 
`./node_modules/.bin/cucumber-js features -f json:test/report/cucumber_report.json`

or : 

`npm run cucumber -- features -f json:test/report/cucumber_report.json`


Then generate HTML report from JSON file : 

`node index.js`