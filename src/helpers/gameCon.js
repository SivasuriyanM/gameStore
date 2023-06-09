// import img from '../assets/logo.png'
import MWI from '../assets/MW.png'
import NBI from '../assets/NB.jpg'
import NFEI from '../assets/NFE.jpg'
import RII from '../assets/RI.jpeg'
import SBI from '../assets/SB.jpeg'
// import SGI from '../assets/SG.jpeg'
import SPRI from '../assets/SPR.jpeg'
import WBI from '../assets/WB.jpeg'
import SF2I from '../assets/g-4.png'
import SGI from '../assets/pubg.png'

const NFE = "http://localhost:3000/NeedForExtreme.exe";
const SF2 = "http://localhost:3000/StreetFighter2.exe";
const SG = "http://localhost:3000/stargunner.exe";
const NB = "http://localhost:3000/nuclear-bike.exe";
const WB = "http://localhost:3000/water_bugs.exe";
const MW = "http://localhost:3000/mahjong_world.exe";
const RI = "http://localhost:3000/racing-impossible.exe";
const SB = "http://localhost:3000/SoundBlaster.exe";
const SPR = "http://localhost:3000/superpoliceracing.exe";


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
        name: "Need For Extreme",
        image: NFEI,
        description :'Need for Extreme 3D 1.0 is a great car racing game with amazing 3D graphics. It s very easy to install, and you can configure general options such as screen view, music and sounds. At the beginning of each race you will have to choose your car, wich will change its specifications depending on the model. At the beginning you can only choose between two cars, and later when you have gained experience and won some races you we ll start gaining access to new cars.',
        id: "1",
        size:"Size : 14.5 MB",
        version : "Version : 1.0(x86)",
        link :<button className = 'btn'onClick ={()=>{downloadFile(NFE)}}>Download</button>

    },
    {
        name: "Street Fighter 2",
        image: SF2I,
        description :'The Street Fighter legacy continues with this expanded version of Street Fighter II. Included are four new characters - Cammy, Dee Jay, Fei-Long, and T.Hawk -with new backgrounds for each. Returning fighters have also been given a make-over (both in in-game art as well as in the character portraits) and have learned new moves for the ongoing tournament.',
        id: "2",
        size:"Size : 3.2 MB",
        version : "Version : 1.0(x86)",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(SF2)}}>Download</button>
    },
    {
        name: "Star Gunner",
        image: SGI,
        description :'This is an action game, you will be a soldier of the future, in that time the earth is fighting for survival and your help is needed, you will command a robotic tank and you must protect your planet from the enemies. You do not need to learn to use any keys and there is no surprises, you have to just use the mouse to shoot and control your tank.',
        id: "3",
        size:"Size : 10.1 MB",
        version : "Version : 1.0(x86)",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(SG)}}>Download</button>

    },
    {
        name: "Nuclear Bike",
        image: NBI,
        description: "The Nuclear Bike it's an amazing Bike stunt game! Complete levels as fast as possible to achieve maximum score points Game Features - Breath taking game play - Amazing physics",
        id: "4",
        size:"Size : 16.7 MB",
        version : "Date update: Dec 3, 2020",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(NB)}}>Download</button>
    },
    {
        name: "Water Bugs",
        image: WBI,
        description: 'Water Bugs is an action game for those who love action games. It is developed by Retro64 Inc. a well known games developer company. This action game is full of fun. Water Bugs come with a surprising 599 levels of challenges. But still the size of the game is less then 10 MB. And its highly graphical, colorful, attractive and animated interface makes it an addictive game. And if you don’t believe then you can see the screenshots of the game. To play the game you do not require learning anything before you start play, n so anybody can play this game very easily. The target of the game on each level is to make water bugs free. ',
        id: "5",
        size:"Size : 8.6 MB",
        version : "Version: 1.1 (x86)",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(WB)}}>Download</button>
    },
    {
        name: "Mahjong World",
        image: MWI,
        description: "Close your eyes and imagine a peaceful and beautiful music along with luminous waterfalls and birds flying around. Probably a nice feeling will invade you and that’s exactly how you will feel when you first enter “Mahjong World” game.The goal of the game is the following: you must clear the board of tiles by matching them off in pairs. However, you can only select tiles which have at least 1 side free, and which have no other tiles on top of them. There are some special tiles to keep in mind. Flower and Season tiles are special, you can match any flower tile with any of the 3 other flower tiles, and the same goes for the seasons.",
        id: "6",
        size:"Size : 7.8 MB",
        version : " Version: 7.3.40 (x86)",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(MW)}}>Download</button>
    },
    {
        name: "Racing Impossible",
        image: RII,
        description: 'Racing Impossible 1.0 is a free 3D car racing game. In this game you will be able to drive different GT class cars, such as Mustangs, Mercedes, Fords and others 7 car brands, in the 17 most famous circuits around the world. The races will take place by day or night. You can pick your favorite track, and race with the team, car or pilot that you choose. You´re even able to choose your opponents. You can choose to run a single race, or compete in a championship that will have several races. You will control your car using the numeric keypad. ',
        id: "7",
        size:"Size : 30.3 MB",
        version : "Version: 1.0.0.1 (x86)",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(RI)}}>Download</button>
    },
    {
        name: "Sound Blaster",
        image: SBI,
        description: 'Takes advantage of the built-in audio drivers and enhances the sound making it crystal clear. Various effects like 3D Surround can be applied to the stream output.The Sound Blaster X-Fi MB solution provides premium audio quality, effects and features for PC systems equipped with only basic onboard audio.For gamers, the EAX® ADVANCED HD 4.0, with its state-of-the-art Multi-Environment rendering and reverb modelling, delivers a much more realistic and immersive 3D gaming experience than your motherboard audio ever will.',
        id: "7",
        size:"Size : 46.7 MB",
        version : "Date update: Jan 27, 2012",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(SB)}}>Download</button>
    },
    {
        name: "Super Police Racing",
        image: SPRI,
        description: '3D racing game. Sun City is the city of future with the best ecology and high tech infrastructure. But the rise of crime rate makes this place dangerous for living. Extremists block roads, car criminals crash the traffic, hackers override automatic city traffic control. Special Supercar Police Unit was organized to blow the whistle on these practices.',
        id: "7",
        size:"Size : 47.5 MB",
        version : "Date update: Apr 5, 2023",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(SPR)}}>Download</button>
    },
];