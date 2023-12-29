import { render, screen, waitFor } from '@testing-library/react';
import DashboardPages from '../path-to-your-component/DashboardPages';
import { totalUser, totalClass } from '../api/coursesAPI';
import { describe, expect, jest, beforeEach, it } from '@jest/globals';
import '@testing-library/jest-dom'

jest.mock('../api/coursesAPI', () => ({
  totalUser: jest.fn(),
  totalClass: jest.fn(),
}));

const mockNavigate = jest.fn();

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
    ],
  },
};

describe('DashboardPages', () => {
beforeEach(() => {
    totalUser.mockResolvedValue(mockTotalUserResponse);
    totalClass.mockResolvedValue(mockTotalClassResponse);
});

  it('renders active users, active class, and premium class cards', async () => {
    render(<DashboardPages />);

    await waitFor(() => {
      expect(totalUser).toHaveBeenCalledTimes(1);
      expect(totalClass).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText(/active users/i)).toBeInTheDocument();
    expect(screen.getByText(/active class/i)).toBeInTheDocument();
    expect(screen.getByText(/premium class/i)).toBeInTheDocument();
  });
});
