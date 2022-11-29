// ==UserScript==
// @name         CookieBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Cookie Clicker bot.
// @author       SotaPulu
// @match        https://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dashnet.org
// @grant        none
// ==/UserScript==

let enabled = true;
let clickDelay = 1;

let click = true;
let clickGC = true;
let buy = true;
let upgrade = true;

//click
let autoClicker = setInterval(() => {
    Game.lastClick -= 1000;
    document.getElementById("bigCookie").click();
}, clickDelay);

//click golden

let autoGold = setInterval(() => {
    let children = document.getElementById("shimmers").children;

    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.click();
    }
}, 100);

let autoBuy = setInterval(() => {
    let children = document.getElementById("products").children;

    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.click();
    }
}, 1000);

let autoUpgrade = setInterval(() => {
    let children = document.getElementById("upgrades").children;

    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        child.click();
    }
}, 1000);
