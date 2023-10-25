import { useState } from 'react';

// import './App.css';
import { useToast } from './radix/components/ui/use-toast';
import { useMediaQuery } from 'react-responsive';
// import Button from './components/button';
import { Button } from './radix/components/ui/button';
import { Textarea } from '../src/radix/components/ui/textarea';
import { Input } from '../src/radix/components/ui/input';
import Navbar from './components/navbar';

type ParamsType = {
    params: string;
};
function Notes() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)',
    });

    const [count, setCount] = useState(0);
    const { toast } = useToast();
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col gap-10 items-center font-epilogue h-screen px-36'>
                {isTabletOrMobile && (
                    <div className='w-full flex justify-end px-10'>
                        <Button className='bg-red hover:-translate-y-2 transition-all hover:bg-red px-6 py-0'>
                            Save
                        </Button>
                    </div>
                )}
                <input
                    type='text'
                    className='text-5xl outline-none border-none border-transparent focus:border-transparent focus:ring-0'
                />
                {/* <Input className=''></Input> */}
                <h1 className='text-5xl font-bold mt-10 sm:text-6xl xl:text-7xl'></h1>
                <h2 className='text-2xl sm:text-3xl md:text-4xl'>
                    For passing your{' '}
                </h2>
                <h3 className='text-xl sm:text-2xl md:text-2xl font-bold'>
                    notes and other content in text format.
                </h3>
                <Button className='bg-red hover:-translate-y-2 transition-all hover:bg-red'>
                    Get Started
                </Button>
            </div>
        </div>
    );
}

export default Notes;
