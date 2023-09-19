// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license==="Apache") {
      return `![Static Badge](https://img.shields.io/badge/license-apache2.0-brightgreen)`
    } else if (license==="GNU") {
      return `![Static Badge](https://img.shields.io/badge/License-GPLv3-blue)`
    } else if (license==="MIT") {
      return `![Static Badge](https://img.shields.io/badge/License-MIT-yellow)`
    } else if (license==="None") {
      return ``
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="Apache") {
    return `http://www.apache.org/licenses/`
  } else if (license==="GNU") {
    return `https://www.fsf.org/`
  } else if (license==="MIT") {
    return `https://choosealicense.com/licenses/mit/`
  } else if (license==="None") {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="Apache") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license==="GNU"){
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  } else if (license==="MIT") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
} else if (license==="None") {
  return ``
}
}

//funtion for table of contents
function table(table){
  if (table) {
    return `## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Citations](#citations)
    - [Licenses](#licenses)`
  } else {
    return ``
  }
}
// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${renderLicenseBadge(data.licenses)}

## Description

${data.description}

${table(data.table)}

## Installation

${data.installation}

## Usage

${data.usage}

## Citations

${data.citations}

## Questions?
<p>If you have questions or suggestions please contact me via email at </p>

<${data.email}>

<p>Check out my GitHub! </p>

<${data.git}>

## Licenses

${renderLicenseSection(data.licenses)}
`;
}

module.exports = generateMarkdown;
