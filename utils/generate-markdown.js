

function generatelicenseBadge(license){

  const licenseName = encodeURIComponent(license.replace('-', ' '))

  return `![${license}-licensed](https://img.shields.io/badge/license-${licenseName}-red)`;
}


function generateMarkdown({title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  github,
  email}) {
  
  return `

# ${title}

${generatelicenseBadge(license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Github Link](#github)
* [Email](#email)

## Description
${description}

## Installation
${installation}

## Usage
 ${usage}

## License
${generatelicenseBadge(license)}

## Contributing
 ${contributing}

## Tests
${tests}

## Github

Visit my github profile here: [${github}](https://github.com/${github})
## Email
${email}
`

}

module.exports = generateMarkdown;
