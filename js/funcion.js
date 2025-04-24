const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const objetivosMedidas = [134, 26, 92];
const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];
const objetivosNombre= ["Rosa" , "Roberto"]

function extraerNumeros(arr) {
    let resultados = [];
    for (const elemento of arr) {
      if (Array.isArray(elemento)) {
        resultados = resultados.concat(extraerNumeros(elemento));
      } else if (typeof elemento === 'number' && objetivosMedidas.includes(elemento)) {
        resultados.push(elemento);
      }
    }
    return resultados;
  }
  
  document.getElementById('extraerBtnMedida').addEventListener('click', () => {
    const resultados = extraerNumeros(medidas);
    const resultadoTexto = resultados.join(', ');
    document.getElementById('resultadoNumero').textContent = resultadoTexto;
  });

  function extraerNombre(arr) {
    let resultados = [];
    for (const elemento of arr) {
      if (Array.isArray(elemento)) {
        resultados = resultados.concat(extraerNombre(elemento));
      } else if (typeof elemento === 'string' && objetivosNombre.includes(elemento)) {
        resultados.push(elemento);
      }
    }
    return resultados;
  }
  
  document.getElementById('extraerBtnNombre').addEventListener('click', () => {
    const resultados = extraerNombre(nombres);
    const resultadoTexto = resultados.join(', ');
    document.getElementById('resultadoNombre').textContent = resultadoTexto;
  });