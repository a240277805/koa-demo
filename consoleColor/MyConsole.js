var chalk = require('chalk');


function myconsole () {
    this.log=function(text) {
         Color? console.log(chalk.red(text)):console.log(text);
    // console.log("hellow");
    }
}
var myc=new myconsole();

// myc.log("hhaha")

module.exports=myc;

//console.log(chalk.red('Text in red'))