import React,{Component} from 'react';
import './style.css';

import Content from './component/Content';


import a from './img/1.jpg';
import b from './img/2.jpg';
import c from './img/3.jpg';
import d from './img/4.jpg';
import e from './img/5.jpg';
import f from './img/6.jpg';
import g from './img/7.jpg';

var arr = [a,b,c,d,e,f,g];
var num = 0;

export default class Myinfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            url : `url(${arr[num]})`,
            isChange : false
        };
        this.changeBg = this.changeBg.bind(this);
        this.comData = this.comData.bind(this);
    }

    changeBg(){
        num ++;
        if(num > arr.length-1){
            num = 0;
        }
        this.setState({
            url : `url(${arr[num]})`
        })
    }

    //编辑
    comData(){
        this.setState({
            isChange : true
        })
    }

    render(){

        let {url,isChange} = this.state;
        let {changeBg,comData} = this;
        return(
            <section className="infoBox" style={{backgroundImage:url}}>
                <header>
                    <div>我的信息</div>
                    <nav>
                        <a href="javascript:;">添加</a>
                        <a href="javascript:;" 
                            onClick = { ()=> {
                                comData()
                            } }
                        >编辑</a>
                        <a href="javascript:;" 
                            onClick = {() => {
                                changeBg();
                            }}
                        >更换背景</a>
                    </nav>
                </header>
                <div className="contentBox">
                    <Content {...{isChange}}/>
                </div>
            </section>
        )
    }
}