# Eleventy + NetlifyCMS demo

### Notes on Eleventy

tl;dr => It's a minimal static site generator. Really similar to Jekyll, except it has some extras that improve the DX:

- pre-configured with BrowserSync to open both a `localhost` and an external URL during dev. Super handy for working on/debugging styling on different devices without having to wait for staging.
- generally more flexible and customizable...some useful customizations I've seen so far are:
  - Better file organization by changing the folder structure. [Here](https://github.com/mikabusante/experiment-11ty-netlifycms/blob/e7fb2f69d7f3173403b82265fcf76bda7ecd9e51/.eleventy.js#L10-L11) I set the page layout and the includes to be in different folders vs in Jekyll these files would be in 1 `includes` folder. Also all input files can be at `src` vs in Jekyll, all page data files (e.g `index.md`) are at the root.
  - Ability to use multiple template languages, such as Liquid, Nunjucks, Javascript, etc. Read more [here](https://www.11ty.dev/docs/languages/).
  - Extend template language functionality with [shortcodes](https://www.11ty.dev/docs/shortcodes/).
  - Loop in other processes by [configuring watch targets](https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets). For example, if we wanted to have Parcel handle the styles, we could have both 11ty and Parcel running at once and outputting to the `dist` folder. We can then configure 11ty to refresh the browser when the **outputted** CSS file changes (i.e. `./dist/index.css`). (in my experience, Parcel is extremely fast and maybe won't need this config, but helpful to keep in mind)
- Handy plugins such as their official [Image plugin](https://www.11ty.dev/docs/plugins/image/). There is also the official [Serverless plugin](https://www.11ty.dev/docs/plugins/serverless/) which can be configured for CMS previews. More plugins [here](https://www.11ty.dev/docs/plugins/).
- Lots of sites built with 11ty and lots of [perfect lighthouse scores](https://www.11ty.dev/speedlify/). Prob similar lighthouse scores for other sites from SSGs, but maybe easier to accomplish using their Image optimization plugin?
- Super [flexible with data](https://www.11ty.dev/docs/data/), so can be configured to use with pretty much any CMS (not just markdown based ones). Apparently Jekyll [can also do this](https://katiekodes.com/jekyll-api-headless-cms/), but the DX feels a lot better with 11ty's data cascade, specifically making API calls in `_data` files. Also just more resources for configuring 11ty with various CMS e.g. API based =>[Sanity](https://www.sanity.io/guides/how-to-get-started-with-the-11ty-eleventy-blog-starter), Markdown based => [NetlifyCMS](https://github.com/danurbanowicz/eleventy-netlify-boilerplate) (which I referenced for this demo!).

### Notes on NetlifyCMS

tl;dr => It's a Git and Markdown based CMS. Like Siteleaf, but with some other features that may be valuable to content editors on this particular project:

- Configure the CMS to use different modules ([minimal example](https://github.com/mikabusante/experiment-11ty-netlifycms/blob/de7e517450c65cd3a11d85863e12bf643ee1853f/src/admin/config.js#L3-L38)) and set the modules as options on [specific pages](https://github.com/mikabusante/experiment-11ty-netlifycms/blob/de7e517450c65cd3a11d85863e12bf643ee1853f/src/admin/config.js#L64). In the CMS, this creates a super useful UI for selecting modules from a dropdown ([see here](https://i.gyazo.com/8375f4d46956dabdc31d4c195c8d0ef9.mp4)). Benefits of this setup are:
  - Less reliance on a block guide for editors. All fields and their data types are handled by the CMS.
  - Add hints directly below fields. Again, less reliance on a separate block guide to explain what certain fields are used for.
  - Modules are specific to the page. For example, on BGX we had to denote "Built for the homepage." in our block guide (but the editor's could technically use this on any page which might result in some odd styling). Here we can just restrict usage to specific pages.
  - more important for us, but this solution is way more maintainable...kind of a hassle to continuously update the block guide and make sure it was in sync with what fields we were using. Lots of room for error :( Here the single source of truth is in the config, expressed as [configuration objects](https://github.com/mikabusante/experiment-11ty-netlifycms/blob/de7e517450c65cd3a11d85863e12bf643ee1853f/src/admin/config.js#L3-L21) for devs, then translated to dropdowns in the UI for editors. Obv we could also edit the resulting markdown locally and use the wrong fields, but would be overwritten on the next pull from the CMS (but don't worry, every CMS change is a PR so there is version history)
- Editorial workflow (draft, in review, ready to publish) [live demo](https://cms-demo.netlify.com/#/workflow) which correspond with different [git actions](https://www.netlifycms.org/docs/configuration-options/#publish-mode). No user roles from what I saw but maybe this is enough? Drafts also have [configurable preview paths](https://www.netlifycms.org/docs/deploy-preview-links/).
- Many kinds of [widgets](https://www.netlifycms.org/docs/widgets/) and ability to create custom widgets.
- The admin interface is part of [the repo](https://github.com/mikabusante/experiment-11ty-netlifycms/tree/main/src/admin), so it lives wherever the site is deployed and then accessed on `/admin` (e.g. mysite.com/admin would open a login UI).
- Can be used with a lot of [different SSGs](https://www.netlifycms.org/docs/add-to-your-site/) if we decide not to go with 11ty.
