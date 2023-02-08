import Navbar from "./navbar";


const Services = () => {
    return(
        <>
            <Navbar />

            <main className="h-screen bg-teal-100 grid grid-cols-12 p-24 gap-12">
                <div className="col-span-6 border-2 bg-teal text-dark border-snow rounded-lg p-8 relative group">

                    <div className="rounded-full w-fit p-8 bg-snow border-snow absolute -top-14 -left-4 group-hover:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-dark">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                        </svg>
                    </div>

                    <span class="absolute inset-x-0 bottom-0 h-[2px] transition-all group-hover:h-full bg-dark rounded-lg"></span>
                    
                    <h1 className="font-bold text-dark text-2xl mt-8 mb-4 group-hover:text-snow relative">Web development</h1>

                    <p className="text-dark text-xl group-hover:text-snow relative">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, architecto? Facilis, distinctio nesciunt! Pariatur ex, qui ipsa voluptatum quidem corporis.</p>

                    <div className="text-right mt-4">
                        <button className="rounded-lg bg-dark text-snow p-2 font-bold group-hover:text-dark group-hover:bg-teal relative">My projects</button>
                    </div>

                </div>

                <div className="col-span-6 border-2 bg-teal text-dark border-snow rounded-lg p-8 relative group">

                    <div className="rounded-full w-fit p-8 bg-snow border-snow absolute -top-14 -left-4 group-hover:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 text-dark">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>

                    </div>
                    
                    <span class="absolute inset-x-0 bottom-0 h-[2px] transition-all group-hover:h-full bg-dark rounded-lg"></span>
                    
                    
                    <h1 className="font-bold text-dark text-2xl mt-8 mb-4 relative group-hover:text-snow">Technical writing</h1>

                    <p className="text-dark text-xl relative group-hover:text-snow">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, architecto? Facilis, distinctio nesciunt! Pariatur ex, qui ipsa voluptatum quidem corporis.</p>

                    <div className="text-right mt-4">
                        <button className="rounded-lg bg-dark text-snow p-2 font-bold relative group-hover:bg-teal group-hover:text-dark">My articles</button>
                    </div>

                </div>         
                

            </main>
        </>
    )
}

export default Services;