/**
 * Created by zmk on 2017/8/16.
 */
const colors=require("colors");
const log =require('log');

module.exports=function(router){
    router.get('/', function* (next) {
            consoler.log("enter1");

            yield next;
            consoler.log("enter 2");
            this.body = "public: /";
        },function* (next) {
          consoler.log("enter3");
          yield  next;
          consoler.log("enter 4");
        }
        );
    router.get('/about', function* (next) {
            console.log("enter /about");
            yield next;
            this.body = "public: /about";
        });
    router.get('*', function* (next) { // <--- wildcard * doesn't work
            console.log("enter *");
            yield next;
            this.body = "public: *";
        });
};