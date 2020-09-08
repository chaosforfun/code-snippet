#!/usr/bin/env node

let child_process = require('child_process')
let path = require('path')
const readline = require('readline');

let cwd = process.cwd()
let currentProject = cwd.split('/').pop()

let cmdOptions = {
  cwd: path.resolve(cwd, '../../'),
  stdio: 'inherit'
}
console.log(process.argv);
let environment = process.argv[2]
let argv = process.argv
let onlyMerge = !!(argv.indexOf('-M') !== -1)
let baseBranch = 'neibu';
if(environment === 'dev') {
	baseBranch = 'trunk';
} else if(environment === 'release') {
	baseBranch = 'release';
}
let projectBranchMap = {
  // jiaofu
  'shuati': `${baseBranch}_jiaofu`,
  'cms-one-to-many': `${baseBranch}_jiaofu`,
  'm-shuati': `${baseBranch}_jiaofu`,
  'cms-shuati_re': `${baseBranch}_jiaofu`,
  // 鲨鱼
  'hybrid': `${baseBranch}_sharks`,
  'm-chuguo': `${baseBranch}_sharks`,
  'm-study-class': `${baseBranch}_sharks`,
  'cms-entrance-service': `${baseBranch}_sharks`,
  'cms-mix': `${baseBranch}_sharks`,
  'cms-chuguo-tiny-class': `${baseBranch}_sharks`,
  'm-teach': `${baseBranch}_sharks`,
  'teach': `${baseBranch}_sharks`,
  'postgraduate': `${baseBranch}_sharks`,
  'xdf-analysis-log': `${baseBranch}_sharks`,
}
let branch = projectBranchMap[currentProject]
commit()
// 切换到测试分支
child_process.execSync(`git checkout ${branch}`, cmdOptions)
child_process.execSync(`git pull`, cmdOptions)
let hasError = false
try {
  child_process.execSync(`git merge -`, cmdOptions)
  publishAndCommit()
} catch (err) {
  hasError = true
  console.error(err)
  process.exit(1)
}
hasError || pushAndBack()

function publishAndCommit() {
  child_process.execSync(`grunt publish:${currentProject}`, cmdOptions)
  commit()
}
function pushAndBack() {
  child_process.execSync(`git pull`, cmdOptions)
  child_process.execSync(`git push`, cmdOptions)
  child_process.execSync(`git checkout -`, cmdOptions)
  child_process.execSync(`git pull`, cmdOptions)
  child_process.execSync(`git push`, cmdOptions)
}
function commit() {
	try {
 		child_process.execSync(`git add .`, cmdOptions)
		child_process.execSync(`git commit`, cmdOptions)
	} catch(e) {}
}

