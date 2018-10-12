var animal_population = 0;
class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animal_population++
    }
    sleep() {
        console.log(this.name + " sleeps for 8 hours")
    }
    eat(food) {
        console.log(this.name + " eats " + food);
        food === this.favoriteFood ? console.log("Yum! " + this.name + " wants more " + food) : this.sleep();
    }
    static getPopulation() {
        console.log(animal_population)
    }
}
class Tiger extends Animal{
    constructor(name) {
        super('Animal');
        this.name = name;
        this.favoriteFood = 'meat'
    }
}
class Bear extends Animal{
    constructor(name) {
        super("Animal");
        this.name = name;
        this.favoriteFood = 'fish';
    }
    sleep(){
        console.log(this.name + " hibernates for 4 months.");
    }
}

class Unicorn extends Animal{
    constructor(name){
        super("Animal");
        this.name = name;
        this.favoriteFood = 'marshmallows'
    }
    sleep(){
        console.log(this.name + " sleeps on a cloud")
    }
}
class Giraffe extends Animal{
    constructor(name){
        super("Animal");
        this.name = name;
        this.favoriteFood = 'leaves'
    }
    eat(food){
        food===this.favoriteFood ? console.log("Yum! " + this.name + " wants more " + food) : console.log("Yuck !!! " + this.name + " will not eat " + food);
    }
}
class Bee extends Animal{
    constructor(name){
        super("Animal");
        this.name = name;
        this.favoriteFood = 'pollen'
    }
    eat(food){
        food===this.favoriteFood ? console.log(this.name + " eats the pollen. Yum" + this.name + ' wants more pollen' ): console.log("Yuck !!! "+ this.name + " will not eat "+ food)
    }
    sleep(){
        console.log(this.name + " never sleeps")
    }
}
class Zookeeper {
    constructor(name){
        this.name = name;
    }
    feedAnimals(animals,food){
        var count = 0;
        for(var i = 0; i < animals.length; i ++){
            animals[i].eat(food);
            count ++
        }
        console.log(this.name + " is feeding " + food + " to " + count + " of " + animal_population +" total animals.");

    }
}
var run = () => {
    var tiger = new Tiger("Tiger");
    var pooh = new Bear("Pooh");
    var gemma = new Giraffe('Gemma');
    var sparkles = new Unicorn('Sparkles');
    var buzz = new Bee('Buzz');
    var Zoebot = new Zookeeper('Zoebot');
    Zoebot.feedAnimals([tiger,pooh,gemma,buzz,sparkles], "spaghetti carbonara")
};


