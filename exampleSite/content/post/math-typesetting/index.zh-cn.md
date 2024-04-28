---
author: Hugo Authors
title: 数学符号
date: 2019-03-08
description: KaTeX 设置简要指南
math: true
# Photo by <a href="https://unsplash.com/@antoine1003?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Antoine Dautry</a> on <a href="https://unsplash.com/photos/mathematics-computation-05A-kdOH6Hw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
image: "/images/antoine-dautry-05A-kdOH6Hw-unsplash.jpg"
---

在 Hugo 项目中，可以通过使用第三方 JavaScript 库来启用数学符号。
<!--more-->

在本示例中，我们将使用 [KaTeX](https://katex.org/)

- 在 `/layouts/partials/math.html` 下创建一个局部文件
- 在此局部文件中引用 [自动渲染扩展名](https://katex.org/docs/autorender.html) 或在本地托管这些脚本。
- 以以下方式在模板中包含局部文件：

```bash
{{ if or .Params.math .Site.Params.math }}
{{ partial "math.html" . }}
{{ end }}
```

- 要在全局启用 KaTeX，请在项目的配置中将参数 `math` 设置为 `true`
- 要逐页启用 KaTeX，请在内容文件中包含参数 `math: true`

**注意：**使用 [Supported TeX Functions](https://katex.org/docs/supported.html) 的在线参考

{{< math.inline >}}
{{ if or .Page.Params.math .Site.Params.math }}
<!-- KaTeX -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js" integrity="sha384-XjKyOOlGwcjNTAIQHIpgOno0Hl1YQqzUOEleOLALmuqehneUG+vnGctmUb0ZY0l8" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
{{ end }}
{{</ math.inline >}}

## 示例

{{< math.inline >}}
<p>
行内数学：\( arphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>
{{</ math.inline >}}

块级数学：
$$
  arphi = 1+rac{1} {1+rac{1} {1+rac{1} {1+\cdots} } }
$$
