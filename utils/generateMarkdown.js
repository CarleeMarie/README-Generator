const { writeFile } = require('fs');

function generateMarkdown(data) {
  let output = `# ${data.title}

  ## Description
  ${data.description} 

  ## Table of Contents
  - [Usage](#usage)
  - [Installation](#installation)
  - [Credits](#credits)
  - [Tests](#tests)
  - [License](#license)
   
  ## Usage
  ${data.usage}

  ## Installation 
  ${data.installation}
  
  ## Tests
  ${data.tests}

  ## Credits
  ${data.contributing}
  
  ## License
  ${data.license}
   
  ## Badges
  
  ![badmath](https://img.shields.io/badge/JavaScript-100%25-yellowgreen)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## How to Contribute
  
  You can contact me at:
  [EMAIL](mailto:{data.email})
  [GITHUB](https://github.com/{data.github})
`
;

writeFile('./README.md',output , err => {
  if(err) throw err;

  console.log('README.md generated!');
})
}

module.exports = generateMarkdown;
