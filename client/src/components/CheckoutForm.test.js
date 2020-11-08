import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByTestId } = render(<CheckoutForm />);
    const header = getByTestId('formheader');
    expect(header).toBeInTheDocument();

});

// test("form shows success message on submit with form details", () => {
//     const { getByTestId } = render(<CheckoutForm />);
//     const button = getByTestId('submitbutton');
//     fireEvent.click(button);
// });

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId } = render(<CheckoutForm />);

    const firstName = getByLabelText(/first name/i);
    const lastName = getByLabelText(/last name/i);
    const address = getByLabelText(/address/i)
    const city = getByLabelText(/city/i)
    const state = getByLabelText(/state/i)
    const zip = getByLabelText(/zip/i)

    const newFirstName = "Jason"
    const newLastName = "Ours"
    const newAddress = "1 New Street"
    const newCity = "Smithville"
    const newState = "Tennessee"
    const newZip = "37166"

    fireEvent.change(firstName, { target: {value: "Jason"}})
    fireEvent.change(lastName, { target: {value: "Ours"}})
    fireEvent.change(address, { target: {value: "1 New Street"}})
    fireEvent.change(city, { target: {value: "Smithville"}})
    fireEvent.change(state, { target: {value: "Tennessee"}})
    fireEvent.change(zip, { target: {value: "37166"}})

    expect(firstName.value).toBe(newFirstName)
    expect(lastName.value).toBe(newLastName)
    expect(address.value).toBe(newAddress)
    expect(city.value).toBe(newCity)
    expect(state.value).toBe(newState)
    expect(zip.value).toBe(newZip)

    const submission = getByTestId("submitbutton")
    expect(submission).toBeInTheDocument();
    fireEvent.click(submission)

    const submitted = getByTestId("successMessage")
    expect(submitted).toBeInTheDocument()
});