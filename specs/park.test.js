const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  let dinosaur;
  let park;

  beforeEach( () => {
    // write your code here
    dino1 = new Dinosaur('t-rex', 'carnivore', 50);
    dino2 = new Dinosaur('dippy', 'herbivore', 10);
    dino3 = new Dinosaur('stegosaurus', 'herbivore', 15);
    dino4 = new Dinosaur('nessie', 'omnivore', 99);
    park = new Park('Park 4',10,[dino1,dino2,dino3,dino4]);
  });

  test('should have a name', () => {
    expect(park.name).toBe('Park 4');
    // write your code here
  });

  test('should have a ticket price', () => {
    // write your code here
    expect(park.ticketprice).toBe(10);
  });

  test('should have a collection of dinosaurs', () => {
    // write your code here
    expect(park.dinocoll.length).toBe(4);
  });

  test('should be able to add a dinosaur to its collection', () => {
    // write your code here
    park.addDinosaur(dino4);
    expect(park.dinocoll.length).toBe(5);
  });

  test('should be able to remove a dinosaur from its collection', () => {
    // write your code here

    park.removeDinosaur(park);
    expect(park.dinocoll.length).toBe(4);

  });

  test('should be able to find the dinosaur that attracts the most visitors', () => {
    // write your code here

    expect(park.findmaxdino()).toBe('nessie');
  });

  test('should be able to calculate daily vistors', () => {
    // write your code here
    expect(park.totaldayvisitors()).toBe(174);

  });
  test('should be able to calculate yearly vistors', () => {
    // write your code here
    expect(park.totalyearvisitors()).toBe(63510);

  });

  test('should be able to find all dinosaurs of a particular species', () => {
    // write your code here
    let foundlist = [];
    foundlist = park.findallbyname('nessie');
    expect(foundlist.length).toBe(1);
  });

  test('should be able to remove all dinosaurs of a particular species', () => {
    // write your code here
    park.deleteallbyname('nessie');
    expect(park.dinocoll.length).toBe(3);
  });

});
