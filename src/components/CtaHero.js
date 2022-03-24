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
    console.log(this.data);
    return html`
      <section>
        <h1>This is the CTA Hero!</h1>
        <p>body</p>
      </section>
    `;
  }
}

export default HelloWorld;
