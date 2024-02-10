import Head from '@docusaurus/Head';
import { useLayoutEffect } from 'react';
import './styles.css';

const examples = [
    {
        description: 'Filter function accept, regex or function. Curry is higher order function that create new function with defaults.',
        code: `(print (filter number? '(foo 10 bar 20 baz 30)))
;; ==> (10 20 30)
(print (filter #/foo|bar/ '(foo bar baz quux)))
;; ==> (foo bar)
(define foo_or_bar (curry filter #/foo|bar/))
(print (foo_or_bar '(foo bar baz)))
;; ==> (foo bar)`
    },
    {
        description: 'Automagic async/await like resolving of promises and explicit promise quotation.',
        code: `(define h1-re #/<h1>([^>]+)<\\/h1>/)
;; automagic promise resolving
(let ((msg (--> (fetch "https://api.scheme.org/")
                (text)
                (match h1-re)
                1)))
  (print msg))

;; explicit promise handling with quotation
(let ((promise (--> '>(fetch "https://api.scheme.org/")
                    (then (lambda (res)
                            (res.text)))
                    (then (lambda (x)
                            (. (x.match h1-re) 1))))))
  (print (await promise)))`
    },
    {
        description: 'Fibonacci Closure with swap! macro',
        code: `(define-macro (swap! a b x y)
  (let ((g_b (gensym)))
    \`(let ((,g_b ,y))
       (set! ,a ,b)
       (set! ,b ,g_b))))

;; example taken from Go website
(define (fib)
   (let ((a 0) (b 1))
     (lambda ()
        (swap! a b b (+ a b))
        a)))

(let ((f (fib)))
  (list (f) (f) (f) (f) (f)))`
    },
    {
        description: 'Scheme hygienic macro that creates assoc list, with macroexpand.',
        code: `(define-syntax alist
  (syntax-rules ()
     ((_) ())
     ((_ x y z ...)
      (cons (cons x y) (alist z ...)))))

(print (alist "foo" 10 "bar" 20 "baz" 30))
;; ==> ((foo . 10) (bar . 20) (baz . 30))
(macroexpand (alist "foo" 10 "bar" 20))
;; ==> (#:cons (#:cons "foo" 10)
;;             (#:cons (#:cons "bar" 20)
;;                     ()))`
    },
    {
        description: 'Y Combinator and inline factorial function.',
        code: `(define Y
  (lambda (h)
    ((lambda (x) (x x))
     (lambda (g)
       (h (lambda args (apply (g g) args)))))))

((Y (lambda (f)
     (lambda (n)
       (cond ((< n 0)
              (throw (new Error "Invalid factorial")))
             ((zero? n) 1)
             (else (* n (f (- n 1))))))))
 10)
;; ==> 3628800`
    }
];

function getScript(script: string) {
    return new Promise((resolve, reject) => {
        const $script = document.createElement("script");
        $script.onload = resolve;
        $script.onerror = reject;
        $script.src = script;
        document.head.appendChild($script);
    });
}

function useScripts(scripts: string[]) {
    useLayoutEffect(() => {
        (function loop() {
            if (scripts.length) {
                const script = scripts.shift();
                getScript(script).then(loop);
            }
        })();
    }, []);
}


export default function Interpreter(): JSX.Element {
    useScripts([
        'https://code.jquery.com/jquery-3.4.1.min.js',
        'https://cdn.jsdelivr.net/combine/npm/jquery.terminal/js/jquery.terminal.min.js,npm/js-polyfills/keyboard.js,npm/prismjs/prism.js,npm/jquery.terminal/js/prism.js,npm/prismjs/components/prism-scheme.min.js',
        'https://cdn.jsdelivr.net/npm/@jcubic/lips@beta/lib/js/terminal.js',
        'https://cdn.jsdelivr.net/npm/@jcubic/lips@beta/lib/js/prism.js',
        '/js/interpreter.js'
    ]);
    return (
        <>
          <Head>
            <link href="https://cdn.jsdelivr.net/combine/npm/jquery.terminal/css/jquery.terminal.min.css,npm/prismjs/themes/prism-coy.css,npm/terminal-prism/css/prism-coy.css" rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/gh/jcubic/lips@devel/lib/css/terminal.css"
                  rel="stylesheet"/>
            <link href="https://cdn.jsdelivr.net/gh/richleland/pygments-css/monokai.css"
                  rel="stylesheet"/>
            {/*
            <script src="https://cdn.jsdelivr.net/npm/@jcubic/lips@beta/dist/lips.min.js"
                    bootstrap="https://cdn.jsdelivr.net/npm/@jcubic/lips@beta/dist/std.xcb"/>
            */}
            <script src="http://localhost/~kuba/jcubic/scheme/lips/dist/lips.js"
                    bootstrap="http://localhost/~kuba/jcubic/scheme/lips/dist/std.scm" />
          </Head>
          <div className="intro">
            <div className="actions-wrapper">
              <ul className="actions cloak">
                <li className="zoom-in icon">
                  <a href="#">Zoom In</a>
                </li>
                <li className="zoom-out icon">
                  <a href="#">Zoom Out</a>
                </li>
                <li className="full-screen">
                  <ul>
                    <li className="full-screen icon">
                      <a href="#">Full Screen</a>
                    </li>
                    <li className="exit-full-screen icon">
                      <a href="#">Exit Full Screen</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="term"/>
            <div className="examples">
              <button className="run">run</button>
              <ul className="list">
                {examples.map((example, index) => {
                    return (
                        <li key={index}>
                          <div className="example">
                            <pre>{example.code}</pre>
                          </div>
                          <div className="description">{example.description}</div>
                        </li>
                    );
                })}
              </ul>
              <ul className="pagination">
                {examples.map((_, index) => {
                    return <li key={index}><a href="#">{ index + 1 }</a></li>;
                })}
              </ul>
            </div>
          </div>
        </>
    );
};