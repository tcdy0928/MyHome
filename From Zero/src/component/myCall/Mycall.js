import React,{Component} from 'react';
import './style.css';

import ItemCall from './itemCall/ItemCall'


export default class Mycall extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){

        let {callBoxLeft} = this.props;

        return(
            <section className="callBox" style = {{left:callBoxLeft}}>
               <ItemCall/>
            </section>
        )
    }
}