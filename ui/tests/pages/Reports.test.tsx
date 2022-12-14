import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Reports from "../../src/components/pages/Reports";

test("should render reports title element", () => {
    // Given
    render(<Reports currentSite={1} setTopbarTitle={jest.fn()} />);

    // When
    const reportsElement = screen.getByTestId("reportsContainer");

    // Then
    expect(reportsElement).toBeInTheDocument();
});
