"use strict";(self.webpackChunknew_docs=self.webpackChunknew_docs||[]).push([[671],{7876:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(5893),t=s(1151);const r={sidebar_position:1},c="Getting Started",l={id:"intro",title:"Getting Started",description:"Browser",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/lips-website/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/jcubic/lips-website/tree/docusaurus/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Introduction to Scheme",permalink:"/lips-website/docs/category/introduction-to-scheme"}},a={},o=[{value:"Browser",id:"browser",level:2},{value:"Running Scheme Code Inline",id:"running-scheme-code-inline",level:3},{value:"Running External Scheme Code",id:"running-external-scheme-code",level:3},{value:"NodeJS / Bun",id:"nodejs--bun",level:2},{value:"Executing files",id:"executing-files",level:3},{value:"Executing expressions",id:"executing-expressions",level:3},{value:"Standalone scripts",id:"standalone-scripts",level:3},{value:"Executing LIPS prammatically",id:"executing-lips-prammatically",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsx)(n.h2,{id:"browser",children:"Browser"}),"\n",(0,i.jsx)(n.p,{children:"When using LIPS Scheme interpreter in browser you need to include the main script file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="https://unpkg.com/@jcubic/lips@beta/dist/lips.min.js"><\/script>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["or ",(0,i.jsx)(n.a,{href:"https://www.jsdelivr.com/",children:"jsDelivr"})," that is somewhat faster:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/@jcubic/lips@beta/dist/lips.min.js"><\/script>\n'})}),"\n",(0,i.jsx)(n.p,{children:"After adding script tag with main file, you can use Scheme code inside script tag:"}),"\n",(0,i.jsx)(n.h3,{id:"running-scheme-code-inline",children:"Running Scheme Code Inline"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script type="text/x-scheme" bootstrap>\n(let ((what "world")\n      (greet "hello"))\n   (display (string-append "hello" " " what))\n   (newline))\n<\/script>\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"}),": Only the core of LIPS is written in JavaScript, almost half of it it's written in Scheme.\nSo if you want to load the standard library (to have full LIPS), you should use ",(0,i.jsx)(n.code,{children:"bootstrap"})," or\n",(0,i.jsx)(n.code,{children:"data-bootstrap"})," attribute that will load it for you. You can optionaly specify the location of the\nfile."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script type="text/x-scheme" bootstrap="https://cdn.jsdelivr.net/npm/@jcubic/lips@beta/dist/std.xcb">\n(let ((what "world")\n      (greet "hello"))\n   (display (string-append "hello" " " what))\n   (newline))\n<\/script>\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"xcb"})," file is simple binary format that LIPS uses to speed up parsing the the code. You can also use\n",(0,i.jsx)(n.code,{children:".scm"})," file or ",(0,i.jsx)(n.code,{children:".min.scm"})," file that may be little bit bigger."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"})," The ",(0,i.jsx)(n.code,{children:"bootstrap"})," attribute can also be included on main script tag with the JavaScript file."]}),"\n",(0,i.jsx)(n.h3,{id:"running-external-scheme-code",children:"Running External Scheme Code"}),"\n",(0,i.jsxs)(n.p,{children:["You can also use ",(0,i.jsx)(n.code,{children:"src"})," attribute to link to source file. Like you normally do with JavaScript:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script type="text/x-scheme" src="example.scm"><script>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"nodejs--bun",children:"NodeJS / Bun"}),"\n",(0,i.jsx)(n.p,{children:"To install LIPS you can use NPM:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install -g @jcubic/lips@beta\n"})}),"\n",(0,i.jsx)(n.p,{children:"You should use beta, because the so call stable version is really old and outdated. Because of so many\nbreaking changes no new stable version was released and instead 1.0 beta started."}),"\n",(0,i.jsxs)(n.p,{children:["If LIPS is installed globally just use ",(0,i.jsx)(n.code,{children:"lips"})," command to start the REPL:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ lips\n  __ __                          __\n / / \\ \\       _    _  ___  ___  \\ \\\n| |   \\ \\     | |  | || . \\/ __>  | |\n| |    > \\    | |_ | ||  _/\\__ \\  | |\n| |   / ^ \\   |___||_||_|  <___/  | |\n \\_\\ /_/ \\_\\                     /_/   lexical scope\n\nLIPS Interpreter 1.0.0-beta (2024-02-16) <https://lips.js.org>\nCopyright (c) 2018-2024 Jakub T. Jankiewicz\n\nType (env) to see environment with functions macros and variables. You can also\nuse (help name) to display help for specific function or macro, (apropos name)\nto display list of matched names in environment and (dir object) to list\nproperties of an object.\n\nlips>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["By default splash screen is shown you can hide it with option ",(0,i.jsx)(n.code,{children:"-q"}),". If you're using bash you can create an\nalias:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"alias lips='lips -q'\n"})}),"\n",(0,i.jsx)(n.p,{children:"and you will not see the splash again."}),"\n",(0,i.jsx)(n.h3,{id:"executing-files",children:"Executing files"}),"\n",(0,i.jsx)(n.p,{children:"You can also execute scheme code with:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lips foo.scm\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note, that with lisp executable you don't need to manually bootstrap the standard library. But you can change\nwhich file is loaded or disable the loading of the file completely using ",(0,i.jsx)(n.code,{children:"--bootstrap"})," flag."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lips --bootstrap dist/std.scm foo.scm\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will run foo.scm file and bootstrap from main scheme file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lips --bootstrap none foo.scm\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will run the code without loading the standard library. So LIPS will have only functions\nand macros defined in JavaScript. This is called Core of LIPS with most of the essentials."}),"\n",(0,i.jsx)(n.h3,{id:"executing-expressions",children:"Executing expressions"}),"\n",(0,i.jsxs)(n.p,{children:["You can execute expression with ",(0,i.jsx)(n.code,{children:"-e"})," flag (short of ",(0,i.jsx)(n.code,{children:"eval"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"lips -e '(print \"hello world\")'\n"})}),"\n",(0,i.jsx)(n.h3,{id:"standalone-scripts",children:"Standalone scripts"}),"\n",(0,i.jsxs)(n.p,{children:["You can also write scripts using LIPS with ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Shebang_(Unix)",children:"shebang"}),".\nThis extension is defined in ",(0,i.jsx)(n.a,{href:"https://srfi.schemers.org/srfi-22/srfi-22.html",children:"SRFI-22"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scheme",children:'#!/usr/bin/env lips\n(let ((what "World"))\n  (print (string-append "Hello " what)))\n'})}),"\n",(0,i.jsxs)(n.p,{children:["If you write code like this and save it in ",(0,i.jsx)(n.code,{children:"script.scm"})," on Unix like systems (Linux, MacOS, or Windows with WSL)\nyou can change the execution permission:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"chmod +x script.scm\n"})}),"\n",(0,i.jsx)(n.p,{children:"and execute the script by providing the name:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./script.scm\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NOTE"}),": by default most systems don't execute files in current directory so you need to provide ",(0,i.jsx)(n.code,{children:"./"})," in front.\nYou can change that if you add dot (current working directory) to the ",(0,i.jsx)(n.code,{children:"$PATH"})," environment variable:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export $PATH=".:$PATH"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"executing-lips-prammatically",children:"Executing LIPS prammatically"}),"\n",(0,i.jsx)(n.p,{children:"You can also execute LIPS from JavaScript:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const { exec } = require('@jcubic/lips');\n// or\nimport { exec } from '@jcubic/lips';\n\nexec('(let ((a 10) (b 20)) (* a b))').then(result => {\n    results.forEach(function(result) {\n        if (typeof result !== 'undefined') {\n            console.log(result.toString());\n        }\n    });\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": that you also need to bootstrap the standard library to have fully working Scheme system."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"exec"})," is the main function that can be used to evaluate expressions. It returns a Promise of Array\nof results."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>c});var i=s(7294);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);