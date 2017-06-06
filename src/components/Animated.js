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
            animOpacity:new Animated.Value(0),
            animImageScale:new Animated.Value(0),
            animTranslateX:new Animated.Value(0),
            animWidth1:new Animated.Value(100),
            animWidth2:new Animated.Value(100),
            animWidth3:new Animated.Value(100),
        }
    }
    componentDidMount(){

    }
    parallelAnim (){
        this.state.animWidth1.setValue(100)
        this.state.animWidth2.setValue(100)
        this.state.animWidth3.setValue(100)
        let parallel = Animated.parallel([
            Animated.timing(
                this.state.animWidth1,
                {
                    toValue:30,
                    duration: 4000,
                    easing: Easing.linear
                }),
            Animated.spring(
                this.state.animWidth2,
                {
                    toValue:300,
                    friction:2,
                    tension:40
                }),
            Animated.timing(
                this.state.animWidth3,
                {
                    toValue:300,
                }),
        ],{stopTogether:true});
        parallel.start((a)=>{console.log('动画执行完毕',a)})

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
    imageSpring () {
        let spring = Animated.spring(
            this.state.animImageScale,
            {
                toValue:1,
                friction:7,
                tension:40
            }
        )
        spring.start()
    }
    viewTranslateX (){
        // let timing = Animated.timing(
        //     this.state.animTranslateX,
        //     {
        //         toValue:150,
        //         duration: 4000,
        //         easing: Easing.linear
        //     }
        // )
        // timing.start()
        this.state.animTranslateX.setValue(150)
        let decay = Animated.decay(
            this.state.animTranslateX,
            {
                toValue:150,
                velocity:10,
                deceleration: 0.6,

            }
        )
        decay.start()
    }

    render () {
        return (
        <ScrollView
            contentContainerStyle={styles.container}
        >

            <Animated.View
                style={{
                    opacity:this.state.animOpacity,
                }}
            >
                <Text style={{fontSize:40}}>textOpacity1</Text>
            </Animated.View>
            <TouchableOpacity onPress={this.textOpacity1.bind(this)}>
                <Text style={{fontSize:30,color:'#333'}}>淡入</Text>
            </TouchableOpacity>

            <Animated.Image
                style={{
                    width: 227,
                    height: 200,
                    transform:[
                        {
                            scale:this.state.animImageScale.interpolate({
                                inputRange:[0,0.5,1],
                                outputRange:[1,0.5,1]
                            })
                        }
                    ]
                }}
                source={{uri: 'http://pic.58pic.com/58pic/10/96/99/18u58PICXCS.jpg'}}/>
            <TouchableOpacity onPress={this.imageSpring.bind(this)}>
                <Text style={{fontSize:30,color:'#333'}}>弹跳</Text>
            </TouchableOpacity>
            <Animated.View style={{width:30,height:30,backgroundColor:'#ccc',transform:[{translateX:this.state.animTranslateX}]}}>
            </Animated.View>
            <TouchableOpacity onPress={this.viewTranslateX.bind(this)}>
                <Text style={{fontSize:30,color:'#333'}}>移动</Text>
            </TouchableOpacity>
            <View style={{alignSelf:'flex-start'}}>
                <Animated.View
                    style={{width:this.state.animWidth1,height:30,backgroundColor:'#ccc',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth2,height:30,backgroundColor:'#ccc',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth3,height:30,backgroundColor:'#ccc',marginVertical:10}}
                >
                </Animated.View>
            </View>
            <TouchableOpacity onPress={this.parallelAnim.bind(this)}>
                <Text style={{fontSize:30,color:'#333'}}>同时执行</Text>
            </TouchableOpacity>
        </ScrollView>

        )
    }

}


export default AnimatedComponent


const styles = StyleSheet.create({
    container:{
        alignItems:'center'
    }
})