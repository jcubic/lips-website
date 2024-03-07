"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[7184],{4803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(5893),r=t(1151);const s={sidebar_position:4,description:"How to read/write files and how to interact with stdin/stdout"},o="Input and Output",a={id:"scheme-intro/input-output",title:"Input and Output",description:"How to read/write files and how to interact with stdin/stdout",source:"@site/docs/scheme-intro/input-output.md",sourceDirName:"scheme-intro",slug:"/scheme-intro/input-output",permalink:"/lips-website/docs/scheme-intro/input-output",draft:!1,unlisted:!1,editUrl:"https://github.com/jcubic/lips-website/tree/docusaurus/docs/docs/scheme-intro/input-output.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"How to read/write files and how to interact with stdin/stdout"},sidebar:"tutorialSidebar",previous:{title:"Core of Scheme",permalink:"/lips-website/docs/scheme-intro/core"},next:{title:"Macros",permalink:"/lips-website/docs/scheme-intro/macros"}},l={},c=[{value:"Standard output",id:"standard-output",level:2},{value:"Standard input",id:"standard-input",level:2},{value:"Reading single character",id:"reading-single-character",level:3},{value:"Reading single line",id:"reading-single-line",level:3},{value:"Ports",id:"ports",level:2},{value:"Standard input port",id:"standard-input-port",level:3},{value:"Standard output port",id:"standard-output-port",level:3},{value:"Predicates that test if object is port",id:"predicates-that-test-if-object-is-port",level:2},{value:"Writing to a file",id:"writing-to-a-file",level:2},{value:"Reading from a file",id:"reading-from-a-file",level:2},{value:"Reading whole file",id:"reading-whole-file",level:2},{value:"Writing lines to file",id:"writing-lines-to-file",level:2},{value:"String ports",id:"string-ports",level:2},{value:"String Output Port",id:"string-output-port",level:3},{value:"String Input Port",id:"string-input-port",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"input-and-output",children:"Input and Output"}),"\n",(0,i.jsx)(n.h2,{id:"standard-output",children:"Standard output"}),"\n",(0,i.jsxs)(n.p,{children:["The standard output is everything you print on the screen. Often ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Computer_terminal",children:"computer\nterminal"})," or a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Terminal_emulator",children:"terminal\nemulator"})," that display so called\n",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop",children:"REPL"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To print anything on the screen, you use ",(0,i.jsx)(n.code,{children:"(write x)"})," or ",(0,i.jsx)(n.code,{children:"(display x)"})," and ",(0,i.jsx)(n.code,{children:"(newline)"})," functions."]}),"\n",(0,i.jsxs)(n.p,{children:["There is also a function that write single character ",(0,i.jsx)(n.code,{children:"(write-char x)"})]}),"\n",(0,i.jsx)(n.h2,{id:"standard-input",children:"Standard input"}),"\n",(0,i.jsxs)(n.p,{children:["The standard input is a way to get stuff from the user. Scheme provide one function for this which\nis ",(0,i.jsx)(n.code,{children:"read"}),". The function wait for the user to type something and return single\n",(0,i.jsx)(n.a,{href:"/docs/scheme-intro/what-is-lisp#s-expressions",children:"S-Expression"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define list (read))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["After this, the Scheme interpreter will pause and wait for the input from user. If user type ",(0,i.jsx)(n.code,{children:"(1 2 3)"})," (you don't need to quote), and press enter, the read expression will return that list and Scheme\nwill define a variable named list and assign that list to that symbol."]}),"\n",(0,i.jsx)(n.h3,{id:"reading-single-character",children:"Reading single character"}),"\n",(0,i.jsx)(n.p,{children:"You also have functions that operate on single characters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"(read-char)"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"(peek-char)"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can check if there are more characters in the stream by using ",(0,i.jsx)(n.code,{children:"(eof-object? x)"})," predicate. ",(0,i.jsx)(n.code,{children:"eof"})," is\na special object that indicate the end of file."]}),"\n",(0,i.jsx)(n.h3,{id:"reading-single-line",children:"Reading single line"}),"\n",(0,i.jsxs)(n.p,{children:["Scheme define function ",(0,i.jsx)(n.code,{children:"(read-line)"})," that reads whole line."]}),"\n",(0,i.jsx)(n.h2,{id:"ports",children:"Ports"}),"\n",(0,i.jsxs)(n.p,{children:["Ports are a thing in Scheme that allows to write into and read from. By default, ",(0,i.jsx)(n.code,{children:"read"})," read from\nstandard input, and ",(0,i.jsx)(n.code,{children:"write"}),", ",(0,i.jsx)(n.code,{children:"display"}),", and ",(0,i.jsx)(n.code,{children:"newline"})," writes to standard output. But all those\nfunctions accept an argument which allow to change the port to which it's writing or reading."]}),"\n",(0,i.jsx)(n.h3,{id:"standard-input-port",children:"Standard input port"}),"\n",(0,i.jsx)(n.p,{children:"To get standard input as a port object, you can use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(current-input-port)\n;; ==> #<input-port>\n"})}),"\n",(0,i.jsx)(n.p,{children:"The representation of the input port object can change depending on Scheme implementation."}),"\n",(0,i.jsx)(n.p,{children:"You can use this port as optional argument in read:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define list (read (current-input-port)))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will make the same effect as just ",(0,i.jsx)(n.code,{children:"(read)"}),". But note that you can change current input port, by\ndifferent mechanism built into Scheme."]}),"\n",(0,i.jsx)(n.h3,{id:"standard-output-port",children:"Standard output port"}),"\n",(0,i.jsx)(n.p,{children:"To get standard output as object you can use:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(current-output-port)\n;; ==> #<output-port>\n"})}),"\n",(0,i.jsx)(n.p,{children:"Same as with input port the representation of this object can be different depending on the Scheme implementation."}),"\n",(0,i.jsxs)(n.p,{children:["You can use this port with ",(0,i.jsx)(n.code,{children:"write"}),", ",(0,i.jsx)(n.code,{children:"display"}),", or ",(0,i.jsx)(n.code,{children:"newline"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (print x)\n  (let ((port (current-output-port)))\n    (display x port)\n    (newline port)))\n"})}),"\n",(0,i.jsx)(n.p,{children:"If called at top level this function will have the same effect as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (print x)\n  (display x)\n  (newline))\n"})}),"\n",(0,i.jsx)(n.p,{children:"Same as with input port you can change the current output port by different Scheme expressions."}),"\n",(0,i.jsx)(n.h2,{id:"predicates-that-test-if-object-is-port",children:"Predicates that test if object is port"}),"\n",(0,i.jsx)(n.p,{children:"You have function that check if something is input port:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"(input-port? x)"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Or if something is output port:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"(output-port? x)"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"writing-to-a-file",children:"Writing to a file"}),"\n",(0,i.jsx)(n.p,{children:"To write to a file first you need to have an open output port that points into a file. You can open file as output port with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(let ((port (open-output-file "test.scm")))\n  (write "hello world" port)\n  (newline port)\n  (close-output-port port))\n'})}),"\n",(0,i.jsx)(n.p,{children:"You need to remember to close the port to make sure that the data was properly written to the file. Some Scheme implementation\nmay decide to flush the buffer (write to a file) when you close the port."}),"\n",(0,i.jsx)(n.p,{children:"You can use a helper procedure that closes the port automatically:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(call-with-output-file "test-2.scm"\n  (lambda (port)\n    (write "hello" port)\n    (newline port)\n    (write "there" port)\n    (newline port)))\n'})}),"\n",(0,i.jsx)(n.p,{children:"The output file will contain two files that have two literal strings (with quotes because right was used)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'"hello"\n"there"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"reading-from-a-file",children:"Reading from a file"}),"\n",(0,i.jsx)(n.p,{children:"To read from a file you first need to open input port that points to a file. You can open input port with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(let ((port (open-input-file "test-2.scm")))\n  (display (read port))\n  (display " ")\n  (display (read port))\n  (newline)\n  (close-input-port port))\n;; ==> hello there\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you first evaluated the code that writes into a file ",(0,i.jsx)(n.code,{children:"test-2.scm"})," you should see same string that\nwas written into it. Note that ",(0,i.jsx)(n.code,{children:"read"})," was called two times and read two expressions (two strings)."]}),"\n",(0,i.jsxs)(n.p,{children:["Same as with output-port you need to call ",(0,i.jsx)(n.code,{children:"close-input-port"})," procedure to close the input port. But\nScheme, same as with output port have handy function that allow to close the port automagically."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(call-with-input-file "test.scm"\n  (lambda (port)\n    (write (read port))\n    (newline)))\n;; ==> "hello world"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"reading-whole-file",children:"Reading whole file"}),"\n",(0,i.jsx)(n.p,{children:"In specification there are no procedure that reads whole file as a string. But you can easily write such procedure."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define (read-file file)\n  (call-with-input-file file\n    (lambda (port)\n      (let loop ((char (read-char port)) (result \'()))\n        (if (eof-object? char)\n            (apply string (reverse result))\n            (loop (read-char port) (cons char result)))))))\n\n(display (read-file "test-2.scm"))\n;; ==> "hello"\n;; ==> "there"\n'})}),"\n",(0,i.jsx)(n.p,{children:"The same you can create a procedure that reads all lines from text as list of strings:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(define (read-lines filename)\n  (call-with-input-file filename\n    (lambda (file)\n      (let ((line ""))\n        (let loop ((result \'()))\n          (set! line (read-line file))\n          (if (eof-object? line)\n              result\n              (loop (append result (list line)))))))))\n\n(display (read-lines "test-2.scm"))\n;; ==> ("hello" "there")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"writing-lines-to-file",children:"Writing lines to file"}),"\n",(0,i.jsx)(n.p,{children:"There are no procedure that write a string as a line into a port, but you can define one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (write-line str . rest)\n  (let ((port (if (null? rest)\n                  (current-output-port)\n                  (car rest))))\n    (display str port)\n    (newline port)))\n"})}),"\n",(0,i.jsx)(n.p,{children:"You can use this function to write a list of strings as lines into a file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (write-lines lst . rest)\n  (let loop ((lst lst))\n    (unless (null? lst)\n      (apply write-line (car lst) . rest)\n      (loop (cdr lst)))))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can simplify this function by using ",(0,i.jsx)(n.code,{children:"for-each"})," higher order procedure."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:"(define (write-lines lst . rest)\n  (for-each (lambda (line)\n              (apply write-line line rest))\n            lst))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can use this with ",(0,i.jsx)(n.code,{children:"call-with-output-file"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(call-with-output-file "test-3.scm"\n  (lambda (port)\n    (let ((beatles \'("John Lennon"\n                     "Paul McCartney"\n                     "Ringo Starr"\n                     "George Harrison")))\n     (write-lines beatles port))))\n\n(read-lines "test-3.scm")\n;; ==> ("John Lennon" "Paul McCartney"\n;; ==>  "Ringo Starr" "George Harrison")\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can also write to standard output when you omit the port:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(let ((beatles \'("John Lennon"\n                 "Paul McCartney"\n                 "Ringo Starr"\n                 "George Harrison")))\n  (write-lines beatles))\n;; ==> John Lennon\n;; ==> Paul McCartney\n;; ==> Ringo Starr\n;; ==> George Harrison\n'})}),"\n",(0,i.jsx)(n.h2,{id:"string-ports",children:"String ports"}),"\n",(0,i.jsx)(n.p,{children:"You can also create ports as strings. You can use standard functions as with file I/O and stdin/stdout."}),"\n",(0,i.jsx)(n.h3,{id:"string-output-port",children:"String Output Port"}),"\n",(0,i.jsxs)(n.p,{children:["Output string port act as a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Data_buffer",children:"buffer"}),". You can also use to to get string\nrepresentation of different objects as a value."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'(let ((port (open-output-string)))\n  (let ((beatles \'("John Lennon"\n                 "Paul McCartney"\n                 "Ringo Starr"\n                 "George Harrison")))\n    (write-lines beatles port))\n  (write (get-output-string port))\n  (newline)\n  (close-output-port port))\n;; ==> "John Lennon\n;; ==> Paul McCartney\n;; ==> Ringo Starr\n;; ==> George Harrison\n;; ==> "\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This prints a multi line string because ",(0,i.jsx)(n.code,{children:"write"})," was used. Procedure ",(0,i.jsx)(n.code,{children:"get-output-string"})," can be used\nto get the output string."]}),"\n",(0,i.jsxs)(n.p,{children:["And same as before you can use ",(0,i.jsx)(n.code,{children:"call-with-port"})," to close the port after use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(call-with-port (open-output-string)\n  (lambda (p)\n    (display "hello" p)\n    (display " " p)\n    (display "there" p)\n    (get-output-string p)))\n;; ==> "hello there"\n'})}),"\n",(0,i.jsx)(n.h3,{id:"string-input-port",children:"String Input Port"}),"\n",(0,i.jsx)(n.p,{children:"String input port can be used to parse expressions (to get Scheme representation of data that is given\nas a string literal inside the code."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(let ((port (open-input-string "(1 2 3 4) (5 6 7 8)")))\n  (display (read port))\n  (newline)\n  (display (read port))\n  (newline)\n  (close-input-port port))\n;; ==> (1 2 3 4)\n;; ==> (5 6 7 8)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["And same as with output port you can atomagically close the port after use with ",(0,i.jsx)(n.code,{children:"call-with-port"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'(call-with-port (open-input-string "100 10+10i")\n  (lambda (port)\n    (display (/ 1 (read port)))\n    (newline)\n    (display (/ 1 (read port)))\n    (newline)))\n;; ==> 1/100\n;; ==> 1/20-1/20i\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);