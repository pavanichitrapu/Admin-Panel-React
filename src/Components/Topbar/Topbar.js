import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () =>{
    return(
        <div className={classes.Topbar}>
            <p className={classes.ProductHeading}>product admin</p>
            <div className={classes.MenuBar}>
                <div className={classes.MenuItem}>
                    <i className="fas fa-tachometer-alt"></i>
                    <p className={classes.MenuText}>Dashboard</p>
                </div>
                <div className={classes.MenuItem}>
                    <i class="far fa-file-chart-line"></i>
                    <p className={classes.MenuText}>Reports <i class="fas fa-angle-down"></i></p>
                </div>
                <div className={classes.MenuItem}>
                    <i className="fas fa-shopping-cart"></i>
                    <p className={classes.MenuText}>Products</p>
                </div>
                <div className={classes.MenuItem}>
                    <i className="far fa-user"></i>
                    <p className={classes.MenuText}>Accounts</p>
                </div>
                <div className={classes.MenuItem}>
                    <i className="fas fa-cog"></i>
                    <p className={classes.MenuText}>Settings</p>
                </div>
            </div>
            <div className={classes.MenuItem}>
                <p className={classes.MenuText}>Admin, <strong>Login</strong>
                </p>
            </div>
        </div>
    )
}
export default Topbar;