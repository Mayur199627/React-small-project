/* eslint-disable */

/**
 * What is the output?
 */
console.log(a);
var a = 1;

/**
 * What is the output?
 */
var princess = "Elsa";

function getPrincess() {
  console.log(princess);
  var princess = "Anna";
  console.log(princess);
}

getPrincess();

/**
 * What is the output?
 */

function foo() {
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }

  console.log(i);
}

foo();

/**
 * What is the output?
 */
var name = "Joker";

var hero = {
  name: "Batman",
  getName: function () {
    return this.name;
  }
};

var getHeroName = hero.getName;

console.log(getHeroName());
console.log(hero.getName());
