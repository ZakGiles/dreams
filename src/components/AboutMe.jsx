import { CoolTerminal } from "./CoolTerminal"

export const AboutMe = () => {
    return (
        <section id="about-me" className="relative flex flex-col px-4 min-h-screen items-center justify-center snap-start z-10">
            <div className="max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-widest">
                        <span>Me </span>
                    </h2>
                </div>
                <div className="py-6 m-auto">
                    <CoolTerminal/>
                </div>
            </div>
        </section>
    )
}