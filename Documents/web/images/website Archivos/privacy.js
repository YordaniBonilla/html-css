
/*! privacy - v1.0.7 - 07-04-2019, 8:38:10 AM

ADOBE CONFIDENTIAL
==================
Copyright 2018 Adobe Systems Incorporated
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Adobe Systems Incorporated and its suppliers,
if any. The intellectual and technical concepts contained
herein are proprietary to Adobe Systems Incorporated and its
suppliers and are protected by trade secret or copyright law.
Dissemination of this information or reproduction of this material
is strictly forbidden unless prior written permission is obtained
from Adobe Systems Incorporated.
*/

!function(){var e,t,n,o,i,r;e=function(){var e={},t="adobePrivacy";return e.strings={id:t,debug:t+"Debug",testNotice:"testNotice",bypassConsent:"autoConsent"},e.events=Object.freeze({privacy_consent:t+":PrivacyConsent"}),e.privacy={id:414,cdn:'//wwwimages2.adobe.com/etc/beagle/public/globalnav/privacy-files/',notice:"sitenotice/",evidonCDN:"//c.evidon.com/",country:"//c.evidon.com/geo/country.js",cookieTime:13,cookieName:"_evidon_consent_cookie",evidonPixelId:22},e}(),t=function(){var e={};return e.isObject=function(e){return null!==e&&"object"==typeof e},e.isEmptyObject=function(e){var t;if(this.isObject(e))for(t in e)if(e.hasOwnProperty(t))return!1;return!0},e.isFunction=function(e){return"function"==typeof e},e.isArray=function(e){return this.isObject(e)&&e.constructor===Array},e.formatString=function(e,t){if("string"==typeof e&&Array.isArray(t)&&t.length)return e.replace(/{(\d+)}/g,function(e,n){return"undefined"!=typeof t[n]?t[n]:e})},e.getPropertySafely=function(e,t){var n,o,i;if(e&&"object"==typeof e&&!Array.isArray(e)&&"string"==typeof t&&Object.keys(e).length&&t.length){for(t=t.split("."),o=t.length,i=e,n=0;n<o;n++){if(!i.hasOwnProperty(t[n]))return;i=i[t[n]]}return i}},e.isValidHex=function(e){return"string"==typeof e&&/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},e.removeSelectorIdentifier=function(e){return"string"==typeof e?e.replace(/^[\.#]/,""):void 0},e.mergeObjects=function(e,t){var n=!this.isEmptyObject(e)&&!this.isArray(e),o=!this.isEmptyObject(t)&&!this.isArray(t);return e=n?e:{},t=o?t:{},Object.keys(e).forEach(function(n){t[n]=e[n]}),t},e}(),n=function(e){var t={};return t.closest=function(e,t){if(!e||!t)return null;if("function"!=typeof window.Element.prototype.closest){for(;e&&1===e.nodeType;){if(this.matches(e,t))return e;e=e.parentNode}return null}return e.closest(t)},t.matches=function(e,t){var n,o,i;return e&&t?"function"!=typeof window.Element.prototype.matches?(n=e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector||function(e){o=(this.document||this.ownerDocument).querySelectorAll(e),i=o.length;do--i;while(i>=0&&o.item(i)!==this);return i>-1},n.apply(e,[t])):e.matches(t):null},t.forEach=function(e,t,n){var o,i;if(e&&t)for(o=0,i=e.length,o;o<i;o++)t.call(n,e[o],o,e)},t.Events=function(){var t={};this.addEventListener=function(e,n){var o=t[e]||[];o.push(n),t[e]=o},this.dispatchEvent=function(n,o){var i,r,s=t[n];if(s)for(r=0,i=s.length;r<i;++r)e.isFunction(s[r])&&s[r].apply(null,[o,n])}},t.addPassiveEventListener=function(t,n,o){var i,r=!1;if(t&&"object"==typeof t&&"string"==typeof n&&n.length>0&&e.isFunction(o)){try{i=Object.defineProperty({},"passive",{get:function(){r=!0}}),window.addEventListener("testPassiveEvents",null,i),window.removeEventListener("testPassiveEvents",null,i)}catch(e){}t.addEventListener(n,o,!!r&&{passive:!0})}},t.isInteger=function(e){var t;return t="function"==typeof Number.isInteger?Number.isInteger:function(e){return"number"==typeof e&&window.isFinite(e)&&Math.floor(e)===e},t.apply(null,[e])},t.isRTL=function(){return"rtl"===document.querySelector("html").getAttribute("dir")},t.isElementVisible=function(e){return!!(e&&e instanceof HTMLElement&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).getPropertyValue("visibility"))},t.findItems=function(t,n){var o,i,r;if(t&&t.length>0&&e.isFunction(n))for(o=[],r=t.length,i=0;i<r;i++)n(t[i])&&o.push(t[i]);return o},t.loadResource=function(t){var n,o,i=e.getPropertySafely(t,"path"),r=e.getPropertySafely(t,"type"),s=e.getPropertySafely(t,"async"),c=e.getPropertySafely(t,"callback"),a=e.getPropertySafely(t,"id");!i||"string"!=typeof i||!r||["style","script"].indexOf(r)<0||("script"===r?(n=document.createElement("script"),n.type="text/javascript",n.src=i,"boolean"==typeof s&&(n.async=s)):"style"===r&&(n=document.createElement("link"),n.type="text/css",n.rel="stylesheet",n.href=i),e.isFunction(c)&&(o=!1,n.onload=function(){o||(o=!0,c())}),"string"==typeof a&&a.length>0&&(n.id=a),document.querySelector("head").appendChild(n))},t}(t),o=function(e,t){function n(){this.debug=window.location.search.indexOf(e.strings.debug)>-1}var o;return n.prototype.message=function(){var t,n=[e.strings.debug+":"],o=arguments.length;for(t=0;t<o;t++)n.push(arguments[t]);return n.concat()},n.prototype.log=function(){this.debug&&window.console&&t.isFunction(window.console.log)&&window.console.log.apply(null,this.message.apply(null,arguments))},n.prototype.warn=function(){this.debug&&window.console&&t.isFunction(window.console.warn)&&window.console.warn.apply(null,this.message.apply(null,arguments))},n.prototype.error=function(){this.debug&&window.console&&t.isFunction(window.console.error)&&window.console.error.apply(null,this.message.apply(null,arguments))},function(){return o=o||new n}}(e,t),i=function(e,t){var n={};return n.isSet=function(e){var t,n=!1;return"string"==typeof e&&e.length&&"string"==typeof document.cookie&&(n=Boolean(document.cookie.split(";").filter(function(n){if(n.length)return t=n.split("="),t=t[0],t=t.trim(),t===e}).length)),n},n.getValue=function(e,t){var n,o,i,r;if("string"==typeof e&&e.length&&"string"==typeof document.cookie)for(n=document.cookie.split("; "),o=n.length,i=o-1;i>=0;i--)if(r=n[i],"string"==typeof r&&r.length&&(r=r.split("="),e===r[0]))return"boolean"==typeof t&&t?r[1]:window.decodeURIComponent(r[1])},n.setValue=function(t,n,o,i){var r,s,c,a="";"string"==typeof t&&t.length&&"string"==typeof document.cookie&&(a+="boolean"==typeof i&&i?t+"="+n:window.encodeURIComponent(t)+"="+window.encodeURIComponent(n),e.isEmptyObject(o)||(r=o.path,"string"==typeof r&&r.length&&(a+="; path="+r),s=o.expiration,s instanceof Date&&(a+="; expires="+s.toUTCString()),c=o.domain,"string"==typeof c&&c.length&&(a+="; domain="+c)),document.cookie=a)},n}(t,n),r=function(e,t,n,o,i){var r={event:new n.Events,userProvidedConsent:!1},s={},c=o();return r.dispatchEvent=function(e){var t;return"function"==typeof window.CustomEvent?t=new CustomEvent(e):(t=document.createEvent("CustomEvent"),t.initCustomEvent(e,!1,!1,void 0)),window.dispatchEvent(t)},r.overrideEndpointsConfig=function(n){e.privacy.cdn=t.getPropertySafely(n,"privacyFilesPath")||e.privacy.cdn},r.dropPixel=function(e){var n=t.getPropertySafely(window,"evidon.notice.pixelsDropped");"undefined"!=typeof e&&(t.isObject(t.getPropertySafely(window,"evidon.notice"))&&t.isFunction(window.evidon.notice.dropPixel)&&t.isArray(n)&&n.length>1?(window.evidon.notice.dropPixel(e),c.log("evidon pixel dropped for navigation consent")):setTimeout(function(){r.dropPixel(e)},200))},r.setNavigationConsentAcrossDomains=function(){function t(e){var t,n,o,i="www",r="adobe.com";if("string"==typeof e&&e.length)for(t=[i+"."+r,i+".stage."+r,i+".stage2."+r,i+".con-a."+r,i+".con-b."+r,i+".qa01."+r,i+".qa02."+r,i+".qa03."+r,i+".qa04."+r,i+".qa05."+r,i+".dev01."+r,i+".dev02."+r,i+".dev03."+r,i+".dev04."+r],o=t.length,n=0;n<o;n++)if(e.indexOf(t[n])!==-1)return!0;return!1}function n(){var e,t=window.location.hostname.toLowerCase().split("."),n=[],o="",r="sat_domain",s="A";if(u)return u;for(o=t.pop(),n.unshift(o);t.length>0;){o=t.pop(),n.unshift(o),e=new Date,e.setTime(e.getTime()+1e3);try{i.setValue(r,s,{expiration:e,domain:n.join(".")})}catch(e){break}if(i.getValue(r)===s){u=n.join(".");break}}return u}var o,s,c=i.isSet(e.privacy.cookieName),a=document.referrer,u="";o=n(),!c&&a&&a!==document.URL&&t(a)&&a.indexOf(o)!==-1&&(s=new Date,s.setMonth(s.getMonth()+e.privacy.cookieTime),i.setValue(e.privacy.cookieName,(new Date).toISOString(),{expiration:s,domain:o,path:"/"},!0),r.dropPixel(e.privacy.evidonPixelId))},r.bypassConsent=function(){var t=window.location.search.indexOf(e.strings.bypassConsent)>-1,n=".adobe.com",o=new Date;t&&"undefined"==typeof i.getValue(e.privacy.cookieName)&&(o.setMonth(o.getMonth()+e.privacy.cookieTime),i.setValue(e.privacy.cookieName,(new Date).toISOString(),{expiration:o,domain:n,path:"/"},!0))},s.init=function(t){function o(){var e=window.location.hostname.split("."),t="";return 2===e.length?t=e[0]:e.length>2&&(t=e[e.length-2],"com"!==t&&"co"!==t||(t=e[e.length-3])),t}var i,s,a,u=e.privacy.id,d=e.privacy.country;r.bypassConsent(),r.overrideEndpointsConfig(t),r.setNavigationConsentAcrossDomains(),i=e.privacy.cdn,s=i+e.privacy.notice,window.evidon=window.evidon||{},window.evidon.id=u,window.evidon.test=window.location.search.indexOf(e.strings.testNotice)>-1,c.log("test notice",window.evidon.test),window.evidon.priorConsentCallback=function(){r.userProvidedConsent=!0,r.event.dispatchEvent(e.events.privacy_consent),r.dispatchEvent(e.events.privacy_consent),c.log("prior consent callback")},a=o(),n.loadResource({id:"evidon-notice",path:s+"evidon-sitenotice-tag.js",type:"script",async:!0}),n.loadResource({id:"evidon-location",path:d,type:"script",async:!0}),n.loadResource({id:"evidon-themes",path:s+u+"/snthemes.js",type:"script",async:!0}),window.evidon.test?n.loadResource({id:"evidon-settings",path:e.privacy.evidonCDN+e.privacy.notice+u+"/"+a+"/test/settings.js",type:"script",async:!0}):n.loadResource({id:"evidon-settings",path:s+u+"/"+a+"/settings.js",type:"script",async:!0})},s.loadResource=function(e){n.loadResource(e)},s.hasUserProvidedConsent=function(){return r.userProvidedConsent},s.showConsentPopup=function(){var e=t.getPropertySafely(window.evidon,"notice");"object"==typeof e&&t.isFunction(e.showConsentTool)&&e.showConsentTool()},s.events=e.events,s}(e,t,n,o,i),r.init(),window.adobePrivacy=r}();