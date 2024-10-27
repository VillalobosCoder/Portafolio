function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-[600px] mt-6 lg:mt-20" id="aboutme">
            <div className="w-full lg:max-w-4xl">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-[#6e3792] to-[#c89eea] text-transparent bg-clip-text p-2">
                    Alejandro Villalobos
                </h1>
                <p className="flex justify-center my-5 text-gray-500 text-center">
                    Ingeniero en sistemas computacionales especializado en ingenieria de software,
                    con experiencia en desarrollo de aplicaciones web y moviles.
                </p>
            </div>
        </div>
    );
};

export default Home;