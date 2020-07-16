import React, {Component} from 'react'
import {CSSTransition} from "react-transition-group";
import {HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>Main page</NavItem>
                    <NavItem className='left'>Download app</NavItem>
                    <NavItem className='right'>Sign in</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont Aa">&#xe636;</i>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={this.state.focused}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.state.focused ? 'focused': ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            >

                            </NavSearch>
                        </CSSTransition>
                        <i
                            className={this.state.focused ? 'focused iconfont': 'iconfont'}
                        >
                            &#xe650;
                        </i>
                    </SearchWrapper>

                    <Addition>
                        <Button className='newArticle'>
                            <i className="iconfont">&#xe61c;</i>
                            Write article
                        </Button>
                        <Button className='signUp'>Sign up</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;