import { useEffect } from "react";
import welcome_0 from "../assets/welcome-0.png";
import welcome_1 from "../assets/welcome-1.png";
import welcome_2 from "../assets/welcome-2.png";
import welcome_3 from "../assets/welcome-3.png";

export const Welcome = () => {

    useEffect(() => {
        const scroller = document.querySelector(".overflow-y-scroll");
        const welcome0 = document.getElementById("welcome0");
        const welcome1 = document.getElementById("welcome1");
        const welcome2 = document.getElementById("welcome2");

        const scrollPos = () => {
            const pos = scroller.scrollTop;
            welcome0.style.transform = `translateY(${ pos * -0.05 }px)`;
            welcome1.style.transform = `translateY(${ pos * -0.1 }px)`;
            welcome2.style.transform = `translateY(${ pos * -0.2 }px)`;
        };

        scroller.addEventListener("scroll", scrollPos);

        return () => scroller.removeEventListener("scroll", scrollPos);
    }, []);

  return (
    <section id="welcome" className="relative flex flex-col px-4 min-h-screen items-center justify-center snap-start">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6 z-30">
                <h1 className="relative text-4xl md:text-6xl font-bold tracking-widest">
                    <span>Welcome</span>
                </h1>
            </div>  
        </div>
        <div>
            <div
                id="welcome3-rect"
                className="absolute bottom-0 left-0 w-full z-19"
                style={{ height: "8vh", backgroundColor: "#a6afb1", transform: "TranslateY(10px)"}}
            />
            <div id="welcome3" className="welcome-bg absolute bottom-0 left-0 z-40 blur-md">
                <img className="object-cover" src={welcome_3}/>
             </div>
             <div id="welcome2" className="welcome-bg fixed bottom-0 left-0 z-2" style={{ transform: "translateY(0px)" }}>
                <img className="object-cover" src={welcome_2}/>
            </div>
            <div id="welcome1" className="welcome-bg fixed bottom-0 left-0 z-1" style={{ transform: "translateY(0px)" }}>
                <img className="object-cover" src={welcome_1}/>
            </div>
            <div id="welcome0" className="welcome-bg fixed bottom-0 left-0 z-0" style={{ transform: "translateY(0px)" }}>
                <img className="object-cover" src={welcome_0}/>
            </div>
        </div>
    </section>
  )
}