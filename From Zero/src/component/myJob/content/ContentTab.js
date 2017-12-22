import React,{Component} from 'react';
import { Tabs, Button } from 'antd';
const TabPane = Tabs.TabPane;
import 'antd/dist/antd.css'; 
import './style.css';


export default class ContentTab extends Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { 
         title: '部队',
         content: [
                    '1、学习简单的计算机基础理论知识及掌握网页制作的基础技能；',
                    '2、对内部网界面的简单处理并根据效果图完成静态实现；',
                    '3、负责网站整体页面结构及样式层结构的配合测试，提出问题，进行优化；',
                    '4、其他事宜；'
                ], 
         key: '1' 
      },
      { 
          title: '西安大数软件科技有限公司', 
          content: [
                        '1、负责公司软件产品的页面功能的开发和优化；',
                        '2、根据需求，实现产品的页面交互和数据逻辑展示；',
                        '3、使用HTML5/CSS3/Javascript/jQuery开发符合W3C标准的网站前端页面；',
                        '4、根据设计师及美工切图精确实现网页，与后端工程师配合快速完成开发；',
                        '5、制作标准优化的代码，并增加交互动态功能；',
                        '6、对重大的或批量的质量问题进行技术攻关，与团队其他成员一起及时解决项目开发过程中的关键问题和技术难题；',
                        '7、协助项目经理及质量保证人员保证项目的质量；',
                        '8、完成上级领导交代的其他事宜；'
                    ], 
          key: '2' 
        }
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
    this.onChange = this.onChange.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  onChange(activeKey){
    this.setState({ activeKey });
  }
  onEdit(targetKey, action){
    this[action](targetKey);
  }
  add(){
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: '新经历', content: ['New Tab Pane'], key: activeKey });
    this.setState({ panes, activeKey });
  }
  remove(targetKey){
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  }


  render() {
    return (
      <div className="tabBox">
        <div style={{ marginBottom: 16 }}>
          <Button className="btn" onClick={this.add}>添加</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content.map((item) => {
              return (
                <p key={Math.random()}>{item}</p>
              )
          })}</TabPane>)}
        </Tabs>
      </div>
    );
  }
}