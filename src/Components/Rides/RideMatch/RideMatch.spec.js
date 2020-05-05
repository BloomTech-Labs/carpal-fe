import React from "react";
import RideMatch from './RideMatch'
import { render } from '@testing-library/react';

test('should Render RideMatch Component', () => {
    const { getByText} = render(<RideMatch />)
    const text = getByText("RideMatch")
    expect(text).toBeTruthy();

})
