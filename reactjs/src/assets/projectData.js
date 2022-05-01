import React from "react";
import bdHome from '../assets/batter-day/home-page.png';
import bdHome2 from '../assets/batter-day/home-400x300.png';
import bdHome3 from '../assets/batter-day/home-500x300.png';
import mtHome from '../assets/mana-tap/mHome.png';
import mtHome2 from '../assets/mana-tap/mHome-400x300.png';
import mtHome3 from '../assets/mana-tap/mHome-500x300.png';
import kHome from '../assets/kos-metik/kHome.png';
import kHome2 from '../assets/kos-metik/kHome-400x300.png';
import kHome3 from '../assets/kos-metik/kHome-500x300.png';

const ProjectData = [
  {
    projName: 'Batter Day',
    imgs: [bdHome, bdHome2, bdHome3],
    summary: "A mock PERN full-stack web application for a bakery. Built usingReact and Node.js with the Express framework, Sequelize ORM, and the Postgres database system.",
    tech: 'React | Node.js | Express | Sequelize | Postgres | JavaScript | HTML | CSS',
    repo: 'https://github.com/AdamHarbeck/BatterDay',
    live: 'https://adamharbeck.github.io/BatterDay',
  },
  {
    projName: 'Mana Tap',
    imgs: [mtHome, mtHome2, mtHome3],
    summary: "A React web application that pulls data from the magicthegather.io API. This is a mock application to search for cards, create virtual decks, and talk with the community in the forum. ",
    tech: 'React | JavaScript | HTML | CSS',
    repo: 'https://github.com/AdamHarbeck/ManaTap',
    live: 'https://adamharbeck.github.io/ManaTap',
  },
  {
    projName: 'Kos-metik',
    imgs: [kHome, kHome2, kHome3],
    summary: "This is a webpage I made for a school project. We were to find a webpage on Template Monster and recreate it visually. This is the result of my attempt to recreate the Kos-metik page.",
    tech: 'HTML | CSS',
    repo: 'https://github.com/AdamHarbeck/Kos-metik',
    live: 'https://adamharbeck.github.io/Kos-metik',
    original: "https://kos-metik.myshopify.com/collections/face-makeup"
  }
]
export default ProjectData;
