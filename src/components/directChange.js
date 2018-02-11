
let test = undefined;
function directChange(x){
  if(test !== undefined){
    return test;
  } else if (test === undefined) {
    test = x;
  };
  return undefined;
}

export default directChange;
