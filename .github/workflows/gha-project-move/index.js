const core = require('@actions/core')
const github = require('@actions/github')

const payload = JSON.stringify(github.context.payload, undefined, 2)
console.log(`The event payload: ${payload}`);