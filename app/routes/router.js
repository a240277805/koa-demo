/**
 * Created by zmk on 2017/8/16.
 */
const colors=require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'red',
    info: 'green',
    data: 'blue',
    help: 'cyan',
    warn: 'yellow',
    debug: 'magenta',
    error: 'red'
});

module.exports=function(router){
    router
        .get('/', function* (next) {
            console.log('\x1B[36m%s\x1B[0m', "enter /");
            console.log("enter /".blue);
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