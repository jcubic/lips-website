"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[195],{2084:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=n(5893),t=n(1151);const c={sidebar_position:2},l="Data Types",a={id:"scheme-intro/data-types",title:"Data Types",description:"Numbers",source:"@site/docs/scheme-intro/data-types.md",sourceDirName:"scheme-intro",slug:"/scheme-intro/data-types",permalink:"/lips-website/docs/scheme-intro/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/jcubic/lips-website/tree/docusaurus/docs/docs/scheme-intro/data-types.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Lisp",permalink:"/lips-website/docs/scheme-intro/what-is-lisp"},next:{title:"Tutorial - Basics",permalink:"/lips-website/docs/category/tutorial---basics"}},r={},o=[{value:"Numbers",id:"numbers",level:2},{value:"Boolean values",id:"boolean-values",level:2},{value:"Strings",id:"strings",level:2},{value:"Characters",id:"characters",level:2},{value:"Symbols",id:"symbols",level:2},{value:"Comments",id:"comments",level:2},{value:"Empty list",id:"empty-list",level:2},{value:"Pairs",id:"pairs",level:2},{value:"Cycles",id:"cycles",level:2},{value:"Vectors",id:"vectors",level:2},{value:"Quotations",id:"quotations",level:2},{value:"Base Quote",id:"base-quote",level:3},{value:"Quasiquote",id:"quasiquote",level:3},{value:"Quotation of quotation",id:"quotation-of-quotation",level:3},{value:"Special symbols",id:"special-symbols",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"data-types",children:"Data Types"}),"\n",(0,i.jsx)(s.h2,{id:"numbers",children:"Numbers"}),"\n",(0,i.jsxs)(s.p,{children:["R",(0,i.jsx)("sup",{children:"7"}),"RS specification define Numerical Tower, different type of numbers and operation on them.\nBut it's not required for Scheme implementation to add support for them. Some Scheme implementation do."]}),"\n",(0,i.jsx)(s.p,{children:"Basic numbers are:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Integers, e.g. ",(0,i.jsx)(s.code,{children:"10"}),", ",(0,i.jsx)(s.code,{children:"20"}),", or ",(0,i.jsx)(s.code,{children:"1000"})]}),"\n",(0,i.jsxs)(s.li,{children:["floats, e.g. ",(0,i.jsx)(s.code,{children:"1.2"}),", ",(0,i.jsx)(s.code,{children:"1e-2"})," (you can use ",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Scientific_notation",children:"scientific notation"}),")"]}),"\n",(0,i.jsxs)(s.li,{children:["rationals e.g. ",(0,i.jsx)(s.code,{children:"1/2"}),", ",(0,i.jsx)(s.code,{children:"3/4"}),", or ",(0,i.jsx)(s.code,{children:"1/10"})]}),"\n",(0,i.jsxs)(s.li,{children:["complex numbers ",(0,i.jsx)(s.code,{children:"10+10i"}),", ",(0,i.jsx)(s.code,{children:"1/2+1/2i"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["There is also notion of exactness in those numbers. Inexact numbers are floats, the rest of the\nnumbers are exact because they don't give any rounding errors like floats do (this is how\n",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/IEEE_754",children:"IEEE 754"})," standard for floating numbers work)."]}),"\n",(0,i.jsx)(s.h2,{id:"boolean-values",children:"Boolean values"}),"\n",(0,i.jsxs)(s.p,{children:["Scheme define two boolean constants ",(0,i.jsx)(s.code,{children:"#f"})," and ",(0,i.jsx)(s.code,{children:"#t"})," but note that the only false value, according to\nR",(0,i.jsx)("sup",{children:"7"}),"RS specification, should be ",(0,i.jsx)(s.code,{children:"#f"}),". Specification also define ",(0,i.jsx)(s.code,{children:"#true"})," and ",(0,i.jsx)(s.code,{children:"#false"}),"\naliases. Some Scheme also define ",(0,i.jsx)(s.code,{children:"true"})," and ",(0,i.jsx)(s.code,{children:"false"})," without hash."]}),"\n",(0,i.jsx)(s.h2,{id:"strings",children:"Strings"}),"\n",(0,i.jsxs)(s.p,{children:["Strings in Scheme use only double quote symbols. They can be multiline. If you want to add double\nquote you need to escape with with slash ",(0,i.jsx)(s.code,{children:'"this is \\"Scheme\\" languguage"'}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["You can also inject hex representation of a character with ",(0,i.jsx)(s.code,{children:'"\\x1B;"'})," this will create string with\nEscape character used by Terminal emulators to add formatting (like colors)."]}),"\n",(0,i.jsx)(s.h2,{id:"characters",children:"Characters"}),"\n",(0,i.jsx)(s.p,{children:"You can define single character as data type"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"#\\A\n#\\B\n#\\c\n"})}),"\n",(0,i.jsx)(s.p,{children:"you can use characters form a string:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"(string #\\h #\\e #\\l #\\l #\\o)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This evaluates into string ",(0,i.jsx)(s.code,{children:'"hello"'})]}),"\n",(0,i.jsx)(s.p,{children:"You can also split the string into individual characters:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:'(string->vector "hello")\n'})}),"\n",(0,i.jsxs)(s.p,{children:["This evaluates into vector of characters: ",(0,i.jsx)(s.code,{children:"#(#\\h #\\e #\\l #\\l #\\o)"})]}),"\n",(0,i.jsx)(s.h2,{id:"symbols",children:"Symbols"}),"\n",(0,i.jsx)(s.p,{children:"Symbols are special type of objects that are similar to string but without quotes. They can appear as\nvariable names but can also be used as values but this require quotation."}),"\n",(0,i.jsx)(s.p,{children:"Valid symbols:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"foo\nbar\nbaz\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can also convert string to symbol with:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:'(string->symbol "hello")\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Scheme have conversion of using ",(0,i.jsx)(s.code,{children:"->"})," arrow to define procedure that convert types."]}),"\n",(0,i.jsx)(s.h2,{id:"comments",children:"Comments"}),"\n",(0,i.jsx)(s.p,{children:"There are 3 types of comments in Scheme:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:";"}),"semicolon create comments to the end of the line"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"#;"})," quote single S-Expression (list)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"#|   |#"})," those are multiline quotes that can wrap any text inside"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"empty-list",children:"Empty list"}),"\n",(0,i.jsx)(s.p,{children:"An empty list os special object in Scheme that insidcate end of the list."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"()\n"})}),"\n",(0,i.jsx)(s.h2,{id:"pairs",children:"Pairs"}),"\n",(0,i.jsxs)(s.p,{children:["The base of Lisp and Scheme are Pairs also called ",(0,i.jsx)(s.code,{children:"cons"})," cells. You can create them with cons operation:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"(cons 1 2)\n"})}),"\n",(0,i.jsx)(s.p,{children:"or with dot syntax:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"(1 . 2)\n"})}),"\n",(0,i.jsx)(s.p,{children:"But the second example require quotation otherwise Scheme will try to evaluate 1 as a function."}),"\n",(0,i.jsx)(s.p,{children:"If cons cells are put into e sequence:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"(1 . (2 . (3 . ())))\n"})}),"\n",(0,i.jsx)(s.p,{children:"The last cell is a pair of 3 and empty list. If you create cons like this, it's simplified as list when printed:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"(1 2 3)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To create the same list you can use ",(0,i.jsx)(s.code,{children:"list"})," procedure"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"(list 1 2 3)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["To get the first element of the list you use procedure ",(0,i.jsx)(s.code,{children:"car"})," and to get the rest of the list you use ",(0,i.jsx)(s.code,{children:"cdr"}),".\nSo ",(0,i.jsx)(s.code,{children:"car"})," and ",(0,i.jsx)(s.code,{children:"cdr"})," returns first and second element of the Pair (cons cell)."]}),"\n",(0,i.jsxs)(s.p,{children:["Scheme used ",(0,i.jsx)(s.code,{children:"car"})," and ",(0,i.jsx)(s.code,{children:"cdr"})," for historical reasons. The first lisp interpreter was using address\nregisters of ",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/IBM_704",children:"IBM 704"})," mainframe computer."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["car stands for ",(0,i.jsx)(s.strong,{children:"Contents of the Address part of Register"})]}),"\n",(0,i.jsxs)(s.li,{children:["cdr stands for ",(0,i.jsx)(s.strong,{children:"Contents of the Decrement part of Register"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Scheme should also define abbreviations for list accessors:"}),"\n",(0,i.jsxs)(s.p,{children:["example ",(0,i.jsx)(s.code,{children:"caddr"})," is third element of the list. It's the same as ",(0,i.jsx)(s.code,{children:"(car (cdr (cdr x)))"}),". Often Scheme\nand lisp interpreters define up to 5 combinations of ",(0,i.jsx)(s.code,{children:"d"})," and ",(0,i.jsx)(s.code,{children:"a"})," to get different elements out of a\nlist."]}),"\n",(0,i.jsx)(s.h2,{id:"cycles",children:"Cycles"}),"\n",(0,i.jsx)(s.p,{children:"You can create list cycles directly when definiting your data stracture with datum syntax."}),"\n",(0,i.jsx)(s.p,{children:"It looks like this:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"#0=(1 2 . #0#)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This will create an infinite list of values ",(0,i.jsx)(s.code,{children:"(1 2 1 2 1 2 ...)"}),". ",(0,i.jsx)(s.code,{children:"#0"})," indicate pointer and ",(0,i.jsx)(s.code,{children:"#0#"})," a reference to the beginning of the list."]}),"\n",(0,i.jsx)(s.h2,{id:"vectors",children:"Vectors"}),"\n",(0,i.jsx)(s.p,{children:"Vectors are created like list but they have hash in front:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"#(1 2 3 4)\n"})}),"\n",(0,i.jsx)(s.p,{children:"This will create immutable vector that can't be changed. To create a vector that can be modified you can use"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"(vector 1 2 3)\n"})}),"\n",(0,i.jsx)(s.h2,{id:"quotations",children:"Quotations"}),"\n",(0,i.jsx)(s.p,{children:"By default if you write lists they are treated as code. To create a data you need quotations."}),"\n",(0,i.jsx)(s.h3,{id:"base-quote",children:"Base Quote"}),"\n",(0,i.jsx)(s.p,{children:"To create basic quotation you use single quote character:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"'(1 2 3 4)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["When Scheme find this expression it will not try to execute the function ",(0,i.jsx)(s.code,{children:"1"})," only return this list as data."]}),"\n",(0,i.jsx)(s.p,{children:"Vector syntax is automatically quoted."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"'#(1 2 3)\n"})}),"\n",(0,i.jsx)(s.p,{children:"is the same as:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"#(1 2 3)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"quasiquote",children:"Quasiquote"}),"\n",(0,i.jsx)(s.p,{children:"There is also different type of quotation that allow execute part of the expression. It's called quasi quote.\nTo create quasi quote you need back tick symbol. That's why it's often called back quotation."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"`(1 2 ,(+ 2 1))\n"})}),"\n",(0,i.jsx)(s.p,{children:"comma is special syntax that can be used inside quasi quote to indicate that expression after it should be evaluated and inserted into the list. This will evaluate into same expression as:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"'(1 2 3)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["There is also another escape symbol which is ",(0,i.jsx)(s.code,{children:",@"}),". it work similar to comma but the data inside (it must be a list) is spliced into the outer list."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"`(1 2 3 ,@(list 4 5 6))\n"})}),"\n",(0,i.jsx)(s.p,{children:"The result expression will look like this:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"'(1 2 3 4 5 6)\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can also use quasi quote with vectors:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"`#(1 2 ,(+ 1 2))\n"})}),"\n",(0,i.jsx)(s.p,{children:"This will evaluate into vector with 3 elements:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"#(1 2 3)\n"})}),"\n",(0,i.jsx)(s.h3,{id:"quotation-of-quotation",children:"Quotation of quotation"}),"\n",(0,i.jsx)(s.p,{children:"If you quote the quotation you will get expression that change special symbols with S-Expressions:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"''(1 2 3)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Will return:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shcheme",children:"(quote (1 2 3))\n"})}),"\n",(0,i.jsx)(s.p,{children:"Because comma is just an alias for quote. You can use them interchangeably. But using symbols is\nfaster to type. if you quote quasi quote expression you will also get symbols expanded:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"'`(1 2 3 ,(+ 1 2) ,@(list 4 5))\n"})}),"\n",(0,i.jsx)(s.p,{children:"This will be the output:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"(quasiquote (1 2 3 (unquote (+ 1 2)) (unquote-splicing (list 4 5))))\n"})}),"\n",(0,i.jsx)(s.h2,{id:"special-symbols",children:"Special symbols"}),"\n",(0,i.jsx)(s.p,{children:"Most special symbols in Scheme start with a hash symbol. Example are Byte vectors"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-scheme",children:"#u8(1 2 3 4)\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Above creates 8 bit byte vector of numbers. in R",(0,i.jsx)("sup",{children:"7"}),"RS only unsigned 8 bit vectors are\ndefined. But in ",(0,i.jsx)(s.a,{href:"https://srfi.schemers.org/srfi-4/srfi-4.html",children:"SRFI-4"})," are more bit vectors types.\nThey all starts with hash. In different SRFI there are no examples of syntax's that start with\nhash. This is just a convention everything is using."]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>l});var i=n(7294);const t={},c=i.createContext(t);function l(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);