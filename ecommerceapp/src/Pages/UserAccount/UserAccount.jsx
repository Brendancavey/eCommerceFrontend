import React from 'react';
import './UserAccount.scss'
import AuthorizeView, { AuthorizedUser, AuthorizedRole } from "../../Components/AuthorizeView/AuthorizeView"
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'


function UserAccount() {
    const userRole = useSelector(state => state.user.role)


    return (
        <div className="useraccount">
            <h2>User Account Page</h2>
            <AuthorizeView >
                <span>
                    <h3>Email: <AuthorizedUser value="email" /></h3>
                </span>
                <span>
                    <h3>Role: <AuthorizedRole value="role" /></h3>
                </span>

                {<div className="item"><Link className="link" to="/addproduct">Add Product Role Test</Link></div>}
                {userRole === 'Admin' && <div className="item"><Link className="link" to="/addcategory">Add Category</Link></div>}
                {userRole === 'Admin' && <div className="item"><Link className="link" to="/products/2">Modify Products Page</Link></div>}
            </AuthorizeView>
        </div>
  );
}

export default UserAccount;