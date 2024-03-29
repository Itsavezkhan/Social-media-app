import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Mac has received a new update. Is there anyone who installed the update and is now kicking themselves ?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "balika@gmail.com",
    bookmark: [],
    createdAt: "2021-05-23T10:38:12+05:30",
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "rutvikumak@gmail.com",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sagar@gmail.com",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "omkar@gmail.com",
        text: "Noice!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content: "Good Morning, What's your plan for the coming weekend ?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sagar@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Looks good to me",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "shrey@gmail.com",
        text: "Kuch bhi ?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T15:48:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rutvikumak@gmail.com",
    bookmark: [],
    comments: [
      {
        _id: uuid(),
        username: "balika@gmail.com",
        text: "Lorem ipsum is not good comment",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "omkar@gmail.com",
        text: "My bicycle kick is better than messi's",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2022-01-25T16:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rutvikumak@gmail.com",
    bookmark: [],
    comments: [],
    createdAt: "2022-02-25T08:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Morality is simply the attitude we adopt towards people we personally dislike.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rutvikumak@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-23T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "A founder gave an employee 10 days off during the notice period so that the employee could visit his sick grandmother. ",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sagar@gmail.com",
    bookmark: [],

    comments: [
      {
        _id: uuid(),
        username: "shrey@gmail.com",
        text: "Thats amazing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: "2020-04-23T15:20:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Don’t ask questions whose answers you can’t accept.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shrey@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2022-04-01T10:38:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "There is only one GOAT of Football and his name doesn't start with M",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "omkar@gmail.com",
    comments: [],
    bookmark: [],
    createdAt: "2021-04-30T10:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Learn JavaScript in 60 minutes and then spend 9 months finding job.  Better to spend time on basics, build core and then find a job. 12 months is the least you should spend from your first program to job.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sunil@gmail.com",
    comments: [],

    bookmark: [],
    createdAt: "2022-03-14T20:08:12+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Many ups and many downs but just like cricket you gotta hold your nerves and handle pressure to emerge as a champion",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "gaurav@gmail.com",
    comments: [
      {
        _id: uuid(),
        username: "sagar@gmail.com",
        text: "Side hustle always works",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rutvikumak@gmail.com",
        text: "Let's make this year one of the best",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sunil@gmail.com",
        text: "We must push our limits",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    bookmark: [],
    createdAt: "2022-05-13T07:55:12+05:30",
    updatedAt: formatDate(),
  },
];
