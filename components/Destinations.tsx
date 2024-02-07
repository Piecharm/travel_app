import Image from "next/image";

const Destinations = () => {
    return (
        <div className="max-w-full mx-auto py-10 px-4 text-center  bg-[#F7F7F7]">
            <div className="text-gray-800 mb-5 font-bold ">
                <h1 className="text-2xl">Find The Perfect Place To Go</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <Image
                        src="/Spiaggia-della-Maddalena.jpeg"
                        alt="Beach"
                        width={1040}
                        height={580}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                        <h1 className="font-semibold">La Maddalena, Italy</h1>
                    </div>
                </div>
                <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <Image
                        src="/Agatti Beach.jpg"
                        alt="Beach"
                        width={1040}
                        height={580}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                        <h1 className="font-semibold">Agatti Beach, India</h1>
                    </div>
                </div>
                <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <Image
                        src="/Bloody-Bay-Beach.jpg"
                        alt="Beach"
                        width={1040}
                        height={580}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                        <h1 className="font-semibold">
                            Bloody Bay Beach, Jamaica
                        </h1>
                    </div>
                </div>
                <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <Image
                        src="/borabora.jpg"
                        alt="Beach"
                        width={1040}
                        height={580}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                        <h1 className="font-semibold">
                            Borabora, French Polynesia
                        </h1>
                    </div>
                </div>
                <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <Image
                        src="/Ipanema.jpg"
                        alt="Beach"
                        width={1040}
                        height={580}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                        <h1 className="font-semibold">Ipanema Beach, Brazil</h1>
                    </div>
                </div>
                <div className="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                    <Image
                        src="/seven-mile-beach.jpg"
                        alt="Beach"
                        width={1040}
                        height={580}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-15 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                        <h1 className="font-semibold">
                            Seven Mile Beach, Grand Cayman
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;
