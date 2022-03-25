const { CMS } = window;

const CTA_HERO = {
  label: "CTA - Hero (with mobile number field)",
  name: "cta-hero",
  widget: "object",
  fields: [
    { label: "Title", name: "title", widget: "string" },
    { label: "Body", name: "body", widget: "string" },
    {
      label: "CTA Field Placeholder Text",
      name: "cta_field_placeholder_text",
      widget: "string",
    },
    {
      label: "CTA Text",
      name: "cta_text",
      widget: "string",
    },
  ],
};

const CTA_CLICK_THROUGH = {
  label: "CTA - Click through",
  name: "cta-click-through",
  widget: "object",
  fields: [
    {
      label: "Eyebrow Title",
      name: "eyebrow_title",
      widget: "string",
      hint: "Text that appears above the title.",
    },
    { label: "Title", name: "title", widget: "string" },
    { label: "Body", name: "body", widget: "string" },
    { label: "CTA Text", name: "cta_text", widget: "string" },
  ],
};

CMS.init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    load_config_file: false,
    publish_mode: "editorial_workflow",
    media_folder: "src/images/uploads",
    public_folder: "images/uploads",
    collections: [
      {
        label: "Pages",
        name: "pages",
        files: [
          {
            label: "Home Page",
            name: "home",
            file: "src/index.md",
            fields: [
              {
                label: "Home Modules",
                name: "home_modules",
                widget: "list",
                types: [CTA_HERO, CTA_CLICK_THROUGH],
              },
            ],
          },
          {
            label: "Another Page",
            name: "another_page",
            file: "src/another-page.md",
            fields: [
              {
                label: "Another Page Modules",
                name: "another_page_modules",
                widget: "list",
                types: [CTA_CLICK_THROUGH],
              },
            ],
          },
          {
            label: "Vue Demo",
            name: "vue_demo",
            file: "src/vue-demo.md",
            fields: [
              {
                label: "Vue Demo Modules",
                name: "vue_demo_modules",
                widget: "list",
                types: [CTA_CLICK_THROUGH],
              },
            ],
          },
        ],
      },
    ],
  },
});
