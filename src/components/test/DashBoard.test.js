import { render, screen, waitFor } from '@testing-library/react';
import DashboardPages from '../path-to-your-component/DashboardPages';
import { totalUser, totalClass } from '../api/coursesAPI';
import { describe, expect, jest, beforeEach, it } from '@jest/globals';
import '@testing-library/jest-dom'


// Mock API functions
jest.mock('../api/coursesAPI', () => ({
  totalUser: jest.fn(),
  totalClass: jest.fn(),
}));

const mockNavigate = jest.fn();


// Mock the response data
const mockTotalUserResponse = {
  status: 'OK',
  data: {
    data: {
      totalUsers: 10,
    },
  },
};

const mockTotalClassResponse = {
  status: 'OK',
  data: {
    data: [
      { type: 'PREMIUM' },
      { type: 'FREE' },
      // Add more data as needed for testing
    ],
  },
};

describe('DashboardPages', () => {
beforeEach(() => {
    // Reset mocks before each test
    totalUser.mockResolvedValue(mockTotalUserResponse);
    totalClass.mockResolvedValue(mockTotalClassResponse);
});

  it('renders active users, active class, and premium class cards', async () => {
    render(<DashboardPages />);

    // Wait for API calls to complete
    await waitFor(() => {
      expect(totalUser).toHaveBeenCalledTimes(1);
      expect(totalClass).toHaveBeenCalledTimes(1);
    });

    // Assertions
    expect(screen.getByText(/active users/i)).toBeInTheDocument();
    expect(screen.getByText(/active class/i)).toBeInTheDocument();
    expect(screen.getByText(/premium class/i)).toBeInTheDocument();

    // You can add more assertions as needed
  });

  // Add more test cases as needed for other functionality
});
