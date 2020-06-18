const footer = `
<style>
footer {
  height: 100px;
  line-height: 100px;
  text-align: center;
  background-color: #717171;
  color: #ffffff;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
<footer class="bottom-company-info">
  <div><a href="http://www.beian.miit.gov.cn/" target="_blank">湘ICP备20012758号</a></div>
</footer>
`
customElements.define('l-footer', class extends HTMLElement {
  constructor() {
    // 必须首先调用 super方法 
    super()

    // 元素的功能代码写在这里
    this.attachShadow({mode: 'open'})
      .innerHTML = footer
  }
})
