import React, {useState} from "react"
import styled from 'styled-components'
import contact from '../../../images/contact.png'
import mail from '../../../images/mail.png'
import tel from '../../../images/tel.png'
import {Input} from "../../UI/input/input"
import {SaveButton} from "../../UI/buttons/buttons"
import Modal from "../modal/modal."
import InputMask from 'react-input-mask'

const Form = styled.form`
    background: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    padding:25px 0 45px 0;
    
    @media screen and (max-width: 400px) {
        padding:17px 23px;
        margin-bottom:10px
    }
`
const DivFlex = styled.div`
    display:flex;
    flex:1;
    align-items:center;
    margin-bottom:30px;
    padding:20px 75px 20px 30px;
    border-right: 1px solid #CAE7FE;
    > img{
        margin-right:40px;
    }
    
    @media screen and (max-width: 330px) {
        > img{
           display:none;
        }
        flex-direction:column;
        padding:0; 
    }
`
const DivInput = styled.div`
    display:flex;   
    > div:nth-child(3){
        border-right:none;
    }
    @media screen and (max-width: 330px) {

        flex-direction:column;
        > div {
            border-right:none;
        }
    }
`

const FormEdit = (props) => {
    const [inputs, setInputs] = useState([
        {
            label: 'Фамилия и имя',
            placeholder: 'Укажите ваши фамилию и имя',
            icon: contact,
            name: 'name',
        },
        {
            label: 'E-mail',
            placeholder: 'Ivanova@mail.ru',
            icon: mail,
            name: 'email',
        },
        {
            label: 'Номер телефона',
            placeholder: 'Укажите номер телефона',
            icon: tel,
            name: 'tel'
        },
    ])
    const [save, setSave] = useState(false)
    const saveChange = (e) => {
        e.preventDefault()
        if(!props.formControls.isError) {
            return
        }
        setSave(true)
    }
    const inputRender = inputs.map((input, index) => {
        return (
            <DivFlex key={index}>
                <img src={input.icon} alt=""/>
                {!(input.name == 'tel') ?
                    <Input
                        error={props.formControls.errors[input.name] ? true : false}
                        name={input.name}
                        id="outlined-helperText"
                        label={input.label}
                        placeholder={input.placeholder}
                        value={props.formControls[input.name]}
                        variant="outlined"
                        helperText={props.formControls.errors[input.name]}
                        onChange={(e) => props.changeProfile(e)}
                    /> :
                    <InputMask
                        error={props.formControls.errors[input.name] ? true : false}
                        mask="+7 999 999 99 99"
                        name={input.name}
                        helperText={props.formControls.errors[input.name]}
                        value={props.formControls[input.name]}
                        disabled={false}
                        onChange={(e) => props.changeProfile(e)}
                        maskChar=' '
                    >
                        {(props) =>
                            <Input
                                {...props}
                                id="outlined-helperText"
                                label={input.label}
                                placeholder={input.placeholder}
                                variant="outlined"/>
                        }
                    </InputMask>
                }
            </DivFlex>
        )
    })
    return (
        <Form onSubmit={(e) => saveChange(e)}>
            <DivInput>
                {inputRender}
            </DivInput>
            <SaveButton type='submit'>Сохранить изменения</SaveButton>
            { save && (
                <Modal save={save} setSave={setSave} saveData={props.saveData}/>
            )}
        </Form>
    )
}
export default FormEdit