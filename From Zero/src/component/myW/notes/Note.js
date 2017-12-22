import React,{Component} from 'react';
import './style.css';

import a from './img/articlepage01.png';
import b from './img/articlepage02.png';
import c from './img/articlepage03.jpg';
import d from './img/articlepage04.jpg';


export default class Note extends Component{
    constructor(props){
        super(props);
        this.state = {
            noteData : [
                {
                    title:'屠苏',
                    content : `纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `,
                    bg : `url(${a})`
                },
                {
                    title:'屠苏',
                    content : `纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `,
                    bg : `url(${b})`
                },
                {
                    title:'屠苏',
                    content : `纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `,
                    bg : `url(${c})`
                },
                {
                    title:'屠苏',
                    content : `纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `,
                    bg : `url(${d})`
                }
            ]
        };
        this.isClick = false;
        this.activego = this.activego.bind(this);
    }

     activego(ev){
       let conB = ev.target.parentNode;
       let {isClick} = this;
       if(!isClick){
            conB.style.top = "0px";
            conB.style.height = "630px";
            conB.style.zIndex = 5;
       }else{
            conB.style.top = "";
            conB.style.height = "";
            conB.style.zIndex = 0;
       }
       this.isClick = !this.isClick;
     }

    
    

    render(){

        let {noteData} = this.state;

        let {activego} = this;

        let newNoteData = noteData.map(function(item,i){
            return (
                <li key={Math.random()} >
                    <div className="contentBox" style={{backgroundImage:item.bg}}>
                        <h3 className="noteTitle" onClick = {(ev)=>{
                            activego(ev)
                        }}>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </li>
            )
        })

        return(
            <ul className="noteBox">
                {newNoteData}
            </ul>
        )
    }
}