import { html, css, LitElement } from "https://cdn.skypack.dev/lit";

class HelloWorld extends LitElement {
  static styles = css`
    p {
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
        <h1>This is the CTA Hero!</h1>
      </section>
    `;
  }
}

export default HelloWorld;
