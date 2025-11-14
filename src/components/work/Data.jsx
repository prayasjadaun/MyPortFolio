import React from 'react'
import Work1 from '../../assets/CodeLoom.png'
import Work2 from '../../assets/adhicine.png'
import Work3 from '../../assets/Jobmage.png'
import Work4 from '../../assets/Tvmaze.png'
import Work5 from '../../assets/Flickfever.png'
import Work6 from '../../assets/soleseeker.jpg'
import Work7 from '../../assets/housypoint.jpeg'

export const projectsData = [
    {
        id: 1,
        image: Work1,
        title: "Code Loom - Library App",
        description: 'This is a Books, Courses & HandWritten Notes App.',
        category: "Basic",
        type: "project",
        Demo: "https://github.com/prayasjadaun/CodeLoom"
    },
    {
        id: 2,
        image: Work2,
        title: "Adhicine -  Health App ",
        description: 'This is a Health App.',
        category: "Intermediate",
        type: "project",
        Demo: "https://github.com/prayasjadaun/Adhicine_Medicine_App"
    },
    {
        id: 3,
        image: Work3,
        title: "JobMage - MERN stack",
        description: 'This is a simple eCommerce website.',
        category: "Advance",
        type: "project",
        Demo: "https://jobmage.vercel.app/"
    },
    {
        id: 4,
        image: Work4,
        title: "TV Maze - Movies App",
        description: 'This is a Movies App.',
        category: "Intermediate",
        type: "project",
        Demo: "https://github.com/prayasjadaun/TV_Maze_Movies_App"
    },
    {
        id: 5,
        image: Work5,
        title: "Flick Fever - Movies App",
        description: 'This is a Movies App.',
        category: "Intermediate",
        type: "project",
        Demo: "https://github.com/prayasjadaun/Flick_Fever"
    },
    {
        id: 6,
        image: Work6,
        title: "Sole Seeker - ECom App",
        description: 'This is a Ecomerce App.',
        category: "Intermediate",
        type: "project",
        Demo: "https://github.com/prayasjadaun/SoleSeeker"
    },
    {
        id: 7,
        image: Work7,
        title: "Housypoint Mobile App - Flutter",
        description: 'This is a real estate mobile application. Listing, buying, and renting properties made easy with Housypoint.',
        category: "Advance",
        type: "industry",
        Demo: "https://play.google.com/store/apps/details?id=com.housypoint.housy_point&pcampaignid=web_share",
        DemoIOS: "https://apps.apple.com/in/app/housypoint/id6749288203"
    },
];

export const projectsNav = [
    { name: 'All' },
    { name: 'Basic' },
    { name: 'Intermediate' },
    { name: 'Advance' },
    { name: 'Industry' }
];