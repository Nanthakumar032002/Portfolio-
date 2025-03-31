import crypto from '../src/assets/images/cryptoimg2.jpg'
import Netflix from '../src/assets/images/netflix-img.webp'
import crud from '../src/assets/images/crud-img.webp'
import todo from '../src/assets/images/to-do-2.png'
import property from '../src/assets/images/property-img.avif'
import ecommerce from '../src/assets/images/e-commerce.avif'
const logotext = "NANTHA KUMAR";
const meta = {
    title: "Nantha",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "I’m Nantha",
    animated: {
        first: "MERN Developer",
        second: "Front-end Developer",
        third: "I code cool websites",
    },
    description:'Building scalable and dynamic web solutions with the power of MERN.Transforming ideas into seamless digital experiences.',
    your_img_url: "../../assets/images/my-profile-1.jpg",
};

const dataabout = {
    title: "about-myself",
    aboutme: "Passionate about transforming ideas into seamless digital experiences, I specialize in building dynamic web applications with the MERN stack. With a strong foundation in React and Node.js, I craft scalable and efficient solutions that bring innovation to life",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "React",
        value: 80,
    },
    {
        name: "Javascript",
        value: 85,
    },
    {
        name: "Java",
        value: 60,
    },
    {
        name: "Node.js",
        value: 70,
    },
    {
        name: "HTML,CSS,Bootstrap",
        value: 90,
    },
];

const services = [{
        title: "Mern Stack -Intern in squash@pp",
        description: "Completed a 6-month MERN Stack internship, gaining hands-on experience in building full-stack applications. Worked on developing scalable web solutions using React, Node.js, Express, and MongoDB, focusing on performance optimization and responsive UI. Collaborated with teams to implement authentication, RESTful APIs, and database management, enhancing my problem-solving skills. This experience strengthened my ability to write clean, maintainable code while working in an agile development environment",
    }
];

const dataportfolio = [{
        img: `${crypto}`,
        description: "Secure crypto tracking with real-time updates and authentication.",
        link: "https://github.com/Nanthakumar032002/Crypto_Live_Market",
    },
    {
        img: `${Netflix}`,
        description: "Stream your favorites with a Netflix-like UI and secure login.",
        link: "https://github.com/Nanthakumar032002/Netflix-Clone",
    },
    {
        img: `${crud}`,
        description: "Full-stack CRUD app for effortless data management.",
        link: "https://github.com/Nanthakumar032002/CRUD-app",
    },
    {
        img: `${todo}`,
        description: "Minimal yet powerful task manager for seamless productivity",
        link: "https://github.com/Nanthakumar032002/To-do--list-using-React",
    },
    {
        img: `${ecommerce}`,
        description: "A seamless shopping experience with secure authentication.",
        link: "#",
    },
    {
        img: `${property}`,
        description: "Smart real estate insights powered by JavaScript.",
        link: "https://github.com/Nanthakumar032002/Propertyscience",
    },

    
];
const contactConfig = {
    YOUR_EMAIL: "nanthakumarkannan9@gamil.com",
    YOUR_FONE: "9345339088",
    description: "Looking for a skilled MERN Stack Developer? Let’s connect to create impactful digital solutions! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Nanthakumar032002",
    linkedin: "https://www.linkedin.com/in/nantha2002",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
}