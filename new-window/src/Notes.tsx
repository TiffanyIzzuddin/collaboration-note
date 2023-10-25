import { useState } from 'react';

// import './App.css';
import { useToast } from './radix/components/ui/use-toast';
import { useMediaQuery } from 'react-responsive';
import Button from './components/button';

type ParamsType = {
    params: string;
};
function Notes() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
    const [count, setCount] = useState(0);
    const { toast } = useToast();
    return (
        <div className='flex flex-col gap-10 items-center font-epilogue h-screen '>
            <h1 className='text-5xl font-bold mt-10 sm:text-6xl xl:text-7xl'>
                {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
            </h1>
            <h2 className='text-2xl sm:text-3xl md:text-4xl'>
                For passing your{' '}
            </h2>
            <h3 className='text-xl sm:text-2xl md:text-2xl font-bold'>
                notes and other content in text format.
            </h3>
            <Button></Button>
        </div>
    );
}

export default Notes;
