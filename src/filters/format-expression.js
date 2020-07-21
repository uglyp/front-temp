import calc from 'calculatorjs';
// 保留小数点后两位
const formatExpression = expression => {
  const result = calc(expression);

  if (isNaN(result)) {
    return '--';
  }

  return result.toFixed(2);
};

export default formatExpression;
