import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from "../../Redux/userReducer";

function LogoutLink(props) {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(logOut());

        fetch("/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: ""

        })
            .then((data) => {
                if (data.ok) {
                    navigate("/login");
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