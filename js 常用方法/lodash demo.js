const _ =require("lodash");

// 1.获取所有用户名字，并以”，“分割
var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
];

/*
var youngest = _
    .chain(users)
    .sortBy('age')
    .map(function(o) {
        return o.user + ' is ' + o.age;
    })
    .head()
    .value();

console.log(youngest)*/

var result=_.chain(users).map(u=>{return `这事${u.user}`}).join(',').value();


// 2.2. 获取最年轻的用户

 result=_.chain(users).sortBy("age").head().value();
 //result =_.chain(users).map(o=>o.age).min().value();

console.log(result);
var youngest = _.chain(users)
    .minBy(function(user){
        return user.age;
    })
    .value();
console.log(youngest);

// lodash  优化，console 只会输出一个user????
var youngest2 = _.chain(users)
    .sortBy("age")
    .map(function(user){
        console.log("map", user);
        return user;
    })
    .first()
    .value();
console.log(youngest2);


// 4. 用户数组到用户Map的转换
var userObj = _.chain(users)
    .map(function(user){
        return [user.user, user.age];
    })
    .zipObject()
    .value();
console.log(userObj);