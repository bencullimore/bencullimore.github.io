// Script created for GDPR Compliance. Source code located: weebly/kings-banner

window.w_gdpr = {"whitelist":["__cfduid","__cflb","__paypal_storage__","_csrf","_redirectLocation","chamber_ses_id","chamber-xsrf","cmsapi_session","ConvenienceStore","editor_session","encore_session","fulfillment-selection","gdpr_hide_until","guides_session","guides-xsrf","ipar_allowedIP","ipar_iparcelSession","ipar_sess_id","ipar_WelcomMatEngaged","ipar_WelcomMatShown","laravel_session","LiSESSIONID","LithiumUserInfo","LithiumUserSecure","loggedIn","loggedout","M","oauth_login","oauth_signup","order-online:buyer-location-info","order-online:dine-in","order-online:order_notes","order-online:selected-location","OrderId","promo","referral_token","SelectedSiteId","site_session","square_sync_session","square-sync-csrf","squaresync_session","sto-id-billing","sto-id-editor","sto-id-pages","sto-id-springboard-home","sto-id-springboard-insights","sto-id-springboard-squaresync","sto-id-trumpet","sto-id-web.prod-c3po-k8s","sto-id-web.prod-front-door-k8s","superhome_session","superhome-xsrf","unified_checkout","viewedProducts","websitespring_session","websitespring-xsrf","weebly_for_web_designers_session","weebly.order-again","weeblyPage","WeeblySession","weeblySite","WeeblySiteLogin","whelp_session","whelp_xsrf","whitelisted-purposes","wuid","XSRF-TOKEN","OptanonConsent","OptanonAlertBoxClosed","usprivacy","euconsent-v2","eupubconsent-v2","OTAdditionalConsentString","cookie-consent"],"regex_whitelist":["\/sto-id-web-prod-.+\/"],"strings":{"body":"This site uses cookies to personalize your experience, analyze site usage, and offer tailored promotions.","privacyLink":"\/privacy","privacyText":"Cookie Policy","buttonText":"I accept","remindText":"Remind me later"},"stealth_mode":true,"has_remind_me":false,"is_user_site":false,"allow_non_weebly_domain":false,"is_eu_onetrust":true,"is_us_ca_onetrust":false,"language":""};

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var html='<div class="kb-container" id="kb-container">\n    <div class="kb-content">\n        <div class="kb-description">This site uses cookies to assist with navigation, analyze your use of our site(s), and assist with promotional and marketing efforts. <a style="color: #2990ea" href="/privacy" target="_blank">Cookie Policy</a></div>\n        <a href="#" class="kb-remind-link" id="kb-link">Remind Me Later</a>\n        <a href="#" class="kb-notice-btn" id="kb-btn">Accept Cookies</a>\n    </div>\n</div>\n\n<style>\n    .kb-container {\n        background: #363b3e;\n        font-size: 0.8em;\n        text-align: center;\n        line-height: 1.3;\n        position: fixed;\n        z-index: 9999999999; /* make sure z-index is higher than all chat apps  */\n        bottom: 0;\n        width: 100vw;\n        border-top: #fff 3px solid;\n        font-family: "Graphik","effra","Proxima Nova","Helvetica Neue","Helvetica","Arial",sans-serif;\n    }\n    .kb-content {\n        color: #fff;\n        padding: 10px 0px;\n        width: 100%;\n        max-width: 1440px;\n        margin: auto;\n    }\n\n    @media screen and (min-width: 64.0625em) {\n        .kb-content {\n            padding: 5px 20px;\n        }\n    }\n    .kb-description {\n        text-align: left;\n        line-height: 1.3;\n        width: 70%;\n        display: inline-block;\n        vertical-align: middle;\n    }\n    @media screen and (min-width: 40.0625em) {\n        .kb-description {\n            margin-right: 2em;\n        }\n        .kb-remind-link {\n            margin-left: -2em;\n        }\n    }\n\n    a.kb-notice-btn {\n        color: #fff;\n        background: #0073ff;\n        display: inline-block;\n        padding: 10px 0;\n        border-radius: 3px;\n        font-weight: 500;\n        min-width: 150px;\n        text-decoration: none;\n    }\n\n    a.kb-notice-btn:hover {\n        background-color: #fff;\n        color: #0073ff;\n    }\n\n    .kb-remind-link {\n        color: #2990ea;\n        text-decoration: none;\n        margin-right: 1em;\n    }\n\n    @media screen and (max-width: 40em) {\n        .kb-notice-btn {\n            width: 25%;\n            min-width: unset;\n        }\n    }\n}\n</style>\n',KingsBanner=function(){function n(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,n),this.allowed=t.whitelist,this.regex_allowed=t.regex_whitelist,this.strings=t.strings,this.is_stealth_mode=t.stealth_mode,this.is_user_site=t.is_user_site,this.has_remind_me=t.has_remind_me,this.allow_non_weebly_domain=t.allow_non_weebly_domain,this.language=t.language,this.is_us_ca_onetrust=t.is_us_ca_onetrust,this.bannerAcceptedCalled=!1,this.bannerDismissedCalled=!1,this.getCookie("gdpr-kb-p")&&this.is_user_site||(this.deleteBLCookies(),this.overrideCookies(),this.is_user_site||(this.deleteBlockedStorageData(localStorage),this.deleteBlockedStorageData(sessionStorage),this.overrideStorage()),"complete"!==document.readyState?document.addEventListener("DOMContentLoaded",function(){e.createBanner()},{once:!0}):this.createBanner())}return _createClass(n,[{key:"checkAllowed",value:function(e){var t=e.split(";")[0].split("=")[0];return this.checkAllowedByName(t)}},{key:"checkAllowedByName",value:function(e){if(0<=this.allowed.indexOf(e))return!0;for(var t=0;t<this.regex_allowed.length;t+=1){var n=this.regex_allowed[t].split("/"),i=new RegExp(n[1],n[2]?n[2]:"g");if(e.match(i))return!0}return!1}},{key:"getCookie",value:function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i+=1){for(var o=n[i];" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null}},{key:"deleteBLCookies",value:function(){for(var e=document.cookie.split(";"),t=0;t<e.length;t+=1){for(var n=e[t],i=n.indexOf("="),o=-1<i?n.substr(0,i):n;" "===o.charAt(0);)o=o.substring(1,o.length);if(!this.checkAllowed(o)){var s=window.location.hostname,a=this.getRootDomain(s);document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;",document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;",document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=."+s+";",document.cookie=o+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=."+a+";"}}}},{key:"overrideCookies",value:function(){var t=this,n=Object.getOwnPropertyDescriptor(Document.prototype,"cookie")||Object.getOwnPropertyDescriptor(HTMLDocument.prototype,"cookie");Object.defineProperty(document,"cookie",{get:function(){return n.get.call(document)},set:function(e){return t.checkAllowed(e)?n.set.call(document,e):null}})}},{key:"overrideStorage",value:function(){var n=this;Storage.prototype.setItemOverride=Storage.prototype.setItem,Storage.prototype.setItem=function(e,t){n.checkAllowedByName(e)&&this.setItemOverride(e,t)}}},{key:"deleteBlockedStorageData",value:function(e){for(var t=Object.entries(e),n=0;n<t.length;n+=1){var i=t[n][0];this.checkAllowedByName(i)||e.removeItem(i)}}},{key:"listenToMessages",value:function(e){var t=this,n=0<arguments.length&&void 0!==e?e:null;window.addEventListener("message",function(e){if(e.data.kingsBanner&&e.data.kingsBanner.event)switch(e.data.kingsBanner.event){case"opt-in":t.bannerAccepted(n,!1);break;case"dismiss":t.bannerDismissed(n)}},!1)}},{key:"sendPostMessage",value:function(e){window.parent!==window.self&&window.parent.postMessage({kingsBanner:{event:e}},"*");for(var t=0;t<window.frames.length;t+=1){window.frames[t].postMessage({kingsBanner:{event:e}},"*")}}},{key:"bannerDismissed",value:function(e){var t=0<arguments.length&&void 0!==e?e:null;this.bannerDismissedCalled||(this.bannerDismissedCalled=!0,localStorage.gdpr_hide_until=Date.now()+36e5,t&&(t.parentNode.removeChild(t),document.getElementsByTagName("body")[0].style.cssText="padding-bottom: unset;"),this.sendPostMessage("dismiss"))}},{key:"bannerAccepted",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:null,i=1<arguments.length&&void 0!==t&&t;this.bannerAcceptedCalled||(this.bannerAcceptedCalled=!0,this.is_user_site?this.setCookie("gdpr-kb-p","true",9999):this.setCookie("gdpr-kb","true",9999),n&&(n.parentNode.removeChild(n),document.getElementsByTagName("body")[0].style.cssText="padding-bottom: unset;"),i&&this.initializeAragorn(),this.sendPostMessage("opt-in"),this.allow_non_weebly_domain&&window.location.reload())}},{key:"initializeAragorn",value:function(){window.AragornAnalytics&&(window.AragornAnalytics.initialize(),window.AragornAnalytics.track({type:"standard",location:"unknown",object_category:"banner_notification",action:"click",object_instance:"gdpr_banner",property:"gdpr_consent",value:"opted-in"}))}},{key:"createBanner",value:function(){if(this.is_stealth_mode)this.listenToMessages();else{if(this.has_remind_me){var e=parseInt(localStorage.gdpr_hide_until,10);if(!Number.isNaN(e)&&Date.now()<e)return void this.listenToMessages()}this.is_user_site?this.listenToMessages(this.createBannerForUserSite()):this.listenToMessages(this.createBannerForOneTrust())}}},{key:"createBannerForUserSite",value:function(){var e=this,t=document.createElement("div");t.innerHTML=html,document.body.appendChild(t);var n=document.querySelector(".kb-description");if(this.strings.body&&this.strings.privacyText){n.innerText=this.strings.body+" ";var i=document.createElement("a");i.setAttribute("style","color: #2990ea; text-decoration: none;"),i.setAttribute("href",this.strings.privacyLink),i.setAttribute("target","_blank"),i.innerText=this.strings.privacyText,n.appendChild(i)}var o=document.getElementById("kb-btn");this.strings.buttonText&&(o.innerHTML=this.strings.buttonText);var s=document.getElementById("kb-link");return this.strings.remindText&&(s.innerHTML=this.strings.remindText),this.has_remind_me?s.onclick=function(){return e.bannerDismissed(t)}:s.style.display="none",document.getElementsByTagName("body")[0].style.cssText="padding-bottom: 2.8em;",document.getElementById("kb-btn").onclick=function(){return e.bannerAccepted(t,!0)},t}},{key:"createBannerForOneTrust",value:function(){var t=this;this.language&&0<this.language.length&&document.getElementsByTagName("html")[0].setAttribute("lang",this.language);window.OptanonWrapper=function(){if(window.SqOneTrust=new SqOneTrust.default,0<Object.keys(window.SqOneTrust.groupConsentHash).length){var e={allowStrictlyNecessaryCookies:!window.SqOneTrust.strictlyNecessaryCookiesBlocked,allowFunctionalityCookies:!window.SqOneTrust.functionalityCookiesBlocked,allowPerformanceCookies:!window.SqOneTrust.performanceAndAnalyticsCookiesBlocked,allowTargetingCookies:!window.SqOneTrust.retargetingOrAdvertisingCookiesBlocked};t.setCookieConsentForOneTrust(JSON.stringify(e)),document.cookie="gdpr-kb=;expires=Thu, 01 Jan 1970 00:00:00 GMT",t.initializeAragorn()}t.is_us_ca_onetrust&&window.OneTrust.OnConsentChanged(function(){window.location.reload()})};var e=document.createElement("script");return e.type="text/javascript",e.charset="UTF-8",e.setAttribute("data-domain-script",this.getOneTrustDataDomainScript()),e.setAttribute("data-document-language","true"),e.src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",document.head.prepend(e),e}},{key:"getOneTrustDataDomainScript",value:function(){switch(this.getRootDomain(window.location.hostname)){case"weebly.com":return"8841470e-8a69-4bca-9d0f-429385a04d0d";case"square.online":return"ebf6860a-7fdb-4079-852f-b9de13f1a824";case"weebly.net":return"14219c5c-21b7-4dea-b2b4-7f517511ecad-test";case"weeblycloud.com":return"0d352778-7294-4c5f-a3ee-f14cbca2a91d";case"weeblycloud.net":return"d752b31a-331b-450f-9fe6-980ac586295f-test";default:return"8841470e-8a69-4bca-9d0f-429385a04d0d-test"}}},{key:"getRootDomain",value:function(e){return e.split(".").slice(-2).join(".")}},{key:"setCookie",value:function(e,t,n){var i="",o="",s=window.location.host,a=s.substr(s.length-3);if(n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),i="; expires="+r.toUTCString()}this.is_user_site||-1===s.indexOf("weebly.")||".com"!==a&&".net"!==a||(o="domain=weebly."+a),this.is_user_site&&this.allow_non_weebly_domain&&(o="domain="+s),document.cookie=e+"="+(t||"")+i+"; path=/;"+o}},{key:"setCookieConsentForOneTrust",value:function(e){var t="cookie-consent",n=this.getRootDomain(window.location.hostname),i=new Date;i.setTime(i.getTime()+31536e6),document.cookie=t+"="+e+"; expires="+i.toUTCString()+"; path=/; domain=."+n;var o=document.cookie.match(/(^|;)\s*cookie-consent=/gi);o&&1<o.length&&(document.cookie=t+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;",document.cookie=t+"="+e+"; expires="+i.toUTCString()+"; path=/; domain=."+n)}}]),n}();window.kingsBanner=new KingsBanner(window.w_gdpr);_createClass=function(){function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var SqOneTrust=function(e){var t="OptanonConsent",n="OptanonAlertBoxClosed",i="squareGeo",o={strictlyNecessary:"C0001",performanceAndAnalytics:"C0002",functionality:"C0003",retargetingOrAdvertising:"C0004"},s="groups=",a="oneTrustPreferencesChangedEvent",r=["BE","BG","CZ","DK","DE","EE","IE","GR","ES","FR","IT","CY","LV","LT","LU","HU","MT","NL","AT","PL","PT","RO","SI","SK","FI","SE","GB","HR","LI","NO","IS"],c=["US","CA"],l=r;return e.ALERT_BOX_CLOSED_COOKIE_KEY=n,e.CDN_GEOLOCATION_COOKIE_KEY=i,e.CONSENT_COOKIE_KEY=t,e.CONSENT_GROUP_COOKIE_SUBSTRING=s,e.COOKIE_GROUP_KEYS=o,e.DEFAULT_OPT_IN_REGIONS=c,e.DEFAULT_OPT_OUT_REGIONS=l,e.EU_COUNTRIES=r,e.PREFERENCES_CHANGED_EVENT_KEY=a,e.X_ALLOW_COOKIES="X-Allow-Cookies",e.X_BLOCK_COOKIES="X-Block-Cookies",e.X_BLOCK_COOKIES_DEFAULT_VALUE="true",e.default=(_createClass(u,[{key:"_init",value:function(e){this._setVars(e),this._setGeolocationData(),this._onUpdatedCookiePreferences()}},{key:"_setVars",value:function(e){this.optanonConsentCookieString=this._getCookieValue(t),this.optanonAlertBoxClosedCookieString=this._getCookieValue(n),this.squareGeoCookieString=this._getCookieValue(i),this._passSquareGeoToOneTrust=e}},{key:"_dispatchUpdateEvent",value:function(){var e=new CustomEvent(a,this.groupConsentHash);document.dispatchEvent(e)}},{key:"_onUpdatedCookiePreferences",value:function(){this._oneTrustGroupChoicesSet()?this._buildHashOfGroupConsentChoices():this._buildHashOfGroupConsentFromActiveGroups(),0<Object.keys(this.groupConsentHash).length&&(this._setConsentChoices(),this._dispatchUpdateEvent())}},{key:"checkIfUserLocatedInEU",value:function(e){var t=e||"";return r.includes(t)}},{key:"_setGeolocationData",value:function(){2<=this.squareGeoCookieString.length&&this.squareGeoCookieString.length<=6?(this._parseSquareGeoCookieForLocationData(),this.squareGeoInEu=this.isSquareGeoInEu,this.locationDataHash=this.squareGeoLocationHash,this.userLocatedInEU=this.squareGeoInEu,this.accessToDataPrivacyPreferencesRequired=this.isAccessToDataPrivacyPreferencesRequired,this.defaultConsentRequired=this.isDefaultConsentRequired,this._passSquareGeoToOneTrust&&this.squareGeoCookieCountry&&(globalThis.OneTrust=globalThis.OneTrust||{geolocationResponse:{stateCode:this.squareGeoCookieRegion,countryCode:this.squareGeoCookieCountry}})):globalThis.OneTrust&&(this.locationDataHash=OneTrust.getGeolocationData()||{},this.userLocatedInEU=this.isUserLocatedInEU,this.accessToDataPrivacyPreferencesRequired=this.isAccessToDataPrivacyPreferencesRequired,this.defaultConsentRequired=this.isDefaultConsentRequired)}},{key:"_setConsentChoices",value:function(){0<this.optanonAlertBoxClosedCookieString.length&&(this.oneTrustPreferencesSet=!0),Object.values(this.groupConsentHash).includes("0")?this.allCookiesAllowed=!1:Object.values(this.groupConsentHash).every(function(e){return"1"===e})&&(this.allCookiesAllowed=!0),"1"!==this.groupConsentHash[o.strictlyNecessary]&&(this.strictlyNecessaryCookiesBlocked=!0),"1"!==this.groupConsentHash[o.performanceAndAnalytics]&&(this.performanceAndAnalyticsCookiesBlocked=!0),"1"!==this.groupConsentHash[o.functionality]&&(this.functionalityCookiesBlocked=!0),"1"!==this.groupConsentHash[o.retargetingOrAdvertising]&&(this.retargetingOrAdvertisingCookiesBlocked=!0)}},{key:"_buildHashOfGroupConsentChoices",value:function(){var e=this.optanonConsentCookieString.split("&").find(function(e){return e.includes(s)});if(!e)throw new Error("No group cookie data string");var t=e.split("=")[1].split(",");return this.groupConsentHash=t.reduce(function(e,t){var n=t.split(":");return e[n[0]]=n[1],e},this.groupConsentHash)}},{key:"_buildHashOfGroupConsentFromActiveGroups",value:function(){var t=this;(globalThis.OnetrustActiveGroups||"").split(",").forEach(function(e){""!==e&&(t.groupConsentHash[e]="1")})}},{key:"_getCookieValue",value:function(e){if("undefined"==typeof document)return"";var t=document.cookie?document.cookie.split("; "):[],n=!0,i=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var r=s.value.split("="),c=r.slice(1).join("=");'"'===c[0]&&(c=c.slice(1,-1));try{if(r[0]===e)return decodeURIComponent(c)}catch(e){console.log(e)}}}catch(e){i=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(i)throw o}}return""}},{key:"_parseSquareGeoCookieForLocationData",value:function(){var e=this.squareGeoCookieString.split("-");this.squareGeoCookieCountry=e[0]||"",this.squareGeoCookieRegion=e[1]||"",this.squareGeoLocationHash={country:e[0],state:e[1]}}},{key:"_oneTrustGroupChoicesSet",value:function(){return this.optanonConsentCookieString.includes(s)}},{key:"isUserLocatedInEU",get:function(){return!!this.locationDataHash&&this.checkIfUserLocatedInEU(this.locationDataHash.country)}},{key:"isSquareGeoInEu",get:function(){if(this.squareGeoCookieCountry)return this.checkIfUserLocatedInEU(this.squareGeoCookieCountry)}},{key:"isAccessToDataPrivacyPreferencesRequired",get:function(){if("country"in this.locationDataHash){var e=this.locationDataHash.country?this.locationDataHash.country:"";return c.includes(e)||this.isDefaultConsentRequired}return!1}},{key:"isDefaultConsentRequired",get:function(){if("country"in this.locationDataHash){var e=this.locationDataHash.country?this.locationDataHash.country:"";return l.includes(e)}return!0}}]),u),Object.defineProperty(e,"__esModule",{value:!0}),e;function u(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).passSquareGeoToOneTrust,t=void 0!==e&&e;_classCallCheck(this,u),this.oneTrustPreferencesSet=!1,this.strictlyNecessaryCookiesBlocked=!1,this.performanceAndAnalyticsCookiesBlocked=!1,this.functionalityCookiesBlocked=!1,this.retargetingOrAdvertisingCookiesBlocked=!1,this.locationDataHash={},this.userLocatedInEU=!1,this.allCookiesAllowed=!1,this.optanonConsentCookieString="",this.optanonAlertBoxClosedCookieString="",this.squareGeoCookieString="",this.squareGeoCookieCountry="",this.squareGeoCookieRegion="",this.squareGeoLocationHash={},this.squareGeoInEu=void 0,this.groupConsentHash={},this.defaultConsentRequired=!0,this.accessToDataPrivacyPreferencesRequired=!1,this._passSquareGeoToOneTrust=!1,this._init(t)}}({});
},{}]},{},[1]);
