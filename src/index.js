import parse from 'parse5';

const url = 'https://www.olx.ua/otdam-darom/pol/';
const proxyurl = 'https://cors-anywhere.herokuapp.com/';

const asFetch = async () => {
  const document = await fetch(url, {
    headers: {
      method: 'GET',
      mode: 'cors',
    },
  });
  try {
    const data = await document.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  // const document = parse();
};
asFetch();
