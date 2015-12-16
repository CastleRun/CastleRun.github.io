function load(id){
  var c = document.getElementById(id);
  var ctx = c.getContext("2d");
  return ctx;
}
function clear(id,ctx){
  c=document.getElementById(id);
  ctx.fillStyle="#FFFFFF";
  ctx.fillRect(0,0,c.width,c.height);
}
function line(ctx, x1, y1, z1, x2, y2, z2) {
    ctx.moveTo((x1 / z1) + 100, 100 - ((y1 / z1) + 50));
    ctx.lineTo((x2 / z2) + 100, 100 - ((y2 / z2) + 50));
    ctx.stroke();
}
