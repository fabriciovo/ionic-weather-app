/*! For license information please see 10.3ebfeb94.chunk.js.LICENSE.txt */
(this["webpackJsonpionic-weather-app"]=this["webpackJsonpionic-weather-app"]||[]).push([[10],{90:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(9),o=function(t){var e,n,o,v,l=10*-f,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),h=new WeakMap,m=function(t){l=Object(i.p)(t),b(t)},E=function(){clearTimeout(v),v=void 0,n&&(O(!1),n=void 0)},w=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},b=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var o=Object(i.o)(e),a=o.x,c=o.y;if(n){if(h.has(n))throw new Error("internal error");n.classList.contains(s)||T(n,a,c),O(!0)}if(t){var d=h.get(t);d&&(clearTimeout(d),h.delete(t));var f=r(t)?0:u;t.classList.remove(s),v=setTimeout((function(){T(t,a,c),v=void 0}),f)}n=t}},T=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&c(t);i&&i.addRipple&&(j(),o=i.addRipple(e,n))},j=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},O=function(t){j();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!r(e)){var o=setTimeout((function(){e.classList.remove(s),h.delete(e)}),d);h.set(e,o)}else e.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",(function(t){e=t.target,E()})),S.addEventListener("ionScrollEnd",(function(){e=void 0})),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",(function(t){l=Object(i.p)(t),w(t)}),!0),S.addEventListener("touchcancel",m,!0),S.addEventListener("touchend",m,!0),S.addEventListener("mousedown",(function(t){var e=Object(i.p)(t)-f;l<e&&w(t)}),!0),S.addEventListener("mouseup",(function(t){var e=Object(i.p)(t)-f;l<e&&b(t)}),!0),S.addEventListener("contextmenu",(function(t){b(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=10.3ebfeb94.chunk.js.map