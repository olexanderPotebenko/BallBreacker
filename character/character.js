
/*
					обьект ПЕРСОНАЖ
	компоненты:
	
- «Stats» 		характеристики/статы персонажа

- "CharacterController"		 управление персонажем

- “CharacterAnimationController”		анимация персонажа

- «CharacterCollisionHandler» 			обработчик столкновений
*/

class GameObject{
	constructor(x, y, imgArr/*набор состояний обьекта)*/){
		this.x = x;
		this.y = y;
		this.imgArr = imgArr;
	};
	

	
};

class Edge extends GameObject{

};

class Brick  extends GameObject{
	constructor(imgArr, hitbox,
				animations, 	
				weight,
				health){
		super(x1, y1, x2, y2, color);
		this.health	= colors.length;
	};
};

class Paddle extends GameObject{
	
};

class Ball extends GameObject{

};

class Btn extends GameObject{
	
};