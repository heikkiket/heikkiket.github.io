(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(t,e,n){var content=n(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("25e82cfe",content,!0,{sourceMap:!1})},161:function(t,e,n){var content=n(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("1b1f4532",content,!0,{sourceMap:!1})},164:function(t,e,n){var map={"./finna.png":165,"./finna.thumb.png":166};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=164},165:function(t,e,n){t.exports=n.p+"img/bdd9abf.png"},166:function(t,e,n){t.exports=n.p+"img/530c2c3.png"},167:function(t,e,n){"use strict";var r=n(160);n.n(r).a},168:function(t,e,n){(e=n(20)(!1)).push([t.i,".projectThumb[data-v-485f4c77]{max-width:100%}",""]),t.exports=e},169:function(t){t.exports=JSON.parse('[{"name":"FinnaSearch","description":"Pieni valokuvahakutyökalu. Etsii valokuvia Finna-tietokannasta. Webohjelmointikurssin sivussa huvin vuoksi syntynyt työ.","imageUrl":"finna.png","repositoryLink":"https://github.com/heikkiket/finnaSearch","repositoryLinkText":"Projekti GitHubissa","demoLink":"https://heikkiket.kapsi.fi/finna/","demoLinkText":"Projektin demo"},{"name":"Painonhallintasovellus","description":"Description of Project 2","imageUrl":"","repositoryLink":"http://www.github.com/heikkiket/2","demoLink":"http://localhost/2"},{"name":"project3","description":"Description of Project 3","imageUrl":"","repositoryLink":"http://www.github.com/heikkiket/3","demoLink":"http://localhost/2"}]')},170:function(t,e,n){"use strict";var r=n(161);n.n(r).a},171:function(t,e,n){(e=n(20)(!1)).push([t.i,".page-enter-active,.page-leave-active{transition:opacity .2s,transform .2s}.page-enter,.page-leave-to{opacity:0;transform:translateY(-200px)}a{color:#2acfd5}a:hover{color:#c1d52a}button{background:#d52a6c;border:none;margin-right:1em;padding:.5em .8em;color:#f6f4f6;transition:background .5s}button:hover{background:#eb4384}button:active{transform:scaleY(.95);background:#d52a6c;padding-left:.9em;padding-right:.7em;transition:background 0s}button:disabled,button:disabled:hover{color:#333;background:#7c5866;transition:all 0s}",""]),t.exports=e},172:function(t,e,n){"use strict";n.r(e);n(107);var r={name:"",props:{name:{type:String,required:!0},description:{type:String,required:!0},imageUrl:{type:String,required:!0},repositoryLink:{type:String,required:!1},repositoryLinkText:{type:String,required:!1},demoLink:{type:String,required:!1},demoLinkText:{type:String,required:!1}},data:function(){return{}},watch:{},computed:{thumbUrl:function(){if(""===this.imageUrl)return"";var t=this.imageUrl.split("."),e=t.pop();return t.push("thumb",e),this.webpackRequest(t.join("."))},fullImageUrl:function(){return""===this.imageUrl?"":this.webpackRequest(this.imageUrl)}},methods:{webpackRequest:function(t){return n(164)("./".concat(t))}}},o=(n(167),n(8)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"projectContainer"},[n("h1",[t._v(t._s(this.name))]),t._v(" "),n("p",[t._v(t._s(this.description))]),t._v(" "),n("a",{attrs:{href:t.fullImageUrl}},[n("img",{staticClass:"projectThumb",attrs:{src:t.thumbUrl,alt:"Ruutukaappaus projektista"}})]),t._v(" "),n("aside",[n("ul",[n("li",[n("a",{attrs:{href:t.repositoryLink,target:"_blank"}},[t._v("\n          "+t._s(this.repositoryLinkText)+"\n        ")])]),t._v(" "),n("li",[n("a",{attrs:{href:t.demoLink,target:"_blank"}},[t._v("\n          "+t._s(this.demoLinkText)+"\n        ")])])])])])}),[],!1,null,"485f4c77",null).exports,l=n(169),d={components:{Project:c},asyncData:function(t){t.params;return{projects:l}},data:function(){return{projectIndex:0}},watch:{},computed:{selectedProject:function(){return this.projects[this.projectIndex]},firstProjectFocused:function(){return 0===this.projectIndex},lastProjectFocused:function(){return this.projectIndex===this.projects.length-1}},methods:{previousProject:function(){this.firstProjectFocused||this.projectIndex--},nextProject:function(){this.lastProjectFocused||this.projectIndex++}}},f=(n(170),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("portfolio")]),t._v(" "),n("p",[t._v("Tässä joitain tekemiäni projekteja.")]),t._v(" "),n("button",{attrs:{disabled:t.firstProjectFocused},on:{click:function(e){return t.previousProject()}}},[t._v("\n      Edellinen\n    ")]),t._v(" "),n("button",{attrs:{disabled:t.lastProjectFocused},on:{click:function(e){return t.nextProject()}}},[t._v("\n      Seuraava\n    ")]),t._v(" "),n("Project",t._b({},"Project",t.selectedProject,!1))],1)}),[],!1,null,null,null));e.default=f.exports}}]);