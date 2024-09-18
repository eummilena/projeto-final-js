import outsideClick from './outsideclick.js';

export default class DropdownMenu {
  constructor(dropdownMenus,events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
 
   
    //define touchstart e click como argumento padrão
    // de events caso o usuário não define
    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    this.activeClass = 'active';

  }

  //ativa o dropdownmenu e adiciona a funcao que observa o clique fora dela
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element,this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }
  
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, this.activeDropdownMenu);
    });
  });
  }


  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
  }
  
}
