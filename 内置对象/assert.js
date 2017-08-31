/**
 * Created by zmk on 2017/8/15.
 */
//assert方法接受两个参数，当第一个参数对应的布尔值为true时，不会有任何提示，返回undefined。当第一个参数对应的布尔值为false时，会抛出一个错误，该错误的提示信息就是第二个参数设定的字符串。
var assert = require("assert");

/*assert(true,'read result'); //error*/


function expected(a,b){return a+b;}
assert( expected(1,2) === 3, '预期1加2等于3');