'use strict';

var Webapi__Dom__DomStringMap = require("../../../src/Webapi/Webapi__Dom/Webapi__Dom__DomStringMap.js");

var dataset = document.createElement("div").dataset;

Webapi__Dom__DomStringMap.set("fooKey", "barValue", dataset);

Webapi__Dom__DomStringMap.get("fooKey", dataset);

Webapi__Dom__DomStringMap.unsafeDeleteKey("fooKey", dataset);

exports.dataset = dataset;
/* dataset Not a pure module */
