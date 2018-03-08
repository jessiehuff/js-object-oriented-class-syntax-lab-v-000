class BoardMember {
  constructor(name, homeState, training){
    this.name = name; 
    this.homeState = homeState;
    this.training = training; 
  }
  veto(){
    returns `", I must disagree";
  }
  approve(){
    returns `You can do that!`;
  }
  doCharity(){
    returns `I like to help people.`;
  }
  releasePressStatement(){
    returns `You will see great things from Scuber.`;
  }
  sayHi(){
    returns `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`;
  }
}

class Ceo extends BoardMember {
  hireEmployee(){
    returns `Welcome aboard!`;
  }
}