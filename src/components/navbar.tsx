function Navbar() {
    return (
        <div className='  font-epilogue flex justify-between p-3 px-5'>
            <h4 className='text-xl'>
                <span className='font-bold'>New</span>
                Window
            </h4>
            <a href='#about'>
                <h4 className='text-xl cursor-pointer'>About</h4>
            </a>
        </div>
    );
}

export default Navbar;
