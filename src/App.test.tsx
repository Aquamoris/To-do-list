import React from 'react';
import { render, screen } from '@testing-library/react';
import TasksList from "./components/TasksList/TasksList";


test('Render task title', () => {
  render(<TasksList />);
  const headersTasks = screen.getByText(/your tasks/i);
  expect(headersTasks).toBeInTheDocument();
});

test('Render functional buttons', () => {
  render(<TasksList />);
  const functionalButtons = screen.getByText('All');
  expect(functionalButtons).toBeInTheDocument();
});

test('Render', () => {
  render(<TasksList />);
  const functionalButtons = screen.getAllByRole('button');
  expect(functionalButtons).toBeInTheDocument();
});