import React,{Component} from 'react';
import './style.css';


export default class Picapp extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){

        let {type,typeChange} = this.props;


        return(
            <ul className="photos_area">
                <li className="photo_area">
                    <div 
                        className="photo_box3" 
                        onClick = {()=>{
                            typeChange('mark')
                        }}
                    >
                        <div className="photo_content">
                            <img src={require('./img/mark.png')}/>
                            <span>书签夹</span>
                        </div>
                    </div>
                    <div className="photo_box2" onClick = {()=>{
                        typeChange('wall')
                    }}>
                        <div className="photo_content">
                            <img src={require('./img/wall.png')}/>
                            <span>照片墙</span>
                        </div>
                    </div>
                    <div className="photo_box" onClick = {()=>{
                        typeChange('normal')
                    }}>
                        <div className="photo_content">
                            <img src={require('./img/photos/index.jpg')}/>
                            <span>风景</span>
                        </div>
                    </div>
                </li>
            </ul>
        )
    }
}