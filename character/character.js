
/*
					обьект ПЕРСОНАЖ
	компоненты:

- «Stats» 		характеристики/статы персонажа

- "CharacterController"		 управление персонажем

- “CharacterAnimationController”		анимация персонажа

- «CharacterCollisionHandler» 			обработчик столкновений
*/

class GameObject{

};

class Edge extends GameObject{
	constructor(img, position, colider, animation){
		super();
		this.scin = new Skin(img);
		this.position = new Position(position);
		this.colider = new trueColider(colider);
		this.animation = new Animation();
	};
};

class Brick  extends GameObject{
	constructor(img, hitbox,
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
