import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
    return (
        <section className="w-full h-full relative">
            <div className="flexCenter max-container relative w-full">
                <Image
                    src="/Hero.jpg"
                    alt="boat"
                    width={1440}
                    height={580}
                    className="w-full object-cover object-center 2xl:rounded-5xl"
                />
            </div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
                <h2 className="py-4 font-bold text-2xl">
                    Unlock Travel Inteligence
                </h2>
                <form
                    className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90"
                >
                    <div>
                        <input
                            className="bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  "
                            type="text"
                            placeholder="Search"
                        />
                    </div>
                    <div>
                        <button>
                            <AiOutlineSearch
                                size={20}
                                className="icon"
                                style={{ color: "#106c72" }}
                            />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Hero;
