(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),i=a(148),u=a(153),l="3891468002";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(u.a,null,r.a.createElement("h1",null,"Hi! Wellcome!"),r.a.createElement("p",null,"Nice to meet you on my blog."),t.map(function(e){var t=e.node.frontmatter;return r.a.createElement("div",{key:t.path},r.a.createElement(i.Link,{to:t.path},t.title))}),r.a.createElement(i.Link,{to:"/about/"},"About"),r.a.createElement(i.Link,{to:"/tags"},"Tags"))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),l=a(147),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(149),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},149:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),l=a(51),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=o},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Art of data science"}}}}},152:function(e,t,a){},153:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),u=a(4),l=a.n(u),c=a(148),o=a(154),s=function(){return i.a.createElement("nav",null,i.a.createElement(c.Link,{to:"/about"},"About"),i.a.createElement(c.Link,{to:"/contact"},"Contact"))},d=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"container flex"},i.a.createElement("h1",null,i.a.createElement(c.Link,{to:"/"},t)),i.a.createElement(s,null)))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};var m=d,f=(a(152),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"86343720",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.Helmet,null,i.a.createElement("title",null,e.site.siteMetadata.title)),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,i.a.createElement("div",{className:"container"},t)),i.a.createElement("footer",{className:"container"},"© ",(new Date).getFullYear()))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-js-4bb8ee14944470a66ac6.js.map