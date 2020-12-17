// function to generate markdown for README
function generateMarkdown(data) {
  return `
  #Project Title: ${data.title}

  ## Table of Contents
  [Description](#description)
  [Technologies Used](#technologies)
  [Contributers](#contributors)
  []

`;
}

module.exports = generateMarkdown;
