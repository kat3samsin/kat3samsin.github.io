(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(169),o=a(0),A=a.n(o),d=a(146),c=a(4),s=a.n(c),l=a(170),u=a.n(l),p=(a(171),a(154)),f=a(147),m=a.n(f),b=a(149);function g(){var e=m()(["\n  font-weight: bold;\n  display: inline-block;\n"]);return g=function(){return e},e}function y(){var e=m()(["\n  @media only screen and (max-width: 600px) {\n    font-size: 1.2em;\n  }\n  font-size: 1.7em;\n  max-width: 700px;\n  display: inline-block;\n  padding-top: 20px;\n"]);return y=function(){return e},e}function v(){var e=m()(["\n  @media only screen and (max-width: 600px) {\n    font-size: 3em;\n  }\n  font-size: 5em;\n  animation-name: ",";\n  animation-duration: 2.5s;\n  animation-iteration-count: infinite;\n  transform-origin: 70% 70%;\n  display: inline-block;\n"]);return v=function(){return e},e}function w(){var e=m()(["\n  0% { transform: rotate(  0.0deg) }\n  10% { transform: rotate(-10.0deg) }\n  20% { transform: rotate( 12.0deg) }\n  30% { transform: rotate(-10.0deg) }\n  40% { transform: rotate(  9.0deg) }\n  50% { transform: rotate(  0.0deg) }\n  100% { transform: rotate(  0.0deg) }\n"]);return w=function(){return e},e}function E(){var e=m()(["\n  @media only screen and (max-width: 600px) {\n    padding-top: 0px;\n    font-size: 3em;\n  }\n  padding-top: 50px;\n  font-size: 5em;\n  font-style: italic; \n  display: inline-block;\n"]);return E=function(){return e},e}var h=b.a.div(E()),B=Object(b.b)(w()),x=b.a.div(v(),B),j=b.a.div(y()),k=b.a.div(g()),R=function(e){var t=e.data[0].node,a=t.frontmatter,n=t.html;return A.a.createElement(A.a.Fragment,null,A.a.createElement(h,{"data-aos":"flip-right"},a.title),A.a.createElement(x,{"data-aos":"fade-in"},a.wave),A.a.createElement(j,{"data-aos":"fade-in"},"I'm ",A.a.createElement(k,null,"Katrina Tantay. "),A.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}})))};R.propTypes={data:s.a.array.isRequired};var T=R,Q=a(172),I=a.n(Q);function S(){var e=m()(["\n  @media only screen and (max-width: 600px) {\n    font-size: 1em;\n  }\n  font-size: 1.2em;\n  display: inline-block;\n  // max-width: 700px;\n"]);return S=function(){return e},e}function Y(){var e=m()(["\n  // display: inline-block;\n  // padding: 20px;\n"]);return Y=function(){return e},e}function M(){var e=m()(["\n  @media only screen and (max-width: 600px) {\n    padding-top: 180px;\n    font-size: 4em;\n  }\n  padding-top: 270px;  \n  font-size: 5em;\n  font-style: italic;\n"]);return M=function(){return e},e}var D=b.a.div(M()),P=Object(b.a)(I.a)(Y()),q=b.a.div(S()),F=function(e){var t,a=e.data[0].node,n=a.frontmatter,r=a.html;return A.a.createElement(A.a.Fragment,null,A.a.createElement(D,{"data-aos":"fade-in"},n.title),A.a.createElement(P,((t={fluid:n.avatar.childImageSharp.fluid,alt:"Avatar"}).alt="avatar",t.style={width:"15%",height:"20%"},t)),A.a.createElement(q,{"data-aos":"fade-in"},A.a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})))};F.propTypes={data:s.a.array.isRequired};var G=F,z=a(152),N=(a(173),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.init({duration:3e3})},a.render=function(){var e=this.props.data;return A.a.createElement(p.a,null,A.a.createElement(z.a,{title:"hello there.",keywords:["katrina","lou","samsin","tantay","gatsby","portfolio"]}),A.a.createElement(T,{data:e.hero.edges}),A.a.createElement(G,{data:e.about.edges}))},t}(A.a.Component));N.propTypes={data:s.a.object.isRequired};t.default=function(e){return A.a.createElement(d.b,{query:"1971259233",render:function(e){return A.a.createElement(N,{data:e})},data:i})}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(33),d=a.n(A);a.d(t,"a",function(){return d.a});a(148);var c=r.a.createContext({}),s=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},150:function(e){e.exports={data:{site:{siteMetadata:{title:"i'm katre"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),A=a(55),d=a(2),c=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(A.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),o=a(4),A=a.n(o),d=a(155),c=a.n(d);function s(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,A=e.title,d=n.data.site,s=t||d.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:A,titleTemplate:"%s | "+d.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:A},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:A},{name:"twitter:description",content:s}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[],description:""},s.propTypes={description:A.a.string,lang:A.a.string,meta:A.a.arrayOf(A.a.object),keywords:A.a.arrayOf(A.a.string),title:A.a.string.isRequired},t.a=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"i'm katre",description:"Katrina Lou S. Tantay's portfolio",author:"@gatsbyjs"}}}}},154:function(e,t,a){"use strict";var n=a(147),r=a.n(n),i=a(150),o=a(0),A=a.n(o),d=a(4),c=a.n(d),s=a(146),l=a(149);function u(){var e=r()(["\n  font-size: 1.2em;\n  padding: 10px;\n  margin: 0;\n"]);return u=function(){return e},e}function p(){var e=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-content: flex-end;\n  justify-content: flex-end;\n  align-items: flex-end;\n"]);return p=function(){return e},e}var f=l.a.header(p()),m=Object(l.a)(s.a)(u()),b=function(e){e.siteTitle;return A.a.createElement(A.a.Fragment,null,A.a.createElement(f,null,A.a.createElement(m,{to:"/about"},"About"),A.a.createElement(m,{to:"/projects"},"Projects"),A.a.createElement(m,{to:"/skills"},"Skills"),A.a.createElement(m,{to:"/contact"},"Contact")))};b.propTypes={siteTitle:c.a.string},b.defaultProps={siteTitle:""};var g=b;function y(){var e=r()(["\n"]);return y=function(){return e},e}function v(){var e=r()(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n\n  padding: 120px 100px;\n  max-width: 1440px;\n  margin: 0 auto;\n"]);return v=function(){return e},e}var w=l.a.div(v()),E=l.a.div(y()),h=function(e){var t=e.children;return A.a.createElement(s.b,{query:"755544856",render:function(e){return A.a.createElement(A.a.Fragment,null,A.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),A.a.createElement(w,null,A.a.createElement(E,null,t)),A.a.createElement("footer",null,"© ",(new Date).getFullYear(),", kat3samsin"))},data:i})};h.propTypes={children:c.a.node.isRequired};t.a=h},169:function(e){e.exports={data:{hero:{edges:[{node:{frontmatter:{title:"hello there! ",wave:"👋🏻"},html:"<p>A highly motivated front-end developer with a strong passion for continuous learning, innovation and self-development.</p>"}}]},about:{edges:[{node:{frontmatter:{title:"about me",background:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFbiS3IdIR//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAwQQ/9oACAEBAAEFAkrAjZImYqB3/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRABAAEDBQAAAAAAAAAAAAAAAQACERIgMlGBkf/aAAgBAQAGPwK6GXMWl6m480f/xAAaEAADAAMBAAAAAAAAAAAAAAAAAREQITFR/9oACAEBAAE/IW1h+wTdbxiTSLuOxi4//9oADAMBAAIAAwAAABCMP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxBqkP/EABkQAQEBAQEBAAAAAAAAAAAAAAERACExUf/aAAgBAQABPxD3mwor9B81MHa7h3da3Y2KdLc6GFMvd//Z",aspectRatio:1.4992458521870287,src:"/static/2e2764cd0e918ba12bfadd9e802ab2d8/ed516/about.jpg",srcSet:"/static/2e2764cd0e918ba12bfadd9e802ab2d8/7fd17/about.jpg 175w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/804d2/about.jpg 350w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/ed516/about.jpg 700w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/104dc/about.jpg 1050w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/abebb/about.jpg 1400w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/f5c1c/about.jpg 2100w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/d1a99/about.jpg 7952w",srcWebp:"/static/2e2764cd0e918ba12bfadd9e802ab2d8/93ec8/about.webp",srcSetWebp:"/static/2e2764cd0e918ba12bfadd9e802ab2d8/61503/about.webp 175w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/850cb/about.webp 350w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/93ec8/about.webp 700w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/fbd0c/about.webp 1050w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/f0780/about.webp 1400w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/eb9a1/about.webp 2100w,\n/static/2e2764cd0e918ba12bfadd9e802ab2d8/b5310/about.webp 7952w",sizes:"(max-width: 700px) 100vw, 700px"}}},avatar:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAYAAAALHW+jAAAACXBIWXMAAAsSAAALEgHS3X78AAAFMUlEQVQ4y3WUCUzUVxDGF7lvlktArByioHJJ8RbUqq0gKKBVtB71qoqgIrAs96kIKIdcC4saGpWoRKuxbohpilpbEY8GrfWoPbQmVqtia60F/PUtsJRN20km/5fJ/33zzZtvRkKfvXnzpsfV1t3drQnTeOBjYtauJjsthQvnz/bHu7q6/nVPbZKBgAPB7v/0IyuiF2FvZcFbTg6MHu6G70gPEuM28fTJ4/8FlQwMvOkDe9HRQUTYXKQW5oxycWaw1BJ7Ozt8vLzwdBnGwrAQnjx+pEXgPwG7OnszVleUCxAr1oRO40DqRzQkr2dzyBTGjXTHz8eHYfZ2LI0IFwS0Gaq9v2RNpufPnuLvPYa5vh6c3RnD7cZS7p9s4OHxOpqSVxHg4oijvT2WeoNoUCp67nR2dvYD9zPUBOvrFJgMkqBYH0lrRRK3jtbwQHWE+6ePcK+pCuXGSFxtLDHQ0WHGhEBe/fFSi6VkIF21Rcyfh7OVKZ/kxHBiZyIt1du506Tk5hElqvI8VIVJpMwLwtTIEGMdCfU1lb0NEoS0ANX2+s9XeI/yImScN5/tTiRv2TyqNn1A+74CrirzKY9ZRsWGaFS5G/Ae6oiuRMLUAD9+/+3FPyX3AvZ190UHQW/7I4uaTXtDIWdL07lQmcuV6gzhWQK0iGv1RVzYk05CaDDGBgbYGBvScqa5X0bagB3PmTV1Civfm843jdU8On2YWwfKuFSRQWt5GnfE+RdVE5eVxcRHzEZPTx9XBztOnzjeB9ipXXJX519ECv25OTtxpjJPMCrk/K5kWrbHc64gkXNFMtqq8jgjmPuOcMNAz4DwmdO4eaO9XykS+gA1spFt3YyRvj5K+UauKHM5LlvHRcUuLteXcTI1hraaTPbL1mBqbIyZkRFLwkN4qfWGfQfNGB1rPISZoREzxnpzsT5fAOTTWpTLpeI8rtQV0KrIIny8DybGpjgLgU/xHcP3d+9ov+HAubx68UuG2dkikeiwZlYgzcWJXGsopf1AOc27ZOyIfgcHMd9SKym2lpZMCwygIDONDvH+WqOnATx1rAkTfV0kOrpEjfeiZm0opSvmoFg3H8WqOSSHTUJqbo6DrR36g3SZMNaP/PQUHv78oBdQ836vX7/uCdTWVDFI6MvZ0ZFgb09O5sfQXBiHavsmPi/eQnb0u5jp6+E0eDBWZqYsWRDBs1+faI+exjrEHK9cGo2Bri6uQ4diLJqTvTyMrxt20FKezBfVmVSvjyLYwxlrKysMdfVYu3J5L5imy91iY9y9fp1zJ45yqjSNYC8XDAyMcBDrykwIN2dZGDcay2jbt5O2hmJO5ceR+f5s3J0cMTEyxsfDDVXTYbr7tCxRiY1cmy6nWp7AwewEZvqPxtzMnKFOTswa5Y4qbwvfHa/l3gkl7QdL+Komh8WT/bERDK2l1rg6OpDx4XIay0v44fa3SKpTk1GoXaz43UKDwT6jsRM/DnFwJNTXk6YcsSAUxXxakk1TQRaHctNZPD1IsDPC1tqaALHJYxdEki5Kr0yRIakRYPVZ6dRlpFKbKmNB0GSsRBcthc/09aZ86xZq5MlUyZKoSpahkMspio3B29UFW6kUT+chBLq7sG3RQiqSEpDsSYinNk2UnCJYymWEThzfk9nawoK4yHnsFxpTClnsFQnVX6WopGRzLH5qQBsbpGZmREyaSNm2eBQpclGyPIm9WWk9oA05mcQtjMRGCNZBZM9evYpakahSZFazVAivE5fUsel+vliYmBA4YjixURECcKv4L5G/AQiU3383VNUNAAAAAElFTkSuQmCC",aspectRatio:.8658008658008658,src:"/static/5789ac8f6a3556ce9b84859c7e310a85/ed021/me.png",srcSet:"/static/5789ac8f6a3556ce9b84859c7e310a85/ed021/me.png 200w",srcWebp:"/static/5789ac8f6a3556ce9b84859c7e310a85/bc926/me.webp",srcSetWebp:"/static/5789ac8f6a3556ce9b84859c7e310a85/bc926/me.webp 200w",sizes:"(max-width: 200px) 100vw, 200px"}}}},html:"<p>My interest in coding sparked in high school where I learned to create random shapes using Turbo Pascal. I took CS in Mapua University back in 2002 and graduated 2005, shortly after I had my first job as a Java Developer. Currently, I am a Principal Software Engineer at Oracle NetSuite that designs and build SuiteApps from the ground-up.</p>\n<p>I have a full spectrum of interests, I'm an artist, musician, bookworm, horologist, trader, coffee connoisseur, audiophile and recently a mom to a beautiful and very active baby boy. i like all things beautiful. i enjoy recording memories by journalling. i love the smell of books, listening to lossless music, and making damn good coffee. i am <em>highly motivated</em> and passionate about <em>continuous learning</em> and development.</p>"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-a26e2df25faf1cf5aeb8.js.map