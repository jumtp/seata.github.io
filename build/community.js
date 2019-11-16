!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/build/",t(t.s=60)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.throttle=function(e,t){var n=null;return function(){for(var r=arguments.length,a=Array(r),o=0;o<r;o++)a[o]=arguments[o];var i=this;clearTimeout(n),n=setTimeout(function(){e.apply(i,a)},t)}},t.getScrollTop=function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},t.getLink=function(e){return(""+e).length>1&&/^\/[^\/]/.test(""+e)?""+window.rootPath+e:e},t.parseJSONStr=function(e){try{return JSON.parse(e)}catch(t){return e}}},function(e,t,n){e.exports=n(13)()},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={rootPath:"",port:8080,defaultLanguage:"en-us","en-us":{pageMenu:[{key:"home",text:"HOME",link:"/en-us/index.html"},{key:"docs",text:"DOCS",link:"/en-us/docs/overview/what_is_seata.html"},{key:"blog",text:"BLOG",link:"/en-us/blog/index.html"},{key:"community",text:"COMMUNITY",link:"/en-us/community/index.html"}],vision:{title:"Vision",content:"Seata is dedicated to improving the efficiency of large-scale file distribution, building the go-to solution and standards of container image distribution, and providing you with file and image distribution service which is efficient, easy-to-use, and of high availability."},documentation:{title:"Documentation",list:[{text:"What is Seata?",link:"/en-us/docs/overview/what_is_seata.html"},{text:"Quick Start",link:"/en-us/docs/user/quickstart.html"},{text:"Report a doc issue",link:"https://github.com/seata/seata.github.io/issues/new"},{text:"Edit This Page on GitHub",link:"https://github.com/seata/seata.github.io"}]},resources:{title:"Resources",list:[{text:"Blog",link:"/en-us/blog/index.html"},{text:"Community",link:"/en-us/community/index.html"}]},copyright:"Copyright © 2019 Seata"},"zh-cn":{pageMenu:[{key:"home",text:"首页",link:"/zh-cn/index.html"},{key:"docs",text:"文档",link:"/zh-cn/docs/overview/what_is_seata.html"},{key:"blog",text:"博客",link:"/zh-cn/blog/index.html"},{key:"community",text:"社区",link:"/zh-cn/community/index.html"}],vision:{title:"愿景",content:"Seata 是一款阿里巴巴开源的分布式事务解决方案，致力于在微服务架构下提供高性能和简单易用的分布式事务服务。"},documentation:{title:"文档",list:[{text:"Seata 是什么？",link:"/zh-cn/docs/overview/what_is_seata.html"},{text:"快速开始",link:"/zh-cn/docs/user/quickstart.html"},{text:"报告文档问题",link:"https://github.com/seata/seata.github.io/issues/new"},{text:"在Github上编辑此文档",link:"https://github.com/seata/seata.github.io"}]},resources:{title:"资源",list:[{text:"博客",link:"/zh-cn/blog/index.html"},{text:"社区",link:"/zh-cn/community/index.html"}]},copyright:"Copyright © 2019 Seata"}}},function(e,t,n){var r,a;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===a)for(var l in r)o.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var o={}.hasOwnProperty;void 0!==e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(a=function(){return n}.apply(t,r))&&(e.exports=a))}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(2),f=r(s),d=n(4),m=r(d),p=n(1);n(10);var g={logo:f.default.string.isRequired,language:f.default.oneOf(["zh-cn","en-us"])},h=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.logo,n=e.language,r=m.default[n];return c.default.createElement("footer",{className:"footer-container"},c.default.createElement("div",{className:"footer-body"},c.default.createElement("img",{src:(0,p.getLink)(t)}),c.default.createElement("p",{className:"docsite-power"},"website powered by docsite"),c.default.createElement("div",{className:"cols-container"},c.default.createElement("div",{className:"col col-12"},c.default.createElement("h3",null,r.vision.title),c.default.createElement("p",null,r.vision.content)),c.default.createElement("div",{className:"col col-6"},c.default.createElement("dl",null,c.default.createElement("dt",null,r.documentation.title),r.documentation.list.map(function(e,t){return c.default.createElement("dd",{key:t},c.default.createElement("a",{href:(0,p.getLink)(e.link),target:e.target||"_self"},e.text))}))),c.default.createElement("div",{className:"col col-6"},c.default.createElement("dl",null,c.default.createElement("dt",null,r.resources.title),r.resources.list.map(function(e,t){return c.default.createElement("dd",{key:t},c.default.createElement("a",{href:(0,p.getLink)(e.link),target:e.target||"_self"},e.text))})))),c.default.createElement("div",{className:"copyright"},c.default.createElement("span",null,r.copyright))))}}]),t}(c.default.Component);h.propTypes=g,t.default=h},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),s=r(c),f=n(2),d=r(f),m=n(5),p=r(m),g=n(4),h=r(g),b=n(1);n(11);var y=[{text:"中",value:"en-us"},{text:"En",value:"zh-cn"}],v={baidu:{logo:"https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png",url:"https://www.baidu.com/s?wd="},google:{logo:"https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg",url:"https://www.google.com/search?q="}},w=function(){},_={currentKey:d.default.string,logo:d.default.string.isRequired,type:d.default.oneOf(["primary","normal"]),language:d.default.oneOf(["en-us","zh-cn"]),onLanguageChange:d.default.func},E={type:"primary",language:"en-us",onLanguageChange:w},k=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleMenu=function(){n.setState({menuBodyVisible:!n.state.menuBodyVisible})},n.switchLang=function(){var e=void 0;e="zh-cn"===n.state.language?"en-us":"zh-cn",n.setState({language:e}),n.props.onLanguageChange(e)},n.switchSearch=function(){var e=void 0;e="baidu"===n.state.search?"google":"baidu",n.setState({search:e})},n.toggleSearch=function(){n.setState({searchVisible:!n.state.searchVisible})},n.onInputChange=function(e){n.setState({searchValue:e.target.value})},n.state={menuBodyVisible:!1,language:e.language,search:h.default.defaultSearch,searchValue:"",inputVisible:!1},n}return l(t,e),u(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({language:e.language})}},{key:"goSearch",value:function(){var e=this.state,t=e.search,n=e.searchValue;window.open(""+v[t].url+window.encodeURIComponent(n+" site:"+h.default.domain))}},{key:"onKeyDown",value:function(e){13===e.keyCode&&this.goSearch()}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.logo,r=e.onLanguageChange,o=e.currentKey,i=this.state,l=i.menuBodyVisible,u=i.language,c=i.search,f=i.searchVisible;return s.default.createElement("header",{className:(0,p.default)(a({"header-container":!0},"header-container-"+t,!0))},s.default.createElement("div",{className:"header-body"},s.default.createElement("a",{href:(0,b.getLink)("/"+u+"/index.html")},s.default.createElement("img",{className:"logo",alt:h.default.name,title:h.default.name,src:(0,b.getLink)(n)})),h.default.defaultSearch?s.default.createElement("div",{className:(0,p.default)(a({search:!0},"search-"+t,!0))},s.default.createElement("span",{className:"icon-search",onClick:this.toggleSearch}),f?s.default.createElement("div",{className:"search-input"},s.default.createElement("img",{src:v[c].logo,onClick:this.switchSearch}),s.default.createElement("input",{autoFocus:!0,onChange:this.onInputChange,onKeyDown:this.onKeyDown})):null):null,r!==w?s.default.createElement("span",{className:(0,p.default)(a({"language-switch":!0},"language-switch-"+t,!0)),onClick:this.switchLang},y.find(function(e){return e.value===u}).text):null,s.default.createElement("div",{className:(0,p.default)({"header-menu":!0,"header-menu-open":l})},s.default.createElement("img",{className:"header-menu-toggle",onClick:this.toggleMenu,src:"primary"===t?(0,b.getLink)("/img/system/menu_white.png"):(0,b.getLink)("/img/system/menu_gray.png")}),s.default.createElement("ul",null,h.default[u].pageMenu.map(function(e){var n;return s.default.createElement("li",{className:(0,p.default)((n={"menu-item":!0},a(n,"menu-item-"+t,!0),a(n,"menu-item-"+t+"-active",o===e.key),n)),key:e.key},s.default.createElement("a",{href:(0,b.getLink)(e.link),target:e.target||"_self"},e.text))})))))}}]),t}(s.default.Component);k.propTypes=_,k.defaultProps=E,t.default=k},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),u=r(l),c=n(12),s=r(c),f=n(4),d=r(f),m=function(e){function t(){var e,n,r,i;a(this,t);for(var l=arguments.length,u=Array(l),c=0;c<l;c++)u[c]=arguments[c];return n=r=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.onLanguageChange=function(e){var t=window.location.pathname,n=void 0;n="zh-cn"===e?"en-us":"zh-cn";var r=t.replace(window.rootPath+"/"+n,window.rootPath+"/"+e);s.default.set("docsite_language",e,{expires:365}),window.location=r},r.getLanguage=function(){var e=window.location.pathname.replace(window.rootPath||"","").split("/")[1],t=r.props.lang||e||s.default.get("docsite_language")||d.default.defaultLanguage;return"en-us"!==t&&"zh-cn"!==t&&(t=d.default.defaultLanguage),t!==s.default.get("docsite_language")&&s.default.set("docsite_language",t,{expires:365}),t},i=n,o(r,i)}return i(t,e),t}(u.default.Component);t.default=m},,function(e,t){},function(e,t){},function(e,t,n){var r,a;!function(o){var i=!1;if(r=o,void 0!==(a="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=a),i=!0,e.exports=o(),i=!0,!i){var l=window.Cookies,u=window.Cookies=o();u.noConflict=function(){return window.Cookies=l,u}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(n){function r(t,a,o){var i;if("undefined"!=typeof document){if(arguments.length>1){if(o=e({path:"/"},r.defaults,o),"number"==typeof o.expires){var l=new Date;l.setMilliseconds(l.getMilliseconds()+864e5*o.expires),o.expires=l}o.expires=o.expires?o.expires.toUTCString():"";try{i=JSON.stringify(a),/^[\{\[]/.test(i)&&(a=i)}catch(e){}a=n.write?n.write(a,t):encodeURIComponent(String(a)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape);var u="";for(var c in o)o[c]&&(u+="; "+c,!0!==o[c]&&(u+="="+o[c]));return document.cookie=t+"="+a+u}t||(i={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<s.length;d++){var m=s[d].split("="),p=m.slice(1).join("=");this.json||'"'!==p.charAt(0)||(p=p.slice(1,-1));try{var g=m[0].replace(f,decodeURIComponent);if(p=n.read?n.read(p,g):n(p,g)||p.replace(f,decodeURIComponent),this.json)try{p=JSON.parse(p)}catch(e){}if(t===g){i=p;break}t||(i[g]=p)}catch(e){}}return i}}return r.set=r,r.get=function(e){return r.call(r,e)},r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}return t(function(){})})},function(e,t,n){"use strict";function r(){}function a(){}var o=n(14);a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,i){if(i!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),i=n(2),l=r(i),u=n(5),c=r(u),s=n(1);n(22);var f={text:l.default.string.isRequired,img:l.default.string.isRequired},d=function(e){var t=e.text,n=e.img,r=(0,c.default)({bar:!0});return o.default.createElement("div",{className:r},o.default.createElement("div",{className:"bar-body"},o.default.createElement("img",{src:(0,s.getLink)(n),className:"front-img"}),o.default.createElement("span",null,t),o.default.createElement("img",{src:(0,s.getLink)(n),className:"back-img"})))};d.propTypes=f,t.default=d},,,,,,function(e,t){},,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={"en-us":{barText:"Community",events:{title:"Events & News",list:[{img:"/img/brhtqqzh.jpeg",title:"title",content:"content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog1.html"},{img:"/img/brhtqqzh.jpeg",title:"title",content:"content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog2.html"},{img:"/img/brhtqqzh.jpeg",title:"title",content:"content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog3.html"},{img:"/img/brhtqqzh.jpeg",title:"title",content:"content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog4.html"},{img:"/img/brhtqqzh.jpeg",title:"title",content:"content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog5.html"},{img:"/img/brhtqqzh.jpeg",title:"title",content:"content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog6.html"},{img:"/img/brhtqqzh.jpeg",title:"title",content:"content",dateStr:"May 12nd，2018",link:"/en-us/blog/blog7.html"}]},contacts:{title:"Talk To Us",desc:"Feel free to contact us via the following channel.",list:[{img:"/img/mailinglist.png",imgHover:"/img/mailinglist_hover.png",title:"Mailing List",link:"mailto:dev-seata+subscribe@googlegroups.com"},{img:"/img/twitter.png",imgHover:"/img/twitter_hover.png",title:"@Seata",link:"https://twitter.com/seataio"}]},contributorGuide:{title:"Contributor Guide",desc:"You can always contribute to Seata.",list:[{img:"/img/channels/email_gray.svg",title:"Mailing List",content:a.default.createElement("span",null,"Join our mailing list.")},{img:"/img/channels/github_gray.svg",title:"Issue",content:a.default.createElement("span",null,"Submit a ",a.default.createElement("a",{href:"https://github.com/seata/seata/issues/new"},"new issue"),".")},{img:"/img/documents.png",title:"Documents",content:a.default.createElement("span",null,"Improve the ",a.default.createElement("a",{href:"https://github.com/seata/seata.github.io"},"documentation"),".")},{img:"/img/pullrequest.png",title:"Pull Request",content:a.default.createElement("span",null,"Create a brilliant ",a.default.createElement("a",{href:"https://github.com/seata/seata/pulls"},"pull request"),".  ")}]}},"zh-cn":{barText:"社区",events:{title:"事件 & 新闻",list:[{img:"/img/brhtqqzh.jpeg",title:"这是标题",content:"这是内容",dateStr:"May 12nd，2018",link:"/zh-cn/blog/blog1.html"}]},contacts:{title:"联系我们",desc:"有问题需要反馈？请通过一下方式联系我们。",list:[{img:"/img/mailinglist.png",imgHover:"/img/mailinglist_hover.png",title:"邮件列表",link:"mailto:dev-seata+subscribe@googlegroups.com"},{img:"/img/twitter.png",imgHover:"/img/twitter_hover.png",title:"@Seata",link:"https://twitter.com/seataio"}]},contributorGuide:{title:"贡献指南",desc:"欢迎为 Seata 做贡献！",list:[{img:"/img/channels/email_gray.svg",title:"邮件列表",content:a.default.createElement("span",null,"加入我们的邮件列表。")},{img:"/img/channels/github_gray.svg",title:"报告问题",content:a.default.createElement("span",null,"提交",a.default.createElement("a",{href:"https://github.com/seata/seata/issues/new"},"新问题"),"。")},{img:"/img/documents.png",title:"改进文档",content:a.default.createElement("span",null,"改进",a.default.createElement("a",{href:"https://github.com/seata/seata.github.io"},"文档"),"。")},{img:"/img/pullrequest.png",title:"提交 PR",content:a.default.createElement("span",null,"创建一个",a.default.createElement("a",{href:"https://github.com/seata/seata/pulls"},"PR"),"。")}]}}}},,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(3),f=r(s),d=n(5),m=r(d),p=n(1);n(67);var g=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getVisibleNum=function(){var e=1,t=n.container.getBoundingClientRect().width,r=n.sliderItemChild0.getBoundingClientRect?n.sliderItemChild0.getBoundingClientRect().width:f.default.findDOMNode(n.sliderItemChild0).getBoundingClientRect().width;return t&&r&&(e=Math.floor(t/r)),e||1},n.getListWidth=function(){var e=0,t=n.props.children,r=n.state.visibleNum,a=c.default.Children.count(t),o=Math.ceil(a/r);if(n.container){e=n.container.getBoundingClientRect().width*o}return e},n.changeScreen=function(e){e!==n.state.screenIndex&&n.setState({screenIndex:e})},n.renderSliderList=function(){for(var e=n.props.children,t=n.state,r=t.screenIndex,a=t.visibleNum,o=[],i=c.default.Children.count(e),l=Math.ceil(i/a),u=0;u<l;u++)o.push(Array.from(e).slice(u*a,(u+1)*a));return c.default.createElement("div",{className:"slider-list",style:{transform:"translateX(-"+r*(n.container&&n.container.getBoundingClientRect().width||0)+"px)",transition:"transform 500ms ease",width:n.getListWidth()}},o.map(function(e,t){return c.default.createElement("div",{className:"slider-screen",style:{width:n.container&&n.container.getBoundingClientRect().width||0},key:t,ref:function(e){n["sliderScreen"+t]=e}},e.map(function(e,r){return c.default.createElement("div",{className:"slider-item",key:r},c.default.cloneElement(e,{ref:function(e){n["sliderItemChild"+(t*a+r)]=e}}))}))}))},n.renderControl=function(){for(var e=n.props.children,t=n.state,r=t.screenIndex,a=t.visibleNum,o=c.default.Children.count(e),i=Math.ceil(o/a),l=[],u=0;u<i;u++)l.push(c.default.createElement("span",{key:u,className:(0,m.default)({"slider-control-item":!0,"slider-control-item-active":u===r}),onClick:n.changeScreen.bind(n,u)}));return c.default.createElement("div",{className:"slider-control"},l)},n.container=null,n.state={screenIndex:0,visibleNum:1},n}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.throttleAdjust=(0,p.throttle)(function(){e.setState({visibleNum:e.getVisibleNum()})},200),window.addEventListener("resize",this.throttleAdjust),this.setState({visibleNum:this.getVisibleNum()})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.throttleAdjust)}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{className:"slider",ref:function(t){e.container=t}},this.renderSliderList(),this.renderControl())}}]),t}(c.default.Component);t.default=g},,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(1),s=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onMouseOver=function(){n.setState({img:n.props.contact.imgHover})},n.onMouseOut=function(){n.setState({img:n.props.contact.img})},n.state={img:e.contact.img},n}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props.contact,t=this.state.img;return u.default.createElement("a",{className:"contact-item",href:(0,c.getLink)(e.link),rel:"noopener noreferrer",target:"_blank",onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},u.default.createElement("img",{src:""+window.rootPath+t}),u.default.createElement("div",null,e.title))}}]),t}(u.default.Component);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(1),i=function(e){var t=e.contributor,n=t.img,r=t.title,i=t.content;return a.default.createElement("div",{className:"contributor-item"},a.default.createElement("img",{src:(0,o.getLink)(n)}),a.default.createElement("div",null,r),a.default.createElement("p",null,i))};t.default=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(l),c=n(1),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props.event;return u.default.createElement("div",{className:"event-card"},u.default.createElement("a",{href:(0,c.getLink)(e.link)},u.default.createElement("img",{src:""+window.rootPath+e.img})),u.default.createElement("div",{className:"event-introduction"},u.default.createElement("h4",null,e.title),u.default.createElement("p",null,e.content),u.default.createElement("a",{href:(0,c.getLink)(e.link)},e.dateStr,u.default.createElement("img",{className:"arrow",src:window.rootPath+"/img/arrow_right.png"}))))}}]),t}(u.default.Component);t.default=s},,,,function(e,t){},,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),c=r(u),s=n(3),f=r(s),d=n(8),m=r(d),p=n(7),g=r(p),h=n(16),b=r(h),y=n(45),v=r(y),w=n(49),_=r(w),E=n(47),k=r(E),O=n(48),x=r(O),j=n(6),C=r(j),S=n(39),P=r(S);n(53);var N=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.getLanguage(),t=P.default[e];return c.default.createElement("div",{className:"community-page"},c.default.createElement(g.default,{currentKey:"community",type:"normal",logo:"/img/seata_logo.png",language:e,onLanguageChange:this.onLanguageChange}),c.default.createElement(b.default,{img:"https://img.alicdn.com/tfs/TB115XwJzTpK1RjSZKPXXa3UpXa-160-160.png",text:t.barText}),c.default.createElement("section",{className:"events-section"},c.default.createElement("h3",null,t.events.title),c.default.createElement(v.default,null,t.events.list.map(function(e,t){return c.default.createElement(_.default,{event:e,key:t})}))),c.default.createElement("section",{className:"contact-section"},c.default.createElement("h3",null,t.contacts.title),c.default.createElement("p",null,t.contacts.desc),c.default.createElement("div",{className:"contact-list"},t.contacts.list.map(function(e,t){return c.default.createElement(k.default,{contact:e,key:t})}))),c.default.createElement("section",{className:"contributor-section"},c.default.createElement("h3",null,t.contributorGuide.title),c.default.createElement("p",null,t.contributorGuide.desc),c.default.createElement("div",{className:"contributor-list"},t.contributorGuide.list.map(function(e,t){return c.default.createElement(x.default,{contributor:e,key:t})}))),c.default.createElement(C.default,{logo:"/img/seata_logo_white.png",language:e}))}}]),t}(m.default);document.getElementById("root")&&f.default.render(c.default.createElement(N,null),document.getElementById("root")),t.default=N},,,,,,,function(e,t){}]);