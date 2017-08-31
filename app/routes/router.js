/**
 * Created by zmk on 2017/8/16.
 */
const router =require('koa-router');

router.get("/",function(ctx,next){
    ctx.body="hello world";
});

module.exports=router;