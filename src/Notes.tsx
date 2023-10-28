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
            <div className='flex flex-col gap-10 items-center font-epilogue h-screen px-4 py-5'>
                {isTabletOrMobile && (
                    <div className='w-full flex justify-end sm:px-10'>
                        <Button className='bg-red hover:-translate-y-2 transition-all hover:bg-red px-6 py-0'>
                            Save
                        </Button>
                    </div>
                )}
                <input
                    type='text'
                    className='text-3xl md:text-5xl outline-none border-none border-transparent focus:border-transparent focus:ring-0'
                    placeholder='Title'
                />
                <textarea
                    name=''
                    id=''
                    className='text-xl w-[22rem] md:w-[35rem] xl:w-2/5'
                    placeholder='Type Here'
                ></textarea>
            </div>
        </div>
    );
}

export default Notes;
