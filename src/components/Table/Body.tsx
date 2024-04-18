import React from 'react';

export const Body: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ children }) => (
  <tbody>{children}</tbody>
);