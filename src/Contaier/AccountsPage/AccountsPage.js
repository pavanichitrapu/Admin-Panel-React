import React, { Component } from 'react';
import List from '../../Components/List/List';
import classes from './AccountsPage.module.css';
import UploadPhoto from '../../Components/UploadPhoto/UploadPhoto';


class AccountsPage extends Component{
    render(){
        return(
            <div className={classes.AccountsPage}>
               <List />
               <div className={classes.SettingsWrapper}>
                <UploadPhoto />
               </div>
            </div>
        );
    }    
}
export default AccountsPage;