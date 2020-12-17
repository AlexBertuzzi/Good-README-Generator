// function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Project Title: ${data.title}

  ## Table of Contents
  [Description](#description)
  [Technologies Used](#technologies)
  [Contributors](#contributors)
  [Installation](#install)
  [Usage](#usage)
  [GitHub User](#github)
  [GitHub Repo](#repo)
  [License](#license)

  ## Description
  ${data.description}

  ## Technologies Used
  ${data.technologies}

  ## Contributors
  ${data.contributors}

  ## Installation
  Instructions: ${data.install}

  ## Usage
  Instructions : ${data.usage}

  ## GitHub User
  GitHub User Name: ${data.github}

  ## GitHub Repo
  GitHub Repo Name: ${data.repo}

  ## License
  license Used: ${data.license}

`;
}

module.exports = generateMarkdown;
