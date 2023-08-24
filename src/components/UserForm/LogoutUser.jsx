import { LogoutIcon } from "helpers/icons"
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/authOperations";
import css from './LogoutUser.module.css'

export const LogoutUser = () => {
    const dispatch = useDispatch();
    return (
      <button className={css.bt}type="button" onClick={() => dispatch(logout())}>
        <LogoutIcon /> Logout
      </button>
    )
}