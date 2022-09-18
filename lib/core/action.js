const inquirer = require('inquirer');
const path = require('path')
const rimraf = require("rimraf");
const config = require('../../config')
const downloadFn = require('./download')
const action = async (project, args) => {
   
 const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'framwork',
            choices: config.framwork,
            message: '请选择你要使用的框架'
        }
    ])
    const dir = path.join(process.cwd(), project)
    rimraf.sync(dir, {}); 
    downloadFn(config.framworkUrl[answers.framwork], project)
}

module.exports = action