import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateProduct from './CreateProduct';
import '@testing-library/jest-dom';

describe('CreateProduct component', () => {
    test('renders and updates product name correctly', () => {
        render(
            <Router>
                <CreateProduct />
            </Router>
        );

        const productNameInput = screen.getByLabelText(/Product Name/i);
        fireEvent.change(productNameInput, { target: { value: 'Test Product' } });
        expect(productNameInput.value).toBe('Test Product');
    });

    test('updates and displays product name correctly', () => {
        render(
            <Router>
                <CreateProduct />
            </Router>
        );
        const productNameInput = screen.getByLabelText(/Product Name/i);
        fireEvent.change(productNameInput, { target: { value: 'Test Product' } });
        expect(productNameInput.value).toBe('Test Product');
    });

    test('validates that Product Name cannot be empty', async () => {
        render(
            <Router>
                <CreateProduct />
            </Router>
        );
        console.log(screen.debug());
        const productNameInput = screen.getByLabelText('Product Name');
        userEvent.type(productNameInput, 'Test Product');


        await waitFor(() => {
            expect(screen.getByText('* Product name is required.')).toBeInTheDocument();
        }, { timeout: 5000 });
    });

    test('validates that Product Name cannot contain invalid characters', () => {
        render(
            <Router>
                <CreateProduct />
            </Router>
        );

        const productNameInput = screen.getByLabelText(/Product Name/i)
        userEvent.type(productNameInput, 'Invalid@Name');
        fireEvent.click(screen.getByText('Tambah Produk'));

        expect(screen.getByText('* Invalid product name. It should contain only letters and spaces.')).toBeInTheDocument();
    });

    test('validates that Product Name cannot exceed 25 characters', async () => {
        render(
            <Router>
                <CreateProduct />
            </Router>
        );
        const productNameInput = screen.getByLabelText('Product Name');
        userEvent.type(productNameInput, 'ThisIsAProductNameWithMoreThan25Characters');

        await waitFor(() => {
            expect(screen.getByText('* Product name cannot exceed 25 characters.')).toBeInTheDocument();
        }, { timeout: 5000 });
    });
});
