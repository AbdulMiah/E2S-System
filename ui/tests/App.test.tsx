import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import App from '../src/App'

test('should render menuIconOpen element', () => {
    // Given
    render(<App />);

    // When
    const menuIconOpenElement = screen.getByTestId("menuIconOpen");

    // Then
    expect(menuIconOpenElement).toBeInTheDocument();
})

test('should render menuIconClose element', () => {
    // Given
    render(<App />);

    // When
    const menuIconCloseElement = screen.getByTestId("menuIconClose");

    // Then
    expect(menuIconCloseElement).toBeVisible();
})

test('should render both sidebar elements', () => {
    // Given
    render(<App />);
    // When
    const collapsedSideBarElement = screen.queryByTestId("collapsedSideBar");
    const sideBarElement = screen.queryByTestId("sidebarMenu")
    // Then
    expect(collapsedSideBarElement).toBeVisible();
    expect(sideBarElement).toBeVisible();
});

test('sidebar element should be hidden', () => {
    // Given
    render(<App />);
    // When
    const sideBarElement = screen.queryByTestId("sidebarMenu")
    const closeMenu = screen.getByTestId('menuIconClose');
    fireEvent.mouseEnter(closeMenu);
    // Then
    if (sideBarElement) {
        expect(sideBarElement).toHaveStyle(`left: -100%`)
    }
    expect(sideBarElement).toBeVisible();

});


