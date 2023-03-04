module.exports = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the project for?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Any installations required?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contributed to the project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Are there any tests required?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Does the project have any licenses?',
        choices: ['MIT', 'GLPv2','GNU General Public', 'Apache' ,'None']
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email can developers contact you at?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
  ];