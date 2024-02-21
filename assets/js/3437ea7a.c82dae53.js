"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[30],{4623:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var i=s(5893),r=s(1151);const l={sidebar_position:3},c="Core Expressions",a={id:"scheme-intro/expressions",title:"Core Expressions",description:"Printing values",source:"@site/docs/scheme-intro/expressions.md",sourceDirName:"scheme-intro",slug:"/scheme-intro/expressions",permalink:"/lips-website/docs/scheme-intro/expressions",draft:!1,unlisted:!1,editUrl:"https://github.com/jcubic/lips-website/tree/docusaurus/docs/docs/scheme-intro/expressions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/lips-website/docs/scheme-intro/data-types"},next:{title:"Tutorial - Basics",permalink:"/lips-website/docs/category/tutorial---basics"}},d={},o=[{value:"Printing values",id:"printing-values",level:2},{value:"Math expressions",id:"math-expressions",level:2},{value:"Boolean expression",id:"boolean-expression",level:3},{value:"Functions that returns part of the number",id:"functions-that-returns-part-of-the-number",level:3},{value:"Predicates",id:"predicates",level:2},{value:"Equal operation",id:"equal-operation",level:3},{value:"String and character comparators",id:"string-and-character-comparators",level:3},{value:"Symbols",id:"symbols",level:3},{value:"Type Predicates",id:"type-predicates",level:3},{value:"Variables",id:"variables",level:2},{value:"Modification of the variable",id:"modification-of-the-variable",level:3},{value:"Local variables",id:"local-variables",level:2},{value:"Conditionals",id:"conditionals",level:2},{value:"Procedures",id:"procedures",level:2},{value:"Nested Procedures",id:"nested-procedures",level:3},{value:"Recursion",id:"recursion",level:3},{value:"Local Recursive Functions",id:"local-recursive-functions",level:4},{value:"Tail Call Optimization",id:"tail-call-optimization",level:3},{value:"Loops",id:"loops",level:2}];function t(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"core-expressions",children:"Core Expressions"}),"\n",(0,i.jsx)(n.h2,{id:"printing-values",children:"Printing values"}),"\n",(0,i.jsx)(n.p,{children:"To print a value you can use two type of expressions:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(display "hello")\n'})}),"\n",(0,i.jsx)(n.p,{children:"and"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(write "hello")\n'})}),"\n",(0,i.jsx)(n.p,{children:"The first will print text hello without quotations. But the second will include the quotes. The\nsecond expression allow to save the expression and later read it as Scheme code."}),"\n",(0,i.jsx)(n.p,{children:"Both expression don't add newline at the end. To add a newline you need to use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(newline)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Or you can use escape newline character:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(display "\\n")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"math-expressions",children:"Math expressions"}),"\n",(0,i.jsx)(n.p,{children:"Scheme define standard Math operations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"+"})," - sum all it's arguments"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"-"})," - subtract the arguments"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"/"})," - divide the arguments"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"*"})," - multiple the arguments"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"All the above can accept zero or more arguments."}),"\n",(0,i.jsx)(n.p,{children:"trigonometry functions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"sin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cos"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"tan"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"asin"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"acos"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"atan"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"logarithms:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"log"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Exponentiation function:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"expt"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Exponential function"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"exp"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It also define:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"square"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"sqrt"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"boolean-expression",children:"Boolean expression"}),"\n",(0,i.jsxs)(n.p,{children:["Expressions that returns ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"})," and operate on numbers"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"<"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:">"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"<="})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:">="})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"="})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"functions-that-returns-part-of-the-number",children:"Functions that returns part of the number"}),"\n",(0,i.jsx)(n.p,{children:"Rational and complex numbers are create from two different numbers."}),"\n",(0,i.jsx)(n.p,{children:"Rational numbers are created from numerator and denominator and you can get those numbers from a single rational:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(numerator 1/2)\n;; ==> 1\n(denominator 1/2)\n;; ==> 2\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE:"})," The result values of those expressions are written as comments."]}),"\n",(0,i.jsx)(n.p,{children:"Complex numbers are created with real and imaginary parts and you can also extract those parts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(imag-part 10+2i)\n;; ==> 2\n(real-part 10+2i)\n;; ==> 10\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Scheme also define two functions ",(0,i.jsx)(n.code,{children:"angle"})," and ",(0,i.jsx)(n.code,{children:"magnitude"})," which can be used to get modulus and argument."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(angle 10+10i)\n;; ==> 0.7853981633974483\n(magnitude 10+10i)\n;; ==> 14.142135623730951\n"})}),"\n",(0,i.jsx)(n.h2,{id:"predicates",children:"Predicates"}),"\n",(0,i.jsx)(n.h3,{id:"equal-operation",children:"Equal operation"}),"\n",(0,i.jsx)(n.p,{children:"In Scheme there are different way to compare values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eq?"})," - compares if the values are the same object works only on basic types"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"eqv?"})," - compares if the values have the same represention"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"equal?"})," - also works any type of values, it can compare vectors and list if they are the same"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"string-and-character-comparators",children:"String and character comparators"}),"\n",(0,i.jsx)(n.p,{children:"In addition there are also comparators for strings:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string<?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string>?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string<=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string>=?"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"characters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char<?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char>?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char<=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char>=?"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"String and characters also have counterpart procedures for compare with case insensitive way:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string-ci=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string-ci<?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string-ci>?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string-ci<=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string-ci>=?"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"characters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char-ci=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char-ci<?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char-ci>?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char-ci<=?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char-ci>=?"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"symbols",children:"Symbols"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"symbol=?"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"type-predicates",children:"Type Predicates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"pair?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"list?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"null?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"symbol?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"boolean?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"number?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"string?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"char?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"integer?"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"complex?"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsxs)(n.p,{children:["To define a variable in Scheme you use ",(0,i.jsx)(n.code,{children:"define"})," special form:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define number 10)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will define variable ",(0,i.jsx)(n.code,{children:"number"})," with value 10. You can evaluate this variable and get the value back."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"number\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will evaluate to 10. Note that this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"'number\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Will evaluate into symbol ",(0,i.jsx)(n.code,{children:"number"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"modification-of-the-variable",children:"Modification of the variable"}),"\n",(0,i.jsxs)(n.p,{children:["To modify existing variable you use ",(0,i.jsx)(n.code,{children:"set!"})," procedure. There is a conversion of using exclamation\nmark for destructive type of procedure. Which are procedures that modify it's arguments."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define number 10)\n(set! number (+ number 1))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In above expression the number is increased by ",(0,i.jsx)(n.code,{children:"1"}),". The number in ",(0,i.jsx)(n.code,{children:"(+ number 1)"})," reference old value\nof the variable. And ",(0,i.jsx)(n.code,{children:"set!"})," special form update the variable with new value."]}),"\n",(0,i.jsx)(n.h2,{id:"local-variables",children:"Local variables"}),"\n",(0,i.jsxs)(n.p,{children:["You can create local variables with ",(0,i.jsx)(n.code,{children:"let"})," syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(let ((x 10) (y 20))\n  (+ x y))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will create two variables ",(0,i.jsx)(n.code,{children:"x"})," and ",(0,i.jsx)(n.code,{children:"y"})," with values ",(0,i.jsx)(n.code,{children:"10"})," and ",(0,i.jsx)(n.code,{children:"20"})," respectively and sum those with\nplus procedure."]}),"\n",(0,i.jsx)(n.h2,{id:"conditionals",children:"Conditionals"}),"\n",(0,i.jsxs)(n.p,{children:["In Scheme there are 3 ways to define conditionals. The basic expression is ",(0,i.jsx)(n.code,{children:"if"})," statement."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(if (< 1 2)\n    (display "this is true")\n    (display "this is false"))\n'})}),"\n",(0,i.jsx)(n.p,{children:"If you need to put more than one expression inside if statement (or any other expression that\nexpect single expression) you can use begin:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(if (< 1 2)\n    (begin\n      (display "this is true")\n      (newline)))\n'})}),"\n",(0,i.jsx)(n.p,{children:"The else part is optional."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"cond"})," is another expression that allow to add multiple conditions:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(cond ((< 2 2) (display "first"))\n      ((< 2 1) (display "second"))\n      (else\n         (display "other")))\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The first two expressions return false, so cond will evaluate the else condition and display ",(0,i.jsx)(n.code,{children:'"other"'}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Case is the last of basic condition expressions. It allow to check given expression is one of the given values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(let ((x \'foo))\n  (case x\n    ((one two) (display "first"))\n    ((foo bar) (display "second"))\n    (else\n       (display "other"))))\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Symbol foo is of the second list so this expression will print ",(0,i.jsx)(n.code,{children:'"second"'}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"procedures",children:"Procedures"}),"\n",(0,i.jsxs)(n.p,{children:["To define a procedure or a function you use ",(0,i.jsx)(n.code,{children:"lambda"})," expression:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define square (lambda (x) (* x x)))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This define a function square that multiple it's argument by itself. Lambda is a way to create\nanonymous function and define assign it to the symbol square. Name lambda is nowadays common name to\ndefine anonymous function (example in languages like python or Java), but the name came from ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Lambda_calculus",children:"Lambda\nCalculus"})]}),"\n",(0,i.jsx)(n.p,{children:"There is also a shortcut to define procedure/function:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (square (x) (* x x)))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are no explicit ",(0,i.jsx)(n.code,{children:"return"})," statement. Only the last expression of the function is the result value."]}),"\n",(0,i.jsx)(n.h3,{id:"nested-procedures",children:"Nested Procedures"}),"\n",(0,i.jsx)(n.p,{children:"You can define inner procedures inside other procedures:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (cube x)\n  (define (square x)\n    (* x x))\n  (* x (square x)))\n"})}),"\n",(0,i.jsx)(n.h3,{id:"recursion",children:"Recursion"}),"\n",(0,i.jsx)(n.p,{children:"You can define define a function that reference to itself:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (factorial n)\n  (if (<= n 1)\n      1\n      (* n (factorial (- n 1)))))\n\n(factorial 10)\n;; ==> 3628800\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also define recursion using named ",(0,i.jsx)(n.code,{children:"let"})," syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (factorial n)\n  (let loop ((n n))\n      (if (<= n 1)\n          1\n          (* n (loop (- n 1))))))\n\n(factorial 10)\n;; ==> 3628800\n"})}),"\n",(0,i.jsx)(n.h4,{id:"local-recursive-functions",children:"Local Recursive Functions"}),"\n",(0,i.jsxs)(n.p,{children:["By default you can define local variable with let that is an lambda that reference itself. But you can do this with ",(0,i.jsx)(n.code,{children:"letrec"})," syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(letrec ((sum (lambda (x)\n                (if (zero? x)\n                    0\n                    (+ x (sum (- x 1)))))))\n  (sum 10))\n;; ==> 55\n"})}),"\n",(0,i.jsx)(n.h3,{id:"tail-call-optimization",children:"Tail Call Optimization"}),"\n",(0,i.jsxs)(n.p,{children:["When you create recursive function and with deeply nested calls you may run out of memory. This type of\nerror is called ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Stack_buffer_overflow",children:"Stack Overflow"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Scheme have unique feature called TCO and optimize the code and don't consume the stack when\ncalculation deeply recursive function. The code written in TCO will never lead to Stack Overflow errors."}),"\n",(0,i.jsx)(n.p,{children:"This is an example of Tail Call:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (factorial n)\n  (let loop ((n n) (result 1))\n      (if (<= n 1)\n          result\n          (loop (- n 1) (* n result)))))\n"})}),"\n",(0,i.jsx)(n.p,{children:"This function is similar to previous recursive function, but note that loop is the last expression,\nthe result of loop don't need to wait on anything. This type of code is optimized by Scheme and can\nrecur any number of types."}),"\n",(0,i.jsx)(n.h2,{id:"loops",children:"Loops"}),"\n",(0,i.jsxs)(n.p,{children:["Recursion is not the only way to create loops in Scheme. You also have ",(0,i.jsx)(n.code,{children:"do"})," syntax:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(do ((i 1 (+ i 1))\n     (result '() (cons i result)))\n    ((> i 10) result)\n  (display i)\n  (newline))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["First list of do expression have variable initialization and increment, there can be more\nexpressions. In above example we have ",(0,i.jsx)(n.code,{children:"i"})," and ",(0,i.jsx)(n.code,{children:"result"})," variables. The ",(0,i.jsx)(n.code,{children:"i"})," variable is incremented by\n1 starting from 1. And ",(0,i.jsx)(n.code,{children:"result"})," starts from empty list and add element to the list using ",(0,i.jsx)(n.code,{children:"cons"}),".\nThe second list have two values stop condition and result of the whole expression. The rest is body\nthat is executed on each iteration."]}),"\n",(0,i.jsx)(n.p,{children:"So the code will print each number and return list of numbers."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var i=s(7294);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);