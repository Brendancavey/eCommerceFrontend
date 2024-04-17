import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from "../../Redux/userReducer";
import getAuthorization from "../../UtilityFunctions/getAuthorization";
import removeAuthorization from "../../UtilityFunctions/removeAuthorization";
import { AuthRequestOptions } from '../../Constants/AuthConstants';
import { resetCart } from "../../Redux/cartReducer";

function LogoutLink(props) {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const cartProducts = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    async function saveCart() {
        const formData = new FormData()
        cartProducts.forEach(product => {
            formData.append(product.id, product.quantity)

        })
        const requestOptions = AuthRequestOptions("PUT", formData)

        const response = await fetch("https://localhost:7072/api/ApplicationUser/updatecart", requestOptions)
        if (response.ok) {
            console.log("Cart saved succesfully")
        }
        else {
            console.log("Cart did not save successfully")
        }
    }
    async function handleSubmit(){ 
        await saveCart();
        const authToken = getAuthorization()
        const response = await fetch("/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + authToken
            },
            credentials: 'include',
            
            body: ""

        })
        if (response.ok) {
            removeAuthorization()
            dispatch(resetCart())
            dispatch(logOut());
            window.location.href = '/'; //refresh page to update constants
        } else {
            console.log("error occured")
        }
            
    }

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