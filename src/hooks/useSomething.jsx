import { useState } from 'react';

export const useSomething = () => {
  const [value, setValue] = useState();

  return [value, setValue];
};
