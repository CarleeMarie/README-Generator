const { writeFile } = require('fs');

function generateMarkdown(data) {
  let output = `# ${data.title}

  ## Description
  ${data.description} 
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation 
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contributing}
  
  ## License
  ${data.license}

  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ---
  
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
  
  ## How to Contribute
  
  You can contact me at:
  [EMAIL](mailto:{data.email})
  [GITHUB](https://github.com/{data.github})

  ## Tests
  ${data.tests}
  
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.
`
;

writeFile('./README2.md',output , err => {
  if(err) throw err;

  console.log('README2.md generated!!!');
})
}

module.exports = generateMarkdown;
