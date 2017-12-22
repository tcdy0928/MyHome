import React,{Component} from 'react';
import './style.css';
import ContentTab from './content/ContentTab'


export default class Myjob extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){

        return(
            <section className="jobBox">
                <ContentTab/>
            </section>
        )
    }
}