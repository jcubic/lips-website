"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[7953],{2205:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var a=s(5893),i=s(1151);const r={sidebar_position:5,description:"Macros are the most powerful feature of Lisp and Scheme"},o="Macros",t={id:"scheme-intro/macros",title:"Macros",description:"Macros are the most powerful feature of Lisp and Scheme",source:"@site/docs/scheme-intro/macros.md",sourceDirName:"scheme-intro",slug:"/scheme-intro/macros",permalink:"/lips-website/docs/scheme-intro/macros",draft:!1,unlisted:!1,editUrl:"https://github.com/jcubic/lips-website/tree/docusaurus/docs/docs/scheme-intro/macros.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,description:"Macros are the most powerful feature of Lisp and Scheme"},sidebar:"tutorialSidebar",previous:{title:"Input and Output",permalink:"/lips-website/docs/scheme-intro/input-output"},next:{title:"Streams",permalink:"/lips-website/docs/scheme-intro/streams"}},c={},l=[{value:"Lisp Macros",id:"lisp-macros",level:2},{value:"Macroexpand",id:"macroexpand",level:3},{value:"New Control Flow Constructs",id:"new-control-flow-constructs",level:3},{value:"Gensyms",id:"gensyms",level:3},{value:"Recursive Macros",id:"recursive-macros",level:3},{value:"Anaphoric Macros",id:"anaphoric-macros",level:3},{value:"Scheme Hygienic Macros",id:"scheme-hygienic-macros",level:2},{value:"Hygiene",id:"hygiene",level:3},{value:"Syntax-rules",id:"syntax-rules",level:3},{value:"Syntax-rules pattern language",id:"syntax-rules-pattern-language",level:3},{value:"Elipsis",id:"elipsis",level:3},{value:"Nested Hygienic Macros",id:"nested-hygienic-macros",level:3},{value:"Identifiers",id:"identifiers",level:3},{value:"Recursive Hygienic Macros",id:"recursive-hygienic-macros",level:3},{value:"Anaphoric Hygienic Macros",id:"anaphoric-hygienic-macros",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"macros",children:"Macros"}),"\n",(0,a.jsxs)(n.p,{children:["Macros are the most powerful feature of the language (both lisp and Scheme).  Macros allows you to add\nnew syntax to the language, it also allows making simpler code and reduce\n",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Boilerplate_code",children:"boilerplate"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Macros works like a function, but the arguments of the macro are not evaluated before passing the\nvalue to the function. But instead the code of the arguments are passed to the macro, the macro then\ncan manipulate the code and return new code that is then evaluated. This happens during expansion\ntime before evaluation even happen."}),"\n",(0,a.jsx)(n.h2,{id:"lisp-macros",children:"Lisp Macros"}),"\n",(0,a.jsx)(n.p,{children:"Some scheme implementation supports lisp macros, so I will describe them first."}),"\n",(0,a.jsx)(n.p,{children:"If you have code like this"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(foo (+ 1 2))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And ",(0,a.jsx)(n.code,{children:"foo"})," is a function, the ",(0,a.jsx)(n.code,{children:"(+ 1 2)"})," will be evaluated and ",(0,a.jsx)(n.code,{children:"3"})," will be passed to the function. But if\n",(0,a.jsx)(n.code,{children:"foo"})," is a macro, the data structure ",(0,a.jsx)(n.code,{children:"(+ 1 2)"})," will be passed to the macro."]}),"\n",(0,a.jsxs)(n.p,{children:["To define a macro, you use usually use ",(0,a.jsx)(n.code,{children:"define-macro"})," syntax. Lisp macros in Scheme are not standard,\nso the syntax may change depending on\n",(0,a.jsx)(n.a,{href:"/docs/scheme-intro/what-is-lisp#scheme-implementations",children:"Scheme implementation"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (foo expr)\n  (case (car expr)\n    ((+) (set-car! expr '-))\n    ((-) (set-car! expr '+)))\n  expr)\n"})}),"\n",(0,a.jsx)(n.p,{children:"This macro swap first element of the expression passed as argument. If you pass sum of two numbers\nIt will subtract the values:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(foo (+ 1 2))\n;; ==> -1\n"})}),"\n",(0,a.jsx)(n.p,{children:"if you use minus symbol it will add up the numbers:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(foo (- 1 2))\n;; ==> 3\n"})}),"\n",(0,a.jsx)(n.p,{children:"Instead of modification of existing code you can also create new list:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (foo expr)\n  (list (case (car expr) ((+) '-) ((-) '+))\n        (cadr expr)\n        (caddr expr)))\n"})}),"\n",(0,a.jsx)(n.p,{children:"It will work similarly but only with two numbers:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(foo (- 1 2))\n;; ==> 3\n(foo (+ 1 2))\n;; ==> -1\n"})}),"\n",(0,a.jsx)(n.h3,{id:"macroexpand",children:"Macroexpand"}),"\n",(0,a.jsxs)(n.p,{children:["Some scheme implementation have function ",(0,a.jsx)(n.code,{children:"macroexpand"})," that allow to inspect the result expression\nreturned by the macro."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(macroexpand '(foo (+ 1 2)))\n;; ==> (- 1 2)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Macros can be nested, so one expression can expand into something you don't expect to see. For this\nyou have a function called ",(0,a.jsx)(n.code,{children:"macroexpand-1"})," that should expand macro one time. Which in turn should\nexpand just your macro."]}),"\n",(0,a.jsx)(n.h3,{id:"new-control-flow-constructs",children:"New Control Flow Constructs"}),"\n",(0,a.jsxs)(n.p,{children:["With macros, you can define new control flow (e.g. like ",(0,a.jsx)(n.code,{children:"if"})," statements). Here is an example of\n",(0,a.jsx)(n.code,{children:"when"})," macro that is part of R7RS standard."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(define-macro (when test . body)\n  `(if ,test\n       (begin\n         ,@body)))\n\n(let ((x 0))\n  (when (zero? x)\n    (display "x")\n    (display " = ")\n    (display "zero")\n    (newline)))\n;; ==> x = zero\n'})}),"\n",(0,a.jsxs)(n.p,{children:["As you probably already know to use multiple expressions in\n",(0,a.jsx)(n.a,{href:"/docs/scheme-intro/core#conditionals",children:"if statement"})," you need to use ",(0,a.jsx)(n.code,{children:"begin"}),". The macro use\n",(0,a.jsx)(n.a,{href:"/docs/scheme-intro/data-types#quasiquote",children:"quasiquote syntax"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You can use ",(0,a.jsx)(n.code,{children:"macroexpand"})," to see what will be the output of the expression:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(macroexpand (let ((x 0))\n               (when (zero? x)\n                 (display "zero")\n                 (newline))))\n;; ==> (let ((x 0))\n;; ==>   (if (zero? x)\n;; ==>       (begin\n;; ==>         (display "zero")\n;; ==>         (newline))))\n'})}),"\n",(0,a.jsx)(n.h3,{id:"gensyms",children:"Gensyms"}),"\n",(0,a.jsx)(n.p,{children:"If you create lisp macros you often may end up with expansion and user code to collide and use the\nsame variables. You call this accidental capture of identifiers."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (when expr body)\n  `(let ((tmp ,expr))\n     (if tmp\n         (begin\n           ,@body))))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you define macro like this the user of your macro may want to use ",(0,a.jsx)(n.code,{children:"tmp"})," variable and the code\nwill give unexpected behavior:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(let ((tmp 1000))\n  (when (> tmp 0)\n    (display tmp)\n    (newline)))\n;; ==> #t\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will print ",(0,a.jsx)(n.code,{children:"#t"})," but you expect it to print ",(0,a.jsx)(n.code,{children:"1000"}),". This problem can be solved with special kind\nof symbols called ",(0,a.jsx)(n.code,{children:"gensyms"}),". Each gensym is a unique symbol."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (when expr body)\n  (let ((tmp (gensym)))\n    `(let ((,tmp ,expr))\n       (if ,tmp\n           (begin\n             ,@body)))))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Notice that let that call ",(0,a.jsx)(n.code,{children:"gensym"})," is outside quasiquote so it will be evaluated when macro is\nexecuted by the output code will have a unique symbol instead of hard coded symbol ",(0,a.jsx)(n.code,{children:"tmp"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"If you try to evaluate the macro, you will get proper results:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(let ((tmp 1000))\n  (when (> tmp 0)\n    (display tmp)\n    (newline)))\n;; ==> 1000\n"})}),"\n",(0,a.jsx)(n.h3,{id:"recursive-macros",children:"Recursive Macros"}),"\n",(0,a.jsx)(n.p,{children:"You can define recursive macros similary to recursive function. But you need to make sure that the\nexpansion will stop, similary to recursive functions you may create infinite loops."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (alist . body)\n  (if (null? body)\n      '()\n      `(cons (cons ,(car body) ,(cadr body)) (alist ,@(cddr body)))))\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can call this macro to create alist based on its arguments:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(alist "foo" 10 "bar" 20 "baz" 30)\n;; ==> (("foo" . 10) ("bar" . 20) ("baz" . 30))\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"})," recursive call is inside quote and only argument is unquoted. This is required since\nrecursive macro call needs to appear in the expansion. If you call macro recursivly and don't return\nmacro call as output list you will end up in ifninite recursive call."]}),"\n",(0,a.jsx)(n.p,{children:"You can see the macro will expand with macroexpand:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(macroexpand (alist "foo" 10 "bar" 20 "baz" 30))\n;; ==> (cons (cons "foo" 10) (cons (cons "bar" 20) (cons (cons "baz" 30) ())))\n'})}),"\n",(0,a.jsx)(n.h3,{id:"anaphoric-macros",children:"Anaphoric Macros"}),"\n",(0,a.jsx)(n.p,{children:"Anaphoric macros are special kind of macros that leverage the leaking of internal data outside\nthe macro. This is called intentional capture of identifiers. They often expose one or more variable\nthat can be used by the users of the macro."}),"\n",(0,a.jsxs)(n.p,{children:["Example of such macro is ",(0,a.jsx)(n.code,{children:"aif"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (aif test true false)\n  `(let ((it ,test))\n     (if it\n         ,true\n         ,false)))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This macro uses ",(0,a.jsx)(n.code,{children:"it"})," variable to hold the testing value that can be used inside user code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(let ((alist '((a . 10) (b . 20) (c . 30))))\n  (aif (assoc 'a alist)\n       (begin\n         (display (cdr it))\n         (newline))))\n;; ==> 10\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you only have one branch like in above code you can define ",(0,a.jsx)(n.code,{children:"awhen"})," macro:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (awhen test . body)\n  `(let ((it ,test))\n     (if it\n         (begin\n           ,@body))))\n\n(let ((alist '((a . 10) (b . 20) (c . 30))))\n  (awhen (assoc 'a alist)\n    (display (cdr it))\n    (newline)))\n;; ==> 10\n"})}),"\n",(0,a.jsx)(n.h2,{id:"scheme-hygienic-macros",children:"Scheme Hygienic Macros"}),"\n",(0,a.jsx)(n.p,{children:"The problem with Lisp macros is that they are not hygienic. But what it means?"}),"\n",(0,a.jsx)(n.h3,{id:"hygiene",children:"Hygiene"}),"\n",(0,a.jsxs)(n.p,{children:["If macro is hygienic, it means that it guaranty no leaking of internal code outside of macro. In\nother words guaranteed not to cause the accidental capture of identifiers. Scheme standard define\nnew macro system called ",(0,a.jsx)(n.code,{children:"syntax-rules"})," that is hygienic."]}),"\n",(0,a.jsxs)(n.p,{children:["But we have ",(0,a.jsx)(n.code,{children:"gensym"})," is this not enough to make the macros safe? No"]}),"\n",(0,a.jsxs)(n.p,{children:["Here is an example implementation of ",(0,a.jsx)(n.code,{children:"unless"})," macro that is part of Scheme that fails because it's\nnot hygienic."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-macro (unless test . body)\n  `(if (not ,test)\n       (begin\n         ,@body)))\n"})}),"\n",(0,a.jsx)(n.p,{children:"But in Scheme you can define a variable named not and completely break the macro:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(let ((not (lambda (x) x)))\n  (unless #f\n    (display "this should not run")\n    (newline)))\n;; ==> this should not run\n'})}),"\n",(0,a.jsx)(n.p,{children:"This will print the expression because the unless macro uses not procedure that got overwritten by the\nuser code. Hygiene of macros means that something like this can't happen."}),"\n",(0,a.jsx)(n.h3,{id:"syntax-rules",children:"Syntax-rules"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"syntax-rules"})," in Scheme is different type of macros than lisp macros. It uses a special pattern\nmatching language. Syntax-rules is guarantee by the sec to be hygienic."]}),"\n",(0,a.jsx)(n.p,{children:"Here is the simple definition of a hygienic macro in Scheme:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax unless\n  (syntax-rules ()\n    ((_ test body ...)\n     (if (not test)\n         (begin\n           body ...)))))\n"})}),"\n",(0,a.jsx)(n.p,{children:"This macro is hygienic. If you use same test as before:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(let ((not (lambda (x) x)))\n  (unless #t\n    (display "this should not run")\n    (newline)))\n'})}),"\n",(0,a.jsx)(n.p,{children:"It will not print any value."}),"\n",(0,a.jsx)(n.h3,{id:"syntax-rules-pattern-language",children:"Syntax-rules pattern language"}),"\n",(0,a.jsx)(n.p,{children:"Syntax rules macro is defined like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax foo\n  (syntax-rules ()\n    ((name <pattern>) <expansion>)\n    ((name <different pattern>) <different expansion>)))\n"})}),"\n",(0,a.jsx)(n.p,{children:"The first element if the macro is a list of identifiers that can be used in the pattern."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax for\n  (syntax-rules (in)\n    ((for element in list body ...)\n     (for-each (lambda (element)\n            body ...)\n          list))))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is an example of a ",(0,a.jsx)(n.code,{children:"for"})," macro that have ",(0,a.jsx)(n.code,{children:"in"})," special keyword inside the parentheses. This\nmacro can be used like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(for i in '(1 2 3 4)\n  (display i)\n  (newline))\n;; ==> 1\n;; ==> 2\n;; ==> 3\n;; ==> 4\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you try to overwrite the ",(0,a.jsx)(n.code,{children:"in"})," symbol with variable:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(let ((in #t))\n  (for i in '(1 2 3 4)\n    (display i)\n    (newline)))\n;; ==> syntax-rules: no matching syntax in macro\n"})}),"\n",(0,a.jsx)(n.p,{children:"You will get an error because in is no longer a special identifier. It's now a variable."}),"\n",(0,a.jsx)(n.p,{children:"The rest are the list of pattern and expansion. You can build a shape of the code your macro accept\nand use part of the pattern in output macro."}),"\n",(0,a.jsxs)(n.p,{children:["the first element of the pattern is often ",(0,a.jsx)(n.code,{children:"_"})," it matches against the name of the macro."]}),"\n",(0,a.jsx)(n.h3,{id:"elipsis",children:"Elipsis"}),"\n",(0,a.jsxs)(n.p,{children:["In lisp macros if you wanted to define a list of any values (including no values) you use\n",(0,a.jsx)(n.a,{href:"/docs/scheme-intro/data-types#improper-list",children:"improper list"})," (list with dot). In syntax-rules\npattern you use an ellipsis to indicate a list of items. The ellipsis is after the symbol."]}),"\n",(0,a.jsx)(n.p,{children:"Example of usage of ellipsis:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax values\n  (syntax-rules ()\n    ((_ ((a . b) ...))\n     '(a ...))))\n"})}),"\n",(0,a.jsx)(n.p,{children:"This macro use an alist as a pattern and only return the values. Note that it doesn't work on a\nvariable that hold the alist only for alist defined inside the code:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(values ((foo . "lorem") (bar . "ipsum") (baz . "dolor")))\n;; ==> (foo bar baz)\n'})}),"\n",(0,a.jsx)(n.h3,{id:"nested-hygienic-macros",children:"Nested Hygienic Macros"}),"\n",(0,a.jsxs)(n.p,{children:["There are two ways to defined nested macros, macros that define macros. One is escape of ellipsis\nwith ",(0,a.jsx)(n.code,{children:"(... ...)"})," syntax."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax define-for\n  (syntax-rules ()\n    ((_ symbol)\n     (define-syntax symbol\n       (syntax-rules ()\n         ((_ (var start end) body (... ...))\n          (let loop ((var start))\n            (if (<= var end)\n                (begin\n                  body (... ...)\n                  (loop (+ var 1)))))))))))\n"})}),"\n",(0,a.jsx)(n.p,{children:"This macro defines macros that act like for loop, but using tail recursive, named let. You can use this macro like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(define-for loop)\n\n(begin\n  (loop (i 1 10)\n        (display i)\n        (if (< i 10)\n            (display " ")))\n  (newline))\n;; ==> 1 2 3 4 5 6 7 8 9 10\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Another way to define nested marcros is using\n",(0,a.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-46/srfi-46.html",children:"SRFI-46"})," syntax, which allow to change the symbol of ellipsis:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax define-for\n  (syntax-rules ()\n    ((_ symbol)\n     (define-syntax symbol\n       (syntax-rules ::: ()\n         ((_ (var start end) body :::)\n          (let loop ((var start))\n            (if (<= var end)\n                (begin\n                  body :::\n                  (loop (+ var 1)))))))))))\n"})}),"\n",(0,a.jsx)(n.p,{children:"The macro works exactly the same as previous one:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(define-for loop)\n\n(begin\n  (loop (i 1 10)\n        (display i)\n        (if (< i 10)\n            (display " ")))\n  (newline))\n;; ==> 1 2 3 4 5 6 7 8 9 10\n'})}),"\n",(0,a.jsx)(n.h3,{id:"identifiers",children:"Identifiers"}),"\n",(0,a.jsx)(n.p,{children:"Inside macros you can add identifers can can be used like keywords from other programming langauges. They match only\nif literal symbol was used and it was not shadowed (overwritten) by variable with same name."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax for\n  (syntax-rules (==>)\n     ((_ (var start ==> end) body ...)\n      (let loop ((var start))\n         (if (<= var end)\n             (begin\n                body ...\n                (loop (+ var 1))))))))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This for macro define symbol ",(0,a.jsx)(n.code,{children:"==>"})," that can be used as part of the syntax:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(let ((start 1)\n      (end 10))\n  (for (i start ==> end)\n     (display i)\n     (if (< i end)\n         (display " ")))\n  (newline))\n;; ==> 1 2 3 4 5 6 7 8 9 10\n'})}),"\n",(0,a.jsxs)(n.p,{children:["If the symbol ",(0,a.jsx)(n.code,{children:"==>"})," is shadowed by local variable the macro will not match and give an error:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(let ((start 1)\n      (end 10)\n      (==> "this will not work"))\n  (for (i start ==> end)\n     (display i)\n     (if (< i end)\n         (display " ")))\n  (newline))\n;; ==> syntax-rules: no matching syntax in macro\n'})}),"\n",(0,a.jsx)(n.p,{children:"special keywords (created with identifiers) can be optional:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax for\n  (syntax-rules (==>)\n     ((_ (var start end) body ...)\n      (_ (var start ==> end) body ...))\n     ((_ (var start ==> end) body ...)\n      (let loop ((var start))\n         (if (<= var end)\n             (begin\n                body ...\n                (loop (+ var 1))))))))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is recursive ",(0,a.jsx)(n.code,{children:"syntax-rules"})," that when using without ",(0,a.jsx)(n.code,{children:"==>"})," symbol it just add it between ",(0,a.jsx)(n.code,{children:"start"}),"\nand ",(0,a.jsx)(n.code,{children:"end"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"recursive-hygienic-macros",children:"Recursive Hygienic Macros"}),"\n",(0,a.jsx)(n.p,{children:"You can define recursive hygienic macros, similar to recursive function you need a base case that will stop expansion and\nrecursve case."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(define-syntax alist\n  (syntax-rules ()\n     ((_) ())\n     ((_ x y z ...)\n      (cons (cons x y) (alist z ...)))))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Here is example of recusive macro that expand into series of ",(0,a.jsx)(n.code,{children:"cons"}),". You can use this macro like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(alist 'foo 10 'bar 20 'baz 30)\n;; ==> ((foo . 10) (bar . 20) (baz . 30))\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If the Scheme interpreter of choice support macroexpand on hygienic macros you will see that it\nexpact into series of ",(0,a.jsx)(n.code,{children:"cons"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:"(macroexpand '(alist 'foo 10 'bar 20 'baz 30))\n;; ==> (#:cons (#:cons (quote foo) 10) (#:cons (#:cons (quote bar) 20) (#:cons (#:cons (quote baz) 30) ())))\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output may be differnt depening on implementation."}),"\n",(0,a.jsx)(n.h3,{id:"anaphoric-hygienic-macros",children:"Anaphoric Hygienic Macros"}),"\n",(0,a.jsxs)(n.p,{children:["By default Scheme ",(0,a.jsx)(n.code,{children:"syntax-rules"})," macros don't allow creating anaphoric macros like lisp macro do.\nBut with ",(0,a.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-139/srfi-139.html",children:"SRFI-139"})," you can implement such macros."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note"}),": that not every scheme implementation support this ",(0,a.jsx)("abbr",{title:"Scheme Request For\nImplementation",children:"SRFI"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Here is example of ",(0,a.jsx)(n.code,{children:"awhen"})," anaphoric macro that use this ",(0,a.jsx)("abbr",{title:"Scheme Request For\nImplementation",children:"SRFI"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(define-syntax-parameter it (syntax-rules () ((_) (syntax-error "Use outside aif"))))\n\n(define-syntax awhen\n  (syntax-rules ()\n    ((_ test body ...)\n     (let ((tmp test))\n       (syntax-parameterize\n        ((it (syntax-rules ()\n               ((_) tmp))))\n        (if tmp\n            (begin\n              body ...)))))))\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"syntax-paremetirize"})," works similar to\n",(0,a.jsxs)(n.a,{href:"/docs/scheme-intro/core#dynamic-variables",children:["parameters from R",(0,a.jsx)("sup",{children:"7"}),"RS"]}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can use this macro like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scheme",children:'(let ((alist \'((foo . "lorem") (bar . "ipsum") (baz . "dolor"))))\n  (awhen (assoc \'bar alist)\n    (write (cdr (it)))\n    (newline)))\n;; ==> "ipsum"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note the difference, the parameter needs to be wrapped by parentheses like a procedure/macro call."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>o});var a=s(7294);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);