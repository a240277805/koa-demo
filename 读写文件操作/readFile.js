/**
 * Created by zmk on 2017/8/17.
 */
var fs=require("fs");
var startTime=new Date,
    endTime;
fs.readFile("D://xiecheng.txt",function(err,data){
    if(err) console.log(err);
    console.log("读取成功");
    endTime=new Date();
    let ms=endTime-startTime;
    console.log("用时："+ms);
})