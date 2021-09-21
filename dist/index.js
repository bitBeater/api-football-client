"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFootBallClient = void 0;
var api_football_client_1 = require("./api-football-client");
Object.defineProperty(exports, "ApiFootBallClient", { enumerable: true, get: function () { return api_football_client_1.ApiFootBallClient; } });
__exportStar(require("./common/types"), exports);
__exportStar(require("./end-points/fixtures/fixtures/types"), exports);
__exportStar(require("./end-points/fixtures/statistics/types"), exports);
__exportStar(require("./end-points/fixtures/players/types"), exports);
__exportStar(require("./end-points/odds/odds/types"), exports);
//# sourceMappingURL=index.js.map