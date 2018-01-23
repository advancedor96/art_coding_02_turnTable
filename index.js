let mycanvas = document.querySelector("#myCanvas");
// let c = document.getElementById('myCanvas');
let ctx = mycanvas.getContext("2d");
let num = 5;

for( let i=0;i<num;i++){
   ctx.save();
   ctx.beginPath();
   ctx.translate(252, 252);
   ctx.moveTo(0, 0);
   ctx.rotate(2 * Math.PI / num * i);
   ctx.arc(0, 0, 250, 0,  2 * Math.PI / num);

   ctx.fillStyle = '#b0e0e6';
   ctx.fill();
   ctx.lineWidth = 2;
   ctx.strokeStyle = 'black';
   ctx.lineTo(0, 0);
   ctx.stroke();

   ctx.fillStyle = '#fff';
   ctx.font = '18px sans-serif';
   if(i==0){
      ctx.fillText('1', 65, 55);
   }
   if(i==1){
      ctx.fillText('2', 65, 55);
   }

   ctx.restore();
}

start = ()=>{
   let mycanvas = document.querySelector('#myCanvas');
   mycanvas.style.transform = "none";

   var randommuil = Math.random(1000)*1000+1;
   console.log(randommuil);
   
   mycanvas.style.transition = "all 3s linear";
   mycanvas.style.transform = "rotate(2780deg)";
}



// $('#btn').click(function(){
//    var randommuil = Math.random(1000)*1000+1;
// // js实现匀速转动5圈，随后加速，再减速
//  $ ("#canvas").css("transition","all  6s linear");
//    setTimeout(function(){
//       $("#canvas").css("transition","all  6s ease-out");
//       $("#canvas").css("transform" , "rotate(2780deg)"); 
//    },randommuil);  
// })
