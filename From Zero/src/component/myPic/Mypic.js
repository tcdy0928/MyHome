import React,{Component} from 'react';
import './style.css';

import Picapp from './picApp/Picapp';
import Normal from './normal/Normal';
import Wall from './wall/Wall';
import Mark from './mark/Mark';


export default class Mypic extends Component{
    constructor(props){
        super(props);
        this.state = {
            type : ''
        };
        this.typeChange = this.typeChange.bind(this);
    }

    typeChange(newtype){
        this.setState({
            type : newtype
        })
    }

    render(){

        let {type} = this.state;
        let {typeChange} = this;

        return(
            <section className="picBox" type={type}>
               <div className="mypic_content">
                   <div className="contentBox">
                       <header>我的相册</header>
                       <div className={type}>
                            <Picapp {...{type,typeChange}}/>
                       </div>  
                       <div className="wall_area">
                           <div className="album_box">
                               <div className="toolbar">
                                   <span className="hidBtn" onClick={()=>{
                                       typeChange('')
                                   }}>×</span>
                               </div>
                               <div className="album">
                               {
                                    type == "normal"?(
                                        <Normal></Normal>
                                    ):null
                                }
                                {
                                    type == "wall"?(
                                        <Wall></Wall>
                                    ):null
                                }
                                {
                                    type == "mark"?(
                                        <Mark></Mark>
                                    ):null
                                }
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </section>
        )
    }
}