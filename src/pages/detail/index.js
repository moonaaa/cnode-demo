import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {getTopciInfo} from '../../actions/topic'
import { connect } from '@tarojs/redux';

@connect(function (store) {
  return { topicinfo:store.topic.topicinfo,replies:store.topic.replies }
}, function (dispatch) {
  return {
    getTopciInfo(params) {
          dispatch(getTopciInfo(params))
      }
    }
})
class Detail extends Component {

    componentWillMount(){
      let params = {id: this.$router.params.topicid,mdrender:true,}
      this.props.getTopciInfo&&this.props.getTopciInfo(params)
       
    }

  render () {
    return (
      <View className='index'>
          {this.props.topicinfo.title}
      </View>
    )
  }
}

export default Detail

