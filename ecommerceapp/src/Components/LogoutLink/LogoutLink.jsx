import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from "../../Redux/userReducer";
import getAuthorization from "../../UtilityFunctions/getAuthorization";
import removeAuthorization from "../../UtilityFunctions/removeAuthorization";

function LogoutLink(props) {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logOut());
        const authToken = getAuthorization()

        fetch("/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + authToken
            },
            credentials: 'include',
            
            body: ""

        })
            .then((data) => {
                if (data.ok) {
                    removeAuthorization()
                    window.location.href = '/'; //refresh page to update constants
                }
            })
            .catch((error) => {
                console.error(error);
            })
    };

    return (
        <>
            <a href="#" onClick={handleSubmit}>{isLoggedIn && props.children}</a>
        </>
    );
}
LogoutLink.propTypes = {
    children: PropTypes.node, //validate children prop
};


export default LogoutLink;