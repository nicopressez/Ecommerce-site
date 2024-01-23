import aboutImg from "../assets/images/about.jpg";

const About = () => {
    return (
        <div className="bg-black min-h-screen">
            <img src={aboutImg} className="absolute z-0 w-full top-[-60%] h-[120%] object-cover"></img>
            <div className="bg-gradient-to-t from-black pt-[30%] font-futura
      drop-shadow-2xl text-white" >
        <h1 className=" w-screen absolute top-52 text-center tracking-[16px] text-5xl">ABOUT US</h1>
        <p className="absolute top-72 text-center ml-[30rem] mr-[30rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi soluta voluptatibus dicta eveniet aperiam itaque veniam a necessitatibus vero repellendus magnam quia odit neque, aliquam nemo sunt cupiditate officiis.</p>
        </div>
        </div>
    )
}

export default About