import React from 'react';
import RideMap from './RideMap';
import { render , cleanup } from '@testing-library/react';

beforeEach(cleanup)
const mockGeolocation = {
    getCurrentPosition: jest.fn().mockImplementationOnce((vals) => vals)
};

//assign geolocation the mockGeolocation obj
navigator.geolocation = mockGeolocation;

test('Render RideMap without crashing', () => {
    //RideMap props
    const locationProps = {
        start:  [0, 0],
        end: [0, 0]
    }
    const wrapper = render(<RideMap start={locationProps.start} end={locationProps.end} />);

})
