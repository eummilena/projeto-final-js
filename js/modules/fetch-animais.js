import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  //cria a div contendo informacoes com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  //preenche cada animal no DOM
    const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
}
  //Anima os números de cada animal
  function animaAnimaisNumeros() {
     const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
  }
    
 

  //Puxa os animais através de um arquivo json
  //e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      //Fetch e espera resposta
      const animaisResponse = await fetch(url);
      //Transforma a resposta em json
      const animaisJSON = await animaisResponse.json();
      animaisJSON.forEach(animal => preencherAnimais(animal));
      animaAnimaisNumeros()
     
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}

