"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[7918],{1310:(e,t,n)=>{n.d(t,{Z:()=>g});n(7294);var s=n(512),a=n(5281),o=n(2802),i=n(8596),l=n(3692),c=n(5999),r=n(4996),d=n(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,r.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.Z,{"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const p={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function b(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,d.jsx)(l.Z,{className:a,href:n,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function x(e){let{children:t,active:n,index:a,addMicrodata:o}=e;return(0,d.jsxs)("li",{...o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,s.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function g(){const e=(0,o.s1)(),t=(0,i.Ns)();return e?(0,d.jsx)("nav",{className:(0,s.Z)(a.k.docs.docBreadcrumbs,p.breadcrumbsContainer),"aria-label":(0,c.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,n)=>{const s=n===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(x,{active:s,index:n,addMicrodata:!!a,children:(0,d.jsx)(b,{href:a,isLast:s,children:t.label})},n)}))]})}):null}},5154:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var s=n(7294),a=n(1944),o=n(902),i=n(5893);const l=s.createContext(null);function c(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function r(){const e=(0,s.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:n}=r();return(0,i.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(512),m=n(7524),h=n(49);function p(){const{metadata:e}=r();return(0,i.jsx)(h.Z,{previous:e.previous,next:e.next})}var b=n(3120),x=n(4364),g=n(5281),v=n(5999);function f(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,i.jsx)(v.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function j(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(v.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,i.jsxs)("span",{className:g.k.common.lastUpdated,children:[(0,i.jsx)(v.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,i.jsx)(f,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,i.jsx)(j,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var L=n(4881),k=n(1526);const C={lastUpdated:"lastUpdated_vwxv"};function _(e){return(0,i.jsx)("div",{className:(0,u.Z)(g.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(k.Z,{...e})})})}function Z(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,i.jsxs)("div",{className:(0,u.Z)(g.k.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(L.Z,{editUrl:t})}),(0,i.jsx)("div",{className:(0,u.Z)("col",C.lastUpdated),children:(n||s)&&(0,i.jsx)(N,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function B(){const{metadata:e}=r(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,l=o.length>0,c=!!(t||n||a);return l||c?(0,i.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,i.jsx)(_,{tags:o}),c&&(0,i.jsx)(Z,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var y=n(6043),T=n(3743);const w={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function I(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",w.tocCollapsibleButton,!t&&w.tocCollapsibleButtonExpanded,n.className),children:(0,i.jsx)(v.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const A={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function U(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,y.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(A.tocCollapsible,!o&&A.tocCollapsibleExpanded,n),children:[(0,i.jsx)(I,{collapsed:o,onClick:l}),(0,i.jsx)(y.z,{lazy:!0,className:A.tocCollapsibleContent,collapsed:o,children:(0,i.jsx)(T.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const H={tocMobile:"tocMobile_ITEo"};function E(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(U,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,H.tocMobile)})}var M=n(9407);function S(){const{toc:e,frontMatter:t}=r();return(0,i.jsx)(M.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var P=n(2503),O=n(9265);function V(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=r();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(P.Z,{as:"h1",children:n})}),(0,i.jsx)(O.Z,{children:t})]})}var F=n(1310),R=n(2212);const W={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function D(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=r(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(E,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(S,{})}}(),{metadata:{unlisted:s}}=r();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&W.docItemCol),children:[s&&(0,i.jsx)(R.Z,{}),(0,i.jsx)(b.Z,{}),(0,i.jsxs)("div",{className:W.docItemContainer,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(F.Z,{}),(0,i.jsx)(x.Z,{}),n.mobile,(0,i.jsx)(V,{children:t}),(0,i.jsx)(B,{})]}),(0,i.jsx)(p,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function z(e){const t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,i.jsx)(c,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(d,{}),(0,i.jsx)(D,{children:(0,i.jsx)(n,{})})]})})}},49:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var s=n(5999),a=n(2244),o=n(5893);function i(e){const{previous:t,next:n}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(a.Z,{...t,subLabel:(0,o.jsx)(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,o.jsx)(a.Z,{...n,subLabel:(0,o.jsx)(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(512),a=n(5999),o=n(5281),i=n(4477),l=n(5893);function c(e){let{className:t}=e;const n=(0,i.E)();return n.badge?(0,l.jsx)("span",{className:(0,s.Z)(t,o.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},3120:(e,t,n)=>{n.d(t,{Z:()=>x});n(7294);var s=n(512),a=n(2263),o=n(3692),i=n(5999),l=n(143),c=n(5281),r=n(373),d=n(4477),u=n(5893);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function p(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(o.Z,{to:n,onClick:s,children:(0,u.jsx)(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function b(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:o}}=(0,a.Z)(),{pluginId:i}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,r.J)(i),{latestDocSuggestion:m,latestVersionSuggestion:b}=(0,l.Jo)(i),x=m??(g=b).docs.find((e=>e.id===g.mainDocId));var g;return(0,u.jsxs)("div",{className:(0,s.Z)(t,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:o,versionMetadata:n})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(p,{versionLabel:b.label,to:x.path,onClick:()=>d(b.name)})})]})}function x(e){let{className:t}=e;const n=(0,d.E)();return n.banner?(0,u.jsx)(b,{className:t,versionMetadata:n}):null}},4881:(e,t,n)=>{n.d(t,{Z:()=>d});n(7294);var s=n(5999),a=n(5281),o=n(3692),i=n(512);const l={iconEdit:"iconEdit_Z9Sw"};var c=n(5893);function r(e){let{className:t,...n}=e;return(0,c.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(l.iconEdit,t),"aria-hidden":"true",...n,children:(0,c.jsx)("g",{children:(0,c.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function d(e){let{editUrl:t}=e;return(0,c.jsxs)(o.Z,{to:t,className:a.k.common.editThisPage,children:[(0,c.jsx)(r,{}),(0,c.jsx)(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},2244:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var s=n(512),a=n(3692),o=n(5893);function i(e){const{permalink:t,title:n,subLabel:i,isNext:l}=e;return(0,o.jsxs)(a.Z,{className:(0,s.Z)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,o.jsx)("div",{className:"pagination-nav__label",children:n})]})}},9407:(e,t,n)=>{n.d(t,{Z:()=>r});n(7294);var s=n(512),a=n(3743);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var i=n(5893);const l="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function r(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.Z)(o.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(a.Z,{...n,linkClassName:l,linkActiveClassName:c})})}},3743:(e,t,n)=>{n.d(t,{Z:()=>b});var s=n(7294),a=n(6668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function r(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,s.useRef)(void 0),n=r();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),r=c(l,{anchorTopOffset:n.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(3692),m=n(5893);function h(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const p=s.memo(h);function b(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:r,maxHeadingLevel:u,...h}=e;const b=(0,a.L)(),x=r??b.tableOfContents.minHeadingLevel,g=u??b.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:g}}),[l,c,x,g])),(0,m.jsx)(p,{toc:v,className:n,linkClassName:l,...h})}},3008:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var s=n(512),a=n(3692);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var i=n(5893);function l(e){let{permalink:t,label:n,count:l}=e;return(0,i.jsxs)(a.Z,{href:t,className:(0,s.Z)(o.tag,l?o.tagWithCount:o.tagRegular),children:[n,l&&(0,i.jsx)("span",{children:l})]})}},1526:(e,t,n)=>{n.d(t,{Z:()=>c});n(7294);var s=n(512),a=n(5999),o=n(3008);const i={tags:"tags_jXut",tag:"tag_QGVx"};var l=n(5893);function c(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(a.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,s.Z)(i.tags,"padding--none","margin-left--sm"),children:t.map((e=>{let{label:t,permalink:n}=e;return(0,l.jsx)("li",{className:i.tag,children:(0,l.jsx)(o.Z,{label:t,permalink:n})},n)}))})]})}},2212:(e,t,n)=>{n.d(t,{Z:()=>h});n(7294);var s=n(512),a=n(5999),o=n(5742),i=n(5893);function l(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,i.jsx)(a.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function r(){return(0,i.jsx)(o.Z,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5281),u=n(9047);function m(e){let{className:t}=e;return(0,i.jsx)(u.Z,{type:"caution",title:(0,i.jsx)(l,{}),className:(0,s.Z)(t,d.k.common.unlistedBanner),children:(0,i.jsx)(c,{})})}function h(e){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{}),(0,i.jsx)(m,{...e})]})}},3155:(e,t,n)=>{n.d(t,{Z:()=>T});var s=n(7294),a=n(2389),o=n(512),i=n(5281);const l={codeBlockContainer:"codeBlockContainer_APcc"};var c=n(5893);function r(e){let{as:t,...n}=e;return(0,c.jsx)(t,{...n,className:(0,o.Z)(n.className,l.codeBlockContainer,i.k.common.codeBlock)})}const d={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"};function u(e){let{children:t,className:n}=e;return(0,c.jsx)(r,{as:"pre",tabIndex:0,className:(0,o.Z)(d.codeBlockStandalone,"thin-scrollbar",n),children:(0,c.jsx)("code",{className:d.codeBlockLines,children:t})})}var m=n(6668),h=n(6412),p=n(7016),b=n(5448),x=n(2573);const g={codeLine:"codeLine_iPqp",codeLineNumber:"codeLineNumber_F4P7",codeLineContent:"codeLineContent_pOih"};function v(e){let{line:t,classNames:n,showLineNumbers:s,getLineProps:a,getTokenProps:i}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const l=a({line:t,className:(0,o.Z)(n,s&&g.codeLine)}),r=t.map(((e,t)=>(0,c.jsx)("span",{...i({token:e,key:t})},t)));return(0,c.jsxs)("span",{...l,children:[s?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:g.codeLineNumber}),(0,c.jsx)("span",{className:g.codeLineContent,children:r})]}):r,"\n"]})}var f=n(195),j=n(5999),N=n(345),L=n(7666);const k={copyButtonCopied:"copyButtonCopied__QnY",copyButtonIcons:"copyButtonIcons_FhaS",copyButtonIcon:"copyButtonIcon_phi_",copyButtonSuccessIcon:"copyButtonSuccessIcon_FfTR"};function C(e){let{code:t,className:n}=e;const[a,i]=(0,s.useState)(!1),l=(0,s.useRef)(void 0),r=(0,s.useCallback)((()=>{(0,f.Z)(t),i(!0),l.current=window.setTimeout((()=>{i(!1)}),1e3)}),[t]);return(0,s.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),(0,c.jsx)("button",{type:"button","aria-label":a?(0,j.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,j.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,j.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,o.Z)("clean-btn",n,k.copyButton,a&&k.copyButtonCopied),onClick:r,children:(0,c.jsxs)("span",{className:k.copyButtonIcons,"aria-hidden":"true",children:[(0,c.jsx)(N.Z,{className:k.copyButtonIcon}),(0,c.jsx)(L.Z,{className:k.copyButtonSuccessIcon})]})})}var _=n(670);const Z={wordWrapButtonIcon:"wordWrapButtonIcon_iowe",wordWrapButtonEnabled:"wordWrapButtonEnabled_gY8A"};function B(e){let{className:t,onClick:n,isEnabled:s}=e;const a=(0,j.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.jsx)("button",{type:"button",onClick:n,className:(0,o.Z)("clean-btn",t,s&&Z.wordWrapButtonEnabled),"aria-label":a,title:a,children:(0,c.jsx)(_.Z,{className:Z.wordWrapButtonIcon,"aria-hidden":"true"})})}function y(e){let{children:t,className:n="",metastring:s,title:a,showLineNumbers:o,language:i}=e;const{prism:{defaultLanguage:l,magicComments:r}}=(0,m.L)(),u=function(e){return e?.toLowerCase()}(i??(0,p.Vo)(n)??l),g=(0,h.p)(),f=(0,b.F)(),j=(0,p.bc)(s)||a,{lineClassNames:N,code:L}=(0,p.nZ)(t,{metastring:s,language:u,magicComments:r}),k=o??(0,p.nt)(s);return(0,c.jsxs)("div",{children:[j&&(0,c.jsx)("div",{className:d.codeBlockTitle,children:j}),(0,c.jsxs)("div",{children:[(0,c.jsx)(x.y$,{theme:g,code:L,language:u??"text",children:e=>{let{className:t,style:s,tokens:a,getLineProps:o,getTokenProps:i}=e;return(0,c.jsx)("pre",{tabIndex:0,ref:f.codeBlockRef,children:(0,c.jsx)("code",{children:a.map(((e,t)=>{return(0,c.jsx)(v,{line:e,getLineProps:o,getTokenProps:n.match(/lips/)?(s=i,function(){const{style:e,...t}=s(...arguments);return t}):i,classNames:N[t],showLineNumbers:k},t);var s}))})})}}),(0,c.jsxs)("div",{className:d.buttonGroup,children:[(f.isEnabled||f.isCodeScrollable)&&(0,c.jsx)(B,{className:d.codeButton,onClick:()=>f.toggle(),isEnabled:f.isEnabled}),(0,c.jsx)(C,{className:d.codeButton,code:L})]})]})]})}function T(e){let{children:t,...n}=e;const o=(0,a.Z)(),i=function(e){return s.Children.toArray(e).some((e=>(0,s.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof i?y:u;return(0,c.jsx)(l,{...n,children:i},String(o))}}}]);