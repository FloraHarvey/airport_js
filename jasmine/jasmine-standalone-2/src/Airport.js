function Airport () {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  plane.updateLocation("in an airport");
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  plane.updateLocation("in the sky");
  var planePosition = this.planes.indexOf(plane);
  this.planes.splice(planePosition, 1);
};
