(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{53:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e(0),i=e(20),a=e.n(i),o=e(2),s=e(7),u=e.n(s),b=e(21),l=e(5),f=e(22),j=e.n(f),d=e(23),p=e(3);function x(){var t=Object(o.a)(["\n\tfont-size: 1rem;\n\tborder: 0;\n\tborder-radius: 5px;\n\tmargin-left: 2px;\n\tcolor: #adaeb9;\n\t&:focus {\n\t\tborder: none;\n\t\toutline: none;\n\t}\n"]);return x=function(){return t},t}function m(){var t=Object(o.a)(["\n\tfont-size: 1.4em;\n"]);return m=function(){return t},t}function h(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 5px 0;\n"]);return h=function(){return t},t}function O(){var t=Object(o.a)(["\n\tposition: relative;\n\ttop: -50px;\n\tmax-width: 150px;\n\twidth: 100%;\n\tmargin-right: 3em;\n\tbox-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3),\n\t\t10px 15px 12px rgba(80, 80, 80, 0.22);\n"]);return O=function(){return t},t}function g(){var t=Object(o.a)(["\n\tfont-size: 1.4em;\n"]);return g=function(){return t},t}function v(){var t=Object(o.a)([""]);return v=function(){return t},t}function y(){var t=Object(o.a)(["\n\tmargin-bottom: 5px;\n\tfont-size: 2.4em;\n\tcolor: #2c2c2c;\n"]);return y=function(){return t},t}function w(){var t=Object(o.a)([""]);return w=function(){return t},t}function k(){var t=Object(o.a)(["\n\twidth: 48%;\n\tbackground-color: white;\n\tmargin-bottom: 7rem;\n\tdisplay: flex;\n\talign-items: flex-start;\n\tjustify-content: space-between;\n\tfont-weight: 300;\n\tpadding: 2em;\n\tcolor: #adaeb9;\n\tbox-shadow: 0 8px 38px rgba(133, 133, 133, 0.3),\n\t\t0 5px 12px rgba(133, 133, 133, 0.22);\n\tborder-radius: 5px;\n\n\t@media screen and (max-width: 800px) {\n\t\twidth: 100%;\n\t\tflex-direction: column;\n\t}\n\n\t& h3,\n\t& h5 {\n\t\tfont-weight: 300;\n\t\tmargin: 0;\n\t}\n"]);return k=function(){return t},t}var z=p.b.div(k()),S=p.b.div(w()),C=p.b.h3(y()),_=p.b.h5(v()),F=p.b.p(g()),B=p.b.img(O()),E=p.b.ul(h()),I=p.b.li(m()),J=p.b.button(x()),U=function(t){var n=t.year,e=t.title,i=t.summary,a=t.poster,o=t.genres,s=Object(c.useState)(!1),u=Object(l.a)(s,2),b=u[0],f=u[1],j=Object(c.useState)("more"),p=Object(l.a)(j,2),x=p[0],m=p[1],h=Object(c.useCallback)((function(){console.log(b),console.log(i.slice(0,120)),b?(f(!1),m("more")):(f(!0),m("close"))}),[b]);return Object(r.jsx)(c.Fragment,{children:Object(r.jsxs)(z,{children:[Object(r.jsx)(B,Object(d.a)({src:a,alt:e},"alt",e)),Object(r.jsxs)(S,{children:[Object(r.jsx)(C,{children:e}),Object(r.jsx)(_,{children:n}),Object(r.jsx)(E,{children:o.map((function(t,n){return Object(r.jsxs)(I,{children:[o.length!==n+1?t+",":t,"\xa0"]},n)}))}),Object(r.jsxs)(F,{children:[b?i:i.slice(0,140)+"...",i.length>=140&&Object(r.jsx)(J,{onClick:h,children:x})]})]})]})})};function H(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tflex-wrap: wrap;\n\talign-items: flex-start;\n\tpadding: 5em;\n\tpadding-top: 7em;\n\twidth: 80%;\n"]);return H=function(){return t},t}function L(){var t=Object(o.a)([""]);return L=function(){return t},t}function M(){var t=Object(o.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tfont-weight: 300;\n\tfont-size: 1.6rem;\n"]);return M=function(){return t},t}function N(){var t=Object(o.a)(["\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n"]);return N=function(){return t},t}function R(){var t=Object(o.a)(["\n\t*{\n\t\tbox-sizing: border-box;\n\t}\n\thtml {\n\t\tfont-size: 10px;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-family: -apple-system, -apple-system, BlinkMacSystemFont, 'Segoe UI', \n\t\t\t\tRoboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t\tbackground-color: #eff3f7;\n\t\tfont-size: 1rem;\n\t}\n\n\thtml, body {\n\t\theight: 100%;\n\t\tdisplay:flex;\n\t\tjustify-content: center;\t\n\t}\n"]);return R=function(){return t},t}var q=Object(p.a)(R()),A=p.b.section(N()),D=p.b.div(M()),G=p.b.span(L()),K=p.b.div(H()),P=function(){var t=Object(c.useState)(!0),n=Object(l.a)(t,2),e=n[0],i=n[1],a=Object(c.useState)([]),o=Object(l.a)(a,2),s=o[0],f=o[1],d=Object(c.useCallback)(Object(b.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("https://yts.mx/api/v2/list_movies.json/sort_by=rating");case 3:n=t.sent,e=n.data.data.movies,f(e),i(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),[]);return Object(c.useEffect)((function(){d()}),[]),Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(q,{}),Object(r.jsx)(A,{children:e?Object(r.jsx)(D,{children:Object(r.jsx)(G,{children:"Loading..."})}):Object(r.jsx)(K,{children:s&&s.map((function(t){var n=t.id,e=t.year,c=t.title,i=t.summary,a=t.medium_cover_image,o=t.genres;return Object(r.jsx)(U,{year:e,title:c,summary:i,poster:a,genres:o},n)}))})})]})};a.a.render(Object(r.jsx)(P,{}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.709454e5.chunk.js.map