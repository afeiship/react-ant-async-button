# react-ant-async-button
> Async button with loading based on antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-async-button
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-async-button/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-async-button/dist/style.scss";

  // customize your styles:
  $react-ant-async-button-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactAntAsyncButton from '@jswork/react-ant-async-button';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactAntAsyncButton />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/react-ant-async-button/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-async-button/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-async-button
[version-url]: https://npmjs.org/package/@jswork/react-ant-async-button

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-async-button
[license-url]: https://github.com/afeiship/react-ant-async-button/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-async-button
[size-url]: https://github.com/afeiship/react-ant-async-button/blob/master/dist/react-ant-async-button.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-async-button
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-async-button
