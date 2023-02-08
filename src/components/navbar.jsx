import logo from '/src/assets/njongemy.png';

const Navbar = () => {
    return(
        
        <nav className='flex justify-between items-center px-8 bg-teal-100'>
            <img src={logo} alt="Emy logo with unicorn and sunny cloud at both ends" className='w-32 h-32'/>

            <div>
                <ul className='flex justify-between text-2xl font-bold text-dark'>
                    <li className='mx-4 hover:underline hover:decoration-teal'><a href="/home">Home</a></li>
                    <li className='mx-4'><a href="/services">Services</a></li>
                    <li className='mx-4'><a href="/projects">Projects</a></li>
                    <li className='mx-4'><a href="/blog">Blog</a></li>
                    <li className='mx-4'><a href="/contact">Contact me</a></li>
                    <li className='mx-4'><a href="/about">About me</a></li>
                </ul>
            </div>
        </nav>
        
    )

}

export default Navbar;