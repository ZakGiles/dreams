import datetimeDifference from "datetime-difference";
import cat from "../assets/cat.jpg";

export const CoolTerminal = () => {
    
    const now = new Date();
    const dawn = new Date('2007-04-15');
    
    const uptime = datetimeDifference(now, dawn);
    
    const fetchInfo = ["Name: Zak",
        `Uptime: ${uptime.years} Years, ${uptime.months} Months and ${uptime.days} Days`,
        "Degree: Software Engineering", 
        "Year: 1st", 
        "MBTI: INTP",
        "OSU pp: 1708",
        "LOL peak rank: Plat I",
        "Valorant peak rank: Diamond I"
    ];

    const fetchColours = [
        "#4d4d4d",
        "#ff6580",
        "#70f893",
        "#ffe6ad",
        "#ff8ba6",
        "#e8c4bb",
        "#ffe8ac",
        "#e6e6e6"
    ];


    return (
        <div className="p-auto rounded-xl bg-[RGB(20,20,23)] h-100 w-200 z-200 text-left p-4 px-6 text-[#e6e6e6] font-[JetBrains_Mono]">
            <p><span className="text-[#ff6580]">❯</span> studentfetch</p>
            <br/>
            <img className="absolute h-64" src={cat}/>
            {fetchInfo.map((info, i) => (
                <p key={i} className="py-1 pl-60">{info}</p>
            ))}
        </div>
    )
}