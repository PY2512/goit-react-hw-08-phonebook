import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/auth-operations";

import style from './Logiview.module.css';


const initialState = {
    email: '',
    password: '',
};

function reducer(state = initialState, action) {
switch (action.type) {
    case 'email':
        return {...state, email: action.payload};
        
    case 'password':
        return {...state, password: action.payload};

    // case 'reset':
    //     return initialState

    default:
        return state;
    }
}

function LoginView() {
    const [state, setState] = useReducer(reducer, initialState);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(logIn(state));
    }

    return (
        <div children className={style.box}>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Email
                    <input
                        autoFocus
                        className={style.input}
                        type="text"
                        name="email"
                        value={state.email}
                        pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                        title="Please check the entered data is correct."
                        placeholder="email"
                        onChange={event => setState({type: event.target.name, payload: event.target.value})}
                    />
                </label>

                <label>
                Password
                    <input
                    className={style.input}
                    type="password"
                    name="password"
                    value={state.password}
                    placeholder="password"
                    onChange={event => setState({type: event.target.name, payload: event.target.value})}
                    />
                </label>

                <button type="submit" className={style.btn}>Login</button>
            </form>
        </div>
    )
}

export default LoginView;