import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className='fixed top-0 left-0 right-0 z-50 text-white md:px-10 bg-transparent backdrop-blur-md'>
                <div className='container mx-auto px-4 py-8 flex justify-between items-center'>
                    <div className='flex items-center space-x-4'>
                        <Icon icon="fluent-mdl2:world" className='text-main-dark' width={50} height={50} />
                        <h1 className='text-2xl font-bold'>I World</h1>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <Link to="/" className='bg-main-dark px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-main-light transition-colors'>
                            <Icon icon="mdi:home" className='text-main' width={24} height={24} />
                            <span className='hidden md:block'>Countries</span>
                        </Link>
                        <Link to="/about" className='bg-secondary-dark px-4 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-secondary-light transition-colors'>
                            <Icon icon="mdi:about-circle-outline" className='text-main' width={24} height={24} />
                            <span className='hidden md:block'>About</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar