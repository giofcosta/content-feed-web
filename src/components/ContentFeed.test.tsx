import React from "react";
import { render, screen } from "@testing-library/react";
import { mockFetch } from "@/utils/mock-fetch";
import ContentFeed from "./ContentFeed";
import { generateMockContents } from "@/mocks/content.mock";

describe("ContentFeed component tests", () => {
  it("Renders correctly initial document", async () => {
    const mockContents = generateMockContents(3);
    window.fetch = mockFetch(mockContents);

    jest.spyOn(console, 'error').mockImplementation();

    render(await ContentFeed());

    mockContents.forEach((content) => {
      expect(screen.getByText(content.title)).toBeInTheDocument();
      expect(screen.getByText(content.subTitle)).toBeInTheDocument();
      expect(screen.getByText(content.description)).toBeInTheDocument();
      expect(screen.getByText(content.author)).toBeInTheDocument();
    });

    jest.restoreAllMocks();
  });
});
