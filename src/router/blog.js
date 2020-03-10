//存放路由相关内容
function handleBlogRouter(req,res){
    const method = req.method;
    if(method=='GET' && req.path == '/api/blog/list'){
        //向数据库获取博客信息 sql
        console.log(req.query);
        return{
            id:'10',
            title:'标题1',
            content:'dadsdsadad',
            time:'252525'
        }
    }
    if(method=='GET' && req.path=='/api/blog/detail'){
        return{
            id:'1',
            title:'标题1',
            content:'dadsdsadad',
            time:'5555555'
        }
    }
}
module.exports = {handleBlogRouter}