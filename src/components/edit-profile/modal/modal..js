import React, { useState} from "react"
import styled from 'styled-components'
import { CancelButton, SaveButton} from "../../UI/buttons/buttons"
import cancel from '../../../images/cancel.png'
import {ModalLink} from "../../UI/link/link"
const ModalWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    > div {
        z-index: 10;
        position: relative;    
    }

`
const DivFlex = styled.div`
    display: block;
    max-width: 40%;
    max-height: 80%;
    margin: 220px auto;
    background: #FFFFFF;
    border-radius: 10px;
    font-weight: 600;
    font-size: 24px;
    text-align:center;
    color: rgba(49, 49, 49, 0.7);
    padding: ${props=> props.padding ? '70px 30px 90px 30px' : '30px'};
    > div {
        margin-bottom:30px;
    }
    @media screen and (max-width: 400px) {
        max-width:100%;
        height:calc(100vh - 142px);
        margin-top:${props=> props.padding ? '485px' : '142px'};
        padding: 25px 25px 0 25px;
        font-size:18px;
    }
    
`
const DivLink = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const Modal = (props) => {
    const [checkSave, setCheckSave] = useState(false)
    const closeModal = (e) => {
        if (!e.target.name) {
          props.setSave(false)
        }
    }
    const saveProfile = () => {
        props.saveData()
        setCheckSave(true)
    }
    return (
        <ModalWindow onClick={(e) => closeModal(e)}>
                { !checkSave ?
                    <DivFlex>
                    <CancelButton><img src={cancel} alt=""/></CancelButton>
                    <div>Сохранить изменения?</div>
                    <SaveButton name='btn' width='true' onClick={() => saveProfile()}>Сохранить</SaveButton>
                    <SaveButton back width='true'>Не сохранять</SaveButton>
                    </DivFlex>
                    :
                    <ModalLink to='/'>
                    <DivLink>
                    <DivFlex padding>
                    <div>Данные успешно сохранены</div>
                    <SaveButton width='true' display='true'>Хорошо</SaveButton>
                    </DivFlex>
                    </DivLink>
                    </ModalLink>
                }
        </ModalWindow>
    )
}
export default Modal