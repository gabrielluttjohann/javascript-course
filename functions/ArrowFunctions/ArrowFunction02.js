const newLine = () => {
  console.log();
};

const obj = {};

// ==================== 01 ====================
let compareWithThis = function (param) {
  console.log(this === param);
};

compareWithThis(global);
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global);
compareWithThis(obj);

// ==================== 02 ====================
newLine();

let compareWithThisArrow = (param) => {
  console.log(this === param);
};

compareWithThisArrow(global);
compareWithThisArrow = compareWithThisArrow.bind(obj);
compareWithThisArrow(global);
compareWithThisArrow(obj);
compareWithThisArrow(module.exports)
