const { addClassIf, concatClass, addClass, gst } = require('./classes');

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

test('add addClass if condition is true', () => {
    const base = 'first-class';
    const secondClass = 'second-class'
    expect(addClass(true, base, secondClass)).toBe(`${base} ${secondClass}`);
});

test('add addClass if condition is false', () => {
    const base = 'first-class';
    const secondClass = 'second-class'
    expect(addClass(false, base, null, secondClass)).toBe(`${base} ${secondClass}`);
});

test('get classes from styles', () => {
     const styles = { 
        container: 'Component_container__WQ2uP', 
        content: 'Component_content__uP24c' 
     }  
    expect(gst(styles, 'container content')).toBe(`${styles.container} ${styles.content}`);
});