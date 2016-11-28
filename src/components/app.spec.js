// app test
import {expect} from 'chai';
import jsdom from 'jsdom';
import cheerio from 'cheerio';
import fs from 'fs';

describe('Init test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

// describe('Page test', () => {
//   const $ = cheerio.load('<SearchBar />');
//
//   it('should expect that SearchBar component exists', () => {
//     expect($.contains('<SearchBar />')).to.equal(true);
//   });
// });
