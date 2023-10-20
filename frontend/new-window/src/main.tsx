import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Toaster } from './radix/components/ui/toaster.tsx';
import { Route } from 'wouter';
import Notes from './Notes.tsx';

const Router = () => (
    <div>
        {/* <Link href='/users/1'>
            <a className='link'>Profile</a>
        </Link> */}
        {/* <Route path='/:link'>
            {(params) => <App params={params.link}></App>}
        </Route> */}
        {/* <Route path='redirect/:link'>
            {(params) => <RedirectPage params={params.link}></RedirectPage>}
        </Route> */}
        <Route path='/'>
            <App></App>
        </Route>
        <Route path='/notes'>
            <Notes></Notes>
        </Route>
    </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router></Router>
        {/* <App /> */}
        <Toaster />
    </React.StrictMode>
);
