const fs = require('fs')
const path = require('path')
const {routes} = require('../config')
const titleReg = new RegExp('@title')

const TEMPLATE_SRC = [
	path.resolve(__dirname, './template/index.html'),
	path.resolve(__dirname, './template/index.js'),
	path.resolve(__dirname, './template/index.css')
]
const fileExists = [false, false,false]

console.log('路由文件检查...')
routes.forEach((route) => {
	const {title, name} = route
	const filePath = path.resolve(__dirname, '../app/'+name)
	const files = [
		path.resolve(filePath, './index.html'),
		path.resolve(filePath, './index.js'),
		path.resolve(filePath, './index.css')
	]
	if (fs.existsSync(filePath)) {
		files.forEach((file, index) => {
			if (fs.existsSync(file)) {
				fileExists[index] = true
			}
		})
	}
	else {
		console.log(`${name} 不存在，准备创建`)
		let res = null
		try {
			res = fs.mkdirSync(filePath)
			console.log(`${name} 创建成功`)
		}
		catch(err) {
			res = null
		}
		if (res === null) {
			console.log(`${name} 创建失败`)
			return
		}
	}

	fileExists.forEach((tag, index) => {
		let filename = files[index]
		if (tag) {
			console.log(`${filename} 已存在`)
			return
		}
		let tempContent = fs.readFileSync(TEMPLATE_SRC[index], {encoding: 'UTF-8'})
		tempContent = tempContent.replace(titleReg, title)
		try {	
			res = fs.writeFileSync(filename, tempContent)
			console.log(`${filename} 创建成功`)
		}catch(err) {
			console.log(`${filename} 创建失败`)
		}
	})
})