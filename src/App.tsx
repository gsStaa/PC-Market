import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Pages/HomePage";
import { AccountPage } from "./components/Pages/AccountPage/AccountPage";
import { ProductsPage } from "./components/Pages/ProductsPage/ProductsPage";
import { Layout } from "./components/Modules/LayoutApp/Layout";
import { Computers } from "./components/Pages/ProductsPage/Computers/Computers";
import { AccountUser } from "./components/Pages/AccountPage/AccountUser/AccountUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, removeUser } from "./App/features/user/userSlice";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });
  }, [dispatch]);
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="ProductsPage" element={<ProductsPage />} />
          <Route path="ProductsPage/Computers" element={<Computers />} />
          <Route path="AccountPage" element={<AccountPage />} />
          <Route path="AccountPage/AccountUser" element={<AccountUser />} />
        </Route>
      </Routes>
    </div>
  );
}
