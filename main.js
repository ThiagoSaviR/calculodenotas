//CONSTANTES QUE GARDAM O VALOR DO INPUT DAS ATIVIDADES NO HTML E CONVERTE PARA FLOAT
const atv1 = parseFloat(document.getElementById('a1').value.replace(',', '.'))
const atv2 = parseFloat(document.getElementById('a2').value.replace(',', '.'))
const atv3 = parseFloat(document.getElementById('a3').value.replace(',', '.'))
const atv4 = parseFloat(document.getElementById('a4').value.replace(',', '.'))

console.log('Notas das atividades = ' + atv1, atv2, atv3, atv4)

const prova = parseFloat(
  document.getElementById('prova').value.replace(',', '.')
)
console.log('Nota da prova = ' + prova)

// CONSTANTE QUE GUARDA O VALOR DO RESULTADO DO HTML 
const resultado = document.getElementById('resultado')

function calculo() {
  // FUNÇÃO QUE CALCULA A MÉDIA
  const n1 = ((atv1 + atv2 + atv3 + atv4) / 4) * 0.4
  console.log('Total da N1 = ' + n1)

  const n2 = prova * 0.6
  console.log('Total N2 = ' + n2)

  const media = n2 + n1
  console.log('Média final =' + media.toFixed(2))

  resultado.innerHTML = media // SUBSTITUI O VALOR DO RESULTADO NO HTML
}

calculo()
