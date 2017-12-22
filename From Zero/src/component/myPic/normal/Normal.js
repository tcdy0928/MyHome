import React,{Component} from 'react';
import './style.css';

let a=0;
export default class Normal extends Component{
    constructor(props){
        super(props);
        this.state = {
            num : a
        };
        this.addNum = this.addNum.bind(this);
        this.subNum = this.subNum.bind(this);
    }

    addNum(){
        a++;
        if(a > 4){
            a = 0;
        }
        this.setState({
            num : a
        })
    }

    subNum(){
        a--;
        if(a < 0){
            a = 4;
        }
        this.setState({
            num : a
        })
    }


    render(){

        let {num} = this.state;
        let {addNum,subNum} = this;
        return(
            <div id="normalbox">
                <div className="top">
                    <div className="line"></div>
                    <div className="pic_box">
                        <img src={require('../img/'+num+'.jpg')} />
                        <div 
                            className="bt prev"
                            onClick = {()=>{
                                subNum()
                            }}
                        >&lt;</div>
                        <div 
                            className="bt next"
                            onClick = {()=>{
                                addNum()
                            }}
                        >&gt;</div>
                    </div>
                </div>
            </div>
        )
    }
}