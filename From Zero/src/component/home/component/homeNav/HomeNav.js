import React,{Component} from 'react';
import './style.css';

export default class HomeNav extends Component{
    constructor(props){
        super(props);
        this.nav = [
            '我的主页',
            '我的信息',
            '我的相册',
            '我的随笔',
            '我的练习',
            '我的工作经历',
            '我的联系方式'
        ];
        this.type = [
            'home',
            'info',
            'pic',
            'w',
            'web',
            'job',
            'call'
        ];
        this.state = {
            liLeft:0,
            liTop:0,
            divClass : "homeNav"
        };
        [
            this.divHome,
            this.divLeft,
            this.divRight,
            this.divTop,
            this.divBottom
		].forEach( fn=>this[fn.name] = fn.bind(this) );
    }

    divHome(){
        this.setState({
            divClass : "homeNav"
        })
    }

    divLeft(){
        this.setState({
            divClass : "leftNav"
        })
    }

    divRight(){
        this.setState({
            divClass : "rightNav"
        })
    }

    divTop(){
        this.setState({
            divClass : "topNav"
        })
    }

    divBottom(){
        this.setState({
            divClass : "bottomNav"
        })
    }

    render(){

        let {
                changeType,
                leftChange,
                showHome,
                showInfo,
                showPic,
                showW,
                showWeb,
                showJob,
                showCall,
                wBoxLeftChange,
                wBoxLeftBack,
                callBoxLeftChange,
                callBoxLeftBack
            } = this.props;
        let {type,divHome,divLeft,divRight,divTop,divBottom} = this;
        let {liLeft,liTop,divClass} = this.state;

        return(
            <div className = {divClass}>
                <ul className="indexMenu">
                    {
                        this.nav.map((e,i) => {
                            return (
                                    <li 
                                        style = {{left:liLeft,top:liTop}}
                                        key = {i} 
                                        onMouseOver = {()=>{
                                            changeType(this.type[i])
                                        }}
                                        onClick = {()=>{
                                            leftChange();
                                            if(type[i] == 'home'){
                                                callBoxLeftBack();
                                                wBoxLeftBack();
                                                divHome();
                                                showHome();
                                                this.setState({
                                                    liTop:0,
                                                    liLeft:0
                                                })
                                            }
                                            if(type[i] == 'info' || type[i] == 'job'){
                                                callBoxLeftBack();
                                                wBoxLeftBack();
                                                divLeft();
                                                this.setState({
                                                    liTop:0,
                                                    liLeft:0
                                                })
                                                setTimeout(()=>{
                                                    this.setState({
                                                        liTop:0,
                                                        liLeft:-1276,
                                                    })
                                                },600);
                                                if(type[i] == 'info'){
                                                    showInfo();
                                                }
                                                if(type[i] == 'job'){
                                                    showJob();
                                                }
                                            }
                                            if(type[i] == 'w' || type[i] == 'call'){
                                                divRight();
                                                this.setState({
                                                    liTop:0,
                                                    liLeft:0,
                                                });
                                                if(type[i] == 'w'){
                                                    callBoxLeftBack();
                                                    showW();
                                                    setTimeout(() => {
                                                        wBoxLeftChange();
                                                    },200)
                                                }
                                                if(type[i] == 'call'){
                                                    showCall();
                                                    wBoxLeftBack();
                                                    setTimeout(() => {
                                                        callBoxLeftChange();
                                                    },200)
                                                }
                                            }
                                            if(type[i] == 'pic'){
                                                callBoxLeftBack();
                                                wBoxLeftBack();
                                                divTop();
                                                showPic();
                                                setTimeout(()=>{
                                                    this.setState({
                                                        liTop:45,
                                                        liLeft:0,
                                                    })
                                                },400);
                                            }
                                            if(type[i] == 'web'){
                                                callBoxLeftBack();
                                                wBoxLeftBack();
                                                divBottom();
                                                showWeb();
                                                setTimeout(()=>{
                                                    this.setState({
                                                        liTop:-45,
                                                        liLeft:0,
                                                    })
                                                },400);
                                            }
                                            
                                        }}
                                    >
                                        <span>{e}</span>
                                        <i></i>
                                    </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}