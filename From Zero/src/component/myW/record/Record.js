import React,{Component} from 'react';
import './style.css';


export default class Record extends Component{
    constructor(props){
        super(props);
        this.state = {
            recordData : [
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
                },
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
                },
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
                },
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
                },
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
                },
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
                },
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
                },
                {
                    title: '入阵曲',
                    content : `
                                纵行遍天涯，梦魂惯处，依恋旧亭阑。
                                经历了一圈纷纷扰扰，终究还是回到了起点。长亭之外，
                                古道之边。前尘如往昔，华年依同旧。若不是少了伊人的倩影，
                                真就以为还是从前。那青草随风拂过的一轮皱縠，消散在连天的尽头，
                                我倚栏远眺，就像昔年你离去的那般。
                            `
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
             conB.style.left = "0";
             conB.style.width = "970px";
             conB.style.transform = "scale(1)";
             conB.style.opacity = "1";
             conB.style.zIndex = 2;
        }else{
             conB.style.left = "";
             conB.style.width = "";
             conB.style.transform = "scale(.9)";
             conB.style.opacity = ".8";
             conB.style.zIndex = 0;
        }
        this.isClick = !this.isClick;
      }

    render(){

        let {recordData} = this.state;

        let {activego} = this;

        let newRecordData = recordData.map(function(item,i){
            return (
                <li key={Math.random()} >
                    <div className="contentBox">
                        <h3 className="recordTitle" onClick={(ev)=>{
                             activego(ev)
                        }}>{item.title}</h3>
                        <p>{item.content}</p>
                    </div>
                </li>
            )
        })


        return(
            <ul className="recordBox">
                {newRecordData}
            </ul>
        )
    }
}