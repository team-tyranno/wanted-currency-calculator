import React from 'react';
import { PropTypes } from 'prop-types';
import { Tab } from './style';

export function Tabs({ name, active, handleClickTab }) {
  return (
    <Tab
      active={active}
      onClick={() => {
        handleClickTab(name);
      }}
    >
      {name}
    </Tab>
  );
}

Tabs.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleClickTab: PropTypes.func.isRequired,
};
