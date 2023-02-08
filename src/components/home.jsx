import logo from '/src/assets/njongemy.png';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return(
        <>
            <main className='px-8 bg-teal-100 h-screen'>
                <nav>
                    <img src={logo} alt="Emy logo with unicorn and sunny cloud at both ends" className='w-32 h-32'/>
                </nav>

                <section className='grid grid-cols-12 gap-8'>
                    <div className='col-span-6 bg-dark py-8 px-6 h-44 rounded-sm'>
                        <h1 className='text-snow text-5xl'>Hi there! I'm Emy.</h1>
                        <h2 className='text-snow text-3xl mt-5 flex'>
                            <span className='mr-2'>I am</span>
                            <span className='text-teal'>
                            <Typewriter
                            options={{
                            strings: ['a developer.','a technical writer.','a problem solver.', 'an open source lover!'],
                            autoStart: true,
                            loop: true,
                            }}
                        />
                            </span>
                        </h2>
                    </div>

                    <button className='col-span-3 bg-teal rounded-sm shadow-xl group flex justify-center items-center relative'>
                        <span class="absolute inset-x-0 bottom-0 h-[2px] transition-all group-hover:h-full bg-dark"></span>
                        <span className='font-bold text-dark text-2xl relative group-hover:text-snow'>About me</span>
                    </button>
                    

                    <button className='col-span-3 bg-teal rounded-sm row-span-6 flex justify-center items-center mt-4 shadow-xl group relative'>
                        <span class="absolute inset-y-0 left-0 w-[2px] transition-all group-hover:w-full bg-dark"></span>
                        <span className='font-bold text-dark text-2xl group-hover:text-snow relative'>Blog</span>
                    </button>

                    <button className='col-span-3 bg-teal rounded-sm shadow-xl group flex justify-center items-center relative row-span-6'>
                        <span class="absolute inset-x-0 top-0 h-[2px] transition-all group-hover:h-full bg-dark"></span>
                        <span className='font-bold text-dark text-2xl relative group-hover:text-snow'>Services</span>
                    </button>

                    <button className='col-span-3 bg-teal rounded-sm shadow-xl group flex justify-center items-center relative row-span-6'>
                        <span class="absolute inset-x-0 top-0 h-[2px] transition-all group-hover:h-full bg-dark"></span>
                        <span className='font-bold text-dark text-2xl relative group-hover:text-snow'>Projects</span>
                    </button>

                    <button className='col-span-3 bg-teal rounded-sm shadow-xl group flex justify-center items-center relative row-span-6'>
                        <span class="absolute inset-x-0 top-0 h-[2px] transition-all group-hover:h-full bg-dark"></span>
                        <span className='font-bold text-dark text-2xl relative group-hover:text-snow'>Contact me</span>
                    </button>

                    

                </section>
            </main>
        </>
    )

}

export default Home;
