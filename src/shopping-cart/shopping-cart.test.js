import Cart from "./components/cart";
import Storefront from "./components/storefront";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import * as rrd from "react-router-dom";

const shoppingCart = [
    {
        name: "product 1",
        price: 10,
        description: "This is product one",
        key: 1
    },
    {
        name: "product 2",
        price: 20,
        description: "This is product two",
        key: 2,
    },
    {
        name: "product 3",
        price: 30,
        description: "This is product three",
        key: 3,
    },
];
const products = [
    {
        name: "inventory 1",
        price: 10,
        description: "This is product one",
        key: 1
    },
    {
        name: "inventory 2",
        price: 20,
        description: "This is product two",
        key: 2,
    },
    {
        name: "inventory 3",
        price: 30,
        description: "This is product three",
        key: 3,
    },
];
let productArray = [];
const setShoppingCart = (array) => {
    productArray = array;
}
jest.mock('react-router-dom', () => {
    return {
        useOutletContext: () => [shoppingCart, setShoppingCart, products],
    }
});

describe('Cart component', () => {
    test('renders component', () => {        
        render(<Cart />);
        const cartSummary = screen.getByRole('table');
        const productOne = screen.getByText(/product 1/i);
        expect(cartSummary).toBeInTheDocument();
        expect(productOne).toBeInTheDocument();
      });

      test('renders total price', () => {
        render(<Cart />);
        const priceTotal = screen.getByTestId('priceTotal').textContent;
        expect(priceTotal).toMatch(/\$60/);
      });

      test('can delete products in cart', async () => {
        const user = userEvent.setup();
        render(<Cart />);
        const product2DeleteButton = screen.getByTestId('2');
        await user.click(product2DeleteButton);
        
        expect(productArray).toEqual(expect.arrayContaining(
            [{
                name: "product 1",
                price: 10,
                description: "This is product one",
                key: 1
            }]
        ))
        expect(productArray).toEqual(expect.arrayContaining(
            [{
                name: "product 3",
                price: 30,
                description: "This is product three",
                key: 3,
            }]
        ))
        expect(productArray).toEqual(expect.not.arrayContaining(
            [{
                name: "product 2",
                price: 20,
                description: "This is product two",
                key: 2,
            }]
        ))
        productArray = [];
      });
});

describe('Storefront tests', () => {
    test('products are displayed', () => {
        render(<Storefront />);
        const productTile1 = screen.getByTestId('inventory1');
        const productTile2 = screen.getByTestId('inventory2');
        const productTile3 = screen.getByTestId('inventory3');
        expect(productTile1).toBeInTheDocument();
        expect(productTile2).toBeInTheDocument();
        expect(productTile3).toBeInTheDocument();
    })
});