const urlDecode = function (text) {
  // Put your solution here
  let textArr = text.split('=').join(' ').split('&').join(' ').split('%20').join().split(' ');


  let arrToObj = {};

  for (let i = 0; i < textArr.length; i++) {
    arrToObj[textArr[i]] = textArr[i + 1];
    i++;
  }

  arrToObj = JSON.stringify(arrToObj);
  arrToObj = arrToObj.replace(/(?=,(?!"))(,(?!{))/g, " ");
  arrToObj = JSON.parse(arrToObj);

  return arrToObj;

};



console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
