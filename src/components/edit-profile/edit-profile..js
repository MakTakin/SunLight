import React from "react"
import Profile from "../profile/profile.";
import FormEdit from "./form-edit/form-edit.";

const EditProfile = (props) => {
    return (
        <>
            <Profile  profile={props.profile} setFormControls ={props.setFormControls}/>
            <FormEdit changeProfile={props.changeProfile} formControls={props.formControls}  saveData={props.saveData}/>
        </>
    )
}
export default EditProfile