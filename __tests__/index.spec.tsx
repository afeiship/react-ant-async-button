import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ReactAntAsyncButton from '../src/main';
// import { act } from 'react-test-renderer';

jest.setTimeout(50000);
jest.useFakeTimers();


describe('01/basic props', () => {
  test('<ReactAntAsyncButton /> minGap timeout', async () => {
    // Arrange

    // const handleChange = jest.fn();
    jest.useFakeTimers();

    let isLoading = false;

    render(
      <ReactAntAsyncButton
        minGap={200}
        onChange={e => {
          console.log('is value:', e.target.value);
          isLoading = e.target.value;
        }}
        callback={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(null);
            }, 100);
          });
        }}>
        Download
      </ReactAntAsyncButton>
    );

    const el = document.querySelector('.react-ant-async-button')! as HTMLButtonElement;

    el.click();

    fireEvent.click(el);

    console.log('have click');

    jest.advanceTimersByTime(1000);

    console.log('to last', isLoading);
    // todo: why not to false?
    // expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
