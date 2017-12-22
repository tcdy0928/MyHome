import React,{Component} from 'react';
import './style.css';

export default class Info extends Component{
    constructor(props){
        super(props);
    }
    render(){

        let {type} = this.props;

        return(
            <ul className="module_info">
                <li className={type == "home"?"current":""}>
                    <p>
                        <span>欢</span>
                        迎来到我的个人主页，希望你会喜欢这里。
                    </p>
                    <p>
                        我是一名
                        <span>前端</span>
                        工程师。
                    </p>
                    <p>
                        偏执的喜欢
                        <span>平面</span>
                        化设计。
                    </p>
                </li>
                <li className={type == "info"?"current":""}>
                    <p>
                        我的名字叫
                        <span>谭超</span>
                        。
                    </p>
                    <p>
                        进过
                        <span>军营</span>
                        ，混过
                        <span>社会</span>
                        。
                    </p>
                    <p>
                        如今正在努力成为一名
                        <span>好前端</span>
                        。
                    </p>
                </li>
                <li className={type == "pic"?"current":""}>
                    <p>
                        曾
                        <span>走</span>
                        过的那些
                        <span>岁月</span>
                        ，
                    </p>
                    <p>
                        曾
                        <span>遇</span>
                        见的那些
                        <span>风景</span>
                        。
                    </p>
                </li>
                <li className={type == "w"?"current":""}>
                    <p>
                        闲来
                        <span>无事</span>
                        ，喜欢记一些东西。
                    </p>
                    <p>
                        可惜最近一点也
                        <span>不闲</span>
                        ...
                    </p>
                </li>
                <li className={type == "web"?"current":""}>
                    <p>
                        喜欢的
                        <span>东西</span>
                        就要去坚持。
                    </p>
                    <p>
                        这个过程会很
                        <span>苦</span>
                        、很
                        <span>累</span>
                        。
                    </p>
                    <p>
                        <span>但</span>
                        终会有所
                        <span>收获</span>
                        。
                    </p>
                </li>
                <li className={type == "job"?"current":""}>
                    <p>
                        <span>努力</span>
                        工作。
                        <span>努力</span>
                        学习。
                    </p>
                    <p>
                        <span>不是</span>
                        最强，也要做到
                        <span>最好</span>
                        。
                    </p>
                    <p>
                        不想当
                        <span>将军</span>
                        的士兵，不是好
                        <span>前端</span>
                        。
                    </p>
                </li>
                <li className={type == "call"?"current":""}>
                    <p>
                        <span>想</span>
                        约我的，尽管来。
                    </p>
                    <p>
                        <span>当然</span>
                        ，我说的是
                        <span>工作</span>
                        ...
                    </p>
                </li>
            </ul>
        )
    }
}