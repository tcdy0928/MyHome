import React,{Component} from 'react';
import './style.css';




export default class Myweb extends Component{
    constructor(props){
        super(props);
        this.state = {
            goInfo : false
        };
        this.infoGo = this.infoGo.bind(this);
        this.nomalGo = this.nomalGo.bind(this);
    }

    infoGo(){
        this.setState({
            goInfo : true
        })
    }
    nomalGo(){
        this.setState({
            goInfo : false
        })
    }

    render(){

        let {goInfo} = this.state;
        
        let {infoGo,nomalGo} = this;

        return(
            <section className="webBox">
                <div className="contentBox">
                    <div className={goInfo?"typeInfo":""}>
                        <div className="code_box">
                            <div className="imgBox">
                                <img src={require('./img/recode_01.jpg')}/>
                            </div>
                            <button onClick={()=>{
                                infoGo()
                            }}>简介</button>
                        </div>
                        <div className="info_box">
                            <div className="imgInfo">
                                <h3>说明</h3>
                                <p>
                                   由于时间原因，再者，此处还没有想好如何处理一些动画效果，
                                   所以就暂时不放入自己练习的作品了，等以后慢慢补充进来。
                                </p>
                            </div>
                            <button onClick={()=>{
                                nomalGo()
                            }}>返回</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}