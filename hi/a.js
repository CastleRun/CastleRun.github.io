function Hiize(ctx,id){
  ctx["id"]=id;
  ctx["x1"]=0;
  ctx["y1"]=0;
  ctx["z1"]=0;
  ctx["x2"]=0;
  ctx["y2"]=0;
  ctx["z2"]=0;
  ctx["line"]="this.beginPath();this.moveTo((x1 / z1) + 100, 100 - ((y1 / z1) + 50));this.lineTo((x2 / z2) + 100, 100 - ((y2 / z2) + 50));this.stroke();";
  ctx["clear"]="var c=document.getElementById(id);this.fillColor='#FFFFFF';this.fillRect(0,0,c.width,c.height);";
}
