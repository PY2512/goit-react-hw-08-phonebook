import { useReducer } from "react";
import { useDispatch } from 'react-redux';
import { register } from "redux/auth/auth-operations";

import style from './RegisterView.module.css';


const initialState = {
    name: '',
    email: '',
    password: '',
}

function reducer (state, action) {
  switch (action.type) {

  case 'name':
    return { ...state, [action.type]: action.payload };

    case 'email':
    return { ...state, [action.type]: action.payload };

    case 'password':
    return { ...state, [action.type]: action.payload };

  default:
    return state;
  }
};


function RegisterView() {
    const [state, setState] = useReducer(reducer, initialState);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(register(state));
    };

    return (
        <div className={style.box}>
            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                Name
                <input
                    autoFocus
                    className={style.input}
                    type="text"
                    name="name"
                    value={state.name}
                    title="Please check the correctness of the entered data."
                    placeholder="name"
                    onChange={event =>
                    setState({ type: event.target.name, payload: event.target.value })
                    }
                    required
                />
                </label>

                <label>
                    Email
                    <input
                        className={style.input}
                        type="text"
                        name="email"
                        value={state.email}
                        pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
                        title="Please check the entered data is correct."
                        placeholder="email"
                        onChange={event => setState({ type: event.target.name, payload: event.target.value })
                        }
                        required
                        />
                </label>

                <label>
                    Password
                    <input
                        autoComplete="off"
                        className={style.input}
                        type="password"
                        name="password"
                        value={state.password}
                        placeholder="password"
                        onChange={event => setState({ type: event.target.name, payload: event.target.value })
                        }
                />
                </label>

            <button type="submit" className={style.btn}>
                Register
            </button>
        </form>
    </div>
    )
}

export default RegisterView;