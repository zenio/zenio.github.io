(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return u});var a=n(0),r=n.n(a),o=n(148),i=n(155),u="3891468002";t.default=function(e){var t=e.data.allMarkdownRemark.edges;return console.log(t),r.a.createElement(i.a,null,r.a.createElement("h1",null,"Hi! Wellcome!"),r.a.createElement("p",null,"Nice to meet you on my blog."),t.map(function(e){var t=e.node.frontmatter;return r.a.createElement("div",{key:t.path},r.a.createElement(o.Link,{to:t.path},t.title))}),r.a.createElement(o.Link,{to:"/about/"},"About"),r.a.createElement(o.Link,{to:"/tags"},"Tags"))}},147:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(150)),o=a(n(151)),i=a(n(7)),u=a(n(51)),l=a(n(52)),s=a(n(4)),c=a(n(0)),d=n(16),p=n(148);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this,t)||this,(0,l.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,l=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=f(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:s,replace:m})),!0}},h))},t}(c.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=c.default.forwardRef(function(e,t){return c.default.createElement(h,(0,o.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(147),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var s=n(149),c=n.n(s);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},149:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},151:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(53),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Zenio"}}}}},154:function(e,t,n){},155:function(e,t,n){"use strict";var a=n(153),r=n(0),o=n.n(r),i=n(4),u=n.n(i),l=n(148),s=function(){return o.a.createElement("nav",null,o.a.createElement(l.Link,{to:"/about"},"About"),o.a.createElement(l.Link,{to:"/contact"},"Contact"))},c=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"#0c457d",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t)),o.a.createElement(s,null)))};c.propTypes={siteTitle:u.a.string},c.defaultProps={siteTitle:""};var d=c,p=(n(154),function(e){var t=e.children;return o.a.createElement(l.StaticQuery,{query:"86343720",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear())))},data:a})});p.propTypes={children:u.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-index-js-8e2ba12fdfa8ba96fce6.js.map