import { Link } from "react-router-dom";
import img from '../assets/logo.png'
import Pubg from '../assets/pubg.png'

const FILE_URL = "http://localhost:3000/kb.apk";

const downloadFile = (url)=>{
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute('download',filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}



export const games = [
    {
        name: "PUBG",
        image: Pubg,
        summary : 'PUBG, or PlayerUnknown is Battlegrounds, is an online multiplayer battle royale game developed and published by PUBG Corporation. The game is set on a fictional island where up to 100 players parachute onto the island and scavenge for weapons and equipment to kill others while avoiding being killed themselves. The last player or team standing wins the game. PUBG became hugely popular after its release in 2017 and has since spawned numerous spin-offs and adaptations. The game has been praised for its realistic graphics and intense gameplay, but has also faced criticism for issues such as bugs and glitches, as well as concerns over addiction and violence.',
        // detail: <Link to='/detail'>View More</Link>,
        detail: 'fhdskjdkjsldnclsdcsdc',
        description :'The content in PUBG revolves around a player versus player (PvP) battle royale game mode, where up to 100 players parachute onto a map and fight to be the last player or team standing. Players start with no gear, and must scavenge weapons, ammunition, and equipment to survive and eliminate other players.',
        id: "1",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>

    },
    {
        name: "COC",
        image: img,
        summary : 'COC, or PlayerUnknown is Battlegrounds, is an online multiplayer battle royale game developed and published by PUBG Corporation. The game is set on a fictional island where up to 100 players parachute onto the island and scavenge for weapons and equipment to kill others while avoiding being killed themselves. The last player or team standing wins the game. PUBG became hugely popular after its release in 2017 and has since spawned numerous spin-offs and adaptations. The game has been praised for its realistic graphics and intense gameplay, but has also faced criticism for issues such as bugs and glitches, as well as concerns over addiction and violence.',
        // detail: <Link to='/detail'>View More</Link>,
        detail: 'fhdskjdkjsldnclsdcsdc',
        description :'The content in PUBG revolves around a player versus player (PvP) battle royale game mode, where up to 100 players parachute onto a map and fight to be the last player or team standing. Players start with no gear, and must scavenge weapons, ammunition, and equipment to survive and eliminate other players.',
        // detail: <Link to='/detail'>View More</Link>,
        id: "2",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>
    },
    {
        name: "Aspault",
        image: img,
        
        summary : 'Aspault, or PlayerUnknown is Battlegrounds, is an online multiplayer battle royale game developed and published by PUBG Corporation. The game is set on a fictional island where up to 100 players parachute onto the island and scavenge for weapons and equipment to kill others while avoiding being killed themselves. The last player or team standing wins the game. PUBG became hugely popular after its release in 2017 and has since spawned numerous spin-offs and adaptations. The game has been praised for its realistic graphics and intense gameplay, but has also faced criticism for issues such as bugs and glitches, as well as concerns over addiction and violence.',
        // detail: <Link to='/detail'>View More</Link>,
        detail: 'fhdskjdkjsldnclsdcsdc',
        description :'The content in PUBG revolves around a player versus player (PvP) battle royale game mode, where up to 100 players parachute onto a map and fight to be the last player or team standing. Players start with no gear, and must scavenge weapons, ammunition, and equipment to survive and eliminate other players.',
        id: "3",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>

    },
    {
        name: "game1",
        image: img,
        // detail: <Link to='/detail'>View More</Link>,
        detail: 'fhdskjdkjsldnclsdcsdc',
        id: "4",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>
    },
    {
        name: "game1",
        image: img,
        // detail: <Link to='/detail'>View More</Link>,
        detail: 'fhdskjdkjsldnclsdcsdc',
        id: "5",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>
    },
    {
        name: "game1",
        image: img,
        // detail: <Link to='/detail'>View More</Link>,
        detail: 'fhdskjdkjsldnclsdcsdc',
        id: "6",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>
    },
    {
        name: "game1",
        image: img,
        detail: 'fhdskjdkjsldnclsdcsdc',
        id: "7",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>
    },
    {
        name: "game1",
        image: img,
        detail: 'fhdskjdkjsldnclsdcsdc',
        id: "7",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>
    },
    {
        name: "game1",
        image: img,
        detail: 'fhdskjdkjsldnclsdcsdc',
        id: "7",
        des:{
            descrep:"gmamamhavcbcoa achaocgavcaocsacvbakcoi  dadahsboauvaa gdabaayabah advuadvsakjvavcba oadvacccakcv",
            img: img,
            size:"10 MB",
        },
        link : <button onClick ={()=>{downloadFile(FILE_URL)}}>Download</button>
    },
];