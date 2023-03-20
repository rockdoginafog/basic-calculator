const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const del = document.querySelector('.del')
const slash = document.querySelector('.slash')
const x = document.querySelector('.x')
const reset = document.querySelector('.reset')
const equal = document.querySelector('.equal')
const dot = document.querySelector('.dot')
const minus = document.querySelector('.minus')
const signs = document.querySelectorAll('.signs')
const firstTheme = document.querySelector('.theme1')
const secondTheme = document.querySelector('.theme2')
const thirdTheme = document.querySelector('.theme3')
const body = document.querySelector("body")
const themeSwitcher = document.querySelector('.theme-switcher')
const numbers = document.querySelectorAll('.number')
const result = document.querySelector('.result')
const numbersContainer = document.querySelector('.numbers-container')
const calculatorContainer = document.querySelector('.calculator-container')

firstTheme.addEventListener('input', () =>{
    body.classList.add('theme-1-main-bg')
    body.classList.remove('theme-2-main-bg')
    body.classList.remove('theme-3-main-bg')
    result.classList.add('theme-1-screen-bg')
    result.classList.remove('theme-2-screen-bg')
    result.classList.remove('theme-3-screen-bg')
    result.classList.remove('black')
    numbersContainer.classList.add("theme-1-main-bg-keypad")
    numbersContainer.classList.remove("theme-2-main-bg-keypad")
    numbersContainer.classList.remove("theme-3-main-bg-keypad")
    themeSwitcher.classList.remove("black")
    calculatorContainer.classList.remove('box-shadow-theme-2')
})

secondTheme.addEventListener('input', () =>{
    body.classList.remove('theme-1-main-bg')
    body.classList.remove('theme-3-main-bg')
    body.classList.add('theme-2-main-bg')
    result.classList.remove('theme-1-screen-bg')
    result.classList.remove('theme-3-screen-bg')
    result.classList.add('theme-2-screen-bg')
    result.classList.add('black')
    numbersContainer.classList.remove("theme-1-main-bg-keypad")
    numbersContainer.classList.remove("theme-3-main-bg-keypad")
    numbersContainer.classList.add("theme-2-main-bg-keypad")
    themeSwitcher.classList.add("black")
    calculatorContainer.classList.add('box-shadow-theme-2')
})

thirdTheme.addEventListener('input', () =>{
    body.classList.add('theme-3-main-bg')
    body.classList.remove('theme-2-main-bg')
    body.classList.remove('theme-1-main-bg')
    result.classList.add('theme-3-screen-bg')
    result.classList.remove('theme-2-screen-bg')
    result.classList.remove('theme-1-screen-bg')
    result.classList.remove('black')
    numbersContainer.classList.add("theme-3-main-bg-keypad")
    numbersContainer.classList.remove("theme-2-main-bg-keypad")
    numbersContainer.classList.remove("theme-1-main-bg-keypad")
    themeSwitcher.classList.remove("black")
    calculatorContainer.classList.remove('box-shadow-theme-2')
})

numbers.forEach(number =>{
    number.addEventListener('click', () =>{
        result.value += number.innerHTML
    })
})

equal.addEventListener('click', () =>{
    let expression = result.value
    let equalSign = expression[expression.length - 1]
    if (equalSign === '=') {
      expression = expression.slice(0, -1)
    }
    result.value = eval(expression)
    if(result.value === 'undefined'){
        result.value = ""
    }
})

reset.addEventListener('click', () =>{
    result.value = ''
})

del.addEventListener('click', () =>{
    result.value = result.value.slice(0, -4)
})

signs.forEach(sign =>{
    sign.addEventListener('click', () =>{
        if(result.value.length === 1){
            result.value = ''
        }
        if(result.value.endsWith(sign.innerHTML)){
            result.value = parseInt(result.value) + sign.innerHTML
        }
        if(result.value.endsWith(equal.innerHTML)){
            result.value = ''
        }
    })
})
