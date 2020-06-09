---
path: "/blog/nodegui-and-react-nodegui"
date: "2019-08-31"
title: "What is NodeGui and React NodeGUI?"
featuredImage: ../../images/nodegui.jpg
description: "In this Article we will introduce a new library for building native desktop applications with JavaScript and CSS."
---

![GitHub Logo](https://i.imgur.com/SEYmuHs.jpg)

NodeGUI is an open source library for building cross platform native desktop applications with JavaScript and powerful CSS (including inline-style and Cascading Sheets).

NodeGui apps can run on Mac, Windows, and Linux from a single codebase. It’s a library that combines the powers of [Node.js](https://nodejs.org/en/) [(N-API)](https://nodejs.org/api/n-api.html) and [QT](https://www.qt.io/) (and NOT chromium) into a single packaging. hence it is memory and cpu efficient.

##What? wait! What is QT?
[QT](https://www.qt.io/) is a cross-platform C++ application development framework for desktop and various other platforms.

This means applications written using NodeGUI DO NOT open up a browser instance and render the UI in it, instead all the widgets are natively rendered.

##React NodeGUI?

React NodeGUI is a custom react renderer for NodeGui. React NodeGUI combines the power and flexibility of React with ease of NodeJs and maturity of [QT5](https://www.qt.io/). With react nodegui you have complete access to all React APIs including hooks.[See more](https://docs.nodegui.org/#/react/about)

##What are the key features of NodeGuiJS?
Assuming the above definition have solved your query on what is NodeGui, let’s move onto its features.

##Features

- It allows full CSS usage including actual cascading. You can do things like pseudo selectors.
- Everything that [QT](https://www.qt.io/) stylesheet supports basically (and [QT](https://www.qt.io/) stylesheet is very powerful).
- Low CPU and memory footprint.
- Complete Nodejs api support.
- Native widget event listener support. supports all event available from [QT](https://www.qt.io/) / NodeJs.

##What you can do with it?
You can do pretty much anything you do with NodeJS.

![nodegui apps](https://i.imgur.com/tkJqgmT.jpg)

###Status
It's very recent, and it's currently actively updated. You don't have a CLI here, so you have to clone an empty repository to start and app packaging isn't available till writing this article!

##No more talk! lets dev a peace of code!
Here we gonna see an example of React NodeGui

![code](https://i.imgur.com/R1pIl4l.jpg)

Easy, isn't it! If you already have some experience in react this will look very familiar to you!

##Conclusion
If you want to dive deeper into NodeGui/React nodeGui and see what they working on check out this link [NodeGui](https://docs.nodegui.org)
