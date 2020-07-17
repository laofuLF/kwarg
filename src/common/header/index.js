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
        const {focused, list, page, handleMouseEnter, handleMouseLeave, handleChangePage, mouseIn} = this.props;
        const jsList = list.toJS();
        const pageList = [];

        if (jsList.length) {
            for (let i = page * 5; i < (page + 1) * 5 && i < jsList.length; i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
                )
            }
        }

        return focused || mouseIn ? (<SearchInfo
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <SearchInfoTitle>
                try search:
                <SearchInfoSwitch onClick={() => handleChangePage(this.spinIcon)}>
                    <i ref={(icon) => this.spinIcon = icon} className='iconfont spin'>&#xe851;</i>
                    switch
                </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                {pageList}
            </SearchInfoList>
        </SearchInfo>) : null;
    }

    render() {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
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
                            in={focused}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused': ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i
                            className={focused ? 'focused iconfont zoom': 'iconfont zoom'}
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
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreator.getList())
            dispatch(actionCreator.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreator.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(spin) {
            let originalAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originalAngle) {
                originalAngle = parseInt(originalAngle, 10);
            } else {
                originalAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originalAngle + 360) + 'deg)';
            dispatch(actionCreator.changePage());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);