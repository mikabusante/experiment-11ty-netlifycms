<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Demo: Vue and Eleventy</title>
      <style v-html="css" />
    </head>
    <body>
      <p>Hello from Vue.</p>
      <p>Hello from Eleventy.</p>
      <p>{{ title }}</p>
    </body>
  </html>
</template>

<style>
body {
  color: blue;
}
</style>

<script>
export default {
  components: {},
  computed: {
    css: function () {
      return this.getVueComponentCssForPage(this.page.url);
    },
  },
};
</script>
