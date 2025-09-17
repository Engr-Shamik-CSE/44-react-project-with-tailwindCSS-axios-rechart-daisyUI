import Navlink from '../Navlink/Navlink';
const navLinks = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Portfolio",
        path: "/portfolio"
    },
    {
        id: 5,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 6,
        name: "Contact",
        path: "/contact"
    },
    {
        id: 7,
        name: "FAQ",
        path: "/faq"
    }
];

const OurNavbar = () => {
    return (
        <nav className="bg-red-800 text-white font-semibold">
            <ul className="w-11/12 mx-auto flex gap-5 py-6 ">
                {navLinks.map(link => (
                    <Navlink
                    link={link}
                    ></Navlink>
                ))}
            </ul>
        </nav>
    );
};

export default OurNavbar;