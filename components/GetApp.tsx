import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
    return (
        <section className="flexCenter w-full flex-col">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12  text-white">
                    <h2 className="bold-40  lg:bold-50 xl:max-w-[320px]">
                        Get our iOS & Android App
                    </h2>
                    <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
                        <Button
                            type="button"
                            title="App Store"
                            icon="/apple-black-logo.svg"
                            variant="btn_white"
                            full
                        />
                        <Button
                            type="button"
                            title="Play Store"
                            icon="/android.svg"
                            variant="btn_dark_green_outline"
                            full
                        />
                    </div>
                </div>

                <div className="flex flex-1 items-center justify-end">
                    <Image
                        src="/Phone.png"
                        alt="phones"
                        width={550}
                        height={870}
                    />
                </div>
            </div>
        </section>
    );
};

export default GetApp;
