/**
 * File Name       : style.js
 * Author          : Ankur Gupta
 * Description     : Styling of application
 * Version         : 1.0
 **/
import { 
    StyleSheet, 
    Dimensions
} from 'react-native';
var {height, width} = Dimensions.get('window');
import Style from './DynamicDimension';
module.exports = StyleSheet.create({
	loginTab:{
        borderTopColor:'#34485E',
        borderTopWidth:20
    },
    loginCenter: {
        height: height-height/4,
        width   : width
    },
    heading2:{fontSize: width/12},
    textBlack:{color:'#333'},
    mtLg: {marginTop:15},
    mbMd: {marginBottom:10},
    textLeft: {
        textAlign: 'left'
    },
    textInput: {
        height                  : width/8.5,
        backgroundColor         : '#ffffff',
        borderWidth             : 1,
        borderColor             : '#ddd',
        color                   : '#555555',
        borderRadius            : 3,
    },
    pl           : { paddingLeft     : 5             },
    headingFont: {fontSize: width/25},
    width60       : { width : width-60},
    logButton:{
        borderWidth     : 1,        
        borderColor     : '#34485E',        
        backgroundColor : '#3f5873',
        shadowColor: '#3f5873',
        paddingTop : 10,
        paddingBottom : 10
    },
    bg12: {
        backgroundColor: '#1ab394'
    },
    rSm: {borderRadius:3},
    mtMd: {marginTop:10},
    middle:{
        alignItems          : 'center'
    },
    textCenter : {textAlign: 'center'},
    textWhite    : { color           : '#ffffff'     },
    middleFont: {fontSize: width/22},
    msgModel:{
        height:width/2.8,
    },
    fullWidth: {
        width: width
    },
    fullHeight: {
        height: height
    },
    mlMd: {marginLeft:10},
    mrMd: {marginRight:10},
    modalSmallButton: {
        paddingTop: 4, 
        paddingBottom: 3,
        paddingLeft: 8,
        paddingRight:8,
        borderRadius: 3,
    },
    btnPrimary: {
        backgroundColor : '#1ab394',
        borderWidth     : 1,
        borderColor     : '#18a689',
        shadowColor: '#18a689',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        shadowOffset: {
        height: 0.9,
        width: 0.9,}    
    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        fontWeight:'500',
        padding: 2
    },
    rowStyle: {
        flexDirection: 'row'
    },
    headingFont: {fontSize: Style.em(1.035)},
    center: {
        alignItems          : 'center',
        justifyContent      : 'center'
    },
    searchContainer: {      
        justifyContent          : 'center',
        position            : 'absolute',
        top                 : 0,
        left                : 0,
        right               : 0,
        borderTopWidth      : 20,
        minHeight           : 67,
        backgroundColor     : '#fff',
        borderBottomWidth   : 2,
        borderTopColor      : '#34485E',
        borderBottomColor   : '#3f5873',
        shadowColor         : '#5a6d7d',
        shadowOpacity       : 1,
        shadowRadius        : 4,
        shadowOffset        : { height  : 3, width  : 3 },
        paddingLeft: 10,  
        overflow            : 'hidden',
    },
});