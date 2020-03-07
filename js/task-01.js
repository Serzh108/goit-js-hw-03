"use strict";

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.mood = 'skydiving';
user.premium = false;

const keyArray = Object.keys(user);

for (const key of keyArray) {
  console.log(`${key} : ${user[key]}`);
}

// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение
//  используя Object.keys() и for...of