import React from 'react';
import styled from 'styled-components';

function IconWithText({ icon, text }) {
  return (
    <DateIconWrapper>
      {icon}
      <Itemtext>{text}</Itemtext>
    </DateIconWrapper>
  );
}

const DateIconWrapper = styled.span`
    display: flex;
    align-items: center;
`;

const Itemtext = styled.p`
    margin-left: 8px;
`;

export default IconWithText;
