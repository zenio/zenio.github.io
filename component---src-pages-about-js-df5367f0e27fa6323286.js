(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),c=a(158);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,"Nothing yet here..."),r.a.createElement("p",null,r.a.createElement(i.Link,{to:"/blog-goals"},"Description about why and what this blog is.")),r.a.createElement("p",null,r.a.createElement(i.Link,{to:"/"},"Home")))}},151:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(150),u=a.n(l);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(152),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(51),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},154:function(e){e.exports={data:{site:{siteMetadata:{title:"About data science",author:"@zenio"}}}}},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(154),r=a(0),i=a.n(r),c=a(4),l=a.n(c),u=a(151),o=a(159),s=(a(160),function(){return i.a.createElement("nav",null,i.a.createElement(u.Link,{to:"/about",activeClassName:"active"},"About"),i.a.createElement(u.Link,{to:"/contact",activeClassName:"active"},"Contact"))}),d=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"container"},i.a.createElement("h1",{id:"logo"},i.a.createElement(u.Link,{to:"/"},t)),i.a.createElement(s,null)))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var m=d,f=(a(155),a(156),a(157),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"3154955091",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.Helmet,null,i.a.createElement("title",null,e.site.siteMetadata.title)),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"column"},t)))),i.a.createElement("footer",{className:"container"},"© ",(new Date).getFullYear()," ",e.site.siteMetadata.author))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-about-js-df5367f0e27fa6323286.js.map