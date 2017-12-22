import React,{Component} from 'react';
import './style.css';


export default class Wall extends Component{
    constructor(props){
        super(props);
        this.state = {
          
        };
    }

    render(){

        return(
            <div id="wallbox">
                <ul>
                    <li>
                       <img src={require('../img/0.jpg')}/>
                       <img src={require('../img/1.jpg')}/>
                       <img src={require('../img/2.jpg')}/>
                       <img src={require('../img/3.jpg')}/>
                       <img src={require('../img/4.jpg')}/>
                    </li>
                    
                </ul>
            </div>
        )
    }
}