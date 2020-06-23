'use strict';


var Composite = {
  sourceOver: "source-over",
  sourceIn: "source-in",
  sourceOut: "source-out",
  sourceAtop: "source-atop",
  destinationOver: "destination-over",
  destinationIn: "destination-in",
  destinationOut: "destination-out",
  destinationAtop: "destination-atop",
  lighter: "lighter",
  copy: "copy",
  xor: "xor"
};

var LineCap = {
  butt: "butt",
  round: "round",
  square: "square"
};

var LineJoin = {
  round: "round",
  bevel: "bevel",
  miter: "miter"
};

function setStrokeStyle(ctx, param, v) {
  ctx.strokeStyle = v;
  
}

function setFillStyle(ctx, param, v) {
  ctx.fillStyle = v;
  
}

function reifyStyle(x) {
  var instanceOf = (function(x,y) {return +(x instanceof y)});
  var tmp;
  if (typeof x === "string") {
    tmp = /* String */0;
  } else if (instanceOf(x, CanvasGradient)) {
    tmp = /* Gradient */1;
  } else if (instanceOf(x, CanvasPattern)) {
    tmp = /* Pattern */2;
  } else {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Unknown canvas style kind. Known values are: String, CanvasGradient, CanvasPattern",
          Error: new Error()
        };
  }
  return [
          tmp,
          x
        ];
}

function fillStyle(ctx) {
  return reifyStyle(ctx.fillStyle);
}

function strokeStyle(ctx) {
  return reifyStyle(ctx.strokeStyle);
}

exports.Composite = Composite;
exports.LineCap = LineCap;
exports.LineJoin = LineJoin;
exports.setStrokeStyle = setStrokeStyle;
exports.setFillStyle = setFillStyle;
exports.reifyStyle = reifyStyle;
exports.fillStyle = fillStyle;
exports.strokeStyle = strokeStyle;
/* No side effect */
