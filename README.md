# workmarket-assignment


Installing and Running Cypress GUI
-----------------------------------

#### Install Cypress GUI
`cd /your/project/path`
`npm install cypress --save-dev`

`$(npm bin)/cypress verify`

#### Now to run Cypress GUI

`$(npm bin)/cypress open`

F.A.Q.
----------------
https://github.com/cypress-io/cypress-docker-images/issues/29#issuecomment-357487345


End 2 End Tests
----------------
- Include the starting_ending points of the test in your name.
- add _e2e to the name of your tests.
Example: sign_up_e2e.js

Integration Tests
----------------
add _spec to the title of your tests. 
Example: sign_up_spec.js

Assert - stating a fact
Choose - interacting with non form element options (i.e. Choose a button, Choose)
Select - interacting with options in a select form input
Complete - interacting with an input form
Proceed - clicking on a button or select that will change the url



