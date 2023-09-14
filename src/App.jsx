import "./App.css";
import ContentBox from "./components/ContentBox";
import Navbar from "./components/Navbar";
import Tags from "./components/Tags";
import Welcome from "./assets/Welcome.svg";
import MobileData from "./assets/mobile-data.png";
import UserGrowth from "./assets/increase.png";
import Tasks from "./assets/requirements.png";
import User from "./assets/employee.png";
function App() {
    return (
        <section className=" bg-gradient-to-t from-orange-200 to-white">
            <Navbar />
            <section className="h-full w-full main_container p-20 gap-8">
                <div className="h-ful w-full grid grid-rows-3 gap-6">
                    <ContentBox>
                        <Tags
                            iconClass={"fal fa-game-board-alt"}
                            TagName={"Dashboard"}
                        />
                        <Tags
                            iconClass={"fal fa-bars"}
                            TagName={"Sidebar Type"}
                        />
                        <Tags iconClass={"fal fa-th"} TagName={"Page Layout"} />
                    </ContentBox>
                    <ContentBox>
                        <Tags
                            iconClass={"fal fa-layer-group"}
                            TagName={"Products"}
                        />
                    </ContentBox>
                    <ContentBox>
                        <Tags
                            iconClass={"fal fa-layer-group"}
                            TagName={"Option 3"}
                        />
                    </ContentBox>
                </div>
                <div className="h-full w-full grid grid-rows-2 gap-6">
                    <div className="bg-blue-200 rounded-xl h-full w-full relative flex flex-col justify-between p-6">
                        <img
                            src={Welcome}
                            alt="greeting"
                            className="h-72 w-72 object-cover absolute top-6 right-0"
                        />
                        <div>
                            <h1 className="text-4xl text-red-600 font-medium">
                                Welcome
                            </h1>
                            <p className="text-4xl text-gray-900 font-semibold capitalize">
                                Divya Mhatre
                            </p>
                        </div>
                        <div>
                            <button className="py-3 px-6 rounded-3xl bg-slate-50">
                                Mumbai, India
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <ContentBox>
                            <h1 className="text-lg font-medium text-gray-800">
                                Quiz Variation
                            </h1>
                            <img
                                src={MobileData}
                                alt="mobile data"
                                className="h-48 object-contain"
                            />
                        </ContentBox>
                        <ContentBox>
                            <h1 className="text-lg font-medium text-gray-800">
                                User Growth
                            </h1>
                            <img
                                src={UserGrowth}
                                alt="user growth"
                                className="h-48 object-contain"
                            />
                        </ContentBox>
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-6">
                    <div className="bg-sky-100 rounded-xl border-2 border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Task
                            </h1>
                            <img
                                src={Tasks}
                                alt="tasks"
                                className="h-14 object-contain"
                            />
                        </div>
                        <div className="flex items-center justify-center flex-col mt-4">
                            <div className="flex items-center gap-2">
                                <i className="fal fa-clipboard-check"></i>
                                <p>This line should contain 10</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fal fa-clipboard-check"></i>
                                <p>Programming</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fal fa-clipboard-check"></i>
                                <p>Programming</p>
                            </div>
                            <button className="bg-orange-500 text-white px-4 rounded-md py-1 mt-4">
                                View More
                            </button>
                        </div>
                    </div>
                    <ContentBox>
                        <div>
                            <h1 className="text-xl font-semibold">
                                Active Users
                            </h1>
                            <h3 className="text-xl text-gray-700">294</h3>
                        </div>
                        <img
                            src={User}
                            alt="user"
                            className="h-20 object-contain absolute bottom-5 right-2"
                        />
                    </ContentBox>
                    <ContentBox>
                        <div>
                            <h1 className="text-xl font-semibold">
                                Total monthly active Users
                            </h1>
                            <h3 className="text-xl text-gray-700">548</h3>
                        </div>
                    </ContentBox>
                </div>
            </section>
        </section>
    );
}

export default App;
