class Scene{
	constructor(chrArr, chrMngArr){
		this.characters = chrObjArr;
		this.managers = chrMngArr;
	};

	start(){
		this.createObjectsScene();

		let chrMngArr = this.chrMngArr,
				chrObjArr = this.chrObjArr;
		for(let i = 0; i < chrMngArr.length; i++){
			chrMngArr[i].start(chrObjArr, eventArr);
		};
		this.chrEventManager = new CharacterEventManager();
		this.chrEventManager.start(chrMngArr);
	};
	play(){

	};
	pause(){
		let chrMngArr = this.chrMngArr;
		for(let i = 0; i < chrMngArr.length; i++){
			chrMngArr[i].pause();
		};
	};
	update(){};
	render(){};

	createObjectsScene(){ //пока менеджеры и обьекты наделяются id, потом добавим сериализацию из JSON

		let chrObjArr = this.chrObjArr, //тут будет сериализация
				chrMngArr = this.chrMngArr; //тут будет сериализация

		chrObjArr.forEach(item => addIdToCharacter(item));
		chrMngArr.forEach(item => addIdToManager(item));
	};

	addIdToCharacter(obj){
		obj.id = ++this.chrIdArr.length;
		this.chrIdArr.push(obj.id);
	};
	addIdToManager(obj){
		obj.id = ++this.mngIdArr.length;
		this.mngIdArr.push(obj.id);
	};

	deleteObject(arr, obj){
		arr = arr.splice(arr.findIndex(item => item.id == obj.id) ,1);
	};

};
//в сцене запускаються менеджеры компонентов
//обьект - носитель компонентов
//в сцене возникают и удаляються обьекты. Для этого служат компоненты самой сцены
class EventObject{
	constructor(type, data){
		this.type = type;
		this.data = data;
		this.status = 'not_processed';//
	};
};
//МЕНЕДЖЕРЫ СЦЕНЫ
//манеджер событий ловит события в свой массив, обрабатывает их,
//наделяет id
function getUniqueID(arr){
	let uniqueID;
	for(let i = 0;true;i++){
		if(!arr.some(item => item.id == i)){
			uniqueID = i;
			break;
		};
		return uniqueID;
	};

};
class EventManager{
	constructor(){
		this.events = [];
	};
	start(mngArr){
		this.mngArr = mngArr;
	};
	update(){
		addEvent();
		deleteEvents();
	};
	addEvent(event){
		if(event){
			this.addID(event);
			this.eventArr = this.eventArr.push(event);
		};
	};
	deleteEvents(){
		this.events
		.forEach((evnt, i, arr)=>{
			if(evnt.status == 'processed'){
				arr.splice(i, 1);
			};
		});
	};
	addID(obj){
		obj.id = getUniqueID(this);
	};
	addTargetMngs(evnt){
		evnt.processingObjs = (this.mngArr
		.filter(item => item.typeTargetEvent === evnt.type))
		.map(item => {item.className, status: 'not_processed'});
	};
};

class ComponentManager{
  constructor(){
    super();
    this.className = 'HealthDamageComponentManager';
    this.targetComponents = ['Attack','Health'];
    this.targetEvents = [{type: 'collision', f()}];
  };

  start(characters, events){
    this.events = events;
    this.characters = characters;
  };
  update(){
    this.checkEvents();
  };
  checkEvents(){
    let events = this.events
    .filter(item => {
      let self = item;
      if(!~this.targetEvents.find(function(item){item.type == self.type});
      && item.status == 'not_processed'
      && item.processingObjs.get(this.className).status == 'not_processed'){
        return true;
      };
      return false;
    });
    if(events.length > 0){
      this.eventHandling(events);
    };
  };
  eventHandling(events){
    for(let i = 0; i < events.length){
      (this.targetEvents.find(item => item.type == events[i]))
      .f();
    };
  };
};
