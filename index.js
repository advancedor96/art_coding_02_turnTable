let mycanvas = document.querySelector("#myCanvas");
// let c = document.getElementById('myCanvas');
let ctx = mycanvas.getContext("2d");
let num = 2;

for( let i=0;i<num;i++){
   ctx.save();
   ctx.beginPath();
   ctx.translate(252, 252);
   ctx.moveTo(0, 0);
   ctx.rotate(2 * Math.PI / num * i);
   ctx.arc(0, 0, 250, 0,  2 * Math.PI / num);

	if(i==0){
		ctx.fillStyle = '#f26048';
		ctx.fill();
	}
   if(i==1){
		ctx.fillStyle = '#48b475';
		ctx.fill();
   }

   ctx.lineWidth = 2;
   ctx.strokeStyle = 'black';
   ctx.lineTo(0, 0);
   ctx.stroke();

   ctx.fillStyle = '#fff';
   ctx.font = '25px sans-serif';
   if(i==0){
		ctx.fillText('做', 65, 55);

   }
   if(i==1){
      ctx.fillText('不做', 65, 55);
   }

   ctx.restore();
}
getDeg = (str) =>{
	let tmp = str.substring(   str.indexOf('(')+1, str.indexOf(')')-3   );
	tmp = parseInt(tmp, 10); 
	// tmp = tmp % 360;
	return tmp; 
}
start = ()=>{
	let mycanvas = document.querySelector('#myCanvas');
	

	//抓現在的角度   /360取餘數，設回去。再加亂數
	let str = mycanvas.style.transform;
	let currentDeg = getDeg(str);

	if(currentDeg >=360050000){
		console.log('超過360050000了，把角度%3600');
		currentDeg %= 360;

		mycanvas.style.transition = "none"; 
		mycanvas.style.transform = `rotate(${currentDeg}deg)`;
		return false;
	}


	//設回去
	// mycanvas.style.transition = "none"; //必須先歸0
	// mycanvas.style.transform = `rotate(${newDeg}deg)`;

	//再加亂數
	var randommuil = Math.floor( Math.random(10000)*10000 )+1000;
	mycanvas.style.transition = "all 3s ease-in-out"; 
	mycanvas.style.transform = `rotate(${currentDeg + randommuil}deg)`;




   // var randommuil = Math.floor( Math.random(1000)*1000 )+1;
   // console.log(randommuil);
   
   // mycanvas.style.transform = "rotate(2780deg)";
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
