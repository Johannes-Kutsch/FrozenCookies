// ==UserScript==
// @name Frozen Cookies
// @version github-latest
// @description Userscript to load Frozen Cookies written by Icehawk78
// @author shinji257
// @homepage https://github.com/VorpalCake/FrozenCookies
// @include http://orteil.dashnet.org/cookieclicker/
// @updateURL https://rawgit.com/VorpalCake/FrozenCookies/master/fc_userscript_loader.user.js
// @downloadURL https://rawgit.com/VorpalCake/FrozenCookies/master/fc_userscript_loader.user.js
// ==/UserScript==

function LoadFrozenCookies() {
  var js = document.createElement('script');
  js.setAttribute('type', 'text/javascript');
  js.setAttribute('id', 'frozenCookieScript');
  js.setAttribute('src', 'https://rawgit.com/VorpalCake/FrozenCookies/master/frozen_cookies.js');
  document.head.appendChild(js);
}
// It's not the best way but Chrome doesn't work with addEventListener... :(
// Delay load by 2 seconds to allow the site to load itself first.)
window.setTimeout(LoadFrozenCookies, 2000);
