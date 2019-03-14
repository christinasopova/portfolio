import pg from "./assets/podcast-guru.m4v";
import bt from "./assets/budgetTracker.m4v";
import jg from "./assets/jak-gallery.m4v";
import poster_pg from "./assets/pg-screen.png";
import poster_jg from "./assets/jak.png";
import poster_bt from "./assets/bt.png";

const data = {
  "podcast-guru": {
    projectName: "Podcast Guru",
    videoUrl: pg,
    projectUrl: "http://helpful-pest.surge.sh/",
    idea:
      "Use SoundCloud API to implement an app for professional podcasts only",
    goal:
      "Make it easy to find and listen to favorite professional podcasts and adding them to a favorite list",
    features: "Podcast search, Recommendations, Favorite list",
    tools: "JS, React, SoundCloud API ",
    gitHubUrl: "https://git.generalassemb.ly/ChristinaS/project-2",
    posterUrl: poster_pg
  },
  "budget-tracker": {
    projectName: "Budget Tracker",
    videoUrl: bt,
    projectUrl: "https://budget-tracker-75ae5.firebaseapp.com",
    idea: " Financial app for daily use with easy and clear navigation",
    goal: " Manage your budget and track daily expenses.",
    features:
      " Personal Account, Transactions form, Categories chart,expenses calculator based on 50/30/20 financial rule, Suggestions, based on calculation result (reduce expenses / save)",
    tools: "JS, React, Redux, Firebase",
    gitHubUrl: "https://git.generalassemb.ly/ChristinaS/budgetTracker",
    posterUrl: poster_bt
  },
  "jak-gallery": {
    projectName: "JAK Art Gallery",
    videoUrl: jg,
    projectUrl: "https://jak-art-gallery.herokuapp.com",
    idea:
      "Create an art space for artists, where they can share their masterpieces and create exhibitions",
    goal:
      "To make a platform where artists can see creative exhibits from others and easily add, update and delete their own",
    features:
      "User page, Create exhibit, Edit Exhibit, Delete Exhibit, Explore exhibits of others",
    tools: "JS, React, Express, Uploader API, Google API",
    gitHubUrl: "https://git.generalassemb.ly/voidblzin/Jak-Art-Gallery",
    posterUrl: poster_jg
  }
};

export default data;
