/**
 * Created by zmk on 2017/8/15.
 */
const koa = require("koa"),
   mylogger= require("./mylogger.js"),
    // router =require('koa-router'),
    routes=require('./routes/index'),
    fs=require("fs"),
assert = require('assert');

var reqCount=0;
var reqStatTime=new Date;
var promises=[];



var app = new koa();

/**
 * 错误处理
 */
app.use(function *(next){
    console.log(">>>>>>>>第"+reqCount+"次-----start------------");
    try{
        this.reqStatTime=new Date;
        this.reqCount=reqCount;
        reqCount=reqCount+1;
        console.log("middle1:::第"+this.reqCount+"次调用");
        yield next;
    }catch(err){
        console.error("error:"+err);
        throw new Error("ddd");
    }
    var ms = new Date - this.reqStatTime;
    console.log('----%s %s -用时 %s 毫秒', this.method, this.url, ms);
    console.log("<<<<<<<<<<<<<<<<<<第"+this.reqCount+"次------end---------用时"+ms+"毫秒-");
});


/**
 * 比较读文件模块，证明setTimeout不阻塞线程
 * promise.all中的可以理解为并发执行。
 * setTimeOut
 */
/*app.use(function *(next){
    let tmpcount=this.reqCount;
    var p1= new Promise(function(resolve,reject){
        let timedelay=tmpcount%2===0?1000:2000;
        setTimeout(function(){
            console.log("延迟"+timedelay+"毫秒在middle2中");
            resolve();
        },2000)
    })
    if(promises.length<3){
        promises.push(p1);
    }else{
        yield Promise.all(promises);
        console.log("middle2:::第"+this.reqCount+"次调用");
        yield next;
    }
})*/
/**
 * 此中间件是为了验证Promise.all，
 * 同时验证了js的单线程模型，
 * 步骤：在模块中加入了阻塞的读文件操作，读一次文件100ms
 * 然后累计三次的promise，在第四次执行promise.all，
 * 预判结果：如果prmise是异步多线程，那么三次promise并行执行，用时100ms,
 * if 在node中promise是异步单线程，那么三次串行执行，用时是三次的和300+ms;
 *
 * 结果：最后一次用时300ms，
 */
/*app.use(function *(next){
    this.model3StartT=new Date;
    var text="读取完成";
    var p1=  new Promise(function(resolve,reject){
        fs.readFile("D://xiecheng.txt",function(err,data){
            if(err){
                console.log("readFile Error:"+err);
                reject(err);
            }
            console.log(text);
            resolve(data);

        });
    })
    if(promises.length<3){
        promises.push(p1);
    }else{
        yield Promise.all(promises);
        yield next;
        console.log("middle3:::第"+this.reqCount+"次调用,用时："+(new Date-this.model3StartT));
    }


})*/

app.use(function *(next){
    console.log("middle4:::第"+this.reqCount+"次调用");
    yield next;
})

app.use( mylogger.logger(":method   :url"));//添加logger

/**
 * koa-router  集成路由
 * @type {Router}
 */
// var myRouter=new router();
// myRouter.get('/', function (ctx,next) {
//     console.log("middle5:::第"+ctx.reqCount+"次调用");
//     console.log("enter router");
//     ctx.body="hello world"
//     // ctx.router available
// });
app.use(routes.routes());


/**
 * 自写路由
 */
/*app.use(function *(next){

    if(this.path!=="/"){
        return yield next;
    }
    console.log("enter url /");
    this.body="hello home";
});

app.use(function *(){
    if(this.path!=="/index"){
        return yield next();
    }
    this.body="enter index";
});*/




app.listen(3000, ()=> {console.log("开始开始监听3000端口")
})
