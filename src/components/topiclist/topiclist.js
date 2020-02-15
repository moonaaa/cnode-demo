import Taro, { Component } from '@tarojs/taro';
import { ScrollView, View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import {getTopicList,getNextList} from '../../actions/topic'
import Topicitem from './topinitem'
import './topiclist.scss';

@connect(function (store) {
    return { ...store.topic, currentCata: store.menu.currentCata }
}, function (dispatch) {
    return {
        getTopicList(params){
            dispatch(getTopicList(params))
        },
        getNextList(params){
         dispatch(getNextList(params))
        }
    }
})
class Topiclist extends Component {
   componentWillMount(){
       console.log("dd");
       
       let {page, limit, currentCata}=this.props;
       this.props.getTopicList&&this.props.getTopicList({page, limit, tab:currentCata.key})
   }
   onScrollToLower(){
       let {page,limit,currentCata}=this.props;
       this.props.getNextList&&this.props.getNextList({page:(page+1),limit,tab:currentCata.key})       
   }
    render() {
        let {list} = this.props;
        return (<ScrollView style={{height:'650PX'}}  onScrollToLower={this.onScrollToLower.bind(this)} scrollY={true}>
          { list.map(item=><Topicitem item={item}/>)}
            </ScrollView>)
    }
}
export default Topiclist;


