# csp-hash-generator
Generate Content Security Policy hash for inline styles and scripts.

## Example

```js
const cspHashGen = require('csp-hash-generator');
const cspHash = cspHashGen('div{color:red}');
```
