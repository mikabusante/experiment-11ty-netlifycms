class HelloWorld {
  data() {
    return {
      layout: "base.html",
    };
  }

  render({ home_modules }) {
    return `
      <div>
        ${home_modules
          .map((el) => `<${el.type} .data=${el}></${el.type}>`)
          .join("")}
      </div>`;
  }
}

module.exports = HelloWorld;

// todo: figure out why browser sometimes doesn't refresh for JS files
