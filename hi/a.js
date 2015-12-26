function line(ctx,x1,y1,z1,x2,y2,z2){
  ctx.beginPath();
  ctx.moveTo((x1 / z1) + 100, 100 - ((y1 / z1) + 50));
  ctx.lineTo((x2 / z2) + 100, 100 - ((y2 / z2) + 50));
  ctx.stroke();
}
function clear(ctx){
  var c=document.getElementById(id);
  ctx.fillColor='#FFFFFF';
  ctx.fillRect(0,0,200,100);
}
