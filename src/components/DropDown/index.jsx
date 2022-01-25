import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import { MenuContainer, UnfoldButton, MenuList, DroppedMenu } from './style';

export function DropDown({ title, list, getFromCurrency }) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title);

  const handleButtonClick = (itemTitle) => {
    setHeaderTitle(itemTitle);
    setIsListOpen(false);
    getFromCurrency(itemTitle);
  };

  return (
    <MenuContainer>
      <UnfoldButton type="button" onClick={() => setIsListOpen((state) => !state)}>
        <div>{headerTitle}</div>
      </UnfoldButton>
      {isListOpen && (
        <MenuList role="list">
          {list.map((item) => (
            <DroppedMenu type="button" key={item.id} onClick={() => handleButtonClick(item.title)}>
              <div>{item.title}</div>
            </DroppedMenu>
          ))}
        </MenuList>
      )}
    </MenuContainer>
  );
}

DropDown.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.shape.isRequired,
  getFromCurrency: PropTypes.func.isRequired,
};
