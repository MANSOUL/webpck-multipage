import style from './index.css'

const ndApp = document.getElementById('app')
function insertHelloWorld() {
	const ndHelloWorld = document.createElement('div')
	ndHelloWorld.textContent = 'Hello World'
	ndHelloWorld.className = style.helloWorld
	ndApp.appendChild(ndHelloWorld)
}

insertHelloWorld()