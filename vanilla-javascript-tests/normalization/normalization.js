export const blogPostEntries = [
  {
    id: "post1",
    author: { username: "user1", name: "User 1" },
    body: "The quick, brown fox jumps over a lazy dog.",
    comments: [
      {
        id: "comment1",
        author: { username: "user2", name: "User 2" },
        comment: "I like dogs!"
      }
    ]
  },
  {
    id: "post2",
    author: { username: "user2", name: "User 2" },
    body: "It was the best of times, it was the blurst of times...",
    comments: [
      {
        id: "comment2",
        author: { username: "user3", name: "User 3" },
        comment: "Did Charles Dickens write this?"
      },
      {
        id: "comment3",
        author: { username: "user4", name: "User 4" },
        comment: "No, it was someone else I think."
      },
      {
        id: "comment4",
        author: { username: "user3", name: "User 3" },
        comment: "It's from a Tale of Two Cities"
      }
    ]
  },
  {
    id: "post3",
    author: { username: "user2", name: "User 2" },
    body: "Please comment on this post!",
    comments: []
  },
  {
    id: "post4",
    author: { username: "user5", name: "User 5" },
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    comments: [
      {
        id: "comment5",
        author: { username: "user4", name: "User 4" },
        comment: "Wow, I didn't know you spoke Italian!"
      },
      {
        id: "comment6",
        author: { username: "user5", name: "User 5" },
        comment: "It isn't Italian."
      },
      {
        id: "comment7",
        author: { username: "user4", name: "User 4" },
        comment: "Oh, is it Greek?"
      },
      {
        id: "comment8",
        author: { username: "user4", name: "User 4" },
        comment: "Oh, hang on, it's Latin!"
      }
    ]
  },
  {
    id: "post5",
    author: { username: "user4", name: "User 4" },
    body: "What is your favourite genre of music?",
    comments: [
      {
        id: "comment9",
        author: { username: "user2", name: "User 2" },
        comment: "Mine is rock!"
      },
      {
        id: "comment10",
        author: { username: "user3", name: "User 3" },
        comment: "Rock is a terrible genre. The best genre is country."
      },
      {
        id: "comment11",
        author: { username: "user4", name: "User 4" },
        comment: "I think country can be nice, but I prefer blues overall."
      },
      {
        id: "comment12",
        author: { username: "user6", name: "User 6" },
        comment: "Jazz is objectively the best genre."
      },
      {
        id: "comment13",
        author: { username: "user5", name: "User 5" },
        comment: "I like all genres of music!"
      }
    ]
  }
];
