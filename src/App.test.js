import React from "react";
import { render, fireEvent} from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test('The element has rendered', () => {
  render(<ContactForm />)
})

test('Correctly accepts submissions', async () => {
  const { getByLabelText, getByTestId, findByText } = render(<ContactForm />);

  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);
  const submit = getByTestId('submit');

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
  fireEvent.click(submit);
  
  await findByText(/Jim/i);
  await findByText(/Dum/i);
  await findByText(/DumJim@email.com/i);
  await findByText(/Hewwo/i);

});
