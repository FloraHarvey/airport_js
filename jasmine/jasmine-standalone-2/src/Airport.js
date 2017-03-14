function Airport (weather = new Weather()) {
  this.planes = [];
  this.capacity = 4;
  this.weather = weather;
};

Airport.prototype.land = function(plane) {
  if (this.planes.length >= this.capacity) {
    throw "this airport has reached capacity.";
  }
  if (this.weather.isStormy()) {
    throw "Cannot land due to stormy weather";
  }
  plane.updateLocation("in an airport");
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  if (this.weather.isStormy()) {
    throw "Cannot takeoff due to stormy weather";
  }
  plane.updateLocation("in the sky");
  var planePosition = this.planes.indexOf(plane);
  this.planes.splice(planePosition, 1);
};
