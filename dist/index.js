!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).Tags=n()}(this,(function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n,e,o){if(t){const i=s(t,n,e,o);return t[0](i)}}function s(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function u(t,n,e,o,i,r,c){const u=function(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}(n,o,i,r);if(u){const i=s(n,e,o,c);t.p(i,u)}}function l(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let m;function p(t){m=t}function $(){if(!m)throw new Error("Function called outside component initialization");return m}function h(){const t=$();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const i=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);o.slice().forEach(n=>{n.call(t,i)})}}}const g=[],b=[],y=[],_=[],v=Promise.resolve();let x=!1;function w(t){y.push(t)}let E=!1;const k=new Set;function j(){if(!E){E=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];p(n),O(n.$$)}for(g.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];k.has(n)||(k.add(n),n())}y.length=0}while(g.length);for(;_.length;)_.pop()();x=!1,E=!1,k.clear()}}function O(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const A=new Set;let C;function I(t,n){t&&t.i&&(A.delete(t),t.i(n))}function M(t,n,e,o){if(t&&t.o){if(A.has(t))return;A.add(t),C.c.push(()=>{A.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function B(t,n){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,v.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(r,c,s,u,l,f,d=[-1]){const $=m;p(r);const h=c.props||{},g=r.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:e(),dirty:d,skip_bound:!1};let b=!1;if(g.ctx=s?s(r,h,(t,n,...e)=>{const o=e.length?e[0]:n;return g.ctx&&l(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),b&&B(r,t)),n}):[],g.update(),b=!0,o(g.before_update),g.fragment=!!u&&u(g.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);g.fragment&&g.fragment.l(t),t.forEach(a)}else g.fragment&&g.fragment.c();c.intro&&I(r.$$.fragment),function(t,e,r){const{fragment:c,on_mount:s,on_destroy:u,after_update:l}=t.$$;c&&c.m(e,r),w(()=>{const e=s.map(n).filter(i);u?u.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(w)}(r,c.target,c.anchor),j()}p($)}function T(t){let n,e,o;const i=t[10].default,r=c(i,t,t[9],null);return{c(){n=f("div"),r&&r.c(),d(n,"style",e="animation: "+t[1]+"; "+t[3])},m(t,e){l(t,n,e),r&&r.m(n,null),o=!0},p(t,c){r&&r.p&&512&c&&u(r,i,t,t[9],c,null,null),(!o||10&c&&e!==(e="animation: "+t[1]+"; "+t[3]))&&d(n,"style",e)},i(t){o||(I(r,t),o=!0)},o(t){M(r,t),o=!1},d(t){t&&a(n),r&&r.d(t)}}}function N(t){let n,e,o;const i=t[10].default,r=c(i,t,t[9],null);return{c(){n=f("div"),r&&r.c(),d(n,"style",e="animation: "+t[0]+"; "+t[3])},m(t,e){l(t,n,e),r&&r.m(n,null),o=!0},p(t,c){r&&r.p&&512&c&&u(r,i,t,t[9],c,null,null),(!o||9&c&&e!==(e="animation: "+t[0]+"; "+t[3]))&&d(n,"style",e)},i(t){o||(I(r,t),o=!0)},o(t){M(r,t),o=!1},d(t){t&&a(n),r&&r.d(t)}}}function S(t){let n,e,i,r;const c=[N,T],s=[];function u(t,n){return t[4]?0:1}return e=u(t),i=s[e]=c[e](t),{c(){n=f("div"),i.c(),d(n,"id",t[5]),d(n,"style",t[2])},m(t,o){l(t,n,o),s[e].m(n,null),r=!0},p(t,[l]){let a=e;e=u(t),e===a?s[e].p(t,l):(C={r:0,c:[],p:C},M(s[a],1,1,()=>{s[a]=null}),C.r||o(C.c),C=C.p,i=s[e],i||(i=s[e]=c[e](t),i.c()),I(i,1),i.m(n,null)),(!r||4&l)&&d(n,"style",t[2])},i(t){r||(I(i),r=!0)},o(t){M(i),r=!1},d(t){t&&a(n),s[e].d()}}}function q(t,n,e){let{animation:o="none"}=n,{animation_out:i="none; opacity: 0"}=n,{once:r=!1}=n,{top:c=0}=n,{bottom:s=0}=n,{css_observer:u=""}=n,{css_animation:l=""}=n;const a=h();let f=!0;const d=`__saos-${Math.random()}__`;function m(t){const n=t.getBoundingClientRect();return e(4,f=n.top+c<window.innerHeight&&n.bottom-s>0),f&&r&&window.removeEventListener("scroll",verify),window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)}var p;p=()=>{const t=document.getElementById(d);return IntersectionObserver?function(t){const n=new IntersectionObserver(o=>{e(4,f=o[0].isIntersecting),f&&r&&n.unobserve(t)},{rootMargin:`${-s}px 0px ${-c}px 0px`});return n.observe(t),()=>n.unobserve(t)}(t):m(t)},$().$$.on_mount.push(p);let{$$slots:g={},$$scope:b}=n;return t.$$set=t=>{"animation"in t&&e(0,o=t.animation),"animation_out"in t&&e(1,i=t.animation_out),"once"in t&&e(6,r=t.once),"top"in t&&e(7,c=t.top),"bottom"in t&&e(8,s=t.bottom),"css_observer"in t&&e(2,u=t.css_observer),"css_animation"in t&&e(3,l=t.css_animation),"$$scope"in t&&e(9,b=t.$$scope)},t.$$.update=()=>{16&t.$$.dirty&&a("update",{observing:f})},[o,i,u,l,f,d,r,c,s,b,g]}return class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),L(this,t,q,S,r,{animation:0,animation_out:1,once:6,top:7,bottom:8,css_observer:2,css_animation:3})}}}));