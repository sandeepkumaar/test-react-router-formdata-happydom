# test-react-router-formdata-happydom
```
npm test
```
O/P
```

TAP version 13
# <AppForm/> submit
action called
form submit {}
not ok 1 On Submit; Should have redirected to /contacts/5
  ---
    operator: deepEqual
    expected: '/contacts/5'
    actual:   '/contacts/undefined'
    at: Test.<anonymous> (/home/sknk/sandeep/studyspace/github/bug-happydom-react-router-formdata/test.jsx:47:10)
    stack: |-
      Error: On Submit; Should have redirected to /contacts/5
          at Test.assert [as _assert] (/home/sknk/sandeep/studyspace/github/bug-happydom-react-router-formdata/node_modules/tape/lib/test.js:309:48)
          at Test.tapeDeepEqual (/home/sknk/sandeep/studyspace/github/bug-happydom-react-router-formdata/node_modules/tape/lib/test.js:550:7)
          at Test.<anonymous> (/home/sknk/sandeep/studyspace/github/bug-happydom-react-router-formdata/test.jsx:47:10)
  ...

1..1
# tests 1
# pass  0
# fail  1
```
