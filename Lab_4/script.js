class Item {
    constructor(name, weight, rarity) {
        this.name = name;
        this.weight = weight;
        this.rarity = rarity;
    }
    getInfo() {
        return "Предмет: " + this.name + ", Вес: " + this.weight + ", Редкость: " + this.rarity;
    }
    setWeight(newWeight) {
        this.weight = newWeight;
    }
}
class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability) {
        super(name, weight, rarity); // Вызываем родительский конструктор
        this.damage = damage;
        this.durability = durability;
    }
    use() {
        if (this.durability > 0) {
            this.durability = this.durability - 10;
            console.log("Вы использовали " + this.name + ". Осталось прочности: " + this.durability);
        } else {
            console.log("Оружие сломано, нужно починить!");
        }
    }
    repair() {
        this.durability = 100;
        console.log("Оружие " + this.name + " теперь как новое!");
    }
}

function ItemFunc(name, weight, rarity) {
    this.name = name;
    this.weight = weight;
    this.rarity = rarity;
}
ItemFunc.prototype.getInfo = function() {
    return "Предмет: " + this.name + ", Вес: " + this.weight + ", Редкость: " + this.rarity;
};
function WeaponFunc(name, weight, rarity, damage, durability) {
    ItemFunc.call(this, name, weight, rarity);
    this.damage = damage;
    this.durability = durability;
}
WeaponFunc.prototype = Object.create(ItemFunc.prototype);
WeaponFunc.prototype.constructor = WeaponFunc;
WeaponFunc.prototype.use = function() {
    this.durability -= 10;
    console.log("Оружие " + this.name + " использовано. Прочность: " + this.durability);
};

const oldSword = new WeaponFunc("Старый меч", 2, "common", 10, 50);
console.log(oldSword.getInfo());
oldSword.use();
