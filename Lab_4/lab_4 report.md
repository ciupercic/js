# Лабораторная работа №4. Продвинутые объекты в `JavaScript`
## Цель работ:
### Познакомиться с классами и объектами в JavaScript, научиться создавать классы, использовать конструкторы и методы, а также реализовать наследование.
## Шаг 1-3 Создание класса
### Класс `Item` и расширение `Weapon`.
```JavaScript
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
```
## Шаг 4. Функция-конструктор и опциональная цепочка
```JavaScript
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
```

###     4. Контрольные вопросы

1. Насколько важен `this` в методах?
`This` является контекстом вызова. В методах объектов он позволяет обращаться к свойствам конкретного экземпляра класса, для которого вызван метод. Без него метод не имел бы доступа к внутренним данным объекта.

2. Как работает модификатор доступа `#` в `JavaScript` ? 
Модификатор `#` создает приватные поля и методы. Они доступны только внутри тела класса. Попытка доступа к ним снаружи объекта вызовет синтаксическую ошибку. Это основной механизм инкапсуляции в современном `JS`.

3. В чем разница между классами и функциями-конструкторами?
`Классы` — это синтаксический сахар над прототипами. Классы всегда используют `'use strict'`, не могут быть вызваны без `'new'`, их методы не перечисляемы. Наследование в классах (через `extends` и `super`) значительно проще читается, чем манипуляции с прототипами функций-конструкторов.


