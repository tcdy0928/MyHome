import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// 引入公共样式
import './common/index.css';

import Home from './component/home/Home';
import Myinfo from './component/myInfo/Myinfo';
import Mypic from './component/myPic/Mypic';
import Myw from './component/myW/Myw';
import Myweb from './component/myWeb/Myweb';
import Myjob from './component/myJob/Myjob';
import Mycall from './component/myCall/Mycall';




class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            showType:"showHome",
            wBoxLeft : -1500,
            callBoxLeft : -1500
        };
        [   
            this.showHome,
            this.showInfo,
            this.showPic,
            this.showW,
            this.showWeb,
            this.showJob,
            this.showCall,
            this.wBoxLeftChange,
            this.wBoxLeftBack,
            this.callBoxLeftChange,
            this.callBoxLeftBack
		].forEach( fn=>this[fn.name] = fn.bind(this) );
    }

    showHome(){
        this.setState({
            showType:"showHome"
        });
    }

    showInfo(){
        this.setState({
            showType:"showInfo"
        });
    }

    showPic(){
        this.setState({
            showType:"showPic"
        });
    }

    showW(){
        this.setState({
            showType:"showW"
        });
    }

    showWeb(){
        this.setState({
            showType:"showWeb"
        });
    }

    showJob(){
        this.setState({
            showType:"showJob"
        });
    }

    showCall(){
        this.setState({
            showType:"showCall"
        });
    }

    wBoxLeftChange(){
        this.setState({
            wBoxLeft : -90
        })
    }

    wBoxLeftBack(){
        this.setState({
            wBoxLeft : -1500
        })
    }

    callBoxLeftChange(){
        this.setState({
            callBoxLeft : -90
        })
    }

    callBoxLeftBack(){
        this.setState({
            callBoxLeft : -1500
        })
    }


    render(){
        
        let {showType,wBoxLeft,callBoxLeft} = this.state;
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
            } = this;
        return(
            <div>
                <Home {...{
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
                        }>
                </Home> 
                {
                    showType == "showInfo"?(
                        <Myinfo></Myinfo>
                    ):null
                }
                {
                    showType == "showPic"?(
                        <Mypic></Mypic>
                    ):null
                }
                {
                    showType == "showW"?(
                        <Myw {...{wBoxLeft}}></Myw>
                    ):null
                }
                {
                    showType == "showWeb"?(
                        <Myweb></Myweb>
                    ):null
                }
                {
                    showType == "showJob"?(
                        <Myjob></Myjob>
                    ):null
                }
                {
                    showType == "showCall"?(
                        <Mycall {...{callBoxLeft}}></Mycall>
                    ):null
                }
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);