import faker from "faker";
import { Content, Comment, type ContentWithComments } from "@/types/content";

const generateMockContents = (count: number): Content[] =>
  Array.from({ length: count }, () => generateMockContent());

const generateMockContent = (): Content => ({
  id: faker.random.uuid(),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  author: faker.name.findName(),
  image: faker.image.imageUrl(),
  commentsCount: faker.random.number(),
  subTitle: faker.lorem.sentence(),
});

const generateMockComment = (): Comment => ({
  text: faker.lorem.sentence(),
  author: faker.name.findName(),
  profilePic: faker.image.imageUrl(),
  likes: faker.random.number(),
});

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
