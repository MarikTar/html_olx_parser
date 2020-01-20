import { parse } from 'parse5';

const url = 'https://www.olx.ua/otdam-darom/pol/';
const proxyurl = 'https://test-parser-trk.herokuapp.com/?href=';

const asFetch = async () => {
  try {
    const document = await fetch(proxyurl + url);
    const textHtml = await document.text();
    const data = parse(textHtml, {
      scriptingEnabled: false,
    });
    console.log(data.childNodes[1]);
  } catch (error) {
    console.log(error);
  }
  // const document = parse();
};

asFetch();
