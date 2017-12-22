import React,{Component} from 'react';
import './style.css';

export default class Content extends Component{
    constructor(props){
        super(props);
        this.state = {
            val : '',
            isDel : false,
            liData : [
                {
                    qus : "姓名",
                    ans : "谭超"
                },
                {
                    qus : "性别",
                    ans : "男"
                },
                {
                    qus : "籍贯",
                    ans : "山西运城"
                },
                {
                    qus : "民族",
                    ans : "汉族"
                },
                {
                    qus : "电话",
                    ans : "18911413161"
                },
                {
                    qus : "邮箱",
                    ans : "chaotcl1@163.com"
                }
            ]
        };
        this.delDl = this.delDl.bind(this);
        this.handelChange = this.handelChange.bind(this);
    }

    delDl(){
        this.setState({
            isDel : true
        })
    }

    //这有问题，须进一步修改
    handelChange(event){
        this.setState(...{
            val:event.target.value
        })
    }


    render(){

        let {val,isDel,liData} = this.state;
        let {delDl,handelChange} = this;
        let {isChange} = this.props;


        let newLiData = liData.map(function(item,i){
            return (
                <li className={isChange?"change":''} key={Math.random()}>
                    <span className="liname">{item.qus}</span>
                    <span className="lival">{item.ans}</span>
                    <span className="rep">
                        <input 
                            type="text" 
                            onChange = {handelChange}
                            value={val}
                        />
                        <button>确定</button>
                    </span>
                </li>
            )
        })

        return(
            <dl className={ isDel ? 'hiden': '' }>
                <dt>
                    <h4>基本信息</h4>
                    <span 
                        className="close" 
                        onClick = {() => {
                            delDl();
                        }}
                    >×</span>
                </dt>
                <dd>
                    <ul>
                        {newLiData}
                    </ul>
                </dd>
            </dl>
        )
    }
}