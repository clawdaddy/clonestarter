import React, {Component} from 'react';
import FooterCategories from './FooterCategories';
import FooterIconsEtc from './FooterIconsEtc';

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            categories:
            [
                {
                    name:'Arts',
                    link:''
                },
                {
                    name:'Comics & Illustration',
                    link:''
                },
                {
                    name:'Design & Tech',
                    link:''
                },
                {
                    name:'Film',
                    link:''
                },
                {
                    name:'Food & Craft',
                    link:''
                },
                {
                    name:'Games',
                    link:''
                },
                {
                    name:'Music',
                    link:''
                },
                {
                    name:'Publishing',
                    link:''
                }
            ],
            about:
            [
                {
                    name:'About us',
                    link:''
                },
                {
                    name:'Our charter',
                    link:''
                },
                {
                    name:'Stats',
                    link:''
                },
                {
                    name:'Press',
                    link:''
                },
                {
                    name:'Jobs',
                    link:''
                }
            ],
            support:
            [
                {
                    name:'Help Center',
                    link:'',
                },
                {
                    name:'Our Rules',
                    link:''
                },
                {
                    name:'Creator Handbook',
                    link:''
                },
                {
                    name:'Campus',
                    link:''
                },
                {
                    name:'Patrons',
                    link:''
                }
            ],
            hello:
            [
                {
                    name:'Kickstarter Blog',
                    link:''
                },
                {
                    name:'Engineering Blog',
                    link:''
                },
                {
                    name:'Newsletters',
                    link:''
                }
            ],
            more:
            [
                {
                    name:'Drip',
                    link:''
                },
                {
                    name:'Kickstarter Live',
                    link:''
                },
                {
                    name:'The Creative Independent',
                    link:''
                }
            ],
            legal:
            [
                {
                    name:'Trust and Safety',
                    link:''
                },
                {
                    name:'Terms of Use',
                    link:''
                },
                {
                    name:'Privacy Policy',
                    link:''
                },
                {
                    name:'Cookie Policy',
                    link:''
                }
            ]
        }
    }

    render(){
        const { categories, support, about, more, hello, legal } = this.state;
        return(
            <div className='footer'>
                <FooterCategories
                    list={categories}
                    classname='footer-categories'
                    textclass='footer-cat-choice'
                    head='EXPLORE'
                    headID='footer-cat-id'
                />
                <div className='footer-links'>
                    <FooterCategories
                        list = {about}
                        classname='footer-about'
                        head='ABOUT'
                        textclass='footer-link'
                    />
                    <FooterCategories
                        list={support}
                        classname='footer-support'
                        head='SUPPORT'
                        textclass='footer-link'
                    />
                    <FooterCategories
                        list={hello}
                        classname='footer-hello'
                        head='HELLO'
                        textclass='footer-link'
                    />
                    <FooterCategories
                        list={more}
                        classname='footer-more'
                        head='MORE FROM KICKSTARTER'
                        textclass='footer-link'
                    />
                </div>
                <FooterIconsEtc/>
                <FooterCategories
                    list={legal}
                    classname='footer-legal'
                    head={null}
                    textclass='footer-cat-choice'
                />
            </div>
        )
    }
}
export default Footer;