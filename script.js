// ==UserScript==
// @name        AoPS Title Fixer
// @namespace   https://rahulchoubey1.repl.co/scripts#aops-title-fixer
// @version     2023.08.10
// @description	This script fixes the title problem in the AoPSWiki, so now you can actually tell the difference between your million different tabs!
// @author      da BOXEN
// @match       https://artofproblemsolving.com/wiki/
// @icon        https://www.google.com/s2/favicons?sz=64&domain=artofproblemsolving.com
// @grant       none
// @sandbox     DOM
// @run-at      document-end
// @license     CC BY-NC-SA
// ==/UserScript==
 
(function fixtitle() {
	"use strict";

	const titles = Array.from(document.getElementsByTagName("title"));
	const badtitles = titles.filter(t => t.innerText === "Art of Problem Solving");
	badtitles.forEach(t => t.remove());
})();
