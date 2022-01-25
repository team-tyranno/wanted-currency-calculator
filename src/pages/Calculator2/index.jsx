import React, { useState } from 'react';
import { DropDown, ExchangeResultBox, Tabs } from '../../components';
import { isOverThreshold, isNotNumber } from '../../utils';
import { CALC2 } from '../../constants';
import { Form, TabList, CurrencyInput, ResultBox } from './style';

export function Calculator2() {
  const currencyNames = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('CAD');
  const [amount, setAmount] = useState(0);
  const [currencyList] = useState(
    currencyNames.map((currency, index) => ({
      id: index,
      title: currency,
    })),
  );

  const getFromCurrency = (currencyName) => {
    setFromCurrency(currencyName);
    setToCurrency(currencyNames.filter((name) => name !== currencyName)[0]);
  };

  const handleAmountInput = (event) => {
    const moneyInput = event.target.value.replace(/,/g, '');

    if (isNotNumber(moneyInput)) {
      event.target.value = event.target.value.slice(0, -1);
      setAmount(event.target.value);
      return;
    }

    if (isOverThreshold(moneyInput, CALC2.THRESHOLD - 1)) {
      event.target.value = '1,000';
      setAmount(1000);
      return;
    }
    setAmount(moneyInput);
  };

  const handleClickTab = (el) => {
    setToCurrency(el);
  };

  return (
    <Form>
      <CurrencyInput>
        <input type="text" onInput={handleAmountInput} />
        <DropDown title="USD" list={currencyList} getFromCurrency={getFromCurrency} />
      </CurrencyInput>
      <ResultBox>
        <TabList>
          {currencyNames
            .filter((name) => name !== fromCurrency)
            .map((el, idx) => (
              <Tabs
                name={el}
                active={toCurrency === el}
                key={idx}
                handleClickTab={handleClickTab}
              />
            ))}
        </TabList>
        <ExchangeResultBox from={fromCurrency} to={toCurrency} amount={amount} />
      </ResultBox>
    </Form>
  );
}
