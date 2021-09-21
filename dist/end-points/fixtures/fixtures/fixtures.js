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
exports.fixtures = void 0;
var utils_1 = require("../../../common/utils");
/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
exports.fixtures = utils_1.apiFootballRequest('https://api-football-v1.p.rapidapi.com/v3/fixtures', parseSearch);
function parseSearch(searchFixtures) {
    if (!searchFixtures)
        return;
    var searchRequest = __assign({}, searchFixtures);
    // format dates to strings YYYY-MM-DD
    if (searchFixtures === null || searchFixtures === void 0 ? void 0 : searchFixtures.date)
        searchRequest.date = utils_1.YYYYMMDD(searchFixtures === null || searchFixtures === void 0 ? void 0 : searchFixtures.date);
    if (searchFixtures === null || searchFixtures === void 0 ? void 0 : searchFixtures.from)
        searchRequest.from = utils_1.YYYYMMDD(searchFixtures === null || searchFixtures === void 0 ? void 0 : searchFixtures.from);
    if (searchFixtures === null || searchFixtures === void 0 ? void 0 : searchFixtures.to)
        searchRequest.to = utils_1.YYYYMMDD(searchFixtures === null || searchFixtures === void 0 ? void 0 : searchFixtures.to);
    return searchRequest;
}
//# sourceMappingURL=fixtures.js.map