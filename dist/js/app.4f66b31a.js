(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0a7b":function(t,e,n){},"3a8c":function(t,e,n){"use strict";n("8c83")},"468f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"main"},[n("router-view",{attrs:{name:"slidebar"}}),n("router-view",{attrs:{name:"main"}})],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"root"}}},[a("img",{attrs:{src:n("d686"),alt:""}})]),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:""}},[t._v("首页")])]),n("li",[n("a",{attrs:{href:""}},[t._v("新手入门")])]),n("li",[n("a",{attrs:{href:""}},[t._v("API")])]),n("li",[n("a",{attrs:{href:""}},[t._v("关于")])]),n("li",[n("a",{attrs:{href:""}},[t._v("注册")])]),n("li",[n("a",{attrs:{href:""}},[t._v("登录")])])])}],c={name:"Header"},u=c,l=(n("e86a"),n("2877")),p=Object(l["a"])(u,r,o,!1,null,"d279a142",null),f=p.exports,d={name:"App",components:{Header:f}},h=d,_=(n("034f"),Object(l["a"])(h,s,i,!1,null,null,null)),g=_.exports,v=n("bc3a"),m=n.n(v),b=n("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PostList"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",{staticClass:"posts"},[a("ul",[t._m(0),t._l(t.sortedArray,(function(e){return a("li",{key:e.author.id},[a("img",{attrs:{src:e.author.avatar_url,alt:""}}),a("span",{staticClass:"reply-count"},[a("span",{staticClass:"count-of-replies"},[t._v(t._s(e.reply_count))]),a("span",{staticClass:"count-seperator"},[t._v("/")]),a("span",{staticClass:"count-of-visits"},[t._v(t._s(e.visit_count))])]),a("span",{class:[{"put-good":!0===e.good,"put-top":!0===e.top,"topiclist-tab":!0!==e.good&&!0!==e.top}]},[a("span",[t._v(" "+t._s(t._f("formatTab")(e))+" ")])]),a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[a("span",{staticClass:"posts-title"},[t._v(" "+t._s(e.title)+" ")])]),a("span",{staticClass:"last-reply pull-right"},[t._v(t._s(t._f("formatDate")(e.last_reply_at)))])],1)})),a("li",[a("Pagination",{on:{handle:function(e){return t.renderList()}}})],1)],2)])])},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("div",{staticClass:"topbar"},[n("span",[t._v("全部")]),n("span",[t._v("精华")]),n("span",[t._v("分享")]),n("span",[t._v("问答")]),n("span",[t._v("招聘")])])])}],k=(n("fb6a"),n("4e82"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("button",{staticClass:"pagebtn",on:{click:t.changeBtn}},[t._v("首页")]),n("button",{staticClass:"pagebtn",on:{click:t.changeBtn}},[t._v("上一页")]),t.judge?n("button",{staticClass:"pagebtn",on:{click:function(e){return e.preventDefault(),t.changeBtn.apply(null,arguments)}}},[t._v("......")]):t._e(),t._l(t.pagebtns,(function(e){return n("button",{key:e,class:[{currentPage:e===t.currentPage},"pagebtn"],on:{click:function(n){return t.changeBtn(e)}}},[t._v(" "+t._s(e)+" ")])})),n("button",{staticClass:"pagebtn",on:{click:function(e){return e.preventDefault(),t.changeBtn.apply(null,arguments)}}},[t._v("......")]),n("button",{staticClass:"pagebtn",on:{click:t.changeBtn}},[t._v("下一页")])],2)}),j=[],P=(n("a434"),n("1157")),L=n.n(P),$={name:"Pagination",data:function(){return{pagebtns:[1,2,3,4,5],currentPage:1,judge:!1}},methods:{changeBtn:function(t){if("number"===typeof t)this.currentPage=t,this.judge=t>4,t===this.pagebtns[4]?(this.pagebtns.shift(),this.pagebtns.splice(4,0,this.pagebtns[3]+1)):t===this.pagebtns[0]&&1!==t&&(this.pagebtns.unshift(this.pagebtns[0]-1),this.pagebtns.splice(5,1)),this.$emit("handle",this.currentPage);else switch(t.target.innerText){case"上一页":L()("button.currentPage").prev().click();break;case"下一页":L()("button.currentPage").next().click();break;case"首页":this.pagebtns=[1,2,3,4,5],this.changeBtn(1);break;default:break}}}},w=$,O=(n("8127"),Object(l["a"])(w,k,j,!1,null,"d4157d64",null)),x=O.exports,D={name:"PostList",data:function(){return{isLoading:!1,posts:[],postpage:1}},components:{Pagination:x},computed:{sortedArray:function(){var t=this.posts.slice(0);return t.sort((function(t){return t.top&&!t.good?-1:1}))}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postpage,limit:20}}).then((function(e){t.isLoading=!1,t.posts=e.data.data})).catch((function(t){console.log(t)}))},renderList:function(t){this.postpage=t,this.getData()}},beforeMount:function(){this.isLoading=!0,this.getData()}},B=D,I=(n("a359"),Object(l["a"])(B,C,y,!1,null,"40f52b2c",null)),T=I.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",[a("div",{staticClass:"panel"},[a("div",{staticClass:"topic-header"},[a("div",{staticClass:"topic-title"},[t._v(t._s(t.post.title))]),a("div",{staticClass:"changes"},[a("span",[t._v("发布于 "+t._s(t._f("formatDate")(t.post.create_at)))]),a("span",[t._v("作者 "+t._s(t.post.author.loginname))]),a("span",[t._v(t._s(t.post.visit_count)+" 次浏览")]),a("span",[t._v("来自 "+t._s(t._f("formatTab")(t.post)))])])]),a("div",{staticClass:"inner-topic markdown-body"},[a("div",{staticClass:"topic-content",domProps:{innerHTML:t._s(t.post.content)}})])]),a("div",{staticClass:"top-bar"},[t._v("回复")]),t._l(t.post.replies,(function(e,n){return a("div",{key:e.author.id,staticClass:"reply-sec"},[a("div",{staticClass:"reply-up"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:e.author.loginname}}}},[a("img",{attrs:{src:e.author.avatar_url,alt:""}})]),a("span",{staticClass:"reply-author"},[t._v(t._s(e.author.loginname))]),a("span",{staticClass:"reply-time"},[t._v(" "+t._s(n+1)+"楼 ")]),e.ups.length>0?a("span",[t._v(" "+t._s(e.ups.length)+" ")]):a("span")],1),a("p",{staticClass:"reply-content",domProps:{innerHTML:t._s(e.content)}})])}))],2)])},E=[],A={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getArticleData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then((function(e){!0===e.data.success&&(t.isLoading=!1,t.post=e.data.data)})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getArticleData()},watch:{$route:function(){this.getArticleData()}}},S=A,H=(n("7703"),Object(l["a"])(S,M,E,!1,null,null,null)),U=H.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"UserInfo"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:n("cf1c")}})]):a("div",{staticClass:"panel"},[a("div",{staticClass:"header"},[t._v(" 主页 ")]),a("section",{staticClass:"user-info"},[a("img",{attrs:{src:t.userinfo.avatar_url}}),a("span",[t._v(t._s(t.userinfo.loginname))])]),a("div",{staticClass:"topics"},[a("p",{staticClass:"topics-header"},[t._v("回复的主题")]),a("ul",t._l(t.userinfo.recent_replies,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),a("div",{staticClass:"topics"},[a("p",{staticClass:"topics-header"},[t._v("创建的主题")]),a("ul",t._l(t.userinfo.recent_topics,(function(e){return a("li",{key:e.id},[a("router-link",{attrs:{to:{name:"post_content",params:{id:e.id}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])])},q=[],z=(n("b0c0"),{name:"UserInfo",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getUserInfoData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(e){t.isLoading=!1,t.userinfo=e.data.data})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getUserInfoData()}}),F=z,G=(n("3a8c"),Object(l["a"])(F,J,q,!1,null,"1e6693b5",null)),K=G.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slide-bar"},[n("div",{staticClass:"author-summary"},[n("div",{staticClass:"top-bar"},[t._v("作者")]),n("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[n("img",{attrs:{src:t.userinfo.avatar_url,alt:""}})])],1),n("div",{staticClass:"recent-topics"},[n("div",{staticClass:"top-bar"},[t._v("作者最近主题")]),n("ul",t._l(t.topiclimitby5,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)]),n("div",{staticClass:"recent-replies"},[n("div",{staticClass:"top-bar"},[t._v("作者最近回复")]),n("ul",t._l(t.replylimitby5,(function(e){return n("li",{key:e.id},[n("router-link",{attrs:{to:{name:"post_content",params:{id:e.id,name:e.author.loginname}}}},[t._v(" "+t._s(e.title)+" ")])],1)})),0)])])},Q=[],R={name:"SlideBar",data:function(){return{userinfo:{}}},methods:{getSlideBarData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(e){t.isLoading=!1,t.userinfo=e.data.data})).catch((function(t){console.log(t)}))}},computed:{topiclimitby5:function(){return this.userinfo.recent_topics?this.userinfo.recent_topics.slice(0,5):this.userinfo.recent_topics},replylimitby5:function(){return this.userinfo.recent_replies?this.userinfo.recent_replies.slice(0,5):this.userinfo.recent_replies}},beforeMount:function(){this.isLoading=!0,this.getSlideBarData()}},V=R,W=(n("adc9"),Object(l["a"])(V,N,Q,!1,null,"0d6c7f80",null)),X=W.exports;a["a"].use(b["a"]);var Y=new b["a"]({mode:"hash",routes:[{name:"root",path:"/",components:{main:T}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:U,slidebar:X}},{name:"user_info",path:"/userinfo/:name",components:{main:K}}]});a["a"].prototype.$http=m.a,a["a"].config.productionTip=!1,new a["a"]({router:Y,render:function(t){return t(g)}}).$mount("#app"),a["a"].filter("formatDate",(function(t){if(!t)return"";var e=new Date(t),n=(new Date).getTime()-e.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"月前":parseInt(n/31536e6)+"年前"})),a["a"].filter("formatTab",(function(t){return t.good?"精华":t.top?"置顶":"ask"===t.tab?"问答":"share"===t.tab?"分享":"招聘"}))},"6a6e":function(t,e,n){},7703:function(t,e,n){"use strict";n("e6ad")},8127:function(t,e,n){"use strict";n("6a6e")},"85ec":function(t,e,n){},"8c83":function(t,e,n){},a359:function(t,e,n){"use strict";n("468f")},adc9:function(t,e,n){"use strict";n("ec55")},cf1c:function(t,e,n){t.exports=n.p+"img/loading.913dcfe0.gif"},d686:function(t,e,n){t.exports=n.p+"img/cnodejs_light.86f6a7c2.svg"},e6ad:function(t,e,n){},e86a:function(t,e,n){"use strict";n("0a7b")},ec55:function(t,e,n){}});
//# sourceMappingURL=app.4f66b31a.js.map