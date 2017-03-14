describe("Airport", function() {

  var airport = new Airport;

  it( "exists", function() {
    expect(airport).toBeDefined();
  });

  it("has planes", function() {
    expect(airport.planes).toEqual([])  
  })
});
