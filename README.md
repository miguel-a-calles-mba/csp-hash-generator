# csp-hash-generator
Generate Content Security Policy hash for inline styles and scripts.

## Example

```js
const cspHashGen = require('csp-hash-generator');
const cspHashInlineCss = cspHashGen('div{color:red}');
console.log('cspHashInlineCss:', cspHashInlineCss);
// cspHashInlineCss: sha256-f4MzgafDG4q2N8Hfvs1qfK8n78s+CV/8OlLVKgrA4zw=
const cspHashInlineJs = cspHashGen('console.log("test")');
console.log('cspHashInlineJs:', cspHashInlineJs);
// cspHashInlineJs: sha256-uNaYvNbqceDXrfK/UyL1z5bgy31m0ahirB8RD98Fcdk=
```
