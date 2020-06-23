import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from '@apollo/react-testing';

import BerthPricing, { BerthPricingProps } from '../BerthPricing';
import { data } from '../__fixtures__/data';

describe('BerthPricing', () => {
  const initialProps: BerthPricingProps = { data, loading: false };

  const getWrapper = (props: Partial<BerthPricingProps> = {}) =>
    mount(
      <MockedProvider>
        <BerthPricing {...initialProps} {...props} />
      </MockedProvider>
    );

  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('renders normally', () => {
    const wrapper = getWrapper();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('renders noData message when there is no data', () => {
    const wrapper = getWrapper({ data: undefined });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
