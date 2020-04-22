'use strict';

const crypto = require('crypto');

module.exports = (inlineScriptOrStyle, options = { algorithm: 'sha256' }) => {
    const { algorithm } = options;
    const encodedHash = crypto
        .createHash(algorithm)
        .update()
        .digest()
        .toString('base-64');
    return `${algorithm}-${encodedHash}`;
}
