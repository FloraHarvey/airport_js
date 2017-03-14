describe("Airport", function() {

  var airport = new Airport();
  var plane = new Plane();

  beforeEach(function() {
    airport.planes = [];
    spyOn(airport.weather, "isStormy").and.returnValue(false);
  });

  it( "exists", function() {
    expect(airport).toBeDefined();
  });

  it("has planes", function() {
    expect(airport.planes).toEqual([])
  });

  describe("Landing a plane", function() {
    it("can land planes", function() {
      airport.land(plane)
      expect(airport.planes[0]).toBe(plane);
    });

    it("can tell a plane its new location", function() {
      spyOn(plane, 'updateLocation');
      airport.land(plane);
      expect(plane.updateLocation).toHaveBeenCalledWith("in an airport");
    });

    it("cannot land five planes because it has a capacity of four", function() {
      for (i=0;i<4;i++)
        airport.land(plane);
      expect(function() {airport.land(plane)}).toThrow("this airport has reached capacity.");
    });

    it("will not land if weather is stormy", function() {
      airport.weather.isStormy.and.returnValue(true);
      expect(function() {airport.land(plane)}).toThrow("Cannot land due to stormy weather")
    });

  });

  describe("Instructing plane to takeoff", function() {
    it("can takeoff planes", function() {
      airport.land(plane);
      airport.takeoff(plane);
      expect(airport.planes).toEqual([]);
    });

    it("updates the plane's location", function(){
      spyOn(plane, 'updateLocation');
      airport.land(plane);
      airport.takeoff(plane);
      expect(plane.updateLocation).toHaveBeenCalledWith("in the sky");
    });

    it("will not take off if weather is stormy", function() {
      airport.weather.isStormy.and.returnValue(true);
      expect(function() {airport.takeoff(plane)}).toThrow("Cannot takeoff due to stormy weather")
    });
  });

});
