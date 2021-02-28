import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    * {
        padding : 0;
        margin  : 0;
    }
    a {
        color           : #000;
        text-decoration : none;
    }
    
    li {
        text-align      : center;
        margin          : 25px;
        list-style-type : none;
        border-radius   : 50px;
        background      : #ededed;
        font-size       : 36px;
        width           : 581px;
        height          : 88px;
        line-height     : 80px;
        margin          : 0 auto;
        margin-bottom   : 20px;
        margin-top      : 20px;
        cursor          : pointer;
        &:hover {
            background : #e9c46a;
        }
    }
    body {
        background : #2b59a2
    }

    h3 {
        margin: 26px;
    }
    
`
const App = styled.div`
    height        : 160px;
    background    : #ededed;
    border-bottom : 5px solid #000;
`
const Text = styled.h1`
    color       : #e9c46a;
    text-align  : center;
    font-size   : 60px;
    padding-top : 40px;
`
const Info = styled.div`
    font-size     : 32px;
    color         : #000;
    background    : #ededed;
    width         : 675px;
    height        : 400px;
    margin        : 0 auto;
    border-radius : 25px;
`
export {
    GlobalStyle,
    App,
    Text,
    Info
}