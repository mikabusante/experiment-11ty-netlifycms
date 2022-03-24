import { html, css, LitElement } from "https://cdn.skypack.dev/lit";

class HelloWorld extends LitElement {
  static styles = css`
    p {
      color: blue;
    }
  `;

  static properties = {
    title: { type: String },
    data: { type: Object },
  };

  constructor() {
    super();
    this.title = "miko";
    this.data = {};
  }

  render() {
    console.log(this.data, "hello!!!");
    console.log(this.title);
    return html`<p>The title is ${this.title}!</p>`;
  }
}

export default HelloWorld;
