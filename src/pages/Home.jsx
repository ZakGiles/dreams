import { Welcome } from "../components/Welcome"
import { AboutDreams } from "../components/AboutDreams";
import { MyDreams } from "../components/MyDreams";
import { AboutMe } from "../components/AboutMe";

export const Home = () => {
    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
                <Welcome/>
                <main>
                    <AboutDreams/>
                    <MyDreams/>
                    <AboutMe/>
                </main>

            </div>

        </>
    );
}