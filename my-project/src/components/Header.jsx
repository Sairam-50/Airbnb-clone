import logo from "../assets/airbnb-1.png";
export default function Header(){
    return(
        <>
        <header className=" w-550 h-70 flex-shrink-0  fill-fill-custom  ">
        <img className=" w-24 h-7 flex-shrink-0 " src={logo} alt="airbnb logo" />
        </header>
        </>
    )
}