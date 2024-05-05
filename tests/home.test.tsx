import React from 'react';
import { render, screen } from '@testing-library/react';
import ContentList from '@/components/ContentList';
import { mockFetch } from '@/utils/mock-fetch';

window.fetch = mockFetch([]);

describe('Login component tests', () => {

  beforeEach(() => {
    // write someting before each test
  });

  afterEach(() => {
    // write someting after each test
  });

  it('Renders correctly initial document', async () => {
    render(
      <ContentList />
    );
    const loginLabel = screen.getByText('Content Feed');

    expect(loginLabel).toBeInTheDocument();
  });

});