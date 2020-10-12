import React from "react"
import styled from 'styled-components'
import notice from '../../images/notice.png'
import avatar from '../../images/avatar.png'
import {HeaderButton} from "../UI/buttons/buttons";

const DivHeader = styled.div`
    display:flex;
    padding-right:25px;
    padding-top:20px;
    align-items: center;
    justify-content: flex-end;
    > button:nth-child(2) {
        > img {
            border-radius: 50%
            }
       padding-left:20px;
       border-left: 1px solid white;
    }
    > div {
        margin-left:20px;
    }
    @media screen and (max-width: 400px) {
        padding-right:0;
        > div {
            display: none;
        }
        > button {
            margin-left:10px;
            img {
            height:24px;
            }
        }
        button:nth-child(2) {
            padding-left:10px;
        }

        }
    }
    
`
const DivProfile = styled.div`
    font-weight:600;
    font-size:18px;
    margin:15px 0 10px 0;
    
    @media screen and (max-width: 400px) {
        font-size:14px;
    }
`

const DivMain = styled.div`
    @media screen and (max-width: 400px) {
    font-size:12px;
    }
`

const Header = ({name}) => {
    const nameHeader = name.split(' ')
    return (
        <div>
            <DivHeader>
                <HeaderButton>
                    <img src={notice} alt=""/>
                </HeaderButton>
                <HeaderButton>
                    <img src={avatar} alt=""/>
                </HeaderButton>
                <div>{nameHeader[0]} {nameHeader[1][0]}.</div>
            </DivHeader>
            <DivProfile>Личный профиль</DivProfile>
            <DivMain>Главная/Личный профиль</DivMain>
        </div>
    )
}
export default Header