import { Link } from "react-router-dom";
import { useAuth } from "../../../../hooks/use-auth";
import { removeUser } from "../../../../App/features/user/userSlice";
import { useAppDispatch } from "../../../../hooks/redux-hooks";

export function AccountUser() {
  const dispatch = useAppDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h3>Добро пожаловать!</h3>
      <p>
        Теперь вы можете совершать покупки в нашем магазине, а так же выйти из
        аккаунта {email}{" "}
      </p>
      <Link to="/">
        <button onClick={() => dispatch(removeUser())}>Выйти</button>
      </Link>
    </div>
  ) : (
    <Link to="AccountPage"></Link>
  );
}
