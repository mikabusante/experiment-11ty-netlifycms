<template>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Demo: Vue and Eleventy</title>
      <style v-html="css" />
    </head>
    <body>
      <p>{{ title }}</p>

      <div>
        <p v-for="module in vue_demo_modules" :key="module.title">
          <cta-click-through />
        </p>
      </div>
    </body>
  </html>
</template>

<style>
body {
  color: blue;
}
</style>

<script>
import ctaClickThrough from "../_includes/ctaClickThrough.vue";
export default {
  components: { ctaClickThrough },
  computed: {
    css: function () {
      return this.getVueComponentCssForPage(this.page.url);
    },
  },
};
</script>
