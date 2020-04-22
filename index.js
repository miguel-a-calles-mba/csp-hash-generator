'use strict';

const crypto = require('crypto');

module.exports = (inlineScriptOrStyle, options = { algorithm: 'sha256' }) => {
    const { algorithm } = options;
    const encodedHash = crypto
        .createHash(algorithm)
        .update(inlineScriptOrStyle)
        .digest()
        .toString('base64');
    return `${algorithm}-${encodedHash}`;
}
