'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Webapi__Dom__Node = require("./Webapi__Dom__Node.js");
var Webapi__Dom__Slotable = require("./Webapi__Dom__Slotable.js");
var Webapi__Dom__ChildNode = require("./Webapi__Dom__ChildNode.js");
var Webapi__Dom__EventTarget = require("./Webapi__Dom__EventTarget.js");
var Webapi__Dom__CharacterData = require("./Webapi__Dom__CharacterData.js");
var Webapi__Dom__NonDocumentTypeChildNode = require("./Webapi__Dom__NonDocumentTypeChildNode.js");

function ofNode(node) {
  if (Webapi__Dom__Node.nodeType(node) === /* Text */2) {
    return Caml_option.some(node);
  }
  
}

function Impl(T) {
  return {
          ofNode: ofNode
        };
}

var include = Webapi__Dom__Node.Impl({});

Webapi__Dom__EventTarget.Impl({});

Webapi__Dom__CharacterData.Impl({});

Webapi__Dom__NonDocumentTypeChildNode.Impl({});

Webapi__Dom__ChildNode.Impl({});

Webapi__Dom__Slotable.Impl({});

var nodeType = include.nodeType;

exports.Impl = Impl;
exports.nodeType = nodeType;
exports.ofNode = ofNode;
/* include Not a pure module */
