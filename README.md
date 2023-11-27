# Hugo Theme Tailwind

![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/tomowang/hugo-theme-tailwind/.github%2Fworkflows%2Fdeploy.yaml)
![MIT license](https://img.shields.io/github/license/tomowang/hugo-theme-tailwind)
[![gohugo](https://img.shields.io/badge/Made_with-Hugo-blue)](https://gohugo.io/)
[![tailwindcss](https://img.shields.io/badge/Made_with-Tailwind_CSS-blue)](https://tailwindcss.com/)

Hugo theme build using [Tailwind CSS](https://tailwindcss.com/), mostly for bloggers.

## Features

 * Dark mode - switch between light and dark mode, or default by system prefers.
 * SVG icons thanks to [tabler icons](https://tabler-icons.io/)
 * Google Analystics - add your Google Analytics ID to `hugo.toml`
 * Comments settings for [disqus](https://disqus.com/) and [giscus](https://giscus.app/)
 * Social media link data settings
 * Additional short code: bilibili, asciinema
 * Responsive design
 * Multilingual

## Installation

### Git

You can add the theme as a submodule by running the following command in the
root directory of your Hugo site:

```bash
git submodule add https://github.com/tomowang/hugo-theme-tailwind.git themes/tailwind
# Or to update to the latest version
git submodule update --remote
```

## Configuration

You can use following configuration for basic usage.

```toml
baseURL = "https://examnple.com/"
title = "Hugo Theme Tailwind Example Site"
author = "Your Name"
copyright = "Your Name"
paginate = 10
languageCode = "en"
theme = "tailwind"

[params]
  # dir name of your blog content (default is `content/posts`).
  # the list of set content will show up on your index page (baseurl).
  contentTypeName = "post"

  [params.header]
    logo = "logo.webp"

  [params.footer]
    since = 2023
    poweredby = true

[menu]

  [[menu.main]]
    identifier = "post"
    name = "Post"
    url = "/post/"
    weight = 0

  [[menu.main]]
    identifier = "about"
    name = "About"
    url = "/about/"
    weight = 10

[taxonomies]
category = "categories"
tag = "tags"
series = "series"
```

For advanced usage, please refer to config directory `config/_default` and
`exampleSite/config/_default`.
Some of the configuration options are:

 * `markup`: goldmark and options for markdown rendering
 * `params.header`: header settings (logo for now)
 * `params.footer`: footer settings (copyright years, powered by, etc.)
 * `contentTypeName`: dir name of your blog content (default is `content/posts`).
 * `params.taxonomies.icons`: icons for taxonomies (categories, tags, series, etc.).
 * `params.giscus`: giscus settings
 * `params.social_media`: social media links shown in the footer

For social media link data, you can refer entries in `params.social_media.items`
(You can add more or disable exsited entries in `params.social_media.items`).

```toml
[[social_media.items]]
enabled = false
title = 'Facebook'
icon = 'brand-facebook'
link = 'https://www.facebook.com/'
```

## Development

This theme use Tailwind CSS for styling. If you want to make some changes,
use `pnpm install` to install dependencies.

* Development: `npm run dev`
* Production: `npm run build`

Test example site: `cd exampleSite && hugo serve --gc --themesDir ../..`
(exampleSite is fetched from https://github.com/gohugoio/hugoBasicExample
with some modifications)

### Add new icons

Search the icon in [tabler icons](https://tabler-icons.io/).
**Download** or **Copy SVG** and paste to `theme/tailwind/assets/icons/`.
Remember to remove `width="24" height="24"` in the SVG file. Use the icon file
name in your site configuration. Or if you want to update theme layout content,
you can use the following code.

```html
<i class="h-6 w-6 flex-none">
  {{ partial "icon" "brightness-down" }}
</i>
```
