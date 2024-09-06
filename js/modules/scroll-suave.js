export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = {
        behavior: 'smooth',// scroll suave
        block: 'start',
      };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this)
    //bind vai definir qual vai ser o this da funcao, no caos this.options
}


  scrollToSection(event) {
   console.log(this.options)
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
 }
  
  addLinkEvent() {
    this.linksInternos.forEach((link) => {
    link.addEventListener('click', this.scrollToSection);
  });
  }

  init() {
    if(this.linksInternos.length)
    this.addLinkEvent();
    return this;
 }
  
}


