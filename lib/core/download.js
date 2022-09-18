const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')
const log = console.log
const downloadFn = (url, dir) => {
    const spinner = ora()
    spinner.start()
    spinner.color = 'yellow';
    spinner.text = '下载中...';
    download(`direct:${url}`, dir, { clone: true }, function (err) {
      if(!err){
        spinner.succeed('下载完成')
        log(chalk.bold.green(`cd ${dir}`))
        log(chalk.bold.green('npm install'))
        log(chalk.bold.green('npm start'))
      }else{
        spinner.fail('下载失败')
      }
    })
}

module.exports = downloadFn
