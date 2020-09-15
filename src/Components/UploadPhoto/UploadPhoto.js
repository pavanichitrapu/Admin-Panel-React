import React, { Component } from 'react';
import classes from './UploadPhoto.module.css';
import Avatar from '../../Assets/avatar.png';

class UploadPhoto extends Component{
    render(){
        return(
            <div className={classes.UploadingWrapper}>
                <p className={classes.Heading}>Change Avatar</p>
                <img className={classes.Avatar} src={Avatar} alt="User Picture" />
                <div className={classes.DeleteIcon}><i class="fas fa-trash-alt"></i></div>
                <button className={classes.UploadButton}>upload new photo</button>
            </div>
        )
    }
}
export default UploadPhoto;