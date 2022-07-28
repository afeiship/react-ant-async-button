import * as React from 'react';
import { render } from '@testing-library/react';
import ReactAntAsyncButton from '../src/main';
// import { act } from 'react-test-renderer';

jest.setTimeout(50000);
jest.useFakeTimers();


describe('01/basic props', () => {
  test('<ReactAntAsyncButton /> minGap timeout', () => {
    // Arrange

    // const handleChange = jest.fn();
    jest.useFakeTimers();

    const { container } = render(
      <ReactAntAsyncButton
        minGap={200}
        test-id="btn1"
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

    jest.advanceTimersByTime(2000);
    jest.clearAllTimers()

    console.log(container.innerHTML);

    // expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
