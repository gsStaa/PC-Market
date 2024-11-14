import { Outlet } from 'react-router-dom';
import { Header } from '../../Header/Header';
import { Footer } from '../../Footer/Footer';
import { FC } from 'react';


export const Layout: FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer bing={''} items={''} />
        </>
    )
}