"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[789],{2400:function(n,t,e){e.d(t,{a:function(){return u}});e(2791);var r,i=e(8402),o=e(168),a=e(6444).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),c=e(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(i.fe,{visible:!0,height:"80",width:"80",ariaLabel:"dna-loading",wrapperStyle:{},wrapperClass:"dna-wrapper"})})}},789:function(n,t,e){e.r(t),e.d(t,{default:function(){return I}});var r,i,o,a,c=e(3433),u=e(9439),s=e(2791),d=e(9129),l=e(168),p=e(6444),f=p.ZP.div(r||(r=(0,l.Z)(["\n  width: 480px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n"]))),x=p.ZP.input(i||(i=(0,l.Z)(["\n  width: 65%;\n  padding: 10px 15px;\n  font-size: 24px;\n  border: none;\n  background-color: tomato;\n  border-radius: 15px;\n  color: #fff;\n  &:focus {\n    outline: none;\n  }\n"]))),h=p.ZP.button(o||(o=(0,l.Z)(["\n  cursor: pointer;\n  width: 25%;\n  border: none;\n  border-radius: 15px;\n  padding: 12px 0;\n  background-color: teal;\n  font-size: 24px;\n  color: #fff;\n  transition: background-color, 250ms, cubic-bezier(0.075, 0.82, 0.165, 1),\n    color, 250ms, cubic-bezier(0.075, 0.82, 0.165, 1);\n  &:hover {\n    background-color: tomato;\n    color: #2a2a2a;\n  }\n"]))),Z=p.ZP.form(a||(a=(0,l.Z)(["\n  display: block;\n"]))),g=e(184),b=function(n){var t=n.onSubmit,e=(0,s.useState)(""),r=(0,u.Z)(e,2),i=r[0],o=r[1],a=function(n,t){t({query:i})};return(0,g.jsx)(f,{children:(0,g.jsx)(Z,{onSubmit:function(n){!function(n){n.preventDefault()}(n),t(a)},children:(0,g.jsxs)(f,{children:[(0,g.jsx)(x,{type:"search",name:"query",value:i,onChange:function(n){o(n.target.value)}}),(0,g.jsx)(h,{children:(0,g.jsx)(d.evM,{})})]})})})},m=e(3451),j=e(8068),v=function(n){var t=n.films;return(0,g.jsx)(j.W2,{children:(0,g.jsx)(j.sS,{children:t.map((function(n,t){return(0,g.jsx)(m.P,{film:n},"".concat(n.id,"-").concat(t))}))})})},y=e(1243),w=e(1820),z=e(2400),S=e(1087),k=e(7689),I=function(){var n,t=(0,s.useState)([]),e=(0,u.Z)(t,2),r=e[0],i=e[1],o=(0,s.useState)(1),a=(0,u.Z)(o,2),d=a[0],l=a[1],p=(0,S.lr)(),f=(0,u.Z)(p,2),x=f[0],h=f[1],Z=function(n,t){var e=(0,s.useState)(!1),r=(0,u.Z)(e,2),i=r[0],o=r[1],a=(0,s.useState)(!1),c=(0,u.Z)(a,2),d=c[0],l=c[1],p=(0,s.useState)([]),f=(0,u.Z)(p,2),x=f[0],h=f[1],Z=(0,s.useState)(1),g=(0,u.Z)(Z,2),b=g[0],m=g[1],j={method:"GET",url:"https://api.themoviedb.org/3/search/movie",params:{query:n,include_adult:"false",language:"en-US",page:t},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjMyZGIyYjk3MmRhNDVhYTM2ZGNjNDQ4OTkxZjVhOSIsInN1YiI6IjYzZGNjMzI1MzczYWMyMDA3YzFmMWQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DZJG4ucbFS5JBmGqClsdFcJE-gYfRMAFvYwLoM8XCWc"}};return(0,s.useEffect)((function(){o(!0),y.Z.request(j).then((function(n){h(n.data.results),m(n.data.total_pages),o(!1)})).catch((function(n){l(n),o(!1)}))}),[n,t]),[i,d,x,b]}(null!==(n=x.get("query"))&&void 0!==n?n:" ",d),m=(0,u.Z)(Z,4),j=m[0],I=m[1],P=m[2],C=m[3],J=(0,k.s0)();(0,s.useEffect)((function(){var n=P.map((function(n){return{id:n.id,title:n.title,poster:n.poster_path}}));i((function(t){return[].concat((0,c.Z)(t),(0,c.Z)(n))}))}),[P]);return I&&J("/error"),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(b,{onSubmit:function(n){n(x,h)}}),(0,g.jsx)(v,{films:r}),j&&(0,g.jsx)(z.a,{}),d<C?(0,g.jsx)(w.C,{onClick:function(n){n(d,l)}}):null]})}},8068:function(n,t,e){e.d(t,{W2:function(){return s},eA:function(){return l},sS:function(){return d},un:function(){return p}});var r,i,o,a,c=e(168),u=e(6444),s=u.ZP.div(r||(r=(0,c.Z)(["\n  width: 1280px;\n  box-sizing: border-box;\n  margin: 30px auto 30px auto;\n  padding: 0px 15px;\n"]))),d=u.ZP.ul(i||(i=(0,c.Z)(["\n  list-style-type: none;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 15px;\n  margin: 0;\n  padding: 0;\n"]))),l=u.ZP.h2(o||(o=(0,c.Z)(["\n  text-align: center;\n  font-size: 36px;\n  text-transform: uppercase;\n"]))),p=u.ZP.button(a||(a=(0,c.Z)(["\n  display: block;\n  width: 250px;\n  margin: 30px auto 30px auto;\n  padding: 15px 50px;\n  border: none;\n  border-radius: 15px;\n  font-size: 28px;\n  cursor: pointer;\n"])))},1820:function(n,t,e){e.d(t,{C:function(){return a}});e(2791);var r=e(978),i=e(8068),o=e(184),a=function(n){var t=n.onClick,e=function(n,t){t((function(n){return n+1}))};return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.un,{onClick:function(){return t(e)},children:["Next",(0,o.jsx)(r.iI1,{})]})})}},4948:function(n,t,e){e.d(t,{BE:function(){return p},Ei:function(){return d},e2:function(){return l},wI:function(){return s}});var r,i,o,a,c=e(168),u=e(6444),s=u.ZP.div(r||(r=(0,c.Z)(["\n  position: relative;\n  padding-top: 150%;\n  box-sizing: border-box;\n"]))),d=u.ZP.img(i||(i=(0,c.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n  box-sizing: border-box;\n"]))),l=u.ZP.h2(o||(o=(0,c.Z)(["\n  width: 300px;\n  font-size: 24px;\n  text-align: center;\n  margin: 15px 0px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),p=u.ZP.li(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n"])))},3451:function(n,t,e){e.d(t,{P:function(){return u}});e(2791);var r=e(7689),i=e(1087),o=e(4948),a=e(184),c=e(5230),u=function(n){var t=n.film,e=t.id,u=t.title,s=t.poster,d=(0,r.TH)();return(0,a.jsx)(i.rU,{to:"/movie/".concat(e),state:d,children:(0,a.jsxs)(o.BE,{children:[(0,a.jsx)(o.e2,{children:u}),(0,a.jsx)(o.wI,{children:(0,a.jsx)(o.Ei,{src:s?"https://image.tmdb.org/t/p/w500".concat(s):c,alt:u})})]})})}},5230:function(n,t,e){n.exports=e.p+"static/media/placeholder.cdfeea7e928f6f570096.jpg"}}]);
//# sourceMappingURL=789.fcadf23c.chunk.js.map