// ==UserScript==
// @name         r/herrerdenet Logo template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the canvas!
// @author       herrerde
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://herrerde.cf/assets/favicon/favicon.ico
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://raw.githubusercontent.com/herrerde/rplace-herrerdenet/main/place_full.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())

    }, false);

}