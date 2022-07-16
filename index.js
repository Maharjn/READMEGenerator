const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');
const fs = require('fs/promises');
const path = require('path');

// Goal : generate a readme file for future projects


// questions to ask:

inquirer.prompt([
  {
    type: 'input',
    message: "What is the project title?",
    name: 'title',
  },
  {
    type: 'input',
    message: "What is your Project description?",
    name: 'description',
  },
  {
    type: 'input',
    message: "Describe your installation instruction if any:",
    name: 'installation',
  },
  {
    type: 'input',
    message: "What is the project usage for?",
    name: 'usage',
  },
  {
    type: 'list',
    message: "Choose the appropriate license for this project :",
    name: 'license',
    choices: [
      'MIT', 
      'GPL-v2', 
      'Apache-v2',
      'ISC',
      'Open',
      'No license',
    ]
  },
  {
    type: 'input',
    message: "Who are the contributors of the Project?",
    name: 'contributing',
  },
  {
    type: 'input',
    message: "What is your test instruction?",
    name: 'tests',
  },
  {
    type: 'input',
    message: "What is your github username?",
    name: 'github',
  },
  {
    type: 'input',
    message: "Please enter your Email ID :",
    name: 'email',
  }
  
  // what is project title


  // license

  // github 


  // description, installation instructions, usage information, contribution guidelines, and test instructions
  // email
  // github
]).then((ans) => {

  // once asked
  console.log(ans);
  const markdown = generateMarkdown(ans);

  // generate a readme file based on the responses
  // in the output folder
  const outputPath = path.join(__dirname, 'output', 'generated.md');

  fs.writeFile(outputPath, markdown, 'utf-8')
    .then(() => {
      console.log('generated!')
    });

})




