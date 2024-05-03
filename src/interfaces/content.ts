export interface ContentWithComments extends Content {
  comments: Comment[];
}
export interface Content {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  description: string;
  author: string;
  commentsCount: number;
}

export interface ContentResponse { 
  contentCards: ContentCard[]
}

export interface ContentCard {
  id: string;
  imageUri: string;
  textData: TextData;
  metadata: Metadata;
  comments: Comment[];
}

export interface TextData {
  title: string;
  subTitle: string;
  body: string;
  author: Author;
}

export interface Author {
  first: string;
  last: string;
}

export interface Metadata {
  priority: number;
  publishDate: string;
}

export interface Comment {
  text: string;
  author: string;
  profilePic: string;
  likes: number;
}
