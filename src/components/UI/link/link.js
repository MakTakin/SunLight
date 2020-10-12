import styled from 'styled-components'
import {Link} from "react-router-dom"

export const ModalLink = styled(Link)`
    text-decoration: none;
`
export const ProfileLink = styled(Link)`
    text-decoration: none;
    display:flex;
    align-items:center;
    padding:0;
    margin:0;
    background-color: transparent;
    border-radius:5px;
    color:white;
    text-transform:uppercase;
    > span {
        margin-right:10px;
    }
    @media screen and (max-width: 400px) {
        > span {
            display:none;
        }
        color:white;
        border: none;
        outline: none;
        &:hover {
        cursor: pointer;
        }
    }
`