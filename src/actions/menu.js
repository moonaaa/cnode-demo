import {getTopicList} from './topic';
//打开抽屉
export function showDrawer(){
    return dispatch=>{
        dispatch({type:'showDrawer'})
    }
}
//close抽屉
export function closeDrawer(){
    return dispatch=>{
        dispatch({type:'hideDrawer'})
    }
}
//切换分类
export function changeCate(cata){
    return dispatch=>{
        dispatch({type:'changeCata',currentCata: cata})
        dispatch(getTopicList({tab:cata.key,page:1,limit:20}));
    }
}