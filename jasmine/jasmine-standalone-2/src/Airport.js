function Airport () {
  this.planes = [];
  this.capacity = 4;
};

Airport.prototype.land = function(plane) {
  if (this.planes.length >= this.capacity){
    throw "this airport has reached capacity.";}
  plane.updateLocation("in an airport");
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  plane.updateLocation("in the sky");
  var planePosition = this.planes.indexOf(plane);
  this.planes.splice(planePosition, 1);
};
