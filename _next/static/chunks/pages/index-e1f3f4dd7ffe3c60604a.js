_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"2qu3":function(e,t,n){"use strict";var r=n("oI91"),o=n("/GRZ"),u=n("i2R6");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,u=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw u}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,d=(s=n("q1tI"))&&s.__esModule?s:{default:s},f=n("8L3h"),p=n("jwwS");var b=[],m=[],h=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function _(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function v(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function w(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:v,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new g(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!h&&"function"===typeof n.webpack){var u=n.webpack();m.push((function(e){var t,n=i(u);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(l){n.e(l)}finally{n.f()}}))}var l=function(e,t){o();var u=d.default.useContext(p.LoadableContext),l=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),u&&Array.isArray(n.modules)&&n.modules.forEach((function(e){u(e)})),d.default.useMemo((function(){return l.loading||l.error?d.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:r.retry}):l.loaded?n.render(l.loaded,e):null}),[e,l])};return l.preload=function(){return o()},l.displayName="LoadableComponent",d.default.forwardRef(l)}var g=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function O(e){return w(y,e)}function k(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return k(e,t)}))}O.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return w(_,e)},O.preloadAll=function(){return new Promise((function(e,t){k(b).then(e,t)}))},O.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return h=!0,t()};k(m,e).then(n,n)}))},window.__NEXT_PRELOADREADY=O.preloadReady;var P=O;t.default=P},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n("q1tI"),o=n.n(r),u=n("a6RD"),l=n.n(u),a=o.a.createElement,i=l()((function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"vrFN"))}),{loadableGenerated:{webpack:function(){return["vrFN"]},modules:["components/seo"]}}),c=l()((function(){return Promise.all([n.e(1),n.e(4),n.e(5),n.e(0),n.e(12)]).then(n.bind(null,"Bl7J"))}),{loadableGenerated:{webpack:function(){return["Bl7J"]},modules:["components/layout"]}}),s=l()((function(){return Promise.all([n.e(1),n.e(4),n.e(0),n.e(3),n.e(14)]).then(n.bind(null,"SGt8"))}),{loadableGenerated:{webpack:function(){return["SGt8"]},modules:["sections/banner"]}}),d=l()((function(){return Promise.all([n.e(0),n.e(19)]).then(n.bind(null,"2ZF1"))}),{loadableGenerated:{webpack:function(){return["2ZF1"]},modules:["sections/key-feature"]}}),f=l()((function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"ax8q"))}),{loadableGenerated:{webpack:function(){return["ax8q"]},modules:["sections/core-feature"]}}),p=l()((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"Wrlk"))}),{loadableGenerated:{webpack:function(){return["Wrlk"]},modules:["sections/feature"]}}),b=l()((function(){return Promise.all([n.e(0),n.e(22)]).then(n.bind(null,"YVSF"))}),{loadableGenerated:{webpack:function(){return["YVSF"]},modules:["sections/partner"]}}),m=l()((function(){return Promise.all([n.e(0),n.e(3),n.e(21)]).then(n.bind(null,"Njk0"))}),{loadableGenerated:{webpack:function(){return["Njk0"]},modules:["sections/workflow"]}}),h=l()((function(){return Promise.all([n.e(4),n.e(5),n.e(0),n.e(13)]).then(n.bind(null,"tfTO"))}),{loadableGenerated:{webpack:function(){return["tfTO"]},modules:["sections/testimonial"]}}),y=l()((function(){return Promise.all([n.e(0),n.e(20)]).then(n.bind(null,"tIY9"))}),{loadableGenerated:{webpack:function(){return["tIY9"]},modules:["sections/secure-payment"]}}),_=l()((function(){return Promise.all([n.e(5),n.e(0),n.e(3),n.e(23)]).then(n.bind(null,"IvWd"))}),{loadableGenerated:{webpack:function(){return["IvWd"]},modules:["sections/package"]}}),v=l()((function(){return Promise.all([n.e(6),n.e(0),n.e(3),n.e(17)]).then(n.bind(null,"65YR"))}),{loadableGenerated:{webpack:function(){return["65YR"]},modules:["sections/faq"]}});function w(){return a(c,null,a(i,{title:"Startup App Modern Landing",description:"Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"}),a(s,null),a(d,null),a(f,null),a(p,null),a(b,null),a(m,null),a(h,null),a(y,null),a(_,null),a(v,null))}},a6RD:function(e,t,n){"use strict";var r=n("oI91");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=i,t.default=function(e,t){var n=l.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=u(u({},r),e));if(r=u(u({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=l.default.Map;var o={},a=e.modules();Object.keys(a).forEach((function(e){var t=a[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=u(u({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,i(n,r);delete r.ssr}return n(r)};a(n("q1tI"));var l=a(n("2qu3"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])}},[["vlRD",2,1,0]]]);