<h2 align="center">Cookie Consent</h2>

<p align="center">
  <em> The cookie consent is my seventh project of Scrimba Front-End course, in this course I build cookie consent window from scratch and control the window open & close.</em>
</p>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![Join the chat at https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist](https://badges.gitter.im/Front-End-Checklist/Front-End-Design-Checklist.svg)](https://gitter.im/Front-End-Checklist/Front-End-Design-Checklist) [![CC0](https://img.shields.io/badge/license-CC0-green.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

## Table of Contents
* **[1. What is cookie](#1---What-is-cookie)**
	* [1.1 Position the cookie](#11---Position-the-cookie)
	* [1.2 Time delay setting](#12---Time-delay-setting)
	* [1.3 Elementstyle](#13---Elementstyle)
	* [1.4 Clear multiple input fields after submit](#14---Clear-multiple-input-fields-after-submit)

---

> The **Cookie Consent** is my seventh static website. it is a floating window which is usually used on the website to collect the data. 

I start the Scrimba Module 5 course- Essential JavaScript Concepts and learn how to use JavaScript event and time lag setting skills. At the end of the course, I follow the "& Other Stories" website template to finish the cookie window, take a look at my project→ [Cookie Consent](https://shiuandai.github.io/Cookie-Consent/).

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

⚠️ *set position: fix", which means it always stays in the same place even if the page is scrolled.* → [W3School](https://www.w3schools.com/css/css_positioning.asp)

**[⬆ back to top](#table-of-contents)**


### 1.2 - Time delay setting

The **setTimeout()** method calls a function after a number of milliseconds.. → [W3School](https://www.w3schools.com/jsref/met_win_settimeout.asp)

* [ ] **1 second = 1000 milliseconds.**

```JS Syntax
setTimeout(function(){
    modalEl.style.display='inline'
}, 1500)  //means the window pops up in 1.5s
```

**[⬆ back to top](#table-of-contents)**


### 1.3 - Elementstyle

It is the useful way to control the css property.

The **style** property returns the values of an element's style attribute. ([W3School](https://www.w3schools.com/jsref/prop_html_style.asp)).

```JS Syntax
modal_close_btn_El.addEventListener('click',function(){
    modalEl.style.display='none'    //check out the syntax in this line
})
```

**[⬆ back to top](#table-of-contents)**


### 1.4 - Clear multiple input fields after submit

* [ ] There are several ways can reach the goal. This time I use the second method **prop()** methodto apply it into my project. → [How to clear form after submit in Javascript](https://www.tutorialspoint.com/how-to-reset-selected-value-to-default-using-jquery) 

```JS Syntax
function reset(){
    $("#email").prop('selectedIndex', 2);    //type the id here 
    $("#select").prop('selectedIndex', 2);
}  //當執行這個function則submit送出後，input內容會立即清空
```

⚠️ In the reset() function, we change the value of the ‘selectedIndex’ property to 2 to reset the selected value of the dropdown to the default value.
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
