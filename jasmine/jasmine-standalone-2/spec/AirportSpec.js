describe("Airport", function() {

  var airport = new Airport();
  var plane = new Plane();

  beforeEach(function() {
    airport.planes = [];
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
  });

});
