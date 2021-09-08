"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = void 0;
const utils_1 = require("../../../common/utils");
/** https://www.api-football.com/documentation-v3#operation/get-fixtures */
exports.fixtures = utils_1.apiFootballRequest('https://api-football-v1.p.rapidapi.com/v3/fixtures', parseSearch);
function parseSearch(searchFixtures) {
    if (!searchFixtures)
        return;
    const searchRequest = Object.assign({}, searchFixtures);
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