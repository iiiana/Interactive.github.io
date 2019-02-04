
var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
	} else {
		body.id = ''
	}

}


var eye = document.querySelector('.eye')

eye.addEventListener('mouseenter', showBlur)
eye.addEventListener('click', hideBlur)

function showBlur() {
	eye.classList.add('blur')
}

function hideBlur() {
	eye.classList.remove('blur')
}

