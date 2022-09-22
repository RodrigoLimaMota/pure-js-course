const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click',event =>{
    const classNameOfElementClicked = event.target.classList[0]
    console.log(classNameOfElementClicked)
    const classNames = ['popup-wrapper','popup-link','popup-close']
    const shouldClosePopup = classNames.some(className => className === classNameOfElementClicked)
    if(shouldClosePopup){
        popup.style.display='none'
    }    
})
