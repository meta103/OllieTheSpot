/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable func-names */
/*!
* Clamp.js 0.5.1
*
* Copyright 2011-2013, Joseph Schmitt http://joe.sh
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*/
(function () {
  window.$clamp = function (c, d) {
    function s(a, b) { n.getComputedStyle || (n.getComputedStyle = function (a, b) { this.el = a; this.getPropertyValue = function (b) { const c = /(\-([a-z]){1})/g; b == 'float' && (b = 'styleFloat'); c.test(b) && (b = b.replace(c, (a, b, c) => c.toUpperCase())); return a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null; }; return this; }); return n.getComputedStyle(a, null).getPropertyValue(b); } function t(a) { a = a || c.clientHeight; const b = u(c); return Math.max(Math.floor(a / b), 0); } function x(a) {
      return u(c)
        * a;
    } function u(a) { let b = s(a, 'line-height'); b == 'normal' && (b = 1.2 * parseInt(s(a, 'font-size'))); return parseInt(b); } function l(a) { if (a.lastChild.children && a.lastChild.children.length > 0) return l(Array.prototype.slice.call(a.children).pop()); if (a.lastChild && a.lastChild.nodeValue && a.lastChild.nodeValue != '' && a.lastChild.nodeValue != b.truncationChar) return a.lastChild; a.lastChild.parentNode.removeChild(a.lastChild); return l(c); } function p(a, d) {
      if (d) {
        const e = a.nodeValue.replace(b.truncationChar, ''); f || (h = k.length > 0
          ? k.shift() : '', f = e.split(h)); f.length > 1 ? (q = f.pop(), r(a, f.join(h))) : f = null; m && (a.nodeValue = a.nodeValue.replace(b.truncationChar, ''), c.innerHTML = `${a.nodeValue} ${m.innerHTML}${b.truncationChar}`); if (f) { if (c.clientHeight <= d) if (k.length >= 0 && h != '') r(a, f.join(h) + h + q), f = null; else return c.innerHTML; } else h == '' && (r(a, ''), a = l(c), k = b.splitOnChars.slice(0), h = k[0], q = f = null); if (b.animate) setTimeout(() => { p(a, d); }, !0 === b.animate ? 10 : b.animate); else return p(a, d);
      }
    } function r(a, c) { a.nodeValue = c + b.truncationChar; } d = d || {};
    var n = window; var b = {
      clamp: d.clamp || 2, useNativeClamp: typeof d.useNativeClamp !== 'undefined' ? d.useNativeClamp : !0, splitOnChars: d.splitOnChars || ['.', '-', '\u2013', '\u2014', ' '], animate: d.animate || !1, truncationChar: d.truncationChar || '\u2026', truncationHTML: d.truncationHTML,
    }; let e = c.style; const y = c.innerHTML; const z = typeof c.style.webkitLineClamp !== 'undefined'; let g = b.clamp; const v = g.indexOf && (g.indexOf('px') > -1 || g.indexOf('em') > -1); let
      m; b.truncationHTML && (m = document.createElement('span'), m.innerHTML = b.truncationHTML); var k = b.splitOnChars.slice(0);


    var h = k[0]; let f; let
      q; g == 'auto' ? g = t() : v && (g = t(parseInt(g))); let w; z && b.useNativeClamp ? (e.overflow = 'hidden', e.textOverflow = 'ellipsis', e.webkitBoxOrient = 'vertical', e.display = '-webkit-box', e.webkitLineClamp = g, v && (e.height = `${b.clamp}px`)) : (e = x(g), e <= c.clientHeight && (w = p(l(c), e))); return { original: y, clamped: w };
  };
}());


const paragraph = document.querySelector('.description');
$clamp(paragraph, { clamp: 2 });
