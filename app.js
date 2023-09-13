'use strict'

const botaoSomar = document.getElementById('Somar')
const botaoIdentificar - document.getElementById('Identificar')

function somar(){
    const numero1 = parseInt (document.getElementById('num1').value)
    const numero2 = parseInt (document.getElementById('num2').value)
    const resultado = document.getElementById('resultado')


    const total = numero1 + numero2

     resultado.textContent = total
      



function identificar (){
    const numero = Number(document.getElementById('num-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg
    if (numero > 0){
       const msg = 'número digitado é positivo' 
    }else if(numero < 0){
        const msg = 'número digitado é negativo'
    }else{
        const msg = 'número digitado é zero'
    }
resultado.textContent = msg
   
}

}

botaoSomar.addEventListener('click', somar)
botaoIdentificar.addEventListener('click', identificar)