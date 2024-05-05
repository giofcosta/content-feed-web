import { render, screen } from "@testing-library/react";
import CommentBlock from "./CommentBlock";
import type { Comment } from "@/types/content";
import { generateMockComment } from "@/mocks/content.mock";
import { comment } from "postcss";

describe("CommentBlock", () => {
  it("renders the comment text", () => {
    const mockComment = generateMockComment();

    jest.spyOn(console, 'error').mockImplementation();

    render(<CommentBlock comment={mockComment} />);

    expect(screen.getByText(mockComment.text)).toBeInTheDocument();
  });
});
