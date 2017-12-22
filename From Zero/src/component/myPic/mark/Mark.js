import React,{Component} from 'react';
import './style.css';


export default class Mark extends Component{
    constructor(props){
        super(props);
        this.state = {
          
        };
    }

    render(){

        return(
            <div id="markbox">
                <ul >
                    <li>
                        <img src={require('../img/0.jpg')}/>
                    </li>
                    <li>
                        <img src={require('../img/1.jpg')}/>
                    </li>
                    <li className="active">
                        <img src={require('../img/2.jpg')}/>
                    </li>
                    <li>
                        <img src={require('../img/3.jpg')}/>
                    </li>
                    <li>
                        <img src={require('../img/4.jpg')}/>
                    </li>
                </ul>
            </div>
        )
    }
}