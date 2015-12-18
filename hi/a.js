
function Hiize(ctx){
  ctx["line"]= function(x1, y1, z1, x2, y2, z2) {
    this.beginPath();
    this.moveTo((x1 / z1) + 100, 100 - ((y1 / z1) + 50));
    this.lineTo((x2 / z2) + 100, 100 - ((y2 / z2) + 50));
    this.stroke();
  };
  ctx["clear"]= function(id,ctx){
    var c=document.getElementById(id);
    this.fillColor="#FFFFFF";
    this.fillRect(0,0,c.width,c.height);
  };
}
