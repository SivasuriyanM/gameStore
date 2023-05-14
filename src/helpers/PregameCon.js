import CSI from '../assets/CS.jpeg'
import FAI from '../assets/FA.jpeg'
import FGI from '../assets/FG.jpeg'
import ATI from '../assets/AT.jpeg'
import HZI from '../assets/HZ.jpeg'
import MHI from '../assets/MH.jpeg'
import RCI from '../assets/RC.jpeg'
import SBI from '../assets/STB.jpeg'
import WNI from '../assets/WN.png'


const FG = "http://localhversiont:3000/FG.exe";
const HZ = "http://localhversiont:3000/HZ.exe";
const MH = "http://localhversiont:3000/MH.exe";
const RC = "http://localhversiont:3000/Robocop2D3.exe";
const AT = "http://localhversiont:3000/Ardentryst.exe";
const WN = "http://localhversiont:3000/Wilkanoid2.exe";
const FA = "http://localhversiont:3000/FLIPSADVENTURE.exe";
const CS = "http://localhversiont:3000/CS.exe";
const SB = "http://localhversiont:3000/StealthBastard.exe";


const downloadFile = (url)=>{
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute('download',filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
}
export const Pregames = [
    {
        name: "Flash Games",
        image: FGI,
        description :'Flash Games is an accumulation of 80 best free recreations including such hits as "Aftermath", "Zoo Keeper", "Pacman", "Alex Trax", "Earth Bike", "Billiards", "Skull Slots", "Bullseye", "Caribbean Poker" and other cards games. 80 in 1 Best Flash is convenient and doesn\'t need being introduced before propelling. If you are a fanatic of retro feature diversions you will admire the set of 80 topical Flash games. 80 in 1 Best Flash Games is a best nerd time executioner. Look through the short reviews of the mversiont prevalent games contained by 80 in 1 Best Flash Games.',
        id: "1",
        category :"Adventure",
        size:"Size : 30.3 MB",
        version : "v 1.0.0 XP/2000/98",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(FG)}}>Download</button>

    },
    {
        name: "Halo Zero",
        image: HZI,
        description :'Game Halo Zero is characterized by shooting the enemies before they can attack and kill you. The game is a 2D scrolling game action that is based on the famous storyline of Halo. Halo Zero will actually bring the player to different paths to reach the battle and to help the master chief, which is the objective of the main player.The first interesting feature of the halo zero is the unlimited weapon. This is important for players because weapons are used to protect and shoot your enemies that wanted to shoot you. This weapon is the power of the player to go on and win the game. By using the weapon, there is chance that you make your objective on the game and to become the best fighters online.',
        id: "2",
        category :"Action",
        size:"Size : 20.7 MB",
        version : "v 1.0.0",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(HZ)}}>Download</button>
    },
    {
        name: "MultiHero",
        image: MHI,
        description :"MultiHero is a street fighter-like game. In MultiHero you can play superheroes like Spiderman, Goku, etc. Controls:W = UP ,S = DOWN ,A = LEFT, D = RIGHT, N = ATTACK, H = SPECIAL, M = JUMP, J = THROW, SPACE = BLOCK",
        id: "3",
        category :"Action",
        size:"Size : 6.6 MB",
        version : "v 1.0.0",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(MH)}}>Download</button>

    },
    {
        name: "Robo Cop",
        image: RCI,
        description: "Are you a fan of Robocop movie? Want to experience the same thrill, excitement and action being a Robocop yourself? Robocop 2D-3 game is here to take you give you an action packed Robocop experience.Robocop is a game completely packed with action and is meant for action lovers. It is quite easy to understand the game for thversione who have already seen the movie and are fans of it. The game is the reproduction of the movie displaying the futuristic design as it has been portrayed in the movie",
        id: "4",
        category :"Action",
        size:"Size : 6 MB",
        version : "OS:	Windows",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(RC)}}>Download</button>
    },
    {
        name: "Ardentryst",
        image: ATI,
        description: 'Ardentryst is an interesting game that Jordan Trudgett wrote in Python and pygame programming languange. It can easily run on Linux, OSX, and Windows. It has RPG features such as abilities, attributes, and an inventory system that raises the complexity of in-game play. You play the levels in sequence as you learn new skills and gather more points through by conquering the enemies.The game, Ardentryst, is an action game that focuses on an imaginary world by the same name. The player follows through a storyline in which he/she is expected to play a major role in upholding peace and order. The game presents two playable characters- Pyralis and Nyx, different forms of weapons, items, monsters, and attractive level scenery and graphics.One of the powerful mages in Ardentryst was overcome by greed for power and eventually became corrupt. Radkelu, the evil mage went after the good mages and turned them to stone. He also called up a horde of creatures that came out from every portal all over the land. These evil creatures roamed the cities and everyone in the village fled. Afterwards, Radkelu went into hiding in a cave on top of a snowy mountain near Snodom. Kiripan\'s rescue is now left in the hands of the brave ones in Sempridge and Entarya.',
        id: "5",
        category :"Adventure",
        size:"Size :26.6 MB",
        version : "OS: Windows",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(AT)}}>Download</button>
    },
    {
        name: "Wilkanoid 2",
        image: WNI,
        description: "Wilkanoid 2 is an incredible remake of these arcade games that comes with the same level of action packed thrilling experience. The main objective of Wilkanoid 2 is to defeat and crush all crystals in each level with the ball. The ball will get destroyed if it can be sent to the bottom of the screen so for preventing this situation you just have to bounce the ball upwards by using your paddle. Another thing that you can do in Wilkinoid 2 is that you can also curve the ball. In this regard firstly you have to regain some speed and then just need to hit the ball with full force while the paddle is in motion. It will bend the ball and make it curve towards the oppversionite direction. The thing is that you can learn all this technique from some experienced players who are expert in sending the ball where ever direction they want.",
        id: "6",
        category :"Puzzle",
        size:"Size :9.8 MB",
        version : " version:Windows",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(WN)}}>Download</button>
    },
    {
        name: "Flips Adventure",
        image: FAI,
        description: 'For players who are looking for an exciting and action-packed futuristic adventure game, Flip\'s Adventure is the best choice that will surely get your brain cells working and your adrenaline rushing through your bloodstream! Yet another fun game has joined the world of adventures and now, every player need to execute precise, exact movement control for them to navigate and explore the treacherous Steampunk futuristic world.Flip\'s Adventure takes us to the challenges that Flip has to face in a world where humans and alien robots collide. As a single player action 2D platformer, you will play the role of Flip that was sent by Humans for the purpversione of getting the Robots sabotaged. The Humans are at odds with these alien creatures and they need to be stopped sooner than later.Boasting of an exciting story that will await you as you start to discover the true identify of Flip, your main job is to serve as Flip\'s guide through a world that is filled with different kinds of dangers. There will be times when you have to operate several things simultaneously and it will need a lot of focus on your part. There will also be different brand new puzzles that you have to complete within the time allotted. The world is also filled with traps and you have to make sure that you do not get caught in one of them. The right strategies and careful thinking will make you survive the adventures. ',
        id: "7",
        category :"Adventure",
        size:"Size : 38.7 MB",
        version : "OS:	Windows",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(FA)}}>Download</button>
    },
    {
        name: "Stealth Bastard",
        image: SBI,
        description: 'Are you in the search for the best nerve-wracking game that you can enjoy in your computer and just get the chance of trying to play something new that will bring in new gaming experiences on your part? Well, the Stealth Bastard is the game for you. For many expert players, they see it as an awesome game where they can feel the thrill of hiding their character from The Man and being able to skulk in shadows and just enjoy the fun and excitement packed in this event.The previous versions of the game gained a bit of problems as players see the game in a slow pace. However, it has new versions now and is now completely improved with the entire unexpected feelings - thrill, action and the nail-biting feeling - that would make you crave to finish the game. Mversiont players want a fast paced game and the Stealth Bastard has improved to be this kind of game that many people desperately want to experience.With the new version of the Stealth Bastard, you get to experience a better, bigger and even shinier game that you would ever want to experience from a fast-paced platformer. As you are only geared up with pair of Stealthing goggles and wits, you will find your way in getting out of the deadly and unique facility that is created to end your gaming life',
        id: "7",
        size:"Size : 19.7 MB",
        category :"Adventure",
        version : "OS:	Windows XP/Vista/7",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(SB)}}>Download</button>
    },
    {
        name: "CS",
        image: CSI,
        description: 'Counter-Strike 2D is a 2D version of popular Counter-Strike game. Cs2d provides single player mode (offline mode) to play against bots, and multiplayer mode to play via LAN or internet.As 2d game, you only see from top to down, letting you see larger area around the soldier you are playing including inside a building around you.The file size is small, but it has more features such as chat, map editor, more scenariversion, new maps, and weapons',
        id: "7",
        category :"Action",
        size:"Size : 20.1 MB",
        version : "OS:Windows",
        link :<button  className = 'btn'onClick ={()=>{downloadFile(CS)}}>Download</button>
    },
];