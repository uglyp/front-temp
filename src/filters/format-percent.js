import clac from 'calculatorjs'
// 转化成百分数 0.38=>38%
const formatPercent = value => {
  if(isNaN(value)){
    return '--';
  }
  return `${clac.mul(value,100)}%`;
};

export default formatPercent;
