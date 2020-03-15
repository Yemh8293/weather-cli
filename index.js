const minimist = require('minimist')
const ajax = require('./util/ajax.js')
const chalk = require('chalk')
const loading = require('./util/loading')
const getSevenDay = require('./util/getSevenDay')
const edition = require('./package.json').version
module.exports = async () => {
	const args = minimist(process.argv.slice(2)); //前两个是编译器相关路径信息，可以忽略
	let cmd = args._[0] || 'help';
	if (args.v || args.version) {
		cmd = 'version'; //查询版本优先！
	}
	let city = args._[1] || '北京';
	loading.start();
	let data = await ajax(city);
	
	let posotion = data.data;

	switch (cmd) {
		case 'today':
    	console.log(`${posotion[0].date} ${posotion[0].week} ${city} ${posotion[0].tem}  ${posotion[0].wea} ${posotion[0].tem2}  ~ ${posotion[0].tem1}  ${posotion[0].win[0]} ${posotion[0].win_speed} ${posotion[0].air_level}`);
			console.log(`${posotion[0].air_tips}`);
			loading.stop();
			break;
		case 'tomorrow':
			console.log(`${posotion[1].date} ${posotion[1].week} ${city} ${posotion[1].tem}  ${posotion[1].wea} ${posotion[1].tem2}  ~ ${posotion[1].tem1} ${posotion[1].win[0]} ${posotion[1].win_speed}`);
			loading.stop();
			break;2
		case 'seven':
			getSevenDay(city,posotion);
			loading.stop();
			break;
		case 'version':
			console.log(edition);
			loading.stop();
			break;
		case 'help':
			console.log(`
				weather [command] <options>
					today .............. show weather for today
					tomorrow ............show weather for tomorrow
					version ............ show package version
					help ............... show help menu for a command
			`);
			loading.stop();
			break;
		default:
			console.log(`你输入的命令无效：${cmd}`);
			console.log(chalk.red('提示：weather today 城市名称'));
			loading.stop();
	}
}