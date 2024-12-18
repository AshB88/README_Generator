// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None' || !license) {
    return '';
  }
  
  let licenseBadge = '';

  switch (license) {
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GPLv3':
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0))';
      break;
    case 'BSD 3-Clause':
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      licenseBadge = '';
      break;
  }
  return `${licenseBadge}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None' || !license) {
    return '';
  }

  let licenseLink = '';
  
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPLv3':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD 3-Clause':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    default:
      licenseLink = '';
      break;
  }
  return `[${license}](${licenseLink})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None' || !license) {
    return '';
  }
  return `This project is licensed under the ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions
  GitHub: [GitHub Profile](https://github.com/${data.github}) 
  Please email me at ${data.email} if you have any questions.
`;
}

export default generateMarkdown;
