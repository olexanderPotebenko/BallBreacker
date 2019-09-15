class Process{
	constructor(id, f, obj, frequency){
		this.id = id;
		this.f = f; //выполняемая функция
		this.obj = obj;
		this.frequency = frequency; //частота в миллисекундах
		this.status
		
		//процесс можно отложить
		//процесс можно отменить
		//начать
		//процесс можно продолжить	
	};
	
	start(){
		return new Promise((resolve, reject)=>{
			if(this.completed){
				resolve();
			}else if(this.paused){
				reject();
			};
			this.f.call(this.obj).then(
				()=>{
					this.completed = true;
					resolve();
				},
				()=>{
					this.paused = true;
					reject();
				}
			);
		});
	};
};
class Scene{
	constructor(backgound, objs, events){//events - события, которые запускают процессы, несет условие и функцию
		this.backgound = backgound;
		this.objs = objs;
		this.map;
		this.events = events;
	};
	
	start(){
		this.render();
		return new Promise((resolve, reject)=>{
			
			let date = Date.now();
			let deltaDate = 0;
			
			let doo = ()=>{	
				deltaDate = +Date.now() - +date;
				if(deltaDate > 10){
					this.update();
					date = Date.now();
					deltaDate = 0;
					for(let i = 0; i < this.balls.length; i++){
						this.balls[i].render();
					};
				};
			
		
				if(escapePressed){
					escapePressed = false;
					reject();
				}else
					requestAnimationFrame(()=>{
						doo.call(this);
				});
			};
			doo();
		});
	};
	
	update(){
		this.checkCollis();
		this.checkEvent();
	};
	
	checkCollis(){
		let moveObjs = getMoveObjs();
		let algorithm1 = ()=>{
			let 
			
			algorithm2(arr);//пары(обьект и массив возможных обьектов),  в общем массиве
		};
		let algorithm2;
	};
	
	getMoveObjs(){
		let arr = this.objs.entries();
		let map = new Map();
		for(let i = 0; i < arr.length; i++){
			map.set(arr[i][0],arr[i][1]);
		};
	};
	
	getScrin(){
		return getImage(this.objs, canvas.clientWidth, canvas.clientHeight);
	};
};

class Animation{
	constructor(arr, completed, draw){
		this.arr = arr;
		this.completed = completed,
		this.draw = draw;
	};
	play(){
			let doo =(i)=>{
				if(i >= this.arr.length){
					return Promise.resolve();
				}else{
				if(this.arr[i].time > 0){
					this.draw(this.arr[i].obj);
					return (new Promise((resolve, reject)=>{
						let date = +Date.now();
						let interval = setInterval(()=>{
							if(escapePressed){
								escapePressed = false;
								clearInterval(interval);
								this.arr[i].time -= (+Date.now() - date);
								reject();
							};
							if(this.arr[i].time < +Date.now() - date){
								this.arr[i].time = 0; 
								clearInterval(interval);
								resolve();
							};
						}, 20);
					}))
					.then(()=>{return doo(++i)}, ()=>{return Promise.reject()})
					}else{
						return 	doo(++i);
					};
				};
			 };
		return doo(0);
	};
};