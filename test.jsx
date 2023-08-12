import test from 'tape';
import {
  domRenderWithRouterProvider,
  LocationDisplay,
} from './test/utils.jsx'
import {  waitFor } from '@testing-library/react';

import { Form, redirect, } from 'react-router-dom';
async function action({request}) {
  console.log('action called');
  let formData = await request.formData();
  let formObj = Object.fromEntries(formData);
  console.log('form submit', formObj); // <---- empty object {}
  let { id } = formObj;
  return redirect(`/contacts/${id}`);
};

function App() {
  return (
    <div>
      <Form method='post'>
        <input  name="id" defaultValue='5'></input>
        <button type='submit'>Start</button>
      </Form>
    </div>
  )
};


test('<AppForm/> submit', async assert => {

  let routes = [
        {
          path: '/',
          element: <App />,
          action: action,
        },
        {
          path: "/contacts/:id",
          element: <LocationDisplay/>,
        },
  ];
  const { screen, user } = domRenderWithRouterProvider(routes, assert.teardown);
  let submitBtn = await screen.getByText('Start');
  await user.click(submitBtn);
  let locationEl = await waitFor(async () => screen.getByTestId('location-display'));
  assert.same(locationEl.innerText, '/contacts/5', 'On Submit; Should have redirected to /contacts/5');
})
