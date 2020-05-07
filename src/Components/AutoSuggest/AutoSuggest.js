import React from "react";

function AutoSuggest(props) {
    const {
        features,
        suggestSection,
        setSuggestions,
        setLocation,
        setSuggestSection,
        suggestions,
        location,
        auto,
        setAuto
    } = props;

    return (
        <ul>
            {features.map((address, index) => (
                <li
                    data-testid={`address${index}`}
                    key={index}
                    onClick={(e) => {
                        e.preventDefault();
                        //If this true we render the component to the left(start_location_id) input field else we render it to the right input field
                        if (suggestSection.start) {
                            //Set the suggestion state to be sent down as props
                            setSuggestions({
                                ...suggestions,
                                //Restructure the array so it matches the marker state in Ridemap
                                start_location_id: [
                                    address.center[0],
                                    address.center[1]
                                ]
                            });
                            //set the input value to what ever the user clicked
                            setLocation({
                                ...location,
                                start_location_id: address.place_name
                            });

                            // Set all fields to false so we don't render autosuggest component
                            setSuggestSection({
                                start: false,
                                end: false
                            });
                        } else {
                            //Same steps as on the if block
                            setSuggestions({
                                ...suggestions,
                                end_location_id: [
                                    address.center[0],
                                    address.center[1]
                                ]
                            });
                            setSuggestSection({
                                start: false,
                                end: false
                            });

                            setLocation({
                                ...location,
                                end_location_id: address.place_name
                            });
                        }
                    }}
                >
                    {" "}
                    {address.place_name}
                </li>
            ))}
        </ul>
    );
}

export default AutoSuggest;
