(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(158),o=a(171),c=a(4),u=a.n(c),s=a(159),l=a.n(s),d=a(151);function m(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,c=e.title;return r.a.createElement(d.StaticQuery,{query:f,render:function(e){var o=t||e.site.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:c},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:o}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})},data:o})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.array,keywords:u.a.arrayOf(u.a.string),title:u.a.string.isRequired};var p=m,f="1025518380";t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(p,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(150),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(152),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),u=a(2),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e){e.exports={data:{site:{siteMetadata:{title:"About data science",author:"@zenio"}}}}},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(151),s=a(159),l=(a(160),function(){return i.a.createElement("nav",null,i.a.createElement(u.Link,{to:"/about",activeClassName:"active"},"About"),i.a.createElement(u.Link,{to:"/contact",activeClassName:"active"},"Contact"))}),d=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"container"},i.a.createElement("h1",{id:"logo"},i.a.createElement(u.Link,{to:"/"},t)),i.a.createElement(l,null)))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(155),a(156),a(157),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"3154955091",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.Helmet,null,i.a.createElement("title",null,e.site.siteMetadata.title)),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},t)))),i.a.createElement("footer",{className:"container"},"© ",(new Date).getFullYear()," ",e.site.siteMetadata.author))},data:n})});p.propTypes={children:c.a.node.isRequired};t.a=p},171:function(e){e.exports={data:{site:{siteMetadata:{title:"About data science",description:"Data scientist blog",author:"@zenio"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-ff17ab78ae4f0d6d3c15.js.map