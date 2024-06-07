/**
 * Considered true:
 * - true
 * - "true" (all different letter cases)
 * - 1
 * - "1"
 * @param {*} value 
 * @returns {boolean} True if its considered true
 */
function itsTrue(value) {
    if (typeof value == 'string' || value instanceof String) {
        const lowerValue = value.toLowerCase();
        return lowerValue === 'true' || lowerValue === '1';
    }
    if (typeof value === 'boolean') {
        return value;
    }
    if (value instanceof Boolean) {
        return value.valueOf();
    }
    if(typeof value === 'number') {
        return value === 1;
    }
    return false;
}

module.exports = itsTrue;