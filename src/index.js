import './index.css'

console.log('================== feedback sdk引入成功 ===================');
console.log('================== feedback sdk引入成功 1===================');



const makeDom = () => {
	const body = document.querySelector('body')
	const childNode = document.createElement('div');
	childNode.innerHTML = '<span>〜</span>';
	childNode.setAttribute('class', '__feedback-wrap');
	body.appendChild(childNode)
}

makeDom();