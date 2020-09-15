import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import UnmarkedWsNoticeList, { UnmarkedWsNoticeListProps } from '../UnmarkedWsNoticeList';
import { getUnmarkedWinterStorageNotices } from '../utils';
import { unmarkedWinterStorageNoticeMockData } from '../__fixtures__/mockData';
import UnmarkedWsNoticeDetails from '../../../common/unmarkedWsNoticeDetails/UnmarkedWsNoticeDetails';

const notices = getUnmarkedWinterStorageNotices(unmarkedWinterStorageNoticeMockData);

const mockProps: UnmarkedWsNoticeListProps = {
  notices,
  loading: false,
  pageCount: 1,
  pageIndex: 0,
  goToPage: jest.fn(),
  onSortedColChange: jest.fn(),
};

describe('UnmarkedWsNoticeList', () => {
  const getWrapper = (props?: Partial<UnmarkedWsNoticeListProps>) =>
    mount(
      <MemoryRouter>
        <UnmarkedWsNoticeList {...mockProps} {...props} />
      </MemoryRouter>
    );

  it('renders normally with data', () => {
    const wrapper = getWrapper();

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders normally without data', () => {
    const wrapper = getWrapper({ notices: [] });

    expect(wrapper.render()).toMatchSnapshot();
  });

  it('renders sub component correctly', async () => {
    const wrapper = getWrapper();

    await act(async () => {
      await wrapper.find('div.expander div').at(0).simulate('click');
    });
    wrapper.update();

    expect(wrapper.find(UnmarkedWsNoticeDetails).props()).toEqual(notices[0]);
  });
});
