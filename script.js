// console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (let i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

const body = ''
const subject = ''
const sendBtn = document.getElementById('submit-btn').addEventListener('click', ()=> sendMail(body, subject))


function sendMail(body,subject){
	body = document.getElementById('body-text')
	subject = document.getElementById('subject')
	window.open('mailto:arseniy.kostromin03@gmail.com?subject=' + encodeURIComponent(subject.value) + '&body=' + encodeURIComponent(body.value));
}