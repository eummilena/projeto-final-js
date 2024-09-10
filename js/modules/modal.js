export default class Modal {
  constructor(abrirModal, fecharModal, container) {
  this.botaoAbrir = document.querySelector(abrirModal);
  this.botaoFechar = document.querySelector(fecharModal);
  this.containerModal = document.querySelector(container);
    
    //bind vai fazer referência ao objeto da classe

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }
 

  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

// abre ou fecha modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  //fechar o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) { 
        this.toggleModal(event);
    }
  }
//fecha os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }
init()  {
  if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();  
     }
  }
}
