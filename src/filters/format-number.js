const formatNumber = (value, max) => {
  // 文本后面添加+
  if (!max) {
    max = 99;
  }

  if (value && value > max) {
    return `${value}+`;
  }

  return value;
};

export default formatNumber;
