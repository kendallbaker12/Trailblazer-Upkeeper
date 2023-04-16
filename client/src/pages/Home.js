import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-gray-100 mt-4">
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="w-1/2">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">
                            Welcome, Utah Tech Building Maintenance Employees!
                        </h1>
                        <p className="text-lg text-gray-700 mb-8">
                            Here, you can find all the information that pertains to your needs as a building maintenance member!
                        </p>
                        <Link to="/buidlings" className="inline-flex justify-center py-2 px-4 text-white bg-gradient-to-tr mx-10 from-red-500 via-red-600 to-blue-700 focus:ring-1 focus:outline-none focus:ring-red-500 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg hover:shadow-red-800/90 text-sm px-7 py-2.5 text-center mr-2 mb-2 transform hover:scale-110 transition duration-300">
                            Search rooms
                        </Link>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <img className="w-1/2" src="https://brand.utahtech.edu/wp-content/uploads/sites/249/2022/05/Athletic-Trailblazers-Logomark-Web.png" alt="logo" />
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Explore!
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">View The rooms of each building and the paints in said rooms!</h3>
                        <p className="text-gray-700 mb-4">
                            Use this to quickly add a new room to a certain building, or to look up rooms in a building.
                        </p>
                        <Link
                            to="/buildings"
                            className="text-blue-500 hover:text-blue-700 font-bold"
                        >
                            Learn more &rarr;
                        </Link>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Helpful Links</h3>
                        <p className="text-gray-700 mb-4">
                            All the links a Utah Tech building Maintenance member could possibly need!
                        </p>
                        <Link
                            to="/links"
                            className="text-blue-500 hover:text-blue-700 font-bold"
                        >
                            Learn more &rarr;
                        </Link>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Paint Inventory</h3>
                        <p className="text-gray-700 mb-4">
                            Keep track of the paints on campus! Also if needs be add a new paint!
                        </p>
                        <Link
                            to="/paints"
                            className="text-blue-500 hover:text-blue-700 font-bold"
                        >
                            Learn more &rarr;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

