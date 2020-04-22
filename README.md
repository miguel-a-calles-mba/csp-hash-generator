# csp-hash-generator
Generate Content Security Policy hash for inline styles and scripts.

## Example

```js
const cspHashGen = require('csp-hash-generator');
const cspHashInlineCss = cspHashGen('div{color:red}');
const cspHashInlineJs = cspHashGen('console.log("test")');
```
