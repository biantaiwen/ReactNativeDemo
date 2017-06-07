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
            animWidth4:new Animated.Value(100),
            animWidth5:new Animated.Value(100),
            animWidth6:new Animated.Value(100),
            animWidth4a:new Animated.Value(100),
            animWidth5a:new Animated.Value(100),
            animWidth6a:new Animated.Value(100),
            animWidth7:new Animated.Value(100),
            animWidth8:new Animated.Value(100),
            animWidth9:new Animated.Value(100),
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

    sequenceAnim (){
        this.state.animWidth4.setValue(100)
        this.state.animWidth5.setValue(100)
        this.state.animWidth6.setValue(100)
        let sequence = Animated.sequence([
            Animated.timing(
                this.state.animWidth4,
                {
                    toValue:30,
                    duration: 4000,
                    easing: Easing.linear
                }),
            Animated.delay(3000),
            Animated.spring(
                this.state.animWidth5,
                {
                    toValue:300,
                    friction:2,
                    tension:40
                }),
            Animated.delay(5000),
            Animated.timing(
                this.state.animWidth6,
                {
                    toValue:300,
                }),
        ]);
        sequence.start((a)=>{console.log('动画执行完毕',a)})

    }

    sequenceAnima (){
        this.state.animWidth4a.setValue(100)
        this.state.animWidth5a.setValue(100)
        this.state.animWidth6a.setValue(100)
        let sequence = Animated.sequence([
            Animated.parallel([
                Animated.timing(
                    this.state.animWidth4a,
                    {
                        toValue:30,
                        duration: 4000,
                        easing: Easing.linear
                    }),
                Animated.spring(
                    this.state.animWidth5a,
                    {
                        toValue:300,
                        friction:2,
                        tension:40
                    }),
            ]),
            Animated.timing(
                this.state.animWidth6a,
                {
                    toValue:300,
                }),
        ]);
        sequence.start((a)=>{console.log('动画执行完毕',a)})

    }
    staggerAnim (){
        this.state.animWidth7.setValue(100)
        this.state.animWidth8.setValue(100)
        this.state.animWidth9.setValue(100)
        let stagger = Animated.stagger(
            3000, [
                Animated.timing(
                    this.state.animWidth7,
                    {
                        toValue:30,
                        duration: 4000,
                        easing: Easing.linear
                    }),
                Animated.timing(
                    this.state.animWidth8,
                    {
                        toValue:30,
                        duration: 4000,
                        easing: Easing.linear
                    }),
                Animated.timing(
                    this.state.animWidth9,
                    {
                        toValue:30,
                        duration: 4000,
                        easing: Easing.linear
                    }),
                // Animated.delay(3000),
                // Animated.spring(
                //     this.state.animWidth8,
                //     {
                //         toValue:300,
                //         friction:2,
                //         tension:40
                //     }),
                // // Animated.delay(5000),
                // Animated.timing(
                //     this.state.animWidth9,
                //     {
                //         toValue:300,
                //     }),
        ]);
        stagger.start((a)=>{console.log('动画执行完毕',a)})

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


            <View style={{alignSelf:'flex-start'}}>
                <Animated.View
                    style={{width:this.state.animWidth4,height:30,backgroundColor:'#000',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth5,height:30,backgroundColor:'#000',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth6,height:30,backgroundColor:'#000',marginVertical:10}}
                >
                </Animated.View>
            </View>
            <TouchableOpacity onPress={this.sequenceAnim.bind(this)}>
                <Text style={{fontSize:30,color:'#333'}}>顺序执行</Text>
            </TouchableOpacity>


            <View style={{alignSelf:'flex-start'}}>
                <Animated.View
                    style={{width:this.state.animWidth4a,height:30,backgroundColor:'#444',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth5a,height:30,backgroundColor:'#444',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth6a,height:30,backgroundColor:'#444',marginVertical:10}}
                >
                </Animated.View>
            </View>
            <TouchableOpacity onPress={this.sequenceAnima.bind(this)}>
                <Text style={{fontSize:30,color:'#333'}}>顺序执行</Text>
            </TouchableOpacity>

            <View style={{alignSelf:'flex-start'}}>
                <Animated.View
                    style={{width:this.state.animWidth7,height:30,backgroundColor:'#666',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth8,height:30,backgroundColor:'#666',marginVertical:10}}
                >
                </Animated.View>
                <Animated.View
                    style={{width:this.state.animWidth9,height:30,backgroundColor:'#666',marginVertical:10}}
                >
                </Animated.View>
            </View>
            <TouchableOpacity onPress={this.staggerAnim.bind(this)}>
                <Text style={{fontSize:30,color:'#333'}}>延迟执行</Text>
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