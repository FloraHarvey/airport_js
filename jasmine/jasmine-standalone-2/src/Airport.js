function Airport () {
  this.planes = [];
};

Airport.prototype.land = function(plane) {
  plane.updateLocation("in an airport")
  this.planes.push(plane);
};
