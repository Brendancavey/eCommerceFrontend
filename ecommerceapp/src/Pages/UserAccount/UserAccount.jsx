import React from 'react';
import './UserAccount.scss'
import LogoutLink from "../../Components/LogoutLink/LogoutLink"
import AuthorizeView, { AuthorizedUser } from "../../Components/AuthorizeView/AuthorizeView"
import { Link } from "react-router-dom";

function UserAccount() {
    return (
        <div className="useraccount">
            <h2>User Account Page</h2>
            <AuthorizeView >
                <span>
                    <h3>Email: <AuthorizedUser value="email" /></h3>
                </span>
                <div className="item"><Link className="link" to="/admin">Add Product</Link></div>
                <div className="item"><Link className="link" to="/addcategory">Add Category</Link></div>
            </AuthorizeView>
        </div>
  );
}

export default UserAccount;