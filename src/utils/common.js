const makeItemsUniq = (items) => [...new Set(items)].sort();

const mixClass = (parentClass) => (mix) => {
  return parentClass !== `` ? parentClass + mix : ``;
};

export {
  makeItemsUniq,
  mixClass,
};
