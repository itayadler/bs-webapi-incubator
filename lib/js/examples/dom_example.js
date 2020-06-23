'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Webapi__Dom__Element = require("../src/Webapi/Webapi__Dom/Webapi__Dom__Element.js");
var Webapi__Dom__Document = require("../src/Webapi/Webapi__Dom/Webapi__Dom__Document.js");

function map(f, v) {
  if (v !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(v)));
  }
  
}

function andThen(f, v) {
  if (v !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(v));
  }
  
}

function unwrapUnsafely(v) {
  if (v !== undefined) {
    return Caml_option.valFromOption(v);
  }
  throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Passed `None` to unwrapUnsafely",
        Error: new Error()
      };
}

document.createElement("div").className;

map((function (prim) {
        return prim.innerText;
      }), Caml_option.nullable_to_opt(document.createElement("div").nextElementSibling));

map((function (prim) {
        return prim.innerText;
      }), Caml_option.nullable_to_opt(document.createElement("div").parentElement));

var el = unwrapUnsafely(Webapi__Dom__Element.asHtmlElement(document.createElement("div")));

map((function (param) {
        param.appendChild(el);
        
      }), andThen((function (prim) {
            return Caml_option.nullable_to_opt(prim.body);
          }), Webapi__Dom__Document.asHtmlDocument(document)));

document.createElement("div").addEventListener("mousemove", (function (e) {
        console.log([
              e.screenX,
              e.screenY
            ]);
        
      }));

exports.map = map;
exports.andThen = andThen;
exports.unwrapUnsafely = unwrapUnsafely;
exports.el = el;
/*  Not a pure module */
