"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixtureStatus = void 0;
var FixtureStatus;
(function (FixtureStatus) {
    /**  : Time To Be Defined,
     * Fixtures with the status TBD may indicate an incorrect fixture date or time because the fixture date or time is not yet known or final. Fixtures with this status are checked and updated daily. The same applies to fixtures with the status POST, CANC.
     */
    FixtureStatus["TBD"] = "TBD";
    /**  : Not Started */
    FixtureStatus["NS"] = "NS";
    /**  : First Half, Kick Off */
    FixtureStatus["FH"] = "1H";
    /**  : Halftime */
    FixtureStatus["HT"] = "HT";
    /**  : Second Half, 2nd Half Started */
    FixtureStatus["SH"] = "2H";
    /**  : Extra Time */
    FixtureStatus["ET"] = "ET";
    /**  : Penalty In Progress */
    FixtureStatus["P"] = "P";
    /**  : Match Finished */
    FixtureStatus["FT"] = "FT";
    /**  : Match Finished After Extra Time */
    FixtureStatus["AET"] = "AET";
    /**  : Match Finished After Penalty */
    FixtureStatus["PEN"] = "PEN";
    /**  : Break Time (in Extra Time) */
    FixtureStatus["BT"] = "BT";
    /**  : Match Suspended */
    FixtureStatus["SUSP"] = "SUSP";
    /**  : Match Interrupted */
    FixtureStatus["INT"] = "INT";
    /**  : Match Postponed */
    FixtureStatus["PST"] = "PST";
    /**  : Match Cancelled */
    FixtureStatus["CANC"] = "CANC";
    /**  : Match Abandoned */
    FixtureStatus["ABD"] = "ABD";
    /**  : Technical Loss */
    FixtureStatus["AWD"] = "AWD";
    /**  : WalkOver */
    FixtureStatus["WO"] = "WO";
    /**  : In Progress * This status is used in very rare cases. It indicates a fixture in progress but the data indicating the half-time or elapsed time are not available. */
    FixtureStatus["LIVE"] = "LIVE";
})(FixtureStatus = exports.FixtureStatus || (exports.FixtureStatus = {}));
//# sourceMappingURL=types.js.map