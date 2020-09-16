'use strict';

const args = process.argv.slice(2);

const obfuscate = ((args) => {

  let argsArr = args;
  let argsReplaced = '';

  for (let i = 0; i < argsArr[0].length; i++) {
    switch (argsArr[0][i]) {

      // case 'a':
      //   argsReplaced += '4';
      //   break;
      // case 'e':
      //   argsReplaced += '3';
      //   break;
      // case 'o':
      //   argsReplaced += '0';
      //   break;
      // case 'l':
      //   argsReplaced += '1';
      //   break;
      // default:
      //   argsReplaced += argsArr[0][i];
    }
  }

  console.log(argsReplaced, 'argsReplaced');

});



console.log(obfuscate(args));