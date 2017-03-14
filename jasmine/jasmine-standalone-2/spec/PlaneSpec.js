describe("Plane", function() {

  var plane = new Plane;

  it( "exists", function() {
    expect(plane).toBeDefined();
  });

  it("has location", function() {
    expect(plane.location).toEqual("the plane factory")
  });

  it("can update its location", function() {
    plane.updateLocation("the sky");
    expect(plane.location).toEqual("the sky");
  });
});
