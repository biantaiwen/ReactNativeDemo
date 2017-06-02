/**
 * Created by biantaiwne on 2017/6/2.
 */
import React,{Component} from 'react'
import {Animated} from 'react-native'

class FadeInView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // init opacity 0
        };
    }
    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {toValue: 1},
        ).start();
    }
    render() {
        return (
            <Animated.View
                style={{opacity: this.state.fadeAnim}}>
                {this.props.children}
            </Animated.View>
        );
    }
}

export default FadeInView