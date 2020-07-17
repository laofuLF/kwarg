import React, {Component} from 'react'
import {connect} from 'react-redux';
import {CSSTransition} from "react-transition-group";
import {actionCreator} from "./store";
import {HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from "./style";

class Header extends Component {
    getListArea = () => {
        return this.props.focused ? (<SearchInfo>
            <SearchInfoTitle>
                try search:
                <SearchInfoSwitch>
                    switch
                </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                {this.props.list.map(item => (
                    <SearchInfoItem key={item}>{item}</SearchInfoItem>
                ))}
            </SearchInfoList>
        </SearchInfo>) : null;
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
                            in={this.props.focused}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused': ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i
                            className={this.props.focused ? 'focused iconfont': 'iconfont'}
                        >
                            &#xe650;
                        </i>
                        {this.getListArea()}
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
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreator.getList())
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);