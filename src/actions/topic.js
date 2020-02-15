import {getJSON,postJSON} from '../utils/request'
import api from '../constants/api'
//请求首页数据
export function getTopicList(params){
    return async dispatch=>{
        let res = await getJSON(api.gettopics, params);
        if(res&&res.data){
           if(res.data.success){
            dispatch({type: 'getTopicList', list:res.data.data})
           }
        }
    }
}
//请求下页数据
export function  getNextList(params){
    return  async dispatch=>{
        let  result= await getJSON(api.gettopics,params);
        if(result&&result.data){
            if(result.data.success){
                if(result.data.data.length>0){
                    dispatch({type:'appendTopicList',list:result.data.data,page:params.page})
                }
            }
        }
      }
}
// 请求话题详情
export function  getTopciInfo(params){
    return  async dispatch=>{
        let result= await getJSON(api.gettopicinfo+params.id,params)
        if(result&&result.data&&result.data.success){
            dispatch({type:'getTopicInfo',infoData:result.data.data}) 
       }else{
           console.error('请求话题详情失败！')
       }
      }
}