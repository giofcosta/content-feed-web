import faker from "faker";
import { Content, Comment, type ContentWithComments } from "@/types/content";

// Create a mock contents objects with a specified count
const generateMockContents = (count: number): Content[] =>
  Array.from({ length: count }, () => generateMockContent());

// Create a mock content object
const generateMockContent = (): Content => ({
  id: faker.random.uuid(),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  author: faker.name.findName(),
  image: faker.image.imageUrl(),
  commentsCount: faker.random.number(),
  subTitle: faker.lorem.sentence(),
});

// Create a mock comment object
const generateMockComment = (): Comment => ({
  text: faker.lorem.sentence(),
  author: faker.name.findName(),
  profilePic: faker.image.imageUrl(),
  likes: faker.random.number(),
});

// Create a mock content object with a specified number of comments
const generateMockContentWithComments = (
  numberOfComments: number
): ContentWithComments  => ({
  ...generateMockContent(),
  comments: Array.from({ length: numberOfComments }, () => generateMockComment()),
});

export  {
  generateMockContent,
  generateMockContents,
  generateMockContentWithComments,
  generateMockComment,
};
