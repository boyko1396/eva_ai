export default class ChatTabs {
  constructor(tabNavSelector, tabContentSelector, activeClass, showClass, dataAttrName = 'data-tab-nav-aside', dataContentAttrName = 'data-tab-content-aside') {
    this.tabNavItems = document.querySelectorAll(tabNavSelector);
    this.tabContentItems = document.querySelectorAll(tabContentSelector);
    this.activeClass = activeClass;
    this.showClass = showClass;
    this.dataAttrName = dataAttrName;
    this.dataContentAttrName = dataContentAttrName;
    this.init();
  }

  init() {
    if (this.tabNavItems.length > 0 && this.tabContentItems.length > 0) {
      this.tabNavItems.forEach(button => {
        button.addEventListener('click', (event) => {
          this.handleTabClick(event);
        });
      });
    }
  }

  handleTabClick(event) {
    const targetButton = event.currentTarget;
    const targetDataAttr = targetButton.getAttribute(this.dataAttrName);

    this.tabNavItems.forEach(button => {
      if (button === targetButton) {
        button.classList.add(this.activeClass);
      } else {
        button.classList.remove(this.activeClass);
      }
    });

    this.tabContentItems.forEach(content => {
      if (content.getAttribute(this.dataContentAttrName) === targetDataAttr) {
        content.classList.add(this.showClass);
      } else {
        content.classList.remove(this.showClass);
      }
    });
  }
}