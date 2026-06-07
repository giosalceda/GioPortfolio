import Santelmo from "../assets/Santelmo.jpg";
import Santelmo1 from "../assets/Santelmo1.jpg";
import Santelmo2 from "../assets/Santelmo2.jpg";
import Santelmo3 from "../assets/Santelmo3.jpg";
import Santelmo4 from "../assets/Santelmo4.jpg";
import Santelmo5 from "../assets/Santelmo5.jpg";
import Santelmo6 from "../assets/Santelmo6.jpg";
import Santelmo7 from "../assets/Santelmo7.jpg";

import DontTouchMyDuck from "../assets/DontTouchMyDuck.jpg";
import DTMD1 from "../assets/DTMD1.jpg";
import DTMD2 from "../assets/DTMD2.jpg";
import DTMD3 from "../assets/DTMD3.jpg";

import Ratatata from "../assets/Ratatata.jpg";
import Ratatata1 from "../assets/Ratatata1.jpg";
import Ratatata2 from "../assets/Ratatata2.jpg";
import Ratatata3 from "../assets/Ratatata3.jpg";
import Ratatata4 from "../assets/Ratatata4.jpg";
import Ratatata5 from "../assets/Ratatata5.jpg";
import Ratatata6 from "../assets/Ratatata6.jpg";
import Ratatata7 from "../assets/Ratatata7.jpg";

import Keeno from "../assets/Keeno.jpg";
import Keeno1 from "../assets/Keeno1.jpg";
import Keeno2 from "../assets/Keeno2.jpg";
import Keeno3 from "../assets/Keeno3.jpg";

import Giko from "../assets/Giko.jpg";
import Giko1 from "../assets/Giko1.jpg";
import Giko2 from "../assets/Giko2.jpg";
import Giko3 from "../assets/Giko3.jpg";

import BulletBoi from "../assets/BulletBoi.jpg";
import BulletBoi1 from "../assets/BulletBoi1.jpg";
import BulletBoi2 from "../assets/BulletBoi2.jpg";
import BulletBoi3 from "../assets/BulletBoi3.jpg";

import GladiatorSiege from "../assets/GladiatorSiege.jpg";
import GladiatorSiege1 from "../assets/GladiatorSiege1.jpg";
import GladiatorSiege2 from "../assets/GladiatorSiege2.jpg";
import GladiatorSiege3 from "../assets/GladiatorSiege3.jpg";

import Mangpapato from "../assets/Mangpapato.jpg";
import Mangpapato1 from "../assets/Mangpapato1.jpg";
import Mangpapato2 from "../assets/Mangpapato2.jpg";
import Mangpapato3 from "../assets/Mangpapato3.jpg";
import Mangpapato4 from "../assets/Mangpapato4.jpg";
import Mangpapato5 from "../assets/Mangpapato5.jpg";
import Mangpapato6 from "../assets/Mangpapato6.jpg";
import Mangpapato7 from "../assets/Mangpapato7.jpg";
import Mangpapato8 from "../assets/Mangpapato8.jpg";

import Pogs from "../assets/Pogs.jpg";
import PogsMain1 from "../assets/PogsMain1.jpg";
import PogsMain2 from "../assets/PogsMain2.jpg";

export const games = [
    {
    title: "Pogs (2026)",
    image: Pogs,
    details: `A fast-paced casual mobile game where players slam their way through levels, beat high score, and collect pogs along the journey.`,
    people: "3",
    time: "2 Months",
    slug: "pogs",
    slides: [
      { type: "youtube", url: "https://youtu.be/VNES0LzERuk" },
      { type: "image", src: PogsMain1 },
      { type: "image", src: PogsMain2 },
    ],
    role: "Project Lead | VFX Artist | Gameplay Programmer",
    description: `A fast-paced casual mobile game where players slam their way through progressively challenging levels,
      overcome obstacles, and chase high scores while collecting pogs along the journey, 
      all while testing timing, precision, and reaction speed as they push further with each attempt.`,
    contributions: `
      - Architected and developed core gameplay systems, defining the foundational player interaction loop and game flow.
      - Designed and implemented a robust game state management system.
      - Optimized mobile performance through object pooling strategies and rigidbody lifecycle management, significantly improving stability.
      - Engineered an event-driven architecture to decouple systems, improve maintainability, and enable scalable feature development.
      - Implemented pog collection, purchasing systems, and inventory management.
      - Developed a persistent save system using JSON serialization for reliable cross-session data storage.
      - Designed and implemented a fully responsive UI system adaptable to multiple device resolutions and aspect ratios.
      `,
  },

  {
    title: "Santelmo (2025)",
    image: Santelmo,
    details: `An action-adventure game created for the Bicol Myth Game Jam, 
      celebrating Bicolano culture and folklore. A finalist in the competition.`,
    people: "7",
    time: "2 Weeks",
    slug: "santelmo",
    slides: [
      { type: "youtube", url: "https://youtu.be/34g3vOz0oa8" },
      { type: "image", src: Santelmo1 },
      { type: "image", src: Santelmo2 },
      { type: "image", src: Santelmo3 },
      { type: "image", src: Santelmo4 },
      { type: "image", src: Santelmo5 },
      { type: "image", src: Santelmo6 },
      { type: "image", src: Santelmo7 },
    ],
    role: "Project Lead | VFX Artist | Gameplay Programmer",
    description: `An action-adventure game inspired by Bicolano culture and folklore, 
          where players take on the role of Santelmo, a glowing fire spirit that guides 
          and protects lost souls through a mystical forest. The game blends exploration, combat, 
          and environmental challenges, featuring mythological creatures drawn from local legends. 
          Through its atmosphere, mechanics, and visual style, the game aims to introduce players 
          to the rich stories and myths of the Bicol region.`,
    contributions: `
            - Designed and implemented core gameplay mechanics using Unity and C# including player movement, attacks, skills, health and NPC behavior.
            - Developed the game environment system, including level progression and unlockable areas.
            - Created and implemented in-game cutscenes to enhance storytelling.
            - Designed and built game environments, including layout and interactive elements.
            - Implemented environment visual effects (VFX) to enrich the game’s atmosphere.
          `,
  },

  {
    title: "Dont Touch My Duck (2025)",
    image: DontTouchMyDuck,
    details: `A tower defense–farming hybrid that promotes agricultural awareness.
      National finalist at the Globe Go Gaming Game Dev Competition.`,
    people: "5",
    time: "1 Month",
    slug: "dont-touch-my-duck",
    slides: [
      { type: "youtube", url: "https://youtu.be/5i9Lwmwk-M8" },
      { type: "image", src: DTMD1 },
      { type: "image", src: DTMD2 },
      { type: "image", src: DTMD3 },
    ],
    role: "Gameplay Programmer | Animator | VFX Artist",
    description: `A tower defense–farming hybrid where players manage crops to fuel their defenses
           against incoming threats. The game blends strategic placement, resource management, 
           and real-time combat, encouraging players to balance farming efficiency with defensive planning. 
           Through its mechanics and theme, the game highlights the importance of agriculture and sustainable 
           resource use.`,
    contributions: `
            - Implemented core gameplay mechanics, including player movement and interactions.
            - Developed duck systems, including combat, health, unique behaviors, animations, and attack VFX.
            - Created crop systems with unique behaviors, growth cycles, and interactive mechanics.
            - Added visual feedback for all interactions, including buying, selling, harvesting, and watering plants.
            - Built inventory and item systems, supporting shared interactions with unique behaviors per item.
            - Implemented shop functionality and system for player transactions.
            - Developed the grid placement system for strategic unit deployment.
            - Animated core player movements for smooth and responsive controls.
          `,
  },

  {
    title: "Ratatata (2024)",
    image: Ratatata,
    details: `A souls-like platformer where players control a rat wizard, 
      mastering precise movement and combat to survive encounters with dangerous creatures.`,
    people: "1",
    time: "1 Month",
    slug: "ratatata",
    slides: [
      { type: "youtube", url: "https://youtu.be/nuwLPjQ3DZg" },
      { type: "image", src: Ratatata1 },
      { type: "image", src: Ratatata2 },
      { type: "image", src: Ratatata3 },
      { type: "image", src: Ratatata4 },
      { type: "image", src: Ratatata5 },
      { type: "image", src: Ratatata6 },
      { type: "image", src: Ratatata7 },

    ],
    role: "Solo Dev | 2D Artist | Gameplay Programmer | VFX Artist",
    description: `A souls-like platformer where players take on the role of a rat wizard, 
          mastering precise movement, timing, and spell-based combat to survive challenging 
          encounters with dangerous creatures. The game emphasizes skill-based gameplay, 
          deliberate pacing, and learning enemy patterns in a dark and unforgiving world.`,
    contributions: `
          - Implemented complete gameplay mechanics, including player movement, attacks, skills, and health systems.
          - Developed enemy AI, including standard enemies and a boss with phased attacks and unique behaviors.
          - Designed and implemented game feedback systems, such as camera shake, knockback, and visual feedback using particle effects.
          - Created and integrated all art assets and animations, giving the game its visual identity.
          - Implemented environment visual effects (VFX) to enhance atmosphere and gameplay.
          - Designed and built UI/UX, ensuring intuitive player interaction.
          - Designed overall visual design, maintaining a cohesive aesthetic throughout the game.
          `,
  },

  {
    title: "Keeno (2024)",
    image: Keeno,
    details: `A 3D casual stealth game where a rat sneaks in to grab one piece of cheese while the chef is busy, 
        quickly hiding when the chef turns around to avoid a deadly shotgun blast.`,
    people: "1",
    time: "1 Week",
    slug: "keeno",
    slides: [
      { type: "youtube", url: "https://youtu.be/AAN6MpDasGQ" },
      { type: "image", src: Keeno1 },
      { type: "image", src: Keeno2 },
      { type: "image", src: Keeno3 },
      { type: "image", src: Keeno },
    ],
    role: "Solo Dev | Gameplay Programmer | Game Visual Artist",
    description: `A 3D casual stealth game where players control a rat sneaking in to steal 
          a single piece of cheese while the chef is distracted. 
          Timing and awareness are key, as the rat must hide the moment the 
          chef turns around face a deadly shotgun blast.`,
    contributions: `
          - Solo developer responsible for all aspects of the game.
          - Modeled and animated 3D assets for both the player and enemy chef using Blender.
          - Implemented core gameplay systems and mechanics, including player movement, stealth, and enemy interactions.
          - Built detection mechanics using raycasting.
          - Implemented visual feedback, including particle effects, camera shake, and knockback.
          - Developed camera movement to ensure smooth gameplay experience.
          - Designed and built UI/UX, providing intuitive player interaction.
          `,
  },

  {
    title: "Giko (2024)",
    image: Giko,
    details: `A 3D multiplayer cooperative game where two geckos must stay within range of each other while overcoming obstacles, 
        demanding precise coordination to avoid an explosive consequence.`,
    people: "1",
    time: "1 Week",
    slug: "giko",
    slides: [
      { type: "youtube", url: "https://youtu.be/qpelFi4LhQY" },
      { type: "image", src: Giko1 },
      { type: "image", src: Giko2 },
      { type: "image", src: Giko3 },
    ],
    role: "Solo Dev | Gameplay Programmer | Game Visual Artist",
    description: `A 3D multiplayer cooperative game where two geckos embark on an adventure together, 
          requiring constant coordination to stay within range of each other while navigating 
          environmental obstacles. Straying too far apart triggers an explosive consequence, 
          pushing players to communicate, plan movements, and work closely as a team.`,
    contributions: `
          - Solo developer, responsible for designing and implementing all gameplay systems and mechanics.
          - Implemented range detection and game progression systems, including losing conditions and level transitions.
          - Designed levels to provide engaging player challenges.
          - Created UI/UX for smooth player interaction.
          - Note: All 3D assets were sourced from the Unity Asset Store, all gameplay systems and mechanics were developed independently.
          `,
  },

  {
    title: "Mang Papato (2024)",
    image: Mangpapato,
    details: `A chaotic 3D local multiplayer party game where players compete to earn the title of ultimate duck farmer.`,
    people: "5",
    time: "2 Weeks",
    slug: "mang-papato",
    slides: [
      { type: "youtube", url: "https://youtu.be/s2N1Vtwvn0g" },
      { type: "image", src: Mangpapato1 },
      { type: "image", src: Mangpapato2 },
      { type: "image", src: Mangpapato3 },
      { type: "image", src: Mangpapato4 },
      { type: "image", src: Mangpapato5 },
      { type: "image", src: Mangpapato6 },
      { type: "image", src: Mangpapato7 },
      { type: "image", src: Mangpapato8 },

    ],
    role: "Gameplay Programmer",
    description: `A chaotic 3D local multiplayer party game where players compete to earn the title of ultimate duck farmer by raising, 
      collecting, and managing flocks of ducks while sabotaging rivals, 
      overcoming unpredictable farmyard challenges, 
      and completing objectives across a series of fast-paced and humorous competitive events.`,
    contributions: `
          - Implemented core gameplay mechanics, including player movement, picking up and attack.
          - Developed health systems for duck.
          - Created laying egg system.
          - Implemented game feedback to enhance gameplay, including knockback, particle effects and animations.
          `,
  },

  {
    title: "Bullet Boi (2024)",
    image: BulletBoi,
    details: `A fast-paced 2D shooter where players weaponize their own flesh as bullets, 
        teleporting to each shot to aggressively reposition while battling relentless robotic enemies.`,
    people: "2",
    time: "1 Month",
    slug: "bullet-boi",
    slides: [
      { type: "youtube", url: "https://youtu.be/EeRKCVPQ_vo" },
      { type: "image", src: BulletBoi1 },
      { type: "image", src: BulletBoi2 },
      { type: "image", src: BulletBoi3 },
      { type: "image", src: BulletBoi },

    ],
    role: "Gameplay Programmer",
    description: `A fast-paced 2D shooter built around a unique teleportation mechanic, 
          where players weaponize their own flesh as bullets and instantly warp to each shot. 
          The game emphasizes aggressive repositioning, quick decision-making, and fluid combat 
          while battling relentless robotic enemies.`,
    contributions: `
          - Implemented core gameplay mechanics, including player shooting and teleportation.
          - Developed health systems for both player and enemies.
          - Built game systems for winning, losing, and progression.
          - Implemented visual feedback to enhance gameplay, including particle effects and animations.
          - Designed and built UI/UX, ensuring smooth and intuitive player interaction.
          `,
  },

  {
    title: "Gladiator Siege (2023)",
    image: GladiatorSiege,
    details: `A multiplayer casual game where players battle against each other 
        while defending their own base from opposing forces in fast-paced combat.`,
    people: "1",
    time: "1 Week",
    slug: "gladiator-siege",
    slides: [
      { type: "youtube", url: "https://youtu.be/NxoUoae7biE" },
      { type: "image", src: GladiatorSiege },
      { type: "image", src: GladiatorSiege1 },
      { type: "image", src: GladiatorSiege2 },
      { type: "image", src: GladiatorSiege3 },
    ],
    role: "Solo Dev | Gameplay Programmer",
    description: `A multiplayer casual PvP game where players compete against one another, 
          defending their own base while launching attacks on opposing forces. 
          The game emphasizes fast-paced combat, quick decision-making, 
          and strategic offense and defense.`,
    contributions: `
            - Implemented complete gameplay mechanics and systems, including player and orc interactions.
            - Developed game progression, including winning and losing conditions and scene transitions after each round.
            - Implemented multiplayer inputs and actions for competitive gameplay.
            - Built health systems for players and orc units.
            - Designed and developed UI/UX for smooth player interaction.
            - Note: All 2D assets were sourced online; all gameplay systems and mechanics were independently developed.
            `,
  },
];
