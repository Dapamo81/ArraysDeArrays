const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const objetivos = [134, 26, 92];

function extraerNumeros(arr) {
    let resultados = [];
    for (const elemento of arr) {
      if (Array.isArray(elemento)) {
        resultados = resultados.concat(extraerNumeros(elemento));
      } else if (typeof elemento === 'number' && objetivos.includes(elemento)) {
        resultados.push(elemento);
      }
    }
    return resultados;
  }
  
  document.getElementById('extraerBtn').addEventListener('click', () => {
    const resultados = extraerNumeros(medidas);
    const resultadoTexto = resultados.join(', ');
    document.getElementById('resultado').textContent = resultadoTexto;
  });