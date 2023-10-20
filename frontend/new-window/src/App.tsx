import { useState } from 'react';

import './App.css';
import { useToast } from './radix/components/ui/use-toast';
import Button from './components/button';
type ParamsType = {
    params: string;
};
function App() {
    const [count, setCount] = useState(0);
    const { toast } = useToast();
    return (
        <div>
            <div className='  font-epilogue flex justify-between p-3 px-5'>
                <h4 className='text-xl'>
                    <span className='font-bold'>New</span>
                    Window
                </h4>
                <a href='#about'>
                    <h4 className='text-xl cursor-pointer'>About</h4>
                </a>
            </div>
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
                <Button></Button>
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
