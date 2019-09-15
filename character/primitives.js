
	
class Figure{
	constructor(pointArr, color){
		this.pointArr = pointArr;
		this.color = color;
	};
		
	draw(ctx){
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.pointArr[0].x, this.pointArr[0].y);
		for(let i = 1; i < this.pointArr.length; i++){
			let{x, y} = this.pointArr[i];
			ctx.lineTo(x, y);
		};
		
		ctx.fill();
	};
};

class Circle{
	constructor(point, radius, color){
		
		this.radius = radius;
		this.draw();
	};
	
	draw(ctx){
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2);
		
		ctx.fill();
		ctx.closePath();
	};
};