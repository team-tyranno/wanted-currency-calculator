// <input type="submit"></input>

import React, { useState } from 'react';
import { Form } from './style';
import {
  calculateExchangeRate,
  calculateExchangedAmount,
  validateMoneyInput,
  putComma,
} from '../../utils';
import { CALC1 } from '../../constants';

export function Calculator1() {
  const [country, setCountry] = useState('KRW');
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const onChange = (e) => {
    setCountry(e.target.value);
    setValue(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validateMoneyInput({ moneyInput: value, threshold: CALC1.THRESHOLD })) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setValue(0);
    }
  };

  const onInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <h1>환율 계산</h1>
      <p>송금국가: 미국(USD)</p>
      <p>
        수취국가:
        <select name="country" onChange={onChange}>
          {' '}
          <option value="KRW">KRW</option>
          <option value="JPY">JPY</option>
          <option value="PHP">PHP</option>
        </select>
      </p>
      <p>
        환율: {putComma(calculateExchangeRate({ from: country, to: 'USD' }))}
        {country}/USD
      </p>
      <p>
        송금액:
        <input type="input" value={value} onChange={onInput} />
        USD
      </p>
      <input type="submit" value="submit" />

      {isValid ? (
        <div>
          수취금액은 {calculateExchangedAmount({ from: country, to: 'USD', amount: value })}
          {country} 입니다.
        </div>
      ) : (
        <div>송금액이 바르지 않습니다.</div>
      )}
    </Form>
  );
}
