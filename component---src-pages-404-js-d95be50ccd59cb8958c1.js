(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{146:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(155),o=n(157),c=n(4),u=n.n(c),s=n(158),l=n.n(s),d=n(148);function p(e){var t=e.description,n=e.lang,a=e.meta,i=e.keywords,c=e.title;return r.a.createElement(d.StaticQuery,{query:f,render:function(e){var o=t||e.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(a)})},data:o})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired};var m=p,f="1025518380";t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(m,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(147),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(149),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Zenio"}}}}},154:function(e,t,n){},155:function(e,t,n){"use strict";var a=n(153),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(148),s=function(){return i.a.createElement("nav",null,i.a.createElement(u.Link,{to:"/about"},"About"),i.a.createElement(u.Link,{to:"/contact"},"Contact"))},l=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#0c457d",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement(s,null)))};l.propTypes={siteTitle:c.a.string},l.defaultProps={siteTitle:""};var d=l,p=(n(154),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"86343720",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear())))},data:a})});p.propTypes={children:c.a.node.isRequired};t.a=p},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Zenio",description:"Data science",author:"@zenio"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-d95be50ccd59cb8958c1.js.map