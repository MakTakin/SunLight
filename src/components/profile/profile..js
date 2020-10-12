import React from "react"
import styled from 'styled-components'
import profileAvatar from '../../images/profileavatar.png'
import edit from '../../images/edit.png'
import close from '../../images/close.png'
import {ProfileLink} from "../UI/link/link"

const DivProfile = styled.div`
    display:flex;
    margin: 32px 0 24px 0;
    justify-content: space-between;
    align-items:center;
    background: linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding:24px 30px;
    
    @media screen and (max-width: 400px) {
        margin: 10px 0;
        padding:15px 10px;
    }
`

const DivFlex = styled.div`
    display:flex;
    align-items: center; 
    img {
        border-radius:50%;
        margin-right:40px;
    }
    
    @media screen and (max-width: 400px) {
        font-size: 14px;
        img {
            height:40px;
            margin-right:10px;
        }
    }
`

const Profile = (props) => {
    return (
        <DivProfile>
            <DivFlex>
                <img src={profileAvatar} alt=""/>
                <span>{props.profile.name}</span>
            </DivFlex>
            {props.path == '/' ?
                <ProfileLink to='/edit'>
                    <span>редактировать</span><img src={edit} alt=""/>
                </ProfileLink>
                :
                <ProfileLink to='/' onClick={()=>props.setFormControls(props.profile)}>
                    <span>закрыть</span><img src={close} alt=""/>
                </ProfileLink>
            }
        </DivProfile>
    )
}
export default Profile