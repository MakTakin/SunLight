import React from "react"
import mail from '../../../images/mail.png'
import tel from '../../../images/tel.png'
import styled from 'styled-components'

const DivForm = styled.div`
    display:flex;
    flex-direction:column;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    background: white;
    color: black;
    font-size:18px;
    > div {
        display:flex;
        padding:30px 75px;
        align-items: center;
        font-size:18px; 
        > span {
            margin-left:40px;
        }
    }
    > div:nth-child(1) {
        border-bottom:1px solid #CAE7FE;
    }

    
    @media screen and (max-width: 400px) {
        > div {
            padding:20px 10px;
            font-size:14px; 
            > span {
                margin-left:10px;
            }
        }
    }
`

const FormMain = ({profile}) => {
    return (
        <DivForm>
            <div>
                <img src={mail} alt=""/> <span>{profile.email}</span>
            </div>
            <div>
                <img src={tel} alt=""/> <span>{profile.tel}</span>
            </div>
        </DivForm>
    )

}
export default FormMain