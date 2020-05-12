'use strict';

describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport();
  });

  it('can land at an airport', function(){
    expect(airport.land).not.toBeUndefined();
  });
});
