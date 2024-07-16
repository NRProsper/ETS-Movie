
const PreLoader = () => {
    return (
        <div className="preloader fixed left-0 right-0 w-full h-full z-[999] bg-[black]">
            <div className="preloader-animation absolute top-1/2 left-1/2 text-center bg-inherit opacity-100 transition-all ">
                <div className="preloader-spinner"></div>
            </div>
        </div>
    );
}

export default PreLoader;