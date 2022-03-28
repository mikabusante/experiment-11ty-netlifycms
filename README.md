# Eleventy + NetlifyCMS demo

### Notes on Eleventy

tl:dr it's a minimal static site generator. Really similar to Jekyll, except it has some extras that improve the DX:

- pre-configured with BrowserSync to open both a `localhost` and an external URL during dev. Super handy for working on/debugging styling on different devices without having to wait for staging.
- generally more flexible and customizable...some useful customizations I've seen so far are:
  - Better file organization by changing the folder structure. [Here](https://github.com/mikabusante/experiment-11ty-netlifycms/blob/e7fb2f69d7f3173403b82265fcf76bda7ecd9e51/.eleventy.js#L10-L11) I set the page layout and the includes to be in different folders vs in Jekyll these files would be in 1 `includes` folder. Also all input files can be at `src` vs in Jekyll, all page data files (e.g `index.md`) are at the root.
  - Ability to use multiple template languages, such as Liquid, Nunjucks, Javascript, etc. Read more [here](https://www.11ty.dev/docs/languages/).
  - Extend template language functionality with [shortcodes](https://www.11ty.dev/docs/shortcodes/).
- Handy plugins such as their official [Image plugin](https://www.11ty.dev/docs/plugins/image/). There is also the official [Serverless plugin](https://www.11ty.dev/docs/plugins/serverless/) which can be configured for CMS previews. More plugins [here](https://www.11ty.dev/docs/plugins/).
- Super [flexible with data](https://www.11ty.dev/docs/data/), so can be configured to use with pretty much any CMS (not just markdown based ones). Apparently Jekyll [can also do this](https://katiekodes.com/jekyll-api-headless-cms/), but the DX feels a lot better with 11ty's data cascade, specifically making API calls in `_data` files. Also just more resources for configuring 11ty with various CMS e.g. API based =>[Sanity](https://www.sanity.io/guides/how-to-get-started-with-the-11ty-eleventy-blog-starter), Markdown based => [NetlifyCMS](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) (which I referenced for this demo!).
