import hbo from './assets/test2.png';
import dhl from './assets/test3.png';
import hlay from './assets/test4.png';

export const projectData = [
    {
        id: 1,
        name: "HLAY", 
        desc: "HLAY is my personal project for a ceramics shop website which shows the interface for each process from the landing page to the complete purchasing process.",
        skills: [
            "React",
            "NextJS",
            "Tailwind.CSS",
            "THREE",
        ],
        code: "github.com/BK2540/Hlay_project",
        url: "hlay-project.vercel.app/",
        image: hlay,
    },

    {
        id: 2,
        name: "HBO GO", 
        desc: "This website is based on my UX / UI  redesign in order to improve user experience while using hbo go platform.",
        skills: [
            "React",
            "SCSS",
            "IMDB api",
        ],
        code: "github.com/BK2540/hbo_redesign",
        url: "hbo-redesign.netlify.app/",
        image: hbo,
    },

    {
        id: 3,
        name: "DHL", 
        desc: "I replicated the DHL landing page by cloning elements from the official DHL website by using React in order to learn to build a real-world website.",
        skills: [
            "React",
        ],
        code: "github.com/BK2540/DHL_landingPage",
        url: "dhl-cloning.netlify.app/",
        image: dhl,
    },
];