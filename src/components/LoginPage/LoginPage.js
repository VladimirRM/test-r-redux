import './style.css'
import { useSelector ,useDispatch} from 'react-redux'


 const  LoginPage =()=>{
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handlerLogin = ()=>{

    }
    const handlerPassword = ()=>{

    }
    return (
        <form>
            <input type="text"  className="form__input"/>
            <input type="text"  className="form__input"/>
            <button to='/'className="form__link">
                Войти
            </button>
        </form>
    )
}

export default LoginPage