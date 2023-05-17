import './style.css'


 const  LoginPage =()=>{
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