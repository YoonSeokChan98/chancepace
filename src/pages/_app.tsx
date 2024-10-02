import Footer from '@/features/Footer';
import Header from '@/features/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store, persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Header />
                <Component {...pageProps} />
                <Footer />
                <ToastContainer position="bottom-center" limit={1} closeButton={true} autoClose={1000} pauseOnHover />
            </PersistGate>
        </Provider>
    );
}
