(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+x2M":function(e,t,a){e.exports=a("xhtX")},"/twM":function(e,t,a){"use strict";a("E5k/"),a("3nLz");var r=a("ulZj"),i=a("q1tI"),n=a.n(i),s=a("+x2M"),d=a.n(s),o=a("9eSz"),l=a.n(o),u=a("Wbzz"),c=a("p3AD");function f(e){var t=e.post,a=e.hideAvatar,i=e.hideAuthor,s=e.hideDate,o=e.hideReadTime;return n.a.createElement(u.StaticQuery,{query:A,render:function(e){var r=e.site.siteMetadata.author,u=e.avatar;return n.a.createElement("div",{style:{display:"flex"}},!a&&n.a.createElement(l.a,{fixed:u.childImageSharp.fixed,alt:r,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("div",null,!i&&n.a.createElement("p",{style:Object.assign({},Object(c.b)(-.2),{display:"block",marginBottom:Object(c.a)(1),color:"black"})},r),n.a.createElement("p",{style:Object.assign({},Object(c.b)(-.3),{display:"block",marginTop:Object(c.a)(-1),color:"grey"})},!s&&t.frontmatter.date," ",!o&&n.a.createElement("span",null,"·")," ",!o&&d()(t.html).text)))},data:r})}f.defaultProps={hideAuthor:!1,hideAvatar:!1,hideDate:!1,hideReadTime:!1};var A="2799465628";t.a=f},"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=c(e),a=A(t);return h[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,y=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?R(e,!0):"")+R(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(B,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),B=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));B.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var z=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=A(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,A=e.placeholderClassName,h=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,y=e.itemProp,S=e.loading,R=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,o.default)({opacity:j?1:0,transition:z?"opacity "+b+"ms":"none"},d),N="boolean"==typeof m?"lightgray":m,C={transitionDelay:b+"ms"},Q=(0,o.default)((0,o.default)((0,o.default)({opacity:this.state.imgLoaded?0:1},z&&C),d),f),T={title:t,alt:this.state.isVisible?"":a,style:Q,className:A,itemProp:y};if(h){var k=h,H=g(h);return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&C)}),H.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:T,imageVariants:k,generateSources:I}),H.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:T,imageVariants:k,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,E(k),l.default.createElement(B,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)((0,o.default)({alt:a,title:t,loading:S},H),{},{imageVariants:k}))}}))}if(p){var M=p,P=g(p),W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},N&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:N,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},z&&C)}),P.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:T,imageVariants:M,generateSources:I}),P.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:T,imageVariants:M,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,E(M),l.default.createElement(B,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:R})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,o.default)((0,o.default)({alt:a,title:t,loading:S},P),{},{imageVariants:M}))}}))}return null},t}(l.default.Component);z.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var L=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});z.propTypes={resolutions:L,sizes:N,fixed:u.default.oneOfType([L,u.default.arrayOf(L)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=z;t.default=C},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),d=a("xa9o"),o=a("yde8"),l=a("Wadk"),u=a("qDzq"),c=a("O1i0"),f=l(5),A=l(6),g=0,h=function(e){return e._l||(e._l=new p)},p=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};p.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){d(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&o(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),s=a("IYdN"),d=a("N+BI"),o=a("k5Iv"),l=a("SGlo"),u=a("BjK0"),c=a("O1i0"),f=a("O1i0"),A=!i.ActiveXObject&&"ActiveXObject"in i,g=d.getWeak,h=Object.isExtensible,p=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=g(e);return!0===t?p(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},v=e.exports=a("94Pd")("WeakMap",m,b,l,!0,!0);f&&A&&(o((r=l.getConstructor(m,"WeakMap")).prototype,b),d.NEED=!0,n(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,d=function(e,t,a,r){var i=String(n(e)),d="<"+t;return""!==a&&(d+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),d+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(d),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},ulZj:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAQFAQIG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAbyr2qJOsQxIFZC//8QAHBAAAgICAwAAAAAAAAAAAAAAAQIAAwQTERIj/9oACAEBAAEFAi4Bqzdl0yXgPK0Hz1pNaToon//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/AWP/xAAVEQEBAAAAAAAAAAAAAAAAAAARIP/aAAgBAgEBPwFj/8QAHRAAAgICAwEAAAAAAAAAAAAAAAECETEyEBKRgf/aAAgBAQAGPwI61UXjhr4Risxd2Zo1XhpHw1R//8QAHBABAAMAAwEBAAAAAAAAAAAAAQARITFBUYHx/9oACAEBAAE/Iam+XcEWcC7uCJZsHzzXkzTpKgrqHXCviKKt7zH5iHAD5P/aAAwDAQACAAMAAAAQIDh8/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQMBAT8QFT4RZ//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QgTq3/8QAHhABAQACAgIDAAAAAAAAAAAAAREAITFRYcFx0fD/2gAIAQEAAT8Q2DDZ0xjb1N6L8/WUQDsca2HSTySVMNinAoEjt3dZGIiHQjz7xKtKkVfOfnvWWt01h25//9k=","width":50,"height":50,"src":"/static/3e54bfe31de3a0ebbeff4858d6101bba/99438/wildcards.jpg","srcSet":"/static/3e54bfe31de3a0ebbeff4858d6101bba/99438/wildcards.jpg 1x,\\n/static/3e54bfe31de3a0ebbeff4858d6101bba/aba1d/wildcards.jpg 1.5x,\\n/static/3e54bfe31de3a0ebbeff4858d6101bba/b315d/wildcards.jpg 2x"}}},"site":{"siteMetadata":{"author":"Team Wildcards","social":{"twitter":"wildcards_world"}}}}}')},xhtX:function(e,t,a){"use strict";function r(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var a,i,n=0,s=0,d=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,a=t.wordBound||r;a(e[s]);)s++;for(;a(e[d]);)d--;for(i=s;i<=d;){for(;i<=d&&!a(e[i]);i++);for(n++;i<=d&&a(e[i]);i++);}var o=n/t.wordsPerMinute,l=60*o*1e3;return{text:Math.ceil(o.toFixed(2))+" min read",minutes:o,time:l,words:n}}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-92c3bf737b2158b9e614.js.map