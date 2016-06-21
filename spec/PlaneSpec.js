'use strict';

describe('Plane', function() {

  var plane;
  var airport;

  beforeEach( function() {
    plane = new Plane();
    airport = jasmine.createSpyObj( "airport", ['clearForLanding'] );
  });

  it('can land in an airport', function() {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

});
