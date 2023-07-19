const passwordBox = document.getElementById('password')
const length = 12;
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbols = '@#$%^&*()_+~|}{[]></-='

const allChars = upperCase + lowerCase + number + symbols

function createPassword() {
    let password = ''
    // password = password + upperCase[Math.floor(Math.random() * upperCase.length)]
    // password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)]
    // password = password + number[Math.floor(Math.random() * number.length)]
    // password = password + symbols[Math.floor(Math.random() * symbols.length)]

    while (password.length < length) {
        password = password + allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password
}

function copyPassword() {
    passwordBox.select()
    document.execCommand('copy')
}