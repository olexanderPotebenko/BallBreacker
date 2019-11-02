class Line{
	constructor(x1, y1, x2, y2){
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	};

	static getPointOfIntersection(line1, line2){
		let zn = (line1.x1 - line1.x2)*(line2.y1 - line2.y2) - (line1.y1 - line1.y2)*(line2.x1 - line2.x2);//знаменатель формулы Крамера
		let getDetLine = (line)=> {
			return (line.x1 * line.y2 - line.y1 * line.x2);
		};
		let checkProectionOnXYIntersection = (line1, line2)=>{
			let xBool, yBool;

			xBool = line1.x1 <= line2.x1
					?(line2.x1 < line1.x2 ? true: false)
					:(line1.x1 < line2.x2 ? true: false);
			yBool = line1.y1 <= line2.y1
					?(line2.y1 < line1.y2 ? true: false)
					:(line1.y1 < line2.y2 ? true: false);
			return xBool && yBool;
		};
		if(zn == 0){
			if(checkProectionOnXYIntersection(line1, line2)){
				let x = Math.abs(line1.x1 + line1.x2)/2;
				let y = Math.abs(line1.y1 + line1.y2)/2;
				return {x, y};
			}else{
				return null;
			};
		}else{
			let x = ( 	getDetLine(line1) * (line2.x1 - line2.x2)
						-
						getDetLine(line2) * (line1.x1 - line1.x2)
					)/zn;
			let y = ( 	getDetLine(line1) * (line2.y1 - line2.y2)
						-
						getDetLine(line2) * (line1.y1 - line1.y2)
					)/zn;
			return {x, y};
		};
	};

	draw(color){
		let ctx = cnvArr[0].getContext('2d');
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.moveTo(this.x1, this.y1);
		ctx.lineTo(this.x2, this.y2);
		ctx.stroke();
	};

};

class BoxColider{
	constructor(width, height){
		this.width = width;
		this.height = height;
	};
	getLinesArr(pos){
		let h = this.height,
				w = this.width,
				x = pos.xa,
				y = pos.y;
		return [
			new Line(x - w/2, y - h/2, x + w/2, y - h/2),
			new Line(x + w/2, y - h/2, x + w/2, y + h/2),
			new Line(x - w/2, y + h/2, x + w/2, y + h/2),
			new Line(x - w/2, y - h/2, x - w/2, y + h/2)
		];
	};
};
class TrueColider{
	constructor(arr, color = 'rgba(0,150,0,1)'){
		this.arr = arr;
		this.color = color;
	};
	getColider(pos){

	};
	draw(){
		for(let i = 0; i < this.arr.length; i++){
			this.arr[i].draw(this.color);
		};
	};
};

function coliderTest(){
	let ctx = cnvArr[0].getContext('2d');
	let w = cnvArr[0].width/2;
	let h = cnvArr[0].height/2;

	let line1 = new TrueColider([new Line(w - 70, h - 70, w + 150, h + 150)]);
	let line2 = new TrueColider([new Line(w - 100, h - 100, w + 150, h + 150)], 'rgba(0,0,200,1)');
	line1.draw();
	line2.draw();
	let point = Line.getPointOfIntersection(line1.arr[0], line2.arr[0]);
	if(point){
		ctx.beginPath();
		ctx.strokeStyle = 'rgba(200, 0, 0, 1)';
		ctx.arc(point.x, point.y, 20, 0, Math.PI*2, true);
		ctx.stroke();
	};
};
