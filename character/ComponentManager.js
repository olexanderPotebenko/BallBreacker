class ComponentManager{
  checkComponent(item, component){
      foreach(let key in item){
        if(item[key].prototype === component)
          return true;
      };
      return false;
  };
  getEvent(){

  };
  checkEvent(){

  };
};
