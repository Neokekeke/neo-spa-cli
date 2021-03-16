// 原型和原型链

function Animal(name) {
    this.name = name;
    console.log('who is this', this);
    return this;
}
Animal.prototype.speed = 100;
console.log('Animal.prototype', Animal.prototype);

const panda = new Animal('熊猫');
console.log('panda', panda);
console.log('panda.__proto__', panda.__proto__, panda.speed);