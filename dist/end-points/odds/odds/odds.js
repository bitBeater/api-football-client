"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.odds = void 0;
var utils_1 = require("../../../common/utils");
/** https://www.api-football.com/documentation-v3#operation/get-odds */
exports.odds = utils_1.apiFootballRequest('https://api-football-v1.p.rapidapi.com/v3/odds', parseSearch);
function parseSearch(search) {
    if (!search)
        return;
    var retVal = __assign({}, search);
    if (search === null || search === void 0 ? void 0 : search.date)
        retVal.date = utils_1.YYYYMMDD(search === null || search === void 0 ? void 0 : search.date);
    return retVal;
}
//# sourceMappingURL=odds.js.map