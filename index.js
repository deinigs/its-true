/**
 * 
 * @param {*} value 
 * @returns {boolean} True if its considered true
 */
function itsTrue(value) {
    return new Boolean(value).valueOf();
}

module.exports = itsTrue;