import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-4 mt-10">
            <div className="container mx-auto text-center">
                <p>&copy; TrailBlazerUpKeeper</p>
                <p>Created using the Mern stack and Tailwind CSS</p>
                <div className="mt-4 flex justify-center">
                    <a href="https://github.com/kendallbaker12" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-300">
                        <AiFillGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/kendall-baker-033210205/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                        <AiFillLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


