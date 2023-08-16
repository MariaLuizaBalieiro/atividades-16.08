'use strict'

const botaoSomar = document.getElementById('Somar')
const botaoIdentificar = document.getElementById('Identificar')

function somar(){
    const numero1 = parseInt (document.getElementById('num1').value)
    const numero2 = parseInt (document.getElementById('num2').value)
    const resultado = document.getElementById('resultado')


    const total = numero1 + numero2
     resultado.textContent = total }
      



function Identificar (){
    const numero = Number(document.getElementById('num-item2').value)
    const resultado = Number (document.getElementById('resultado-item2'))
    let msg
    if (numero > 0){
       const msg = 'POSITIVO' 
    }else if(numero < 0){
        const msg = 'NEGATIVO'
    }else{
        const msg = 'ZERO'
    }
resultado.textContent = msg
   
}


function somar(){
    const N1 = parseInt (document.getElementById('num1').value)
    const N2 = parseInt (document.getElementById('num2').value)
    const N3 = parseInt (document.getElementById('num3').value)
    const N4 = parseInt (document.getElementById('num4').value)
    
    
    const resultado = document.getElementById('resultado')


    const total = N1 + N2 + N3+ N4
     resultado.textContent = total }


     botaoSomar.addEventListener('click', somar)
 botaoIdentificar.addEventListener('click', Identificar)
 



