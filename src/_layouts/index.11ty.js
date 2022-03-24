class HelloWorld {
  data() {
    return {
      layout: "base.html",
    };
  }

  render({ home_modules }) {
    return `
      <div>
        ${home_modules.map((el) => `<${el.type}></${el.type}>`).join("")}
      </div>`;
  }
}

module.exports = HelloWorld;

// todo: figure out why browser doesn't refresh for JS files
