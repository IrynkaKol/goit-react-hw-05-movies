"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(439),a=t(791),u=t(689),c=t(183),i=t(184);e.default=function(){var n=(0,u.UO)().id,e=(0,a.useState)([]),t=(0,r.Z)(e,2),o=t[0],s=t[1];return(0,a.useEffect)((function(){(0,c.Xn)(n).then(s)}),[n]),(0,i.jsxs)("div",{children:[0===(null===o||void 0===o?void 0:o.length)&&(0,i.jsx)("p",{children:"We don't have any reviews for this movie"}),o.map((function(n){return(0,i.jsxs)("li",{children:["Author: ",n.author,(0,i.jsx)("p",{children:n.content})]},n.id)}))]})}},183:function(n,e,t){t.d(e,{LC:function(){return p},Mc:function(){return f},WE:function(){return o},Xn:function(){return v},mv:function(){return s}});var r=t(861),a=t(687),u=t.n(a),c=t(912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="4019d270e5fd1fc6ed3208efae0ca971",o=function(){var n=(0,r.Z)(u().mark((function n(){var e,t,r,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:"trending/movie/day",t=a.length>1?a[1]:void 0,n.next=4,c.Z.get("".concat(e,"?api_key=").concat(i),t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r,a,o=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"",r=o.length>2?o[2]:void 0,n.next=4,c.Z.get("movie/".concat(e).concat(t,"?api_key=").concat(i,"&language=en-US"),r);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.d0fcf766.chunk.js.map