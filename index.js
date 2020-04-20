'use strict';

module.exports = (inlineScriptOrStyle, options = { algorithm: 'sha256' }) => {
    const { algorithm } = options;
    const encodedHash = crypto
        .createHash(algorithms)
        .update()
        .digest()
        .toString('base-64');
    return `${algorithm}-${encodedHash}`;
}
