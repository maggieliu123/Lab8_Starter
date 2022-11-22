// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');


// TODO: - Part 2

////////////////////// PHONE NUMBER UNIT TESTS ////////////////////////////////
const phoneNumberTrue1 = '(510)123-4567';
const phoneNumberTrue2 = '(000)000-0000';
const phoneNumberFalse1 = '5101234567';
const phoneNumberFalse2 = '123456';

// PHONE NUMBER: TRUE #1
test('PhoneNumberTrue1', () => {
     
    expect(functions.isPhoneNumber(phoneNumberTrue1)).toBe(true);
  });

// PHONE NUMBER: TRUE #1
test('PhoneNumberTrue2', () => {
     
    expect(functions.isPhoneNumber(phoneNumberTrue2)).toBe(true);
  });

  
// PHONE NUMBER: FALSE #1
test('PhoneNumberTrue2', () => {
     
    expect(functions.isPhoneNumber(phoneNumberFalse1)).toBe(false);
  });

// PHONE NUMBER: FALSE #2
test('PhoneNumberTrue2', () => {
     
    expect(functions.isPhoneNumber(phoneNumberFalse2)).toBe(false);
  });



//////////////////////// EMAIL UNIT TESTS ////////////////////////////////
const emailTrue1 = 'hahaha@funny.com';
const emailTrue2 = 'maggienoodles@gmail.com';
const emailFalse1 = 'whatIsAnEmail';
const emailFalse2 = 'what.com';
// EMAIL: TRUE #1
test('emailTrue1', () => {
     
    expect(functions.isEmail(emailTrue1)).toBe(true);
  });

// EMAIL: TRUE #1
test('emailTrue2', () => {
     
    expect(functions.isEmail(emailTrue2)).toBe(true);
  });

  
// EMAIL: FALSE #1
test('emailFalse1', () => {
     
    expect(functions.isEmail(emailFalse1)).toBe(false);
  });

// EMAIL: FALSE #2
test('emailFalse2', () => {
     
    expect(functions.isEmail(emailFalse2)).toBe(false);
  });

/////////////////// PASSWORD STRONG UNIT TESTS //////////////////////////////
const isStrongTrue1 = 'Password';
const isStrongTrue2 = 'Pass_word';
const isStrongFalse1 = '_Password';
const isStrongFalse2 = 'no';

// PASSWORD: TRUE #1
test('isStrongTrue1', () => {
     
    expect(functions.isStrongPassword(isStrongTrue1)).toBe(true);
  });

// PASSWORD: TRUE #1
test('isStrongTrue2', () => {
     
    expect(functions.isStrongPassword(isStrongTrue2)).toBe(true);
  });

  
// PASSWORD: FALSE #1
test('isStrongFalse1', () => {
     
    expect(functions.isStrongPassword(isStrongFalse1)).toBe(false);
  });

// PASSWORD: FALSE #2
test('isStrongFalse2', () => {
     
    expect(functions.isStrongPassword(isStrongFalse2)).toBe(false);
  });

///////////////////////// DATE UNIT TESTS //////////////////////////////
const isDateTrue1 = '1/2/3333';
const isDateTrue2 = '11/22/3333';
const isDateFalse1 = '1/2/33';
const isDateFalse2 = '1 / 2 / 3333';
// DATE: TRUE #1
test('isDateTrue1', () => {
     
    expect(functions.isDate(isDateTrue1)).toBe(true);
  });

// DATE: TRUE #1
test('isDateTrue2', () => {
     
    expect(functions.isDate(isDateTrue2)).toBe(true);
  });

  
// DATE: FALSE #1
test('isDateFalse1', () => {
     
    expect(functions.isDate(isDateFalse1)).toBe(false);
  });

// DATE: FALSE #2
test('isDateFalse2', () => {
     
    expect(functions.isDate(isDateFalse2)).toBe(false);
  });

/////////////////// HEX COLOR UNIT TESTS //////////////////////////////
const isHexTrue1 = '#abc123';
const isHexTrue2 = '#a1b2c3';
const isHexFalse1 = 'abc12';
const isHexFalse2 = '#####';

// HEX: TRUE #1
test('isHexTrue1', () => {
     
    expect(functions.isHexColor(isHexTrue1)).toBe(true);
  });

// HEX: TRUE #1
test('isHexTrue2', () => {
     
    expect(functions.isHexColor(isHexTrue2)).toBe(true);
  });

  
// HEX: FALSE #1
test('isHexFalse1', () => {
     
    expect(functions.isHexColor(isHexFalse1)).toBe(false);
  });

// HEX: FALSE #2
test('isHexFalse2', () => {
     
    expect(functions.isHexColor(isHexFalse2)).toBe(false);
  });