//funcção em js é firts-class object 
//high-order function

//criar de forma literal
function fun1() {}

//armazena em uma variavel
const func2 = function() {}

//armazenar em um array
const array = [function(a, b) { return a + b}]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//passar uma função com parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

//uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)(4)
cincoMais(4)