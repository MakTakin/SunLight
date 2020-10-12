import styled from 'styled-components'

export const Button = styled.button`
    font-family: 'Open Sans',sans-serif;
    border: none;
    outline: none;
    color:white;
    &:hover {
    cursor: pointer;
    }
`
export const ProfileButton = styled(Button)`
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
}
`
export const SaveButton = styled(Button)`
    margin:0 auto;
    display:flex;
    justify-content:center;
    width: ${props=> props.width ? '200px' : null};
    background: ${props=> props.back ? 'white' : '#01BDA7'};
    color: ${props=> props.back ? '#01BDA7' : 'white'};
    border: ${props=> props.back ? '1px solid #01BDA7' : null};
    border-radius: 36px;
    padding: 15px 25px; 
    margin-bottom:30px;
    @media screen and (max-width: 400px) {
        margin-bottom:${props=> props.width ? '30px' : 'null'};
        display:${props=> props.display ? 'none' : null}
    }
`
export const HeaderButton = styled(Button)`
    background-color: transparent;
    margin:0;
    padding:0;
    margin-left:20px; 
`

export const CancelButton = styled(Button)`
    display:flex;
    margin-left:auto;
    margin-bottom:25px;
    padding:0;
    background:white;
    
    @media screen and (max-width: 400px) {
        margin-bottom:15px;
    }
`
