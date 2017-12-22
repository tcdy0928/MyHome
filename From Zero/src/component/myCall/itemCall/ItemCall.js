import React,{Component} from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './style.css';
const BgElement = Element.BgElement;


export default class ItemCall extends Component {
  render() {
    return (
      <div className="itemBox">
          <BannerAnim prefixCls="banner-user">
            <Element key="aaa"
            prefixCls="banner-user-elem"
            followParallax={{
                delay: 1000,
                data: [
                { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                { id: 'title', value: 50, type: 'x' },
                { id: 'content', value: -30, type: 'x' },
                ],
            }}
            >
                <BgElement
                    key="bg"
                    className="bg"
                    id="bg"
                    style={{
                        background: 'red',
                    }}
                />
                <TweenOne className="banner-user-title" 
                    animation={{ y: 30, opacity: 0, type: 'from' }}
                    id="title"
                >
                    My  Telephone
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    id="content"
                >
                    18911413161
                </TweenOne>
            </Element>
            <Element key="bbb"
                prefixCls="banner-user-elem"
                followParallax={{
                    delay: 1000,
                    data: [
                    { id: 'bg2', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                    { id: 'title2', value: 50, type: 'x' },
                    { id: 'content2', value: -30, type: 'x' },
                    ],
                }}
            >
                <BgElement
                    key="bg"
                    id="bg2"
                    className="bg"
                    style={{
                        background: '#64CBCC',
                    }}
                />
                <TweenOne 
                    className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}
                    id="title2"
                >
                    My   E-mail
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    id="content2"
                >
                    chaotcl1@163.com
                </TweenOne>
            </Element>
            <Element key="ccc"
                prefixCls="banner-user-elem"
                followParallax={{
                    delay: 1000,
                    data: [
                    { id: 'bg3', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
                    { id: 'title3', value: 50, type: 'x' },
                    { id: 'content3', value: -30, type: 'x' },
                    ],
                }}
            >
                <BgElement
                    key="bg"
                    id="bg3"
                    className="bg"
                    style={{
                        background: '#64CBCC',
                    }}
                />
                <TweenOne 
                    className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}
                    id="title3"
                >
                    My   QQ
                </TweenOne>
                <TweenOne className="banner-user-text" 
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                    id="content3"
                >
                    734900461
                </TweenOne>
            </Element>
        </BannerAnim>
      </div>
    );
  }
}
