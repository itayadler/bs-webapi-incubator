'use strict';

var Process = require("process");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

var typ = Caml_array.caml_array_get(Process.argv, 2);

var name = Caml_array.caml_array_get(Process.argv, 3);

var lname = name.toLowerCase();

console.log("\n  [@bs.send.pipe : T.t] external add" + name + "EventListener : ([@bs.as \"" + lname + "\"] _, Dom." + typ + " => unit) => unit = \"addEventListener\";\n  [@bs.send.pipe : T.t] external add" + name + "EventListenerWithOptions : ([@bs.as \"" + lname + "\"] _, Dom." + typ + " => unit, {. \"capture\": bool, \"once\": bool, \"passive\": bool}) => unit = \"addEventListener\"; /* not widely supported */\n  [@bs.send.pipe : T.t] external add" + name + "EventListenerUseCapture : ([@bs.as \"" + lname + "\"] _, Dom." + typ + " => unit, [@bs.as {json|true|json}] _) => unit = \"addEventListener\";\n  [@bs.send.pipe : T.t] external remove" + name + "EventListener : ([@bs.as \"" + lname + "\"] _, Dom." + typ + " => unit) => unit = \"removeEventListener\";\n  [@bs.send.pipe : T.t] external remove" + name + "EventListenerWithOptions : ([@bs.as \"" + lname + "\"] _, Dom." + typ + " => unit, {. \"capture\": bool, \"passive\": bool}) => unit = \"removeEventListener\"; /* not widely supported */\n  [@bs.send.pipe : T.t] external remove" + name + "EventListenerUseCapture : ([@bs.as \"" + lname + "\"] _, Dom." + typ + " => unit, [@bs.as {json|true|json}] _) => unit = \"removeEventListener\";\n");

exports.typ = typ;
exports.name = name;
exports.lname = lname;
/* typ Not a pure module */
