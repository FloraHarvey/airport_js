describe ("Weather", function () {
  var weather = new Weather();

  it("knows when it is stormy", function(){
    spyOn (Math, 'random').and.returnValue(0.1);
    expect(weather.isStormy()).toBe(true);
  });

  it("knows when it is not stormy", function(){
    spyOn (Math, 'random').and.returnValue(0.3);
    expect(weather.isStormy()).toBe(false);
  });



});
