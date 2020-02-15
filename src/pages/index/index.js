import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {Menu} from '../../components/menu/menu'
import {Topiclist} from '../../components/topiclist/topiclist'

import './index.scss'

class Index extends Component {

    config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }
  componentDidMount () {
   
  }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Menu></Menu>
        <Topiclist></Topiclist>
      </View>
    )
  }
}

export default Index
