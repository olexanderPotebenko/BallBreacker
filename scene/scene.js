class Scene{
	constructor(mngArr, chrArr){
		this.mngArr = mngArr;
		this.chrArr = chrArr;
		this.eventArr = [];
	};
	start(){
		let mngArr = this.mngArr;
		for(let i = 0; i < mngArr.length; i++){
			mngArr[i].start(chrArr, eventArr);
		};
	};
	play(){

	};
	pause(){
		let mngArr = this.mngArr;
		for(let i = 0; i < mngArr.length; i++){
			mngArr[i].pause();
		};
	};
};
