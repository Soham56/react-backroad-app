import tour1Image from "./images/tour-1.jpeg";
import tour2Image from "./images/tour-2.jpeg";
import tour3Image from "./images/tour-3.jpeg";
import tour4Image from "./images/tour-4.jpeg";

export const navLinks = [
    { id: 1, href: "#home", text: "home" },
    { id: 2, href: "#about", text: "about" },
    { id: 3, href: "#services", text: "services" },
    { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
    { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
    { id: 2, href: "https://www.facebook.com/", icon: "fab fa-facebook" },
    { id: 3, href: "https://www.squarespace.com/", icon: "fab fa-squarespace" },
];

export const tourData = [
    {
        id: 1,
        tourInfoTitle: "Tibet Adventure",
        tourInfoBody:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        tourCountry: "China",
        tourDuration: "6",
        tourPrice: "2100",
        tourDate: "august 26th, 2020",
        tourImage: tour1Image,
    },
    {
        id: 2,
        tourInfoTitle: "Best of java",
        tourInfoBody:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        tourCountry: "Indonesia",
        tourDuration: "11",
        tourPrice: "1400",
        tourDate: "october 1th, 2020",
        tourImage: tour2Image,
    },
    {
        id: 3,
        tourInfoTitle: "Explore hong kong",
        tourInfoBody:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        tourCountry: "Hong kong",
        tourDuration: "8",
        tourPrice: "5000",
        tourDate: "September 15th, 2020",
        tourImage: tour3Image,
    },
    {
        id: 4,
        tourInfoTitle: "Kenya highlights",
        tourInfoBody:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
        tourCountry: "Kenya",
        tourDuration: "20",
        tourPrice: "3300",
        tourDate: "December 5th, 2019",
        tourImage: tour4Image,
    },
];

export const serviceData = [
    {
        id: 1,
        title: "saving money",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
        icon: "fas fa-wallet fa-fw",
    },
    {
        id: 2,
        title: "endless hiking",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
        icon: "fas fa-tree fa-fw",
    },
    {
        id: 3,
        title: "amazing comfort",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
        icon: "fas fa-socks fa-fw",
    },
];
