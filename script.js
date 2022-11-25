const hexInput = document.querySelector('#hex')
const colorInput = document.querySelector('#color')

colorInput.addEventListener('input', () => {
    let color = colorInput.value
    hexInput.value = color
    document.querySelector('h1').style.color = color
})