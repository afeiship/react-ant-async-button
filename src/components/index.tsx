import noop from '@jswork/noop';
import classNames from 'classnames';
import React, { Component } from 'react';
import { Button, ButtonProps } from 'antd';

const CLASS_NAME = 'react-ant-async-button';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export type ReactAntAsyncButtonProps = {
  /**
   * The extended className for component.
   */
  className?: string;
  /**
   * The min timeout gap.
   */
  minGap?: number;
  /**
   * The change handler.
   */
  callback?: () => Promise<any>;
  /**
   * The initial loading state.
   */
  value?: boolean;
  /**
   * The handler when status change.
   */
  onChange?: (evt: any) => void;
} & ButtonProps;

export default class ReactAntAsyncButton extends Component<ReactAntAsyncButtonProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    minGap: 0,
    callback: () => Promise.resolve(),
    value: false,
    onChange: noop
  };

  state = { loading: this.props.value };

  handleClick = () => {
    const { callback, minGap, onChange } = this.props;
    const start = Date.now();
    const getTarget = (value) => {
      return { target: { value } };
    };
    this.setState({ loading: true }, () => onChange!(getTarget(true)));
    callback!().finally(async () => {
      const gap = Date.now() - start;
      if (minGap && gap < minGap) await delay(minGap - gap);
      this.setState({ loading: false }, () => onChange!(getTarget(false)));
    });
  };

  render() {
    const { className, callback, minGap, value, onChange, ...props } = this.props;
    const { loading } = this.state;

    return (
      <Button
        size="small"
        type="link"
        loading={loading}
        onClick={this.handleClick}
        className={classNames(CLASS_NAME, className)}
        {...props}
      />
    );
  }
}
