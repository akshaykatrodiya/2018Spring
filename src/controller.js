"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var $ = require("jquery");
var m = new model_1.Alerts();
// const sjob;
m.Messages = ['Great new feature'];
// sjob.Alerts = ['Great new feature'];
// m.Messages = 'Great new feature';
function displayAlerts() {
    $("#alerts").append(m.Messages.join());
}
exports.displayAlerts = displayAlerts;
;
