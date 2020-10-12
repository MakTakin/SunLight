import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import bg from '../../images/bg.png'
import bgmobile from '../../images/bgmobile.png'
import Header from "../header/header."
import {Redirect, Route, Switch} from "react-router-dom"
import Main from "../main/main"
import EditProfile from "../edit-profile/edit-profile."

const Container = styled.div`
    max-width: 1365px;
    padding:0 23px 0 34px;
    color:white;
    margin: 0 auto;
    background:url(${bg}) no-repeat;
    height: 100vh;
    font-family: 'Open Sans', sans-serif;
    @media screen and (max-width: 400px) {
        background:url(${bgmobile}) no-repeat;
        padding:0 10px 0 10px;
    }
`

function App() {
    const [profile, setProfile] = useState({
        name: 'Иванова Анна Михайловна',
        email: 'ivanova@mail.ru',
        tel: 'Укажите номер телефона',
        errors: {},
        isError: false,

    })
    const [isLoading, setIsLoading] = useState(true)
    const [formControls, setFormControls] = useState()
    const saveDataProfile = async () => {
        if (!formControls.isError) {
            return
        }
        const state = {
            name: formControls.name,
            email: formControls.email,
            tel: formControls.tel
        }
        try {
            let response = await fetch('http://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'x-token-access': 'random'
                },
                body: JSON.stringify(state)
            })
            await response.json()

        } catch (e) {
            console.log(e)
        }
        localStorage.setItem('profile', JSON.stringify(state))
        setProfile(formControls)
    }

    useEffect(() => {
        const profileLocal = localStorage.getItem('profile');
        const profiles = JSON.parse(profileLocal)
        const setForms = async () => {
            await setProfile({...profile, ...profiles})
            await setFormControls({...profile, ...profiles})
            await setIsLoading(false)
        }
        setForms()
    }, [])

    const changeProfile = (e) => {
        const Controls = {...formControls}
        Controls[e.target.name] = e.target.value
        const controlsForm = validation(e.target.name, e.target.value, Controls)
        let isError = true
        Object.values(controlsForm.errors).forEach(item => {
            if (item.length > 0) {
                isError = false
            }
        })
        setFormControls({...controlsForm, isError})
    }

    const validation = (control, value, Controls) => {
        const error = {
            [control]: ''
        }
        if (control == 'name') {
            if (!value.split(' ')[1]) {
                error[control] = 'Вы неверно указали имя'
            }
        }
        if (control == 'email') {
            const isValid = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value)
            if (!isValid) {
                error[control] = 'Укажите корректный email'
            }
        }
        if (control == 'tel') {
            const isValid = /^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/.test(value)
            if (!isValid) {
                error[control] = 'Введите корректный телефон'
            }
        }
        return {
            ...Controls,
            errors: {...Controls.errors, ...error},
        }
    }
    return (
        <Container>
            {
                isLoading ? <h1>..loading</h1> :
                    <>
                        <Header name={profile.name}/>
                        <Switch>
                            <Route path='/'
                                   render={(props) => <Main {...props} profile={profile}/>}
                                   exact
                            />
                            <Route path='/edit'
                                   render={(props) => <EditProfile {...props} profile={profile}
                                                                   setFormControls={setFormControls}
                                                                   formControls={formControls}
                                                                   changeProfile={changeProfile}
                                                                   saveData={saveDataProfile}/>}
                            />
                            <Redirect to='/'/>
                        </Switch>
                    </>
            }
        </Container>
    )
}

export default App
