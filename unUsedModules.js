/* 
根据webpack产生的json文件,分析项目中没有用到的模块
webpack --json ss.json

node -r babel-register unUsedModules.js ss.json
 */
import fs from 'fs'
import path from 'path'

let file = process.argv[2]
let filePath = path.resolve(__dirname, file)
let moduleReg = /\/node_modules\/([^/]*?)[/?]/g
let moduleMap = {}

function findUnused(dep, modules) {
  let unUsed = []
  dep.forEach(d => {
    if (modules.includes(d)) return
    unUsed.push(d)
  })
  return unUsed
}

import pkg from './package.json'
let dep = Object.keys(pkg.devDependencies).concat(Object.keys(pkg.dependencies))

fs.createReadStream(filePath, { encoding: 'utf-8' })
  .on('data', content => {
    // find all used module
    content.replace(moduleReg, (_, moduleName) => moduleMap[moduleName] = true)
  })
  .on('end', () => {
    let modules = Object.keys(moduleMap)
    let unUsed = findUnused(dep, modules)
    console.log('unused modules', unUsed.length, unUsed)
  })
