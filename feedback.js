const toggleButton = document.getElementByClassName('toggleButton')[0]
const span = document.getElementByClassName('ul')[0]

toggleButton.addEventListener('click',() =>{
	span.classList.toggle('active')
}