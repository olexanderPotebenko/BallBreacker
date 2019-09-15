//object Components

class Data{
	constructor(){
		if(this.prototype === Data)
			throw new Error('Data is abstract class!!!');
	}
};
function getImage(arr, w, h){
	let canvas = document.createElement('canvas');
	canvas.width = this.w;
	canvas.height = this.h;
	let ctx = canvas.getContext('2d');

	for(let i = 0; i < this.arr.length; i++){
		this.arr[i].draw(ctx);
	};

	let img = new Image();
	img.src = canvas.toDataURL();
	return img;
};

class Skin extends Data{
	constructor(img){
		this.img = img;
	};
	draw(pos){
		ctx.drawImage(this.img, pos.x, pos.y);
	};

};

class Position extends Data{
	constructor(x, y){
		this.x = x;
		this.y = y;
	};
};

class Health extends Data{
	constructor(hp, min, max){
		this.min = min;
		this.max = max;
		this.setHp(hp);
	};
	setHp(hp){
		this.hp = 	(hp >= this.min && hp <= this.max) ?
					(hp):
					(hp < this.min ? this.min: this.max);
	};
};

class Damage extends Data{
	constructor(min, max){
		this.min = min;
		this.max = max;
	};
	getDamage(){
		return this.max - Math.random() * (this.max - this.min);
	};
};

class KineticParams extends Data{
	constructor(weight, vector, speed){
		this.weight = weight;
		this.setVector(vector);
		this.speed = speed; //за 1000ms
	};
	setVector(vector){
		let calcVector = function(vector){
			if(vector >= 0 && vector <= Math.PI*2)
				return vector;
			else if(vector > Math.PI*2)
				return calcVector(vector - Math.PI*2);
			else if(vector < 0)
				return calcVector(vector + Math.PI*2);
		};

		this.vector = calcVector(vector);
	};
};

class PhysicalParams extends Data{
	constructor(elasticity, friction){
		this.setElasticity(elasticity); //упругость
		this.setFriction(friction); //трение
	};
	setElasticity(elasticity){
		this.elasticity = 	(elasticity >= 0 && elasticity <= 1)?
							(elasticity):
							(elasticity < 0? 0: 1);
	};
	setFriction(friction){
		this.friction = 	(friction >= 0 && friction <= 1)?
							(friction):
							(friction < 0? 0: 1);
	};
};
