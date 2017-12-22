import React,{Component} from 'react';
import './style.css';
import HomeNav from './component/homeNav/HomeNav';
import Info from './component/info/Info';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            type : "home",
            left : -400
        };
        this.changeType = this.changeType.bind(this);
        this.leftChange = this.leftChange.bind(this);
    }

    changeType(type){
        this.setState({
            type
        })
    }

    leftChange(){
        if(this.state.type == "home"){
            this.setState({
                left : -400
            })
        }else{
            this.setState({
                left : -2000
            })
        }
        
    }

    render(){

        let {type,left} = this.state;
        let {changeType,leftChange} = this;
        let {
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

        return(
            <div>
                <HomeNav {...{
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
                                }
                            }></HomeNav>
                <section className="main_area" style={{left:left}}>
                    <header className="title">
                        <h3>From Zero</h3>
                        <h4>better late than never</h4>
                    </header>
                    <Info 
                        {...{
                            type
                        }}
                    ></Info>
                </section>
            </div>
        )
    }
}