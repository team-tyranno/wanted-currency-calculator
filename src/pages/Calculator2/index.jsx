import React, { useState, useEffect } from 'react';
import { DropDown, ExchangeResultBox, Tabs } from '../../components';
import { validateMoneyInput } from '../../utils';
import { CALC2 } from '../../constants';
import { Form, TabList, CurrencyInput, ResultBox } from './style';

export function Calculator2() {
  const currencyNames = ['USD', 'CAD', 'KRW', 'HKD', 'JPY', 'CNY'];
  const [fromCurrency, setFromCurrency] = useState('USD'); // 맨 위 dropdown으로 셀렉트되는 통화
  const [toCurrency, setToCurrency] = useState('CAD');
  console.log('toCurrency', toCurrency);
  const [amount, setAmount] = useState(0);
  const [currencyList, setCurrencyList] = useState(
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
    if (!validateMoneyInput({ moneyInput: event.target.value, threshold: CALC2.THRESHOLD })) return;
    setAmount(event.target.value);
  };

  // 숫자 입력창은 amount 조정.
  // DropDown은 fromCurrency 조정.
  // 탭 클릭은 toCUrrency 조정.

  // fromCurrency에 따라 DropDown 변경(해결)
  // fromCurrency에 따라 탭 이름 변경.

  // toCurrency에 따라 탭 selected 상태 변경.

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
            .map((el, idx) => {
              return (
                <Tabs
                  name={el}
                  active={toCurrency === el}
                  key={idx}
                  handleClickTab={handleClickTab}
                />
              );
            })}
        </TabList>
        <ExchangeResultBox from={fromCurrency} to={toCurrency} amount={amount} />
      </ResultBox>
    </Form>
  );
}
