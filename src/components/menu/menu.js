import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { showDrawer, changeCate, closeDrawer } from '../../actions/menu'
import { AtDrawer } from 'taro-ui'
import './menu.scss';

@connect(function (store) {
    return { ...store.menu }
}, function (dispatch) {
    return {
        showMenu() {
            dispatch(showDrawer())
        },
        closeDrawer() {
            dispatch(closeDrawer())
        },
        changeCate(cata) {
            dispatch(changeCate(cata))
        }
    }
})
class Menu extends Component {
    showDrawer() {
        this.props.showMenu && this.props.showMenu()
    }
    closeDrawer() {
        this.props.closeDrawer && this.props.closeDrawer()
    }
    getItems(catadate) {
        return catadate.map(item => item.value)
    }
    changeCate(index) {
        let { catadate } = this.props
        let currentCata = catadate[index]
        if(currentCata.key!==this.props.currentCata.key){
            this.props.changeCate && this.props.changeCate(currentCata)
        }
        
    }
    render() {
        let { showDrawer, catadate } = this.props;
        let items = this.getItems(catadate)
        return (<View className='topiclist-menu'>
            <AtDrawer onClose={this.closeDrawer.bind(this)} onItemClick={this.changeCate.bind(this)} show={showDrawer} items={items} style='position:absolute;' />
            <Image onClick={this.showDrawer.bind(this)} className='image' src={require('../../assets/img/cata.png')} />
            <Text>{this.props.currentCata ? this.props.currentCata.value : ''}</Text>
            <Image className='image' src={require('../../assets/img/login.png')} />
        </View>)
    }
}
export default Menu;


