import React from "react";
import { render, screen } from "@testing-library/react";
import ContentList from "@/components/ContentList";
import { mockFetch } from "@/utils/mock-fetch";

window.fetch = mockFetch([
  {
    id: "1",
    image: "http://picsum.photos/image",
    title: "Title",
    subTitle: "Subtitle",
    description: "Description",
    author: "Author",
    commentsCount: 5,
  },
]);

describe("ContentList component tests", () => {
  beforeEach(() => {
    // write someting before each test
  });

  afterEach(() => {
    // write someting after each test
  });

  it("Renders correctly initial document", async () => {
    render(await ContentList());
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Author")).toBeInTheDocument();
  });
});
