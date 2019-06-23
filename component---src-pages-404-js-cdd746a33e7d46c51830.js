(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{157:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(167),o=t(165);n.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},161:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var a=t(0),r=t.n(a),i=t(5),o=t.n(i),u=t(40),l=t.n(u);t.d(n,"a",function(){return l.a});t(162);var c=r.a.createContext({});function s(e){var n=e.staticQueryData,t=e.data,a=e.query,i=e.render,o=t?t.data:n[a]&&n[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(s,{data:n,query:t,render:a||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},162:function(e,n,t){var a;e.exports=(a=t(164))&&a.default||a},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Katrina Lou S. Tantay | Software Engineer"}}}}},164:function(e,n,t){"use strict";t.r(n);t(41);var a=t(0),r=t.n(a),i=t(5),o=t.n(i),u=t(66),l=function(e){var n=e.location,t=e.pageResources;return t?r.a.createElement(u.a,Object.assign({location:n,pageResources:t},t.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=l},165:function(e,n,t){"use strict";var a=t(166),r=t(0),i=t.n(r),o=t(5),u=t.n(o),l=t(170),c=t.n(l);function s(e){var n=e.description,t=e.lang,r=e.meta,o=e.keywords,u=e.title,l=a.data.site,s=n||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:u,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:u},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.arrayOf(u.a.object),keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired},n.a=s},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Katrina Lou S. Tantay | Software Engineer",description:"Katrina Lou S. Tantay's portfolio",author:"@kat3samsin"}}}}},167:function(e,n,t){"use strict";var a=t(159),r=t.n(a),i=t(163),o=t(0),u=t.n(o),l=t(5),c=t.n(l),s=t(161),d=t(160),p=t(168);function f(){var e=r()(["\n  display: flex;\n\n  & > button {\n    font-size: 1.7em;\n    background: none;\n    border: none;\n    color: rgb(204, 197, 197);\n    cursor: pointer;\n    transition: color 0.5s ease;\n\n    &:focus {\n      outline: none;\n    }\n  }\n"]);return f=function(){return e},e}var m=d.a.div(f()),g=function(){var e=Object(p.a)(!1);return u.a.createElement(m,null,u.a.createElement("button",{onClick:e.toggle},e.value?"☀":"☾"))};function v(){var e=r()(["\n  margin-left: auto;\n"]);return v=function(){return e},e}function w(){var e=r()(["\n  font-size: 1em;\n  text-decoration: none;\n  padding: 10px;\n  font-weight: bold;\n"]);return w=function(){return e},e}function E(){var e=r()(["\n  font-size: 1em;\n  text-decoration: none;\n  padding: 10px;\n  font-weight: bold;\n"]);return E=function(){return e},e}function h(){var e=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n"]);return h=function(){return e},e}var y=d.a.header(h()),x=Object(d.a)(s.a)(E()),b=d.a.a(w()),k=d.a.div(v()),T=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(y,{"data-aos":"flip-up"},u.a.createElement(x,{to:"/#about"},"About"),u.a.createElement(x,{to:"/#work"},"Work"),u.a.createElement(x,{to:"/#skills"},"Skills"),u.a.createElement(x,{to:"/#projects"},"Projects"),u.a.createElement(b,{href:"https://drive.google.com/file/d/1aoWZc8HJ6HovtujThelY7qggiRK5GNrE/view?usp=sharing",target:"_blank"},"Resume"),u.a.createElement(k,null,u.a.createElement(g,null))))};T.propTypes={siteTitle:c.a.string},T.defaultProps={siteTitle:""};var j=T;function q(){var e=r()(["\n  @media only screen and (max-width: 600px) {\n    font-size: 0.7em;\n    padding: 5px;\n  }\n  padding: 10px;\n  font-size: 1em;\n  font-weight: bold;\n  text-decoration: none;\n"]);return q=function(){return e},e}function R(){var e=r()(["\n  @media only screen and (max-width: 600px) {\n    font-size: 0.7em;\n    margin: 0;\n  }\n  font-size: 1em;\n  margin-left: auto;\n  padding: 10px;\n  overflow: hidden;\n"]);return R=function(){return e},e}function O(){var e=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n  border-top: 2px solid #ffa7c4;\n"]);return O=function(){return e},e}var S=d.a.header(O()),z=d.a.div(R()),F=d.a.a(q()),L=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(S,null,u.a.createElement(F,{href:"mailto:kat3samsin@gmail.com",target:"_blank"},"Email"),u.a.createElement(F,{href:"https://www.github.com/kat3samsin",target:"_blank"},"GitHub"),u.a.createElement(F,{href:"https://www.linkedin.com/in/ksamsin",target:"_blank"},"LinkedIn"),u.a.createElement("br",null),u.a.createElement(z,null,"© ",(new Date).getFullYear()," Katrina Lou S. Tantay | 🇵🇭")))};function M(){var e=r()(["\n  padding: 10px 10px;\n  margin: 10 auto;\n"]);return M=function(){return e},e}function K(){var e=r()([""]);return K=function(){return e},e}function D(){var e=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n\n  padding: 120px 100px;\n  max-width: 1440px;\n  margin: 10 auto;\n  overflow: hidden;\n"]);return D=function(){return e},e}var N=d.a.div(D()),_=d.a.div(K()),C=Object(d.a)(L)(M()),H=function(e){var n=e.children;return u.a.createElement(s.b,{query:"755544856",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(j,{siteTitle:e.site.siteMetadata.title}),u.a.createElement(N,null,u.a.createElement(_,null,n)),u.a.createElement(C,null))},data:i})};H.propTypes={children:c.a.node.isRequired};n.a=H}}]);
//# sourceMappingURL=component---src-pages-404-js-cdd746a33e7d46c51830.js.map