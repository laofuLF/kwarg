import styled from "styled-components";
import logo from "../../statics/dip.png";

export const  HeaderWrapper = styled.div`
    position: relative;
    height: 65px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute; 
    top: 0;
    left: 0;
    width: 100px;
    height : 65px;
    display: block;
    background: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
`;

export const Nav = styled.div`
    width: 1000px;
    height: 100%;
    margin: 0 auto;
`

export const NavItem = styled.div`
    line-height = 38px;
    padding: 15px;
    font-size: 17px;
    margin-top: 7px;
    font: italic 1.2em "Fira Sans", serif;
    color: 5e6472;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ffa69e;
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .slide-enter {
        transition: all .2s ease-out;
    }
    .slid-enter-active {
        width: 240px
    }
    .slide-exit {
        transition: all .2s ease-out;
    }
    .slide-exit-active {
        width: 160px
    }
    .iconfont {
        position: absolute;
        line-height: 30px;
        width: 30px;
        border-radius: 15px;
        right: 5px;
        bottom: 5px;
        text-align: center;
        &.focused {
            color: #fff;
            background: #777;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: 'search'
})`
    width: 160px;
    height: 38px;
    margin-top: 14px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box; 
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size:14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 65px;
`

export const Button = styled.div`
    float: right;
    line-height 38px; 
    margin-top: 13px;
    margin-right:20px;
    padding: 0 20px;
    border-radius: 19px; 
    border: 1px solid #ffa69e;
    font-size: 14px;
    &.signUp {
        color: #ffa69e;
    }
    &.newArticle {
         color: #fff;
         background: #ffa69e;
    }
`
