const message = () => {
  alert("Hello world")
}
message()

const sum = (numb1, numb2) =>{
  return numb1 + numb2
}
alert(sum(5,4))


let value = true

 compareNumber = () =>{
  if(typeof value === "number"){
    console.log("É um número")
  }else {
    console.log("Não é um número")
  }
}

function compareString(){
  if (typeof value === "string"){
    alert("É uma string")
  } else {
    alert("Não é uma string")
  }
}

function compareBoolean(){
  if (typeof value === "boolean"){
    alert("É um booleano")
  } else {
    alert("Não é um booleano")
  }
}

compareNumber()
compareString()
compareBoolean()

 
let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Subtração: " + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)

if(restDiv == "0"){
  alert("A soma dos números digitados é par ")
} else{
  alert("A soma dos números digitados é impar")
}