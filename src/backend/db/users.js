import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

// {
//   "firstName":"Adarsh",
//   "lastName":"Balika",
//   "email":"Adarshbalika@neog.camp",
//   "password":"adarshbalika"
// }

export const users = [
  {
    _id: uuid(),
    firstName: "Avez",
    lastName: "Khan",
    username: "rutvikumak@gmail.com",
    password: "rutvik123",
    userHandler: "Aveziscoding",
    bio: "An aspiring web developer",
    link: "https://peerlist.io/aveziscoding",
    profilePic:
      "https://i.pinimg.com/originals/f8/66/8e/f8668e5328cfb4938903406948383cf6.png",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Laiba",
    lastName: "Soomro",
    username: "balika@gmail.com",
    userHandler: "Okay_Laiba",
    password: "adarshBalika123",
    bio: "this is my bio balika",
    link: "https://adarshbalika.netlify.app",
    profilePic:
      " https://news.cgtn.com/news/3d3d414e7859444f/img/ca3b1202-d0dc-4f7f-8f0f-49d5118a0ad6.jpg",

    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Vishnu",
    lastName: "kaul",
    username: "sagar@gmail.com",
    userHandler: "vishnu1234",
    password: "111",
    bio: "this is my bio vishnu",
    link: "https://sagar.netlify.app",
    profilePic:
      "https://i.pinimg.com/originals/bd/a3/b1/bda3b1b1f7adbb3b37be414b52d621a3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rushali",
    lastName: "Das",
    username: "shrey@gmail.com",
    userHandler: "Okay_rush",
    password: "111",
    bio: "this is my bio rushali",
    link: "https://shrey.netlify.app",
    profilePic:
      "https://news.cgtn.com/news/3d3d414e7859444f/img/ca3b1202-d0dc-4f7f-8f0f-49d5118a0ad6.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Cristiano",
    lastName: "Ronaldo",
    username: "omkar@gmail.com",
    userHandler: "CR_7",
    password: "111",
    bio: "I am Crisiano ronaldo aka CR7",
    link: "https://omkar.netlify.app",
    profilePic:
      "https://1.bp.blogspot.com/-WnxbW2Sfge4/Wxy8QTTKUWI/AAAAAAAAFFc/mZqnb19OTVo-kR8fydbDeZV5crizivVHACLcBGAs/s1600/Cristiano%2BRonaldo%2Bplayer9%2Bprofile%2B1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Virat",
    lastName: "Kohli",
    username: "gaurav@gmail.com",
    userHandler: "VK_18",
    password: "111",
    bio: "I am Virat kohli aka VK18",
    link: "https://gaurav.netlify.app",
    profilePic:
      "https://i.pinimg.com/originals/bd/a3/b1/bda3b1b1f7adbb3b37be414b52d621a3.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mark",
    lastName: "Twain",
    username: "sunil@gmail.com",
    userHandler: "Mark_007",
    password: "111",
    bio: "this is my bio mark",
    link: "https://sunil.netlify.app",
    profilePic:
      "https://1.bp.blogspot.com/-WnxbW2Sfge4/Wxy8QTTKUWI/AAAAAAAAFFc/mZqnb19OTVo-kR8fydbDeZV5crizivVHACLcBGAs/s1600/Cristiano%2BRonaldo%2Bplayer9%2Bprofile%2B1.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
