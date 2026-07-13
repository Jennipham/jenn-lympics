import {
    HiOutlineTrophy,
    HiOutlineMapPin,
    HiOutlineClock
} from "react-icons/hi2";

import { FaRunning, FaTrophy, FaClipboardList } from "react-icons/fa";
import { FaVolleyball } from "react-icons/fa6";
import { MdSportsCricket } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";


export const events = [
    {
        number: "01",
        time: "TBC",
        title: "Registration",

        description: 
            "Meet your teams and assign captains. Each player will be given a coloured arm band.",

        location: "Crystal Palace National Sports Centre Entrance",

        colour: "#00b7ff",

        icon: FaClipboardList,

        challengeIcon: HiOutlineTrophy,

        locationIcon: HiOutlineMapPin,

        timeIcon: HiOutlineClock,

        type: "challenge"
    },
    {
        number: "02",
        time: "TBC",
        title: "Relay Race",

        description: 
            "Sports day inspired stations including: Three-legged Race, Potato Sack Race, Egg & Spoon Race and a Sprint Finish.",

        challenge: "Strawberry Lace Race",

        challengeDescription:
            "1 Volunteer from each team will race to finish a strawberry lace without using their hands - Fastest team gets first choice of a racing lane.",

        location: "Athletics Track",

        colour: "#bdeda8",

        icon: FaRunning,

        challengeIcon: HiOutlineTrophy,

        locationIcon: HiOutlineMapPin,

        timeIcon: HiOutlineClock,

        type: "challenge"
    },

        {
        number: "03",
        time: "TBC",
        title: "Volleyball",

        description:
            "Round-Robin style tournament of Volleyball.",

        challenge: "Tug of War",

        challengeDescription:
            "Winning team chooses which side of the court they will play on.",

        location: "Crystal Palace Park",

        colour: "#000000",

        icon: FaVolleyball,

        challengeIcon: HiOutlineTrophy,

        locationIcon: HiOutlineMapPin,

        timeIcon: HiOutlineClock,

        type: "challenge"

    },
    {
        number: "04",
        time: "TBC",
        title: "Lunch",

        description:
            "We will have a picnic where snacks and drinks will be provided.",

        location: "Crystal Palace Park",

        colour: "#ff84c3",

        icon: IoFastFood,

        challengeIcon: HiOutlineTrophy,

        locationIcon: HiOutlineMapPin,

        timeIcon: HiOutlineClock,

         type: "info"
    },

    {
        number: "05",
        time: "TBC",
        title: "Rounders",

        description:
            "Round-Robin style tournament of Rounders.",

        challenge: "Balloon Pop Race",

        challengeDescription:
            "2 Volunteers from each team must use their bodies to pop 3 balloons - Fastest team will decide whether they bat or field first.",

        location: "Crystal Palace Park",

        colour: "#f5d85b",

        icon: MdSportsCricket,

        challengeIcon: HiOutlineTrophy,

        locationIcon: HiOutlineMapPin,

        timeIcon: HiOutlineClock,

        type: "challenge"

    },

        {
        number: "06",
        time: "TBC",
        title: "Awards Ceremony",

        description:
            "Prizes will be given to the winning team (as well as a few honorary awards!)",

        location: "Crystal Palace Park",

        colour: "#00b7ff",

        icon: FaTrophy,

        challengeIcon: HiOutlineTrophy,

        locationIcon: HiOutlineMapPin,

        timeIcon: HiOutlineClock,

         type: "info"
    },

];