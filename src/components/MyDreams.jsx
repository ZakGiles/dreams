import { useEffect, useRef } from "react";
import CloudSvg from "../assets/Cloud.svg";

export const MyDreams = () => {
    const containerRef = useRef(null);
    const cloudRefs = useRef([]);
    const animationsRef = useRef([]);

    const dreams = ["Master Full-stack", "Challenger in League", "Travel the World", "I don't know", "Aura Farm", "Jabascrept", "Scroll reels"];

    
    const clouds = dreams.map((dream, i) => (
        <div
            key={i}
            ref={(el) => (cloudRefs.current[i] = el)}
            style={{
                backgroundImage: `url(${CloudSvg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                width: "200px",
                height: "120px",
                fontFamily: "Comic Sans MS",
            }}
        >
            <div className="p-2 text-xl">{dream}</div>
        </div>
    ));

    useEffect(() => {
        
        cloudRefs.current.forEach((el, i) => {

            if (!el) return;

            el.style.willChange = "transform";
            el.className = "z-100 absolute 0 0"
            el.style.transform = `translate(${Math.random()*80}vw, ${Math.random()*70}vh)`;

            const keyframes = [
                { transform: `translate(${Math.random()*80}vw, ${Math.random()*90}vh)`, backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
                { transform: `translate(${Math.random()*80}vw, ${Math.random()*90}vh)`, backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
                { transform: `translate(${Math.random()*80}vw, ${Math.random()*90}vh)`, backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
                { transform: `translate(${Math.random()*80}vw, ${Math.random()*90}vh)`, backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
                { transform: `translate(${Math.random()*80}vw, ${Math.random()*90}vh)`, backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
                { transform: `translate(${Math.random()*80}vw, ${Math.random()*90}vh)`, backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
                { transform: `translate(${Math.random()*80}vw, ${Math.random()*90}vh)`, backgroundColor: `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`},
            ];

            const duration = 4000 + Math.random() * 5000; 
            const delay = 1000 + Math.random() * 2000;

            const anim = el.animate(keyframes, {
                duration,
                delay,
                iterations: Infinity,
                easing: "ease-out",
                direction: "alternate",
                

            });

            animationsRef.current[i] = anim;
        });

        return () => {
            animationsRef.current.forEach((a) => a?.cancel());
            animationsRef.current = [];
        };

    }, []);

    return (
        <section id="my-dreams" className="relative flex flex-col px-4 min-h-screen items-center justify-center snap-start z-10">
            <div ref={containerRef} className="absolute top-0 left-0 w-screen h-screen overflow-hidden">
                {clouds}
            </div>
            <div className="max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-4xl font-bold tracking-widest">
                        <span>My dreams</span>
                    </h2>
                </div>
            </div>
        </section>
    );
}