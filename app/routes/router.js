/**
 * Created by zmk on 2017/8/16.
 */

module.exports=function(router){
    router
        .get('/', function* (next) {
            console.log(Color.yellow, "enter /","hahah");
            yield next;
            this.body = "public: /";
        })
        .get('/about', function* (next) {
            console.log("enter /about");
            yield next;
            this.body = "public: /about";
        })
        .get('*', function* (next) { // <--- wildcard * doesn't work
            console.log("enter *");
            yield next;
            this.body = "public: *";
        });
};