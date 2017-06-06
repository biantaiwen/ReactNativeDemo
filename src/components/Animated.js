/**
 * Created by biantaiwen on 2017/6/2.
 */

import React ,{Component} from 'react'
import {View,Text,Animated,TouchableOpacity,Easing,ScrollView,StyleSheet} from 'react-native'

import FadeInView from './Animated/FadeInView'



class AnimatedComponent extends Component {

    constructor (props) {
        super (props)
        this.state={
            animOpacity:new Animated.Value(0)
        }
        this.textOpacity1= this.textOpacity1.bind(this)
    }
    componentDidMount(){

    }
    textOpacity1 (){
        // console.log(this)
        let timing = Animated.timing(
            this.state.animOpacity,
            {
                toValue:1,
                duration: 4000,
                easing: Easing.linear
            }
        )
        timing.start()
    }
    render () {
        return (
        <ScrollView>

            <Animated.View
                style={{
                    opacity:this.state.animOpacity,
                }}
            >
                <Text style={{fontSize:40}}>textOpacity1</Text>
            </Animated.View>
            <TouchableOpacity onPress={this.textOpacity1}>
                <Text style={{fontSize:30,color:'#333'}}>淡入</Text>
            </TouchableOpacity>

            <Animated.Image
                style={{ width: 227, height: 200,transform:[{perspective:200}]}}
                source={{uri: 'http://pic.58pic.com/58pic/10/96/99/18u58PICXCS.jpg'}}/>

        </ScrollView>

        )
    }

}


export default AnimatedComponent


const styles = StyleSheet.create({})