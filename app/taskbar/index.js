import html from './index.html'

customElements.define('l-taskbar', class extends HTMLElement {
  constructor() {
    // 必须首先调用 super方法 
    super()

    // 元素的功能代码写在这里
    this.attachShadow({mode: 'open'})
      .innerHTML = html
  }
})
