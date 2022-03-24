import { html, css, LitElement } from "https://cdn.skypack.dev/lit";

class HelloWorld extends LitElement {
  static styles = css`
    h1 {
      color: blue;
    }
  `;

  static properties = {
    data: { type: Object },
  };

  constructor() {
    super();
    this.data = {};
  }

  render() {
    return html`
      <section>
        <h1>This is the title: ${this.data.title}</h1>
        <p>This is the body: ${this.data.body}</p>
      </section>
    `;
  }
}

export default HelloWorld;
