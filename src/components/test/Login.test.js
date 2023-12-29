import React from 'react';
import LoginForm from '../Login/LoginForm';
import { postLoginAdmin } from '../../api/coursesAPI';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, jest } from '@jest/globals';

jest.mock('../../api/coursesAPI');

const mockNavigate = jest.fn();

describe('LoginForm', () => {
  test('renders login form correctly', () => {
    render(<LoginForm />);

    expect(screen.getByText(/login/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/id admin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /masuk/i })).toBeInTheDocument();
  });

  test('displays error message for empty fields', async () => {
    render(<LoginForm />);

    fireEvent.click(screen.getByRole('button', { name: /masuk/i }));

    await waitFor(() => {
      expect(screen.getByText(/tolong email dan password diisi/i)).toBeInTheDocument();
    });
  });

  test('handles login failure', async () => {
    const errorMessage = 'Maaf, kata sandi salah';
    postLoginAdmin.mockRejectedValue({ response: { data: { message: errorMessage } } });

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/id admin/i), { target: { value: 'example@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /masuk/i }));

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  test('handles successful login', async () => {
    const mockData = { data: { data: { accessToken: 'example-token' } } };
    postLoginAdmin.mockResolvedValue(mockData);

    render(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/id admin/i), { target: { value: 'example@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'correctpassword' } });
    fireEvent.click(screen.getByRole('button', { name: /masuk/i }));

    await waitFor(() => {
      expect(document.cookie).toContain('token=example-token');
      expect(mockNavigate).toBe('/dashboard');
    });
  });
});
