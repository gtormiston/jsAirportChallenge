'use strict';

function Airport(weather) {
  this._hanger = [];
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
};

Airport.prototype.planes = function() {
  return this._hanger;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this._weather.isStormy()) {
    throw new Error("cannot land during storm");
  }
  this._hanger.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if( this._weather.isStormy() ) {
    throw new Error("cannot take off during storm");
  }
  this._hanger = [];
};
