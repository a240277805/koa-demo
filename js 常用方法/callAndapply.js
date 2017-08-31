/**
 * Created by zmk on 2017/8/16.
 */

// call 和 apply 都是为了改变某个函数运行时的 context 即上下文而存在的，换句话说，就是为了改变函数体内部 this 的指向。
// call 和 apply二者的作用完全一样，只是接受参数的方式不太一样。

function Animal(){
    this.name="Animal";
    this.getName=function(){
        console.log(this.name);
    }
    console.log("Animal this.name"+this.name);
}
function Cat(){
    Animal.call(this,"");//可以调用父类的方法即继承
    this.name="Cat"
}
const animal=new Animal();
const cat=new Cat();

// Cat.call(Animal,'');
Animal.call(Cat,"");
//Animal.getName.call(Cat,"")
//animal.getName.call(cat,"");
cat.getName();