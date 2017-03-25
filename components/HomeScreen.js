import React, {Component} from 'react';
import {

    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ListView
} from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBar: {
            label: 'Home',
            icon: ({tintcolor}) => (
                <Image source={require('../img/25-home.png')} style={[{tintcolor:tintcolor}]}/>
            )
        },
        title: '主页'
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row ']),
            datafromnet:''
        };
        this.updata=this.updata.bind(this);
    }
    componentDidMount(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({

            dataSource:ds.cloneWithRows(['wfweffffffwefwefasfawegvjabjvbajhdjdsjkdsvjkdsvjkdsvjkdvskvjksjkvskv','dsjskjksjkvskv'])
        })
    }
    updata(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({

            dataSource:ds.cloneWithRows(['ff','ff'])
        })
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.viewStyle}>
                <Button title="uit" onPress={this.updata} />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <TouchableOpacity style={styles.touchStyle}><Text style={styles.rowStyle}>{rowData}</Text></TouchableOpacity>} />
            </View>
        );
    }
}



const styles=StyleSheet.create({
    viewStyle:{
        borderRadius:5,
        flexDirection:'column'
    },
    touchStyle:{

    },
    rowStyle: {
        backgroundColor: 'rgb(206,206,206)',
        alignItems: 'center',    //#水平居中s
        justifyContent: 'center',//  #垂直居中
        textAlign: 'left',  // #文字水平居中

        padding: 10,
        margin: 6,
        borderRadius:10,
        borderWidth:0.4,


    },
})
