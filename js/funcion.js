const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const objetivosMedidas = [134, 26, 92];
const nombres = [["Kitty", "Toby", "Didi"], ["Pedro", "Jose", "Roberto"], ["Carla", "Rosa", "Julieta"]];
const objetivosNombre= ["Rosa" , "Roberto"];
const objetivosMascotas=["Kitty", "Toby", "Didi"];

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

    document.getElementById('resultadoNumero').innerHTML = resultadoTexto;
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

    document.getElementById('resultadoNombre').innerHTML = resultadoTexto;
  });

  function extraerMascota(arr) {
    let resultados = [];
    for (const elemento of arr) {
      if (Array.isArray(elemento)) {
        resultados = resultados.concat(extraerMascota(elemento));
      } else if (typeof elemento === 'string' && objetivosMascotas.includes(elemento)) {
        resultados.push(elemento);
      }
    }
    return resultados;
  }
  
  document.getElementById('extraerBtnMascotas').addEventListener('click', () => {
    const resultados = extraerMascota(nombres);

    const resultadoTexto = resultados.join(', ');
    const resultadoTexto2= resultados.join("<br> ");

    document.getElementById('resultadoMascotasA').innerHTML = resultadoTexto;
    document.getElementById('resultadoMascotasB').innerHTML = resultadoTexto2;
  });


