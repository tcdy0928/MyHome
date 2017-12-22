import React,{Component} from 'react';
import './style.css';

import Note from './notes/Note';
import Record from './record/Record';


export default class Myw extends Component{
    constructor(props){
        super(props);
        this.state = {
            isClass : false
        };
        this.changeCls = this.changeCls.bind(this);
    }

    changeCls(a){
        this.setState({
            isClass : a
        })
    }

    render(){

        let {wBoxLeft} = this.props;
        let {isClass} = this.state;
        let {changeCls} = this;

        return(
            <div className={isClass?"bg":""}>
                <section className="wBox" style = {{left:wBoxLeft}}>
                    <ul className="ybtn">
                        <li>
                            <div className="btn" onClick = {()=>{
                                changeCls(false)
                            }}>
                                <span></span>
                            </div>
                        </li>
                        <li>
                            <div className="btn" onClick = {()=>{
                                changeCls(true)
                            }}>
                                <span></span>
                            </div>
                        </li>
                    </ul>
                    <ul className="right">
                        <li>
                            <Note/>
                        </li>
                        <li>
                            <Record/>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}