import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import CostForecast from '../src/components/CostForecast'


test('should render costforecast title element', () => {
    // Given
    render(<CostForecast />);
    // When
    const costForecastElement = screen.getByText("CostForecast")

    // Then
    expect(costForecastElement).toBeInTheDocument();
});

