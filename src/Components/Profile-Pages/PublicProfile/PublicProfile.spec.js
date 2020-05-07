import React from "react";
import PublicProfile from "./PublicProfile"

import { render, cleanup } from "@testing-library/react";

beforeEach(cleanup);

describe('Render Public Profile', () => {

    const wrapper = render(<PublicProfile />)
    test('should Render a div', () => {
         wrapper.debug()
    })
    
})
