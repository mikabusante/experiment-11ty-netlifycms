class HelloWorld {
  data() {
    return {
      layout: "base.html",
    };
  }

  render({ home_modules }) {
    return `<div>
      ${home_modules
        .map((module) => `<${module.type} data='${JSON.stringify(module)}' />`)
        .join("")}
    </div>`;
  }
}

module.exports = HelloWorld;
