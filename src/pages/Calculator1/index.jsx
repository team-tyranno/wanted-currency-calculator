import React, { useState } from 'react';
import { Form } from './style';
import { calculateExchangeRate, validateMoneyInput, putComma } from '../../utils';
import { CALC1 } from '../../constants';
import { Information } from '../../components';

export function Calculator1() {
  const [country, setCountry] = useState('KRW');
  const [value, setValue] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [isShowen, setIsShowen] = useState(false);

  const onChange = (e) => {
    setIsShowen(false);
    setCountry(e.target.value);
    setValue(0);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setIsShowen(true);

    if (validateMoneyInput({ moneyInput: value, threshold: CALC1.THRESHOLD })) {
      setIsValid(true);
    } else {
      setIsValid(false);
      setValue(0);
    }
  };

  const onInput = (e) => {
    setIsShowen(false);
    setValue(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <div className="calc-container">
        <h1>환율 계산</h1>
        <p>송금국가: 미국(USD)</p>
        <p>
          수취국가:
          <select name="country" onChange={onChange}>
            <option value="KRW">한국(KRW)</option>
            <option value="JPY">일본(JPY)</option>
            <option value="PHP">필리핀(PHP)</option>
          </select>
        </p>
        <p>
          환율: {putComma(calculateExchangeRate({ from: 'USD', to: country }))}
          {country}/USD
        </p>
        <p>
          송금액:
          <input type="input" value={value} onChange={onInput} />
          USD
        </p>
        <input type="submit" value="submit" />
        {isShowen ? <Information country={country} value={value} isValid={isValid} /> : null}
      </div>
    </Form>
  );
}
