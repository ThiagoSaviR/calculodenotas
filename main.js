//CONSTANTES QUE GUARDAM O VALOR DO INPUT DAS ATIVIDADES NO HTML.
const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')
const a4 = document.getElementById('a4')
const p = document.getElementById('prova')

const resultado = document.getElementById('resultado')

function calculo() {
  // CONVERTE A STRING PARA FLOAT E SUBSTITUI A VIRGULA POR PONTO, CASO NECESSÁRIO.
  const atv1 = parseFloat(a1.value.replace(',', '.'))
  const atv2 = parseFloat(a2.value.replace(',', '.'))
  const atv3 = parseFloat(a3.value.replace(',', '.'))
  const atv4 = parseFloat(a4.value.replace(',', '.'))
  const prova = parseFloat(p.value.replace(',', '.'))

  console.log('Notas das atividades = ' + atv1, atv2, atv3, atv4)
  console.log('Nota da prova = ' + prova)

  // CALCULO DA MÉDIA
  const n1 = ((atv1 + atv2 + atv3 + atv4) / 4) * 0.4
  console.log('Total da N1 = ' + n1)

  const n2 = prova * 0.6
  console.log('Total N2 = ' + n2)

  const media = n2 + n1
  console.log('Média final =' + media.toFixed(2))

  // SUBSTITUI O VALOR DO RESULTADO NO HTML PELO O VALOR DA MÉDIA.
  resultado.innerHTML = media
}
