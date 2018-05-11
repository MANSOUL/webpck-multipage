import style from './index.css'

const ndApp = document.getElementById('app')
function insertHelloWorld() {
	const ndHelloWorld = document.createElement('div')
	ndHelloWorld.textContent = 'Hello World UU HH jj'
	ndHelloWorld.className = style.helloWorld
	ndApp.appendChild(ndHelloWorld)
}
console.log(process.env.NODE_ENV)
insertHelloWorld()