
/**
 * Module dependencies.
 */

var SingleEvent = require("geval/single");
var MultipleEvent = require("geval/multiple");

module.exports = function Event(names) {
    if (!names) return SingleEvent();

    return MultipleEvent(names);
};