"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[15],{486:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(5893),t=i(1151);const a={sidebar_position:1,description:"What is Lisp and what is Scheme and a bit of history"},r="What is Lisp",o={id:"scheme-intro/what-is-lisp",title:"What is Lisp",description:"What is Lisp and what is Scheme and a bit of history",source:"@site/docs/scheme-intro/what-is-lisp.md",sourceDirName:"scheme-intro",slug:"/scheme-intro/what-is-lisp",permalink:"/lips-website/docs/scheme-intro/what-is-lisp",draft:!1,unlisted:!1,editUrl:"https://github.com/jcubic/lips-website/tree/docusaurus/docs/docs/scheme-intro/what-is-lisp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"What is Lisp and what is Scheme and a bit of history"},sidebar:"tutorialSidebar",previous:{title:"Introduction to Scheme",permalink:"/lips-website/docs/category/introduction-to-scheme"},next:{title:"Data Types",permalink:"/lips-website/docs/scheme-intro/data-types"}},h={},c=[{value:"S-Expressions",id:"s-expressions",level:2},{value:"Nesting expressions",id:"nesting-expressions",level:2},{value:"What is Scheme",id:"what-is-scheme",level:2},{value:"Standards",id:"standards",level:3},{value:"Scheme Implementations",id:"scheme-implementations",level:3},{value:"SRFI Documents",id:"srfi-documents",level:3}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"what-is-lisp",children:"What is Lisp"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Lisp cycle",src:i(2760).Z+"",width:"640",height:"211"})}),"\n",(0,n.jsxs)(s.p,{children:["Lisp is second oldest programming language (after Fortran) that is still in use.  Lisp is an acronym\nfor ",(0,n.jsx)(s.strong,{children:"LISt Processing"}),". It was invented by ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/John_McCarthy_(computer_scientist)",children:"John\nMcCarthy"})," in 1958 at\n",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Massachusetts_Institute_of_Technology",children:"MIT"}),". The main feature of Lisp\nis it's lack of syntax.  The idea for Lisp langauge came from mathematics, to be exact ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Lambda_calculus",children:"Lambda\nCalculus"})," defined by ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Alonzo_Church",children:"Alonzo\nChurch"}),", which was invented or discovered to prove that\nthe ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Halting_problem",children:"halting problem"})," is unsolvable."]}),"\n",(0,n.jsx)(s.h2,{id:"s-expressions",children:"S-Expressions"}),"\n",(0,n.jsx)(s.p,{children:"In Lisp, everything is written as S-Expression which is a list wrapped in parentheses with space\nbetween elements."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scheme",children:"(+ 1 2 3)\n"})}),"\n",(0,n.jsx)(s.p,{children:"This is basic lisp expression. The difference between Scheme and other programming languages that often\nwrite the same expression as:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"1 + 2 + 3\n"})}),"\n",(0,n.jsx)(s.p,{children:"Is that in Lisp there are no operators. The above expression is just procedure application (function call)."}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"NOTE"}),": We will use procedure and function interchangeably in this tutorial."]}),"\n",(0,n.jsx)(s.p,{children:"Plus is not an operator only a symbol that point into addition procedure that is executed. So in fact in other\nprogramming languages this should be written as:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"+(1, 2, 3)\n"})}),"\n",(0,n.jsx)(s.p,{children:"This is obviously invalid syntax (in most languages)."}),"\n",(0,n.jsx)(s.h2,{id:"nesting-expressions",children:"Nesting expressions"}),"\n",(0,n.jsx)(s.p,{children:"The S-Expressions can be nested:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-scheme",children:"(+ (* 3 (/ 1 2)) (+ 1 2))\n"})}),"\n",(0,n.jsx)(s.p,{children:"But you can't add parentheses randomly to wrap expressions, like in other languages. Parentheses is always\nprocedure application (or special form that will be described later)."}),"\n",(0,n.jsx)(s.p,{children:"S-Expression is most efficient way to write function application, and you can form with it any nested trees."}),"\n",(0,n.jsx)(s.h2,{id:"what-is-scheme",children:"What is Scheme"}),"\n",(0,n.jsx)(s.p,{children:"So now what is Scheme. Scheme is a dialect of Lisp, there are other well known dialects of Lisp,\nlike Common Lisp, Racket, Clojure. They all have one in common, they all use S-Expressions for\nsyntax (or lack of)."}),"\n",(0,n.jsx)(s.p,{children:"Scheme was designed by ''Guy L. Steele'' and ''Gerald Jay Sussman'' in 1970s. They were playing with\nan idea called the actor model and trying to understand it by creating simple implementation. That\nimplementation later lead to Scheme programming languages."}),"\n",(0,n.jsx)(s.h3,{id:"standards",children:"Standards"}),"\n",(0,n.jsxs)(s.p,{children:["Scheme is standardized in form of ",(0,n.jsxs)(s.a,{href:"https://standards.scheme.org/",children:["R",(0,n.jsx)("sup",{children:"n"}),"RS documents"]}),".\nRevised",(0,n.jsx)("sup",{children:"n"})," Report on the Algorithmic Language Scheme. Where power indicate how many times\nit was revisited. Power of 2 means Revisited Revisited."]}),"\n",(0,n.jsxs)(s.p,{children:["The latest standard is R",(0,n.jsx)("sup",{children:"7"}),"RS Small and there is version large in the making."]}),"\n",(0,n.jsx)(s.h3,{id:"scheme-implementations",children:"Scheme Implementations"}),"\n",(0,n.jsx)(s.p,{children:"You can find different implementations of the Programming language that re more or less compatible\nwith specification."}),"\n",(0,n.jsx)(s.p,{children:"Example implementations:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.gnu.org/software/guile/",children:"Guile"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.gnu.org/software/kawa/index.html",children:"Kawa"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://practical-scheme.net/gauche/",children:"Gauche"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.call-cc.org/",children:"Chiken"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://lips.js.org/",children:"LIPS"})}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The official website for Scheme programming language is ",(0,n.jsx)(s.a,{href:"https://www.scheme.org/",children:"scheme.org"}),", which\ncontaints more up to date ",(0,n.jsx)(s.a,{href:"https://get.scheme.org/",children:"list of Scheme implemetnations"}),"."]}),"\n",(0,n.jsx)(s.h3,{id:"srfi-documents",children:"SRFI Documents"}),"\n",(0,n.jsxs)(s.p,{children:["SRFI stands for Scheme Requests for Implementations. And are official documents that add new\nfeatures to the languages. Some of the SRFI may land in new version of R",(0,n.jsx)("sup",{children:"n"}),"RS\nspecification. The website for SRFI documents is located at\n",(0,n.jsx)(s.a,{href:"https://srfi.schemers.org/",children:"srfi.schemers.org"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2760:(e,s,i)=>{i.d(s,{Z:()=>n});const n=i.p+"assets/images/lisp_cycles-ca105433db10b3c9c4ad7a4454c84fa0.png"},1151:(e,s,i)=>{i.d(s,{Z:()=>o,a:()=>r});var n=i(7294);const t={},a=n.createContext(t);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);