/**
 * Created by zmk on 2017/8/15.
 */
//可家参数的中间件写法
module.exports.logger =function (format){
    // console.log("enter logger method");

    return function* (next){
        console.log(this.url);
       var result= format.replace(":method","method:"+this.method);
        result= result.replace(":url","url:"+this.url);
        console.log(result);
        yield next;
    }
}

