import { DataTable } from 'simple-datatables';
import OlxParser from './parser/OlxParser';

const SEARCH = document.getElementById('top__btn');
const INPUT = document.getElementById('top__inp');
// const TABL = document.getElementById('bottom');

const PARAM = 'a.marginright5.link.linkWithHash.detailsLink';
const proxy = 'https://html-reader.herokuapp.com/?href=';
const headings = ['№', 'Просмотры', 'Название', 'Ссылка'];

const olxParser = new OlxParser('', proxy);
const myTable = new DataTable('#bottom', { headings });
// eslint-disable-next-line no-underscore-dangle
localStorage._proxy = proxy;

if (!URL.length) {
  SEARCH.disabled = true;
}

INPUT.addEventListener('keyup', () => {
  const URL = INPUT.value;
  SEARCH.disabled = false;
  if (!URL.length) {
    SEARCH.disabled = true;
  }
});

SEARCH.addEventListener('click', async () => {
  olxParser.URL = INPUT.value;
  // eslint-disable-next-line no-underscore-dangle
  olxParser.PROXY = localStorage._proxy;
  console.log('loading...');
  const arr = await olxParser.sortLargerToSmaller(PARAM);
  myTable.destroy();
  myTable.init();
  console.log(arr);
  const data = arr.map((el, i) => [`${i + 1}`, `${el.view}`, el.name, `<a href=${el.href} target='_blank'>Перейти</a>`]);
  myTable.insert({ headings, data });
});
