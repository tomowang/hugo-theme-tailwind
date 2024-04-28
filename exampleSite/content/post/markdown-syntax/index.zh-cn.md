+++
author = "Hugo Authors"
title = "Markdown语法指导"
date = "2019-03-11"
description = "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
tags = [
    "markdown",
    "css",
    "html",
    "tag1",
    "tag2",
]
categories = [
    "themes",
    "syntax",
]
series = ["Themes Guide"]
aliases = ["migrate-from-jekyl"]
# Photo by <a href="https://unsplash.com/@drucsko?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dávid Drucskó</a> on <a href="https://unsplash.com/photos/a-computer-screen-with-a-bunch-of-text-on-it-eZ_hyar3qqc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
image = "images/david-drucsko-eZ_hyar3qqc-unsplash.jpg"
+++

本文档提供可用于 Hugo 内容文件的基本 Markdown 语法示例，并且还展示了 Hugo 主题中是否用 CSS 修饰了 HTML 基本元素。
<!--more-->

## 标题

以下 HTML `<h1>`-`<h6>` 元素表示六个级别的分节标题。 `<h1>` 是最高级别分节标题，而 `<h6>` 是最低级别分节标题。

# H1
## H2
### H3
#### H4
##### H5
###### H6

## 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## 块引用

blockquote 元素表示从另一个资源引用的内容，可能带有一个在 `footer` 或 `cite` 元素内的引用，或者带有诸如注释和缩写之类的行内更改。

### 没有归属的块引用

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **请注意**在代码块中可以使用 *Markdown 语法*。

### 带有归属的块引用

> 不要通过共享内存进行通信，而是通过通信共享内存。<br>
> - <cite>Rob Pike[^1]</cite>

[^1] 上述引用摘自 Rob Pike 于 2015 年 11 月 18 日在 Gopherfest 期间进行的 [演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格

表格不是核心 Markdown 规范的一部分，但 Hugo 开箱即用地支持表格。

| Name | Age
| ------ | ------ |
| Bob | 27
| Alice | 23

### 表格中的行内 Markdown

| 斜体 | 粗体 | 代码 |
| ------ | ------ | ------ |
| *斜体* | **粗体** | `代码` |

## 代码块

### 带反引号的代码块

```html {linenos=true}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

### 用四个空格缩进的代码块

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

### 带有 Hugo 内部高亮短代码的代码块

{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

## 列表类型

### 有序列表

1. 第一个项目
2. 第二个项目
3. 第三个项目

### 无序列表

* 项目一
* 项目二
* 项目三

### 嵌套列表

* 水果
  * 苹果
  * 橙子
  * 香蕉
* 乳制品
  * 牛奶
  * 奶酪

### 带有复选框的列表

- [x] 创建 Hugo 网站
- [x] 添加内容
- [ ] 添加样式

## 其他元素 - abbr、sub、sup、kbd、mark

<abbr title="图形交换格式">GIF</abbr> 是一种位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> 结束会话。

大多数 <mark>火蜥蜴</mark> 在夜间活动，并捕食昆虫、蠕虫和其他小型生物。
