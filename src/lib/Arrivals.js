export default class Arrivals{
  constructor(stop){
    this.stop = stop;

    this.load();
  }

  load(){
    return `You have queried ${this.stop}`
  }

}
