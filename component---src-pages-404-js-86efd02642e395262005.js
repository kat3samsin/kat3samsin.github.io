(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{142:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(154),o=n(152);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(t,e,n){"use strict";n.d(e,"b",function(){return s});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(33),l=n.n(c);n.d(e,"a",function(){return l.a});n(148);var u=r.a.createContext({}),s=function(t){return r.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(t,e,n){var a;t.exports=(a=n(151))&&a.default||a},150:function(t){t.exports={data:{site:{siteMetadata:{title:"Hello there! I'm Katrina Tantay."}}}}},151:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(55),l=n(2),u=function(t){var e=t.location,n=l.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},152:function(t,e,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(155),u=n.n(l);function s(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title,l=a.data.site,s=e||l.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=s},153:function(t){t.exports={data:{site:{siteMetadata:{title:"Hello there! I'm Katrina Tantay.",description:"Katrina Lou S. Tantay's portfolio",author:"@gatsbyjs"}}}}},154:function(t,e,n){"use strict";var a=n(147),r=n.n(a),i=n(150),o=n(0),c=n.n(o),l=n(4),u=n.n(l),s=n(146),d=n(149);function p(){var t=r()(["\n  font-size: 1.2em;\n  padding: 10px;\n  margin: 0;\n"]);return p=function(){return t},t}function f(){var t=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-content: flex-end;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]);return f=function(){return t},t}var m=d.a.header(f()),y=Object(d.a)(s.a)(p()),g=function(t){t.siteTitle;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null,c.a.createElement(y,{to:"/about"},"About"),c.a.createElement(y,{to:"/projects"},"Projects"),c.a.createElement(y,{to:"/skills"},"Skills"),c.a.createElement(y,{to:"/contact"},"Contact")))};g.propTypes={siteTitle:u.a.string},g.defaultProps={siteTitle:""};var w=g;function h(){var t=r()(["\n"]);return h=function(){return t},t}function v(){var t=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n\n  padding: 120px 100px;\n  max-width: 1440px;\n  margin: 0 auto;\n"]);return v=function(){return t},t}var E=d.a.div(v()),x=d.a.div(h()),T=function(t){var e=t.children;return c.a.createElement(s.b,{query:"755544856",render:function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{siteTitle:t.site.siteMetadata.title}),c.a.createElement(E,null,c.a.createElement(x,null,e)),c.a.createElement("footer",null,"© ",(new Date).getFullYear(),", kat3samsin"))},data:i})};T.propTypes={children:u.a.node.isRequired};e.a=T}}]);
//# sourceMappingURL=component---src-pages-404-js-86efd02642e395262005.js.map