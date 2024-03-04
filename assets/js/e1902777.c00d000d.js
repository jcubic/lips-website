"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[5609],{5264:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var i=s(5893),a=s(1151);const r={sidebar_position:1},c="Core features",t={id:"lips/intro",title:"Core features",description:"null and undefined",source:"@site/docs/lips/intro.md",sourceDirName:"lips",slug:"/lips/intro",permalink:"/lips-website/docs/lips/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/jcubic/lips-website/tree/docusaurus/docs/docs/lips/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"LIPS introduction",permalink:"/lips-website/docs/category/lips-introduction"},next:{title:"Environments",permalink:"/lips-website/docs/lips/environments"}},o={},l=[{value:"null and undefined",id:"null-and-undefined",level:2},{value:"Numerical tower",id:"numerical-tower",level:2},{value:"Print procedure",id:"print-procedure",level:2},{value:"Emoji",id:"emoji",level:2},{value:"Macros",id:"macros",level:2},{value:"Gensyms",id:"gensyms",level:3},{value:"Integration with JavaScript",id:"integration-with-javascript",level:2},{value:"Dot notation",id:"dot-notation",level:3},{value:"Mutatiing object properties",id:"mutatiing-object-properties",level:3},{value:"Boxing",id:"boxing",level:3},{value:"Macros",id:"macros-1",level:3},{value:"Lagacy macros and functions",id:"lagacy-macros-and-functions",level:4},{value:"Scheme functions",id:"scheme-functions",level:3},{value:"JavaScript functions",id:"javascript-functions",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"Regular Expressions",id:"regular-expressions",level:3},{value:"Vectors",id:"vectors",level:3},{value:"Object literals",id:"object-literals",level:3},{value:"Automagic async/await",id:"automagic-asyncawait",level:3},{value:"Promise quotation",id:"promise-quotation",level:3},{value:"Promises vs Delay expression",id:"promises-vs-delay-expression",level:3},{value:"Classes",id:"classes",level:2},{value:"Node.js",id:"nodejs",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"core-features",children:"Core features"}),"\n",(0,i.jsx)(n.h2,{id:"null-and-undefined",children:"null and undefined"}),"\n",(0,i.jsx)(n.p,{children:"LIPS define those values as Parser constants so they can be used inside quoted expressions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(let ((lst '(undefined null)))\n  (write (symbol? (car lst)))\n  (newline)\n  (write (symbol? (cadr lst)))\n  (newline))\n;; ==> #f\n;; ==> #f\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"})," that they are not false values. LIPS follows R",(0,i.jsx)("sup",{children:"7"}),"RS spec and ",(0,i.jsx)(n.code,{children:"#f"})," is the only falsy\nvalue. This may change when final 1.0 is released. It's not yet decided if those should also be falsy\nvalues, since they are part of JavaScript and it would simplify the code."]}),"\n",(0,i.jsx)(n.h2,{id:"numerical-tower",children:"Numerical tower"}),"\n",(0,i.jsx)(n.p,{children:"LIPS support full numerical tower (not yet 100% unit tested):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"integers - using BitInt"}),"\n",(0,i.jsx)(n.li,{children:"floats - using JavaScript numbers"}),"\n",(0,i.jsx)(n.li,{children:"rationals"}),"\n",(0,i.jsx)(n.li,{children:"complex numbers (that can use integers, floats, or rationals)"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"print-procedure",children:"Print procedure"}),"\n",(0,i.jsxs)(n.p,{children:["LIPS define helper ",(0,i.jsx)(n.code,{children:"print"})," procedure that display all its arguments with newline after each element."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(print 1 2 3)\n;; ==> 1\n;; ==> 2\n;; ==> 3\n"})}),"\n",(0,i.jsx)(n.h2,{id:"emoji",children:"Emoji"}),"\n",(0,i.jsx)(n.p,{children:"LIPS fully supports all unicode characters including emoji:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define smiley #\\\ud83d\ude00)\n(define poo #\\\ud83d\udca9)\n(write (string-append (string smiley) " " (string poo)))\n;; ==> "\ud83d\ude00 \ud83d\udca9"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also use them as part of symbols (e.g. as variables name):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define (\u23cf\ufe0f)\n  (print "ejecting"))\n(\u23cf\ufe0f)\n;; ==> ejecting\n'})}),"\n",(0,i.jsx)(n.h2,{id:"macros",children:"Macros"}),"\n",(0,i.jsxs)(n.p,{children:["LIPS define both Lisp macros and Scheme hygienic macros (",(0,i.jsx)(n.code,{children:"syntax-rules"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"It also implements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-46/",children:"SRFI-46"})," which allows to change ellipsis symbol for nested syntax-rules."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-139/",children:"SRFI-139"})," which allows to define\n",(0,i.jsx)(n.a,{href:"/docs/scheme-intro/macros#anaphoric-hygienic-macros",children:"anaphoric syntax-rules macros"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-147/",children:"SRFI-147"})," which allows to define new syntax-rules macros to define syntax-rules macros."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"gensyms",children:"Gensyms"}),"\n",(0,i.jsx)(n.p,{children:"With lisp macros you can use gensyms they are special Scheme symbols that use JavaScript symbols\nbehind the sceen so they are proven to be unique. Additionaly you can use named gensym if you pass\nstring as first argument:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(gensym)\n;; ==> #:g5\n(gensym "sym")\n;; ==> #:sym\n'})}),"\n",(0,i.jsx)(n.h2,{id:"integration-with-javascript",children:"Integration with JavaScript"}),"\n",(0,i.jsx)(n.h3,{id:"dot-notation",children:"Dot notation"}),"\n",(0,i.jsx)(n.p,{children:"LIPS allow accessing JavaScript objects with dot notation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"document.querySelector\n;; ==> #<procedure(native)>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"mutatiing-object-properties",children:"Mutatiing object properties"}),"\n",(0,i.jsxs)(n.p,{children:["You can use dot notation with ",(0,i.jsx)(n.code,{children:"set!"})," to change the value:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(set! self.foo 10)\nself.foo\n"})}),"\n",(0,i.jsxs)(n.p,{children:["top level ",(0,i.jsx)(n.code,{children:"self"})," always points to a global object ",(0,i.jsx)(n.code,{children:"window"})," in browser or ",(0,i.jsx)(n.code,{children:"global"})," in Node."]}),"\n",(0,i.jsxs)(n.p,{children:["There is also older API that still work, which is ",(0,i.jsx)(n.code,{children:"set-obj!"})," but with dot notation you don't\nneed it anymore:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(set-obj! self 'foo 10)\n(display self.foo)\n;; ==> 10\n"})}),"\n",(0,i.jsx)(n.p,{children:"In both platforms you can access global JavaScript objects like normal variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(set! self.greet "hello, LIPS")\n(write greet)\n;; ==> "hello, LIPS"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"boxing",children:"Boxing"}),"\n",(0,i.jsx)(n.p,{children:"LIPS have its own representation for numbers, strings and characters. And when\ninteracting with JavaScript the values may get boxed or unboxed automatigally."}),"\n",(0,i.jsxs)(n.p,{children:["You should not confuse boxing with boxes (",(0,i.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-111/",children:"SRFI-111"})," and\n",(0,i.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-195",children:"SRFI-195"}),"). LIPS boxes are part of implementation of Scheme\ndata types. And SRFI boxes are containers written in Scheme."]}),"\n",(0,i.jsx)(n.h3,{id:"macros-1",children:"Macros"}),"\n",(0,i.jsxs)(n.p,{children:["The most usefull macro in LIPS (for interacting with JavaScript) is ",(0,i.jsx)(n.code,{children:"--\x3e"})," it\nacts like a chain of method calls in JavaScript"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(--\x3e "this is string" (split " ") (reverse) (join " "))\n;; ==> "string is this"\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can chain methods that return arrays or string and call a method of them. Above\nexpression is the same as JavaScript:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"\"this is string\".split(' ').reverse().join(' ');\n"})}),"\n",(0,i.jsx)(n.h4,{id:"lagacy-macros-and-functions",children:"Lagacy macros and functions"}),"\n",(0,i.jsx)(n.p,{children:"There are two legacy macros that are still part of LIPS, but you don't need\nthem anymore."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"."})," - dot function was a first way to interact with JavaScript it allowed to\nget property from an object:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(. document 'querySelector)\n"})}),"\n",(0,i.jsx)(n.p,{children:"This returned function querySelector from document object in browser."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:".."})," - this is a macro is that simplify usage of ",(0,i.jsx)(n.code,{children:"."})," procedure:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(.. document.querySelector)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You still sometimes may want to use this instead of ",(0,i.jsx)(n.code,{children:"--\x3e"})," when you want to get\nproperty from an object returned by expression."]}),"\n",(0,i.jsx)(n.p,{children:"In old version of LIPS you have to execute code like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'((. document \'querySelector) "body")\n((.. document.querySelector) "body")\n'})}),"\n",(0,i.jsx)(n.p,{children:"The first expression return a Native JavaScript procedure that is then executed."}),"\n",(0,i.jsx)(n.p,{children:"This is equivalent of:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(document.querySelector "body")\n'})}),"\n",(0,i.jsx)(n.h3,{id:"scheme-functions",children:"Scheme functions"}),"\n",(0,i.jsx)(n.p,{children:"Scheme functions (lambda's) are JavaScript functions so you can call them from JavaScript."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(set! window.foo (lambda () (alert "hello")))\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you define function like this, in browser REPL, you can call it from JavaScript\n(e.g. browser developer console)."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"TODO"})," Screenshot"]}),"\n",(0,i.jsx)(n.h3,{id:"javascript-functions",children:"JavaScript functions"}),"\n",(0,i.jsx)(n.p,{children:"You can call JavaScript functions from Scheme, the same as you call Scheme procedures:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(document.querySelector "body")\n;; ==> #<HTMLBodyElement>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In both browser and Node.js you can execute ",(0,i.jsx)(n.code,{children:"console.log"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(console.log "hello, LIPS")\n;; ==> hello, LIPS\n'})}),"\n",(0,i.jsx)(n.h3,{id:"callbacks",children:"Callbacks"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WARNING"})," be carful when using scheme callback functions inside JavaScript.\nSince some code may be ",(0,i.jsx)(n.code,{children:"async"})," and your code may break."]}),"\n",(0,i.jsx)(n.p,{children:"Example of procedures that are not wise to use are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Array::forEach"})," - this function accepts a callaback but becasue it doesn't return\nanything, LIPS can automatically await the reponse, and you code may execute out of order."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"String::replace"})," - this function can accept optional callback and if lambda is async\nyou will end up with ",(0,i.jsx)(n.code,{children:"[object Promise]"})," in output string:"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(--\x3e "foo bar" (replace "foo" (lambda () (Promise.resolve "xxx"))))\n"[object Promise] bar"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"regular-expressions",children:"Regular Expressions"}),"\n",(0,i.jsxs)(n.p,{children:["LIPS define regular expressions it uses native JavaScript regular expressions.\nAt first, the syntax looked like in JavaScript. It was problematic for the parser\nso you were not able to put space after ",(0,i.jsx)(n.code,{children:"/"})," to distingish from divide procedure.\nLater the syntax was renamed into form that start with hash ",(0,i.jsx)(n.code,{children:"#/[0-9]/"}),". The same\nsyntax is used by ",(0,i.jsx)(n.a,{href:"https://practical-scheme.net/gauche/man/gauche-refe/Regular-expressions.html",children:"Gauche"})," implementation. But LIPS supports more flags (same as JavaScript)."]}),"\n",(0,i.jsx)(n.h3,{id:"vectors",children:"Vectors"}),"\n",(0,i.jsxs)(n.p,{children:["In LIPS Scheme vectors are JavaScript arrays. So you can execute methods on them with ",(0,i.jsx)(n.code,{children:"--\x3e"})," macro:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(--\x3e #("one" "two" "three") (join ":"))\n;; ==> "one:two:three"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"object-literals",children:"Object literals"}),"\n",(0,i.jsxs)(n.p,{children:["In LIPS you can define object literals with ",(0,i.jsx)(n.code,{children:"&"}),"\n",(0,i.jsx)(n.a,{href:"/docs/lips/extension#syntax-extensions",children:"syntax extension"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define obj &(:name "Jack" :age 22))\n(write obj)\n;; ==> &(:name "Jack" :age 22)\n(console.log obj)\n;; ==> { name: \'Jack\', age: 22 }\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can nested object literals and mix them with different object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define obj &(:name "Jack" :hobbies #("swiming" "programming")))\n(write obj.hobbies)\n;; ==> #("swiming" "programming")\n(console.log obj)\n;; ==> { name: \'Jack\', hobbies: [ \'swiming\', \'programming\' ] }\n'})}),"\n",(0,i.jsx)(n.p,{children:"Object similar to Scheme vectors are immutable and everything inside is quoted."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define obj &(:name Jack))\n(write obj)\n;; ==> &(:name "Jack")\n'})}),"\n",(0,i.jsx)(n.p,{children:"But to make it possible to share objects with JavaScript, native LIPS values are automatically unboxed.\nSo instead of symbol represention you get a JavaScript string."}),"\n",(0,i.jsx)(n.p,{children:"You can also use quasiquote on object literals:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define jack (let ((name "Jack")\n                   (age 22))\n               `&(:name ,name :age ,age)))\n(write jack)\n;; ==> &(:name "Jack" :age 22)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"automagic-asyncawait",children:"Automagic async/await"}),"\n",(0,i.jsx)(n.p,{children:"LIPS do automatic async/await so it waits for any promise before evaluating\nnext expression."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(Promise.resolve "xxx")\n;; ==> "xxx"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This simplifies code when using promises, for instance using\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",children:"fetch API"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'(--\x3e (fetch "https://scheme.org.pl/test/") (text) (match #/<h1>([^>]+)<\\/h1>/) 1)\n;; ==> "Scheme is Super Fun"\n'})}),"\n",(0,i.jsx)(n.p,{children:"This is equivalent of JavaScript using async/await:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'cons res = await fetch("https://scheme.org.pl/test/");\nconst text = await res.text();\ntext.match(/<h1>([^>]+)<\\/h1>/)[1];\n'})}),"\n",(0,i.jsx)(n.h3,{id:"promise-quotation",children:"Promise quotation"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes you need to process promises as values, for this LIPS support quotation\nof promises. You escape automagic async/await realm and get access to promise as value:\nto quote a promise you use ",(0,i.jsx)(n.code,{children:"'>"}),"\n",(0,i.jsx)(n.a,{href:"/docs/lips/extension#syntax-extensions",children:"syntax extension"}),". To again get into\nautomatic async/await you can use ",(0,i.jsx)(n.code,{children:"(await)"})," procedure"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(let ((promise (--\x3e \'>(fetch "https://scheme.org.pl/test/")\n                      (then (lambda (res)\n                              (res.text)))\n                      (then (lambda (text)\n                              (. (text.match #/<h1>([^>]+)<\\/h1>/) 1))))))\n  (print (await promise)))\n;; ==> Scheme is Super Fun\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"})," Inside ",(0,i.jsx)(n.code,{children:"then"})," lambda promises are still automagically resolved."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(--\x3e \'>(Promise.resolve "hello")\n       (then (lambda (value)\n               (print (string-append value " " (Promise.resolve "LIPS"))))))\n;; ==> hello LIPS\n'})}),"\n",(0,i.jsx)(n.h3,{id:"promises-vs-delay-expression",children:"Promises vs Delay expression"}),"\n",(0,i.jsxs)(n.p,{children:["Don't confuse JavaScript promises with ",(0,i.jsx)(n.code,{children:"delay"})," expressions. They representation looks similar:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(delay 10)\n;; ==> #<promise - not forced>\n'>(Promise.resolve 10)\n;; ==> #<js-promise resolved (number)>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,i.jsxs)(n.p,{children:["In LIPS, you can define JavaScript classes with ",(0,i.jsx)(n.code,{children:"define-class"})," macro:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define-class Person Object\n   (constructor (lambda (self name)\n                   (set! self.name name)))\n   (greet (lambda (self)\n            (string-append "hello, " self.name))))\n\n(define jack (new Person "Jack"))\n(write jack)\n;; ==> #<Person>\n(jack.greet)\n;; ==> "hello, Jack"\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"define-class"})," is macro written in Scheme that uses\n",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes",children:"JavaScript prototypes"})," behind the scene."]}),"\n",(0,i.jsxs)(n.p,{children:["The class always need to have a base class (parent) or you need to use ",(0,i.jsx)(n.code,{children:"null"}),". Classes have explicit\n",(0,i.jsx)(n.code,{children:"self"})," as first argument (similar to Python) but ",(0,i.jsx)(n.code,{children:"this"})," also works inside functions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(set! jack.run (lambda () (string-append "run, " this.name)))\n(jack.run)\n;; ==> "run, Jack"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To create new instance of a Class you can use ",(0,i.jsx)(n.code,{children:"new"})," procedure."]}),"\n",(0,i.jsx)(n.p,{children:"You can also manipulate JavaScript prototypes directly:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(write Person.prototype)\n;; ==> #<prototype>\n(set! Person.prototype.toString (lambda () (string-append "#<Person (" this.name ")>")))\n(display (jack.toString))\n;; ==> #<Person (Jack)>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["By default toString is not used for represention of objects, but you add representation if you want.\nSee ",(0,i.jsx)(n.a,{href:"/docs/lips/extension#new-homoiconic-data-types",children:"Homoiconic data types"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"nodejs",children:"Node.js"}),"\n",(0,i.jsxs)(n.p,{children:["In Node.js you can load JavaScript modules with ",(0,i.jsx)(n.code,{children:"require"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define fs (require "fs/promises"))\n(let ((fname "tmp.txt"))\n  (fs.writeFile fname "hello LIPS")\n  (write (fs.readFile fname "utf-8")))\n;; ==> "hello LIPS"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you have to use callback based API in Node use\n",(0,i.jsx)(n.a,{href:"https://nodejs.org/api/util.html#utilpromisifyoriginal",children:"promisify function"})," from Module util."]}),"\n",(0,i.jsxs)(n.p,{children:["You can also use Promise contructor yourself. Here is example ",(0,i.jsx)(n.code,{children:"async"})," lisp macro:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define fs (require "fs"))\n\n(define-macro (async expr)\n  (let ((resolve (gensym "resolve"))\n        (reject (gensym "reject")))\n    `(new Promise (lambda (,resolve ,reject)\n                    ,(append expr (list `(lambda (err data)\n                                           (if (not (null? err))\n                                               (,reject err)\n                                               (,resolve data)))))))))\n\n(let ((fname "tmp.txt"))\n  (async (fs.writeFile fname "Hello, LIPS!"))\n  (write (async (fs.readFile fname "utf-8"))))\n;; ==> "Hello, LIPS!"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var i=s(7294);const a={},r=i.createContext(a);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);