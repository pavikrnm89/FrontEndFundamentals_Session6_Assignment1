function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
