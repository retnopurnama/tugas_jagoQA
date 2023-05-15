mocha.setup('bdd');
var expect = chai.expect;

// Silakan tambah function describe lain atau langsung tambahkan it didalam describe dibawah ini, tambahkan 3 it untuk membandingkan 3 value
// silakan belajar tipe data js disini https://www.w3schools.com/js/js_datatypes.asp
// silakan copas seluruh code disini dan uji code kalian ke https://codepen.io/barruawd/pen/WNyNrbp

// to.deep.equal, untuk membandingkan 2 Object/List
// to.equal, untuk membandingkan 2 Value Sama 
// not.to.equal, untuk membandingkan 2 Value Berbeda 

describe('Belajar membandingkan 2 list yang berbeda', function() {
  it('Verify 2 list is not equal', function() {   expect(1,2,3).not.to.deep.equal(4,5,6);
  });
  it('Verify 2 object is equal', function() {
   expect({'nama':'joni', usia:27}).to.deep.equal({'nama':'joni', usia:27});
  });  
});

describe('Belajar membandingkan 2 value yang sama', function() {
  it('Verify 2 numbers (integer vs integer) is equal', function() {
  expect(26).to.equal(26);
  });
});
mocha.run();
