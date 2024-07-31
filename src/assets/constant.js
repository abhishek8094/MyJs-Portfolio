import mrecorder from "../assets/project/mrecorder.png";
import blog from "../assets/project/blog.png";
import CapitalShop from "../assets/project/CapitalShop.png";
import portfolio from "../assets/project/Portfolio.png";
import password from "../assets/project/password.png";
import weather from "../assets/project/weather.png";
import html from "/skillsicon/html.png";
import css from "/skillsicon/css-3.png";
import js from "/skillsicon/js.png";
import react from "/skillsicon/react.png";
import tailwind from "/skillsicon/tailwind.png";


const project = [
  {
    name: "Capital Shop",
    img: CapitalShop,
    content:
      "Capital shop features a robust UI with functionalities including user authentication, wishlist management, cart operations, product search, filtering, sorting, and payment integration using Context API.",
    icons: [react, tailwind],
    git: "https://github.com/abhishek8094/Capital-Shop",
    link: "https://capitalshop1.netlify.app/",
  },

  {
    name: "Personal Portfolio",
    img: portfolio,
    content:
      "Designed and developed a personal portfolio website using React and Tailwind CSS, showcasing responsive design and a seamless user experience.Integrated EmailJS to facilitate  communication",
    icons: [react, tailwind, mui],
    git: "https://github.com/abhishek8094/MyJs-Portfolio",
    link: "https://abhisheksingh8.netlify.app/",
  },

  {
    name: "Media Recorder",
    img: mrecorder,
    content:
      "Successfully completed Media Recorder App with React and Tailwind CSS, ensuring responsive and mobile-friendly UI/UX. It is a dynamic website containing modern effects for better user experience.",
    icons: [react, tailwind],
    git: "https://github.com/abhishek8094/Media-Recorder",
    link: "https://mediarecorder12.netlify.app/",
  },
  {
    name: "Blog App",
    img: blog,
    content:
      "Developed a Blog App to provide information related to technology, implementing seamless navigation with previous and next page buttons along with a page counter. ",
    icons: [react, tailwind],
    git: "https://github.com/abhishek8094/React-JS-Basic-to-advanced/tree/main/%239%20blogs-context",
    link: "https://blog8094.netlify.app/",
  },

 
  {
    name: "Weather App",
    img: weather,
    content:
      "provides users with real-time weather updates for their selected locations. The app features a sleek, responsive design, ensuring optimal display on various devices. Users can search for cities and view current conditions, including temperature, humidity, and weather descriptions.",
    icons: [html,css,js],
    git: "https://github.com/abhishek8094/WeatherApp",
    link: "https://weather-appp123.netlify.app/",
  },

  {
    name: "PasswordGenerator",
    img: password,
    content:
      " allows users to generate secure, random passwords based on selected criteria. The app features an intuitive interface where users can specify password length and include/exclude character types such as letters, numbers, and special symbols. It ensures strong, unpredictable passwords to enhance online security.",
    icons: [html, css, js],
    git: "https://github.com/abhishek8094/Password-Manager",
    link: "https://password-generate12.netlify.app/",
  },

];
export default project;
