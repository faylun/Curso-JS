function sum(num1, num2){
    return num1 + num2
}

// console.log(sum(1,3))


// da para chamar uma função dentro de outra
function showText(text){
    console.log(text)
}

showText(sum(1, 3))