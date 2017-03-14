describe("Airport", function() {

  var airport = new Airport();
  var plane = new Plane();

  it( "exists", function() {
    expect(airport).toBeDefined();
  });

  it("has planes", function() {
    expect(airport.planes).toEqual([])
  });

  it("can land planes", function() {
    airport.land(plane)
    expect(airport.planes[0]).toBe(plane);
  });

  it("can tell a plane its new location", function() {
    spyOn(plane, 'updateLocation');
    airport.land(plane);
    expect(plane.updateLocation).toHaveBeenCalledWith("in an airport");
  });
});
