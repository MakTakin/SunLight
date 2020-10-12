import styled from 'styled-components'
import {TextField} from "@material-ui/core";

export const Input = styled(TextField)`
    flex:1;
    label {
        z-index:0;
    }
    label.Mui-focused {
        color: #359FF4;
    }
    .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color: #359FF4;
        }
        &.Mui-focused fieldset {
            border-color: #359FF4;
        }
    }
    ${props => {
        if (props.error) {
            return `
            label.Mui-focused {
                color: red;
            }
            .MuiOutlinedInput-root {
                &:hover fieldset {
                    border-color: red;
                }
                &.Mui-focused fieldset {
                    border-color: red;
                }
            `
        }
    }}
    
    @media screen and (max-width: 400px) {
    width:254px;
    }
`







