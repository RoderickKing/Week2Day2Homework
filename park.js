class Park{

  constructor(name,ticketprice,dinocoll) {
    this.name = name;
    this.ticketprice = ticketprice;
    this.dinocoll = dinocoll;
  }
  nameofpark(){
    return this.name;
  }
  ticketprice(){
    return this.ticketprice;
  }
  addDinosaur(dinosaur){
    this.dinocoll.push(dinosaur);
  }
  removeDinosaur(){
    this.dinocoll.pop;
  }
  findmaxdino(){
    let maxvistors = 0;
    let popname = ' ';
    for (var i = 0; i < this.dinocoll.length; i++) {
      if ( this.dinocoll[i].guestsAttractedPerDay > maxvistors) {
        popname = this.dinocoll[i].species;
        maxvistors = this.dinocoll[i].guestsAttractedPerDay;
      }
    }
    return popname;
  }
  totaldayvisitors(){
    let maxvistors = 0;
    for (var i = 0; i < this.dinocoll.length; i++) {
        maxvistors += this.dinocoll[i].guestsAttractedPerDay;
    }
    return maxvistors;
  }
  totalyearvisitors(){
    return this.totaldayvisitors() * 365;
  }

  findallbyname(name){
    let dinolist = [];
    for (var i = 0; i < this.dinocoll.length; i++) {
      if (this.dinocoll[i].species === name ){
        dinolist.push(this.dinocoll[i]);
      }
    }
    return dinolist;
  }
  deleteallbyname(name){

    let maxloop = this.dinocoll.length - 1;
    for (var i = maxloop; i >= 0 ; i--) {
      if (this.dinocoll[i].species === name ){
       this.dinocoll.splice(i,1);
    }
  }
}

}
module.exports = Park;
