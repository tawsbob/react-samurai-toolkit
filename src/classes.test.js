const { addClassIf, concatClass, addClass } = require('./classes');

test('add class if condition is true', () => {
    const classIf = 'some-class';
    expect(addClassIf(true, classIf)).toBe(classIf);
});

test('add else class if condition is false', () => {
    const elseClass = 'some-class';
    expect(addClassIf(false, null, elseClass)).toBe(elseClass);
});

test('concat class with concatClass', () => {
    const firstClass = 'first-class';
    const secondClass = 'second-class'
    expect(concatClass(firstClass, secondClass)).toBe(`${firstClass} ${secondClass}`);
});

test('test add addClass if condition is true', () => {
    const base = 'first-class';
    const secondClass = 'second-class'
    expect(addClass(true, base, secondClass)).toBe(`${base} ${secondClass}`);
});

test('test add addClass if condition is false', () => {
    const base = 'first-class';
    const secondClass = 'second-class'
    expect(addClass(false, base, null, secondClass)).toBe(`${base} ${secondClass}`);
});