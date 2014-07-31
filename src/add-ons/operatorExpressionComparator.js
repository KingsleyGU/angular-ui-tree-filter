/**
 * Compares numeric value to provided arithmetical-like expression. Expressions are built from 2 parts:
 * operator and number (which may or may not be separated with a space). Supported operators are:
 *  - > returns true if value is greater than number
 *  - < returns true if value is less than number
 *  - >= returns true if value is greater or equal than number
 *  - <= returns true if value is less or equal than number
 *  - = and == return true if value is equal to number
 *  - ! and != and <> return true if value is not equal to number
 *
 * @param {*} value
 * @param {string} pattern arithmetical-like expression.
 * @returns {boolean}
 */
window.operatorExpressionComparator = function operatorExpressionComparator(value, pattern) {
    'use strict';

    if (!value || !pattern) {
        return false;
    }
    var parsed = pattern.match(/\s*(<>|!=|!|>=|<=|>|<|==|=)\s*?(\S.*)\s*/);
    if (parsed.length !== 3) {
        return false;
    }

    function compareAsInt(operator, left, right) {
        var intLeft = parseInt(left, 10);
        var intRight = parseInt(right, 10);

        switch (operator) {
            case '>':
                return intLeft > intRight;
            case '<':
                return intLeft < intRight;
            case '>=':
                return intLeft >= intRight;
            case '<=':
                return intLeft <= intRight;
            case '!':
                return intLeft !== intRight;
            case '!=':
                return intLeft !== intRight;
            case '<>':
                return intLeft !== intRight;
            case '=':
                return intLeft === intRight;
            case '==':
                return intLeft === intRight;
        }
        return false;
    }

    return compareAsInt(parsed[1], value, parsed[2]);
};