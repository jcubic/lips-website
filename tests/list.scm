(test "list: append"
      (lambda (t)
        (t.is (append '(1 2 3) 10) '(1 2 3 . 10))
        (t.is (append '((1 2 3)) 10) '((1 2 3) . 10))
        (t.is (append '(1 2 (3) 4) 10) '(1 2 (3) 4 . 10))
        (t.is (append '(1 2 3 (4)) 10) '(1 2 3 (4) . 10))
        (t.is (to.throw (append '(1 . 2) 10)) #t)
        (t.is (append () ()) '())
        (t.is (append '(1) ()) '(1))
        (t.is (append () '(1)) '(1))
        (t.is (append '(1 2 3) '()) '(1 2 3))
        (t.is (append () '(1 2 3)) '(1 2 3))
        (t.is (append '() '() '()) '())
        (t.is (append) '())
        (t.is (append '() '(foo) '() '(bar)) '(foo bar))))


(test "list: cycles"
      (lambda (t)
        ;; not cycle bug #44
        (let* ((x (list 1 2))
               (y (list x x)))
          (t.is (repr y) "((1 2) (1 2))")
          (set-cdr! (cdadr y) 3)
          (t.is (repr y) "((1 2 . 3) (1 2 . 3))")
          (set-cdr! (cdadr y) (cons 3 '()))
          (t.is (and (list? x) (list? y)) #t))
        (let ((x '(1 2 3)))
          (set-cdr! (cddr x) x)
          (t.is (list? x) #f)
          (t.is (repr x) "#0=(1 2 3 . #0#)"))
        (let ((x '(1 2 3)))
          (set-cdr! (cddr x) (cons x x))
          (t.is (repr x) "#0=(1 2 3 #0# . #0#)"))
        (let ((x '(1 (2) 3)))
          (set-cdr! (cadr x) (cdr x))
          (set-cdr! (cddr x) x)
          (t.is (repr x) "#0=(1 . #1=((2 . #1#) 3 . #0#))"))))
