const generateReadMe = function generateMarkdown(userAnswers, response) {
    // console.log("inside generate markdown",response);
    return `
# ${userAnswers.title}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests) 
- [Questions](#questions)

## Description
${userAnswers.description} 
      
## Installation
To install dependencies, run the following command: ${userAnswers.installation}

## Usage
${userAnswers.usage}

## License
This project is licensed under the ${userAnswers.license} license

## Contributing
To contribute to this project ${userAnswers.contributors}

## Questions
To contact the author, please email:
${response.email}

![Profile Picture](${response.avatar_url})

Reach out to me at GitHub : [${userAnswers.username}](https://github.com/${userAnswers.username})

    `;
}

module.exports = { generateReadMe };