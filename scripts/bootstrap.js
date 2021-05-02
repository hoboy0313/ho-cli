/* eslint-disable */
const glob = require('glob')
const lernaConfig = require('../lerna.json')
// lerna 的依赖
const execa = require('execa');

const {packages} = lernaConfig;

const dirs = []

packages.forEach((curr) => {
  const files = glob.sync(curr)
  if(files) {
    dirs.push(...files)
  }
})

dirs.forEach(cwd => {
  execa.sync('yarn', [], {
    cwd,
    stdout: 'inherit'
  })
})
