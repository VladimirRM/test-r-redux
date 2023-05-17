import {Link} from "react-router-dom"


export const  LoginPage =()=>{
    return (
        <form>
            <input type="text"  className="form__input"/>
            <input type="text"  className="form__input"/>
            <Link className="form__link">
                Войти
            </Link>
        </form>
    )
}