import {useStateContext} from "../contexts/ContextProvider";
import {BsCurrencyDollar} from "react-icons/bs";

import Button from '../components/Button'


const Home = () => {
    const { currentColor, currentMode } = useStateContext();
    console.log('Home')
    return (
        <div className="mt-4">
            <div className="flex flex-wrap lg:flex-nowrap justify-between ">
                <div>
                <h2>HOME</h2>
                <h5>Welcome</h5>
                </div>
                    <div>
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                        />
                    </div>
            </div>

            <div className="grid grid-cols-[repeat(12,1fr)] auto-rows-auto gap-2">
                {/* ROW 1 */}
                <div className="col-start-1 col-end-4 flex">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-gray-400">Earnings</p>
                                <p className="text-2xl">$63,448.78</p>
                            </div>
                            <button
                                type="button"
                                style={{ backgroundColor: currentColor }}
                                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
                            >
                                <BsCurrencyDollar />
                            </button>
                        </div>
                        <div className="mt-6">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Download"
                                borderRadius="10px"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-start-4 col-span-3">
                    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="font-bold text-gray-400">Earnings</p>
                                <p className="text-2xl">$63,448.78</p>
                            </div>
                            <button
                                type="button"
                                style={{ backgroundColor: currentColor }}
                                className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
                            >
                                <BsCurrencyDollar />
                            </button>
                        </div>
                        <div className="mt-6">
                            <Button
                                color="white"
                                bgColor={currentColor}
                                text="Download"
                                borderRadius="10px"
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
