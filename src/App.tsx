import { useState } from 'react';

import './App.css';
import { useToast } from './radix/components/ui/use-toast';
// import Button from './components/button';
import Navbar from './components/navbar';
import { Button } from './radix/components/ui/button';

type ParamsType = {
    params: string;
};
function App() {
    const [count, setCount] = useState(0);
    const { toast } = useToast();
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col gap-10 items-center font-epilogue h-screen px-6'>
                <h1 className='text-5xl font-bold mt-10 sm:text-6xl xl:text-7xl'>
                    Shared Page
                </h1>
                <h2 className='text-2xl sm:text-3xl md:text-4xl'>
                    For passing your{' '}
                </h2>
                <h3 className='text-xl sm:text-2xl md:text-2xl font-bold'>
                    notes and other content in text format.
                </h3>
                <a href='/notes'>
                    <Button className='bg-red hover:-translate-y-2 transition-all hover:bg-red'>
                        Get Started
                    </Button>
                </a>
            </div>
            <div
                id='about'
                className='flex flex-col gap-10 font-epilogue h-screen items-start px-10'
            >
                <h1 className='text-5xl font-bold mt-10 sm:text-6xl xl:text-6xl'>
                    About
                </h1>
                <p className='xl:w-1/2 text-left text-xl'>
                    <span className='font-bold'>NewWindow</span> is a shared
                    page website that enables you to pass your{' '}
                    <span className='font-bold'>notes, links,</span> and other
                    type of text from <span className='font-bold'>one</span>{' '}
                    device to <span className='font-bold'>another.</span>
                </p>
            </div>
        </div>
    );
}

export default App;
