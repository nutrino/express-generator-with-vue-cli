webpackJsonp([1],{134:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(92),i=(n.n(r),n(357)),o=(n.n(i),n(132)),s=n.n(o),a=n(363),u=n.n(a),c=n(153),p=n(135),v=n.n(p);s.a.prototype.$http=v.a,new s.a({el:"#app",router:c.a,template:"<App/>",components:{App:u.a}})},153:function(t,e,n){"use strict";var r=n(132),i=n.n(r),o=n(369),s=n(364),a=n.n(s),u=n(365),c=n.n(u);i.a.use(o.a),e.a=new o.a({mode:"history",routes:[{path:"/",name:"index",component:a.a},{path:"/movies/:id",name:"show",component:c.a}]})},154:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){var t=this;this.$http.get("/api/movies").then(function(e){t.movies=e.data})},name:"hello",data:function(){return{movies:[]}}}},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={created:function(){var t=this,e=this.$route.params.id;this.$http.get("/api/movies/"+e).then(function(e){t.movie=e.data})},data:function(){return{movie:{}}}}},358:function(t,e){},359:function(t,e){},360:function(t,e){},363:function(t,e,n){n(358);var r=n(91)(n(154),n(366),null,null);t.exports=r.exports},364:function(t,e,n){n(359);var r=n(91)(n(155),n(367),"data-v-4736f89c",null);t.exports=r.exports},365:function(t,e,n){n(360);var r=n(91)(n(156),n(368),null,null);t.exports=r.exports},366:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},367:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"movies"},[n("h1",[t._v("영화 목록")]),t._v(" "),t._l(t.movies,function(e){return n("div",{key:e.id,staticClass:"movie"},[n("img",{staticClass:"poster",attrs:{src:e.poster}}),t._v(" "),n("div",[n("strong",[t._v(t._s(e.name))]),t._v(", "),n("i",[t._v(t._s(e.director))]),t._v(" ["+t._s(e.year)+"]\n      "),n("router-link",{attrs:{to:{name:"show",params:{id:e.id}}}},[t._v("더보기")])],1)])})],2)},staticRenderFns:[]}},368:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("상세 내용")]),t._v("\n  "+t._s(t.movie)+"\n")])},staticRenderFns:[]}},371:function(t,e,n){n(92),t.exports=n(134)}},[371]);