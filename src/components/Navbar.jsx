import Sun from "../assets/sun.png";
const Navbar = () => {
    return (
        <div className="h-20 w-full shadow-md flex items-center px-10">
            <img src={Sun} alt="sun" className="h-14 w-14 object-contain" />
        </div>
    );
};

export default Navbar;
