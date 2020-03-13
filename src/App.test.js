import React from "react";
import { render, fireEvent} from "@testing-library/react";
import ContactForm from "./components/ContactForm";

// test("renders App without crashing", () => {
//   const { getByText, queryByText } = render(<ContactForm/>);

//   const FirstName = getByText(/First Name/i);
//   const LastName = getByText(/Last Name/i);
//   const Email = getByText(/Email/i)
//   const Message = getByText(/Message/i)

//   expect(FirstName).toBeInTheDocument();
//   expect(LastName).toBeInTheDocument();
//   expect(Email).toBeInTheDocument();
//   expect(Message).toBeInTheDocument();
// });
test('The element has rendered', () => {
  render(<ContactForm />)
})

test('Correctly accepts submissions', async () => {
  const { getByLabelText, getByTestId, findByText } = render(<ContactForm />);
  // Grab the forms and submit from the component
  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);
  const submit = getByTestId('submit');

  // Send in test values
  fireEvent.change(firstName, {
    target: { name: 'firstName', value: 'Jim'}
});
fireEvent.change(lastName, {
    target: { name: 'lastName', value: 'Dum'}
});
fireEvent.change(email, {
    target: { name: 'email', value: 'DumJim@email.com'}
});
fireEvent.change(message, {
    target: { name: 'message', value: 'hewwo'}
});
  // Submit 
  fireEvent.click(submit);
  // Wait for submission then check values
  await findByText(/Jim/i);
  await findByText(/Dum/i);
  await findByText(/DumJim@email.com/i);
  await findByText(/Hewwo/i);
  // Failing test 
  // await findByText(/banana/);
});
