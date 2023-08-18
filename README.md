<h2 align="center">Cookie Consent</h2>

<p align="center">
  <em> The cookie consent is my seventh project of Scrimba Front-End course, in this course I build cookie consent window from scratch and control the window open & close.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. Design requirements](#1---design-requirements)**
	* [1.1 Structure Design](#11---grid-system)
	* [1.2 Colors](#12---colors)
	* [1.3 Fonts and texts](#13---fonts-and-texts)
	* [1.4 Publish files](#14---publish-files)

---

> The **Cookie Consent** is my seventh static website. it is a floating window which is usually used on the website to collect the data. 

I start the Scrimba Module 5 course- Essential JavaScript Concepts and learn how to use JavaScript event and time lag setting skills. At the end of the course, I follow the & Other Stories website template to finish the cookie window, take a look at my project→ [Cookie Consent](https://shiuandai.github.io/Cookie-Consent/).

## How I start the project?

* Ensure all points are taken into consideration from & Other Stories Website Template. → [& Other Stories](https://www.stories.com/en/index.html)
* Learn how to position the cookie window.
* Control the cookie window delay using the setTimeout method to pop up the window.
* Learn how to take control of element.style in CSS.
* Clear the form input field when clicking the "Submit" button.

---

## 1. - What is cookie

**A cookie** is a piece of data from a website that is stored within a web browser that the website can retrieve at a later time. → [Definition](https://www.trendmicro.com/vinfo/us/security/definition/cookies)

### 1.1 - Position the cookie

* [ ] The **position** property specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).
	> ℹ️ [Position] GET to know more about the definition. → [W3School](https://www.w3schools.com/cssref/pr_class_position.php)

```css //central the cookie window //remember to set to fix
.modal { //put it in the central
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;  //important to set auto
}
```

⚠️ *Use the "container" to define which tags should be contained inside, they perform "active" when using the **flex-box**, it is a crucial method to foster the web structure building.* 

**[⬆ back to top](#table-of-contents)**

### 1.2 - Time delay setting

You can "SAVE" your color preference in your account. → [Color Palette](https://scrimba.com/links/hometown-palette)

* [ ] **All colors used in the creatives are named** (RED: #E63946, LIGHT: #F1FAEE, AQUA: #A8DADC, LIGHT BLUE: #457B9D, DARK BLUE: #1D3557) which are provided by Scrimba course so that they become the basic color guideline to use in my project.

* [ ] All of the most important/used **colors contrast** in the design to allow text with the background can be easily read.

**[⬆ back to top](#table-of-contents)**

### 1.3 - Element.style

Fonts are an essential part of every design.

It is recommended to organize the font size and style in the design process. There are several websites where the designer can download the font. ([Google font](https://fonts.google.com/)).

* [ ] Using the technique **@font-face** in CSS, the link is embedded in the CSS. 

  __Resources:__
	* 📖 [Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/)

* [ ] The **Web Safe Fonts** is an important concept. Web-safe fonts are fonts that are pre-installed by many operating systems. While not all systems have the same fonts installed, you can use a web-safe font stack to choose several fonts that look similar and are installed on the various systems that you want to support.

**[⬆ back to top](#table-of-contents)**


### 1.4 - Clear multiple input fields after submit

* [ ] How to host your website, there are several ways. 1. **Netlify** provides next-generation web hosting and automation that's very affordable. Is can be integrated with Github for publishing the web easily. The alternative is using Github Page, my way is to use Github Page. → [Comparison of Github Page and Netlify](https://www.freecodecamp.org/news/publish-your-website-netlify-github/) 


---

## Author

**[Shiuan Dai](https://www.linkedin.com/in/shiuandai/)**

**[⬆ back to top](#table-of-contents)**


[6]:	https://guideguide.me/
[7]:	https://www.sketchapp.com/docs/canvas/rulers-guides-grids/
[8]:	https://getbootstrap.com/docs/4.0/layout/grid/
[9]:	http://flexboxgrid.com/
[10]: https://css-tricks.com/dont-overthink-it-grids/
[11]:	https://www.lifewire.com/aco-file-2619477
[16]:	http://bradfrost.com/blog/post/atomic-web-design/
[22]:	https://js.libhunt.com/
[23]:	https://bestof.js.org/
[28]:	https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist
