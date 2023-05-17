import { PASSWORD } from '../../constans/constans'
import { LOGIN } from '../../constans/constans'
import { login } from '../../redux/actions/actions'
import './style.css'
import { useSelector ,useDispatch} from 'react-redux'


 const  LoginPage =()=>{
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handlerLogin = (event)=>{
      dispatch(login(LOGIN,event.target.value))
    }
    const handlerPassword = (event)=>{
        dispatch(login(PASSWORD,event.target.value))

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