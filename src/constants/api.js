const rootPath = 'https://cnodejs.org/api/v1';
const apiObject={
    gettopics:rootPath+'/topics', //获取话题列表
    gettopicinfo:rootPath+'/topic/', //获取话题详情
    checkusertoken:rootPath+'/accesstoken ', //获取用户token
    getuserinfo:rootPath+'/user/', //获取用户信息
    createtopic:rootPath+'/topics', //新建话题
    replytopic:rootPath+'/topic/', //回复话题信息
    unreply:rootPath+'/reply/', //点赞
}
export default apiObject ;