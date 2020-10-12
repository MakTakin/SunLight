import React from "react"
import Profile from "../profile/profile."
import FormMain from "./form/form."

const Main = (props) => {
    return (
        <>
            <Profile path={props.match.path} profile={props.profile}/>
            <FormMain profile={props.profile}/>
        </>
    )
}
export default Main