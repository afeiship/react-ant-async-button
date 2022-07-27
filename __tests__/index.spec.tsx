import * as React from 'react';
import { render } from '@testing-library/react';
import ReactAntAsyncLink from '../src/main';
// import { act } from 'react-test-renderer';

jest.setTimeout(50000);
jest.useFakeTimers();


describe('01/basic props', () => {
  test('<ReactAntAsyncLink /> minGap timeout', () => {
    // Arrange

    // const handleChange = jest.fn();
    jest.useFakeTimers();

    const { container } = render(
      <ReactAntAsyncLink
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
      </ReactAntAsyncLink>
    );

    const el = document.querySelector('.react-ant-async-link')! as HTMLButtonElement;

    el.click();

    jest.advanceTimersByTime(2000);
    jest.clearAllTimers()

    console.log(container.innerHTML);

    // expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
