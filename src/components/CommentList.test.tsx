import { fireEvent, render, screen } from "@testing-library/react";
import CommentList from "./CommentList";
import { mockFetch } from "@/utils/mock-fetch";
import { generateMockContentWithComments } from "@/mocks/content.mock";

describe("CommentList", () => {
  test("renders comments correctly", async () => {
    const mockContentWithComments = generateMockContentWithComments(5);
    window.fetch = mockFetch(mockContentWithComments);

    render(
      <CommentList
        contentId={mockContentWithComments.id}
        count={mockContentWithComments.comments.length}
      />
    );

    mockContentWithComments.comments.forEach((comment) => async () => {
      await screen.findByText(comment.text);
      expect(screen.getByText(comment.text)).toBeInTheDocument();
    });
  });

  test("displays 'No comments' when there are no comments", async () => {
    const mockContentWithComments = generateMockContentWithComments(0);
    window.fetch = mockFetch(mockContentWithComments);
    render(
      <CommentList
        contentId={mockContentWithComments.id}
        count={mockContentWithComments.comments.length}
      />
    );

    await screen.findByText("No comments");
    expect(screen.getByText("No comments")).toBeInTheDocument();
  });

  test("displays 'loading...' when comments are being fetched", async () => {
    const mockContentWithComments = generateMockContentWithComments(5);
    window.fetch = mockFetch(mockContentWithComments);
    render(
      <CommentList
        contentId={mockContentWithComments.id}
        count={mockContentWithComments.comments.length}
      />
    );

    const element = screen.getByTestId("load-comments");
    fireEvent.click(element);

    await screen.findByText("loading...");
    expect(screen.getByText("loading...")).toBeInTheDocument();
  });  
});
