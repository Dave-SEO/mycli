const actionHandle = require('./action')
const create_project = (program) => {
    program.command('create <project> [other...]')
        .alias('crt')
        .description('创建项目')
        .action(actionHandle)
}
module.exports = create_project