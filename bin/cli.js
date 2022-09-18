#! /usr/bin/env node
const {program} = require('commander')
const create_project = require('../lib/core/create_project')
program.option('-f --framwork <framwork>', '设置框架')
// 设置框架
create_project(program)
program.parse(process.argv);