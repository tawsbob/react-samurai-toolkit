
/** add a class if the condition is true. 
 * @param {boolean} [condition=true] - condition to display the class
 * @param {string} [ifClass=null] - class to be returned if  condition is true
 * @param {string} [elseClass=null] - class to be returned if  condition is false
 * @example
 * // returns 'on'
 * addClassIf(true, 'on', 'off')
 * @example
 * // returns 'off'
 * addClassIf(false, 'on', 'off') 
 * @returns {string} ifClass or elseClass
*/
function addClassIf(condition = true, ifClass = null, elseClass = null ) {
    return !!condition ? ifClass : elseClass;
  }
  
  /** concatenate all params as a class
   * @param {...string} - classes to be concatenated
   * @example
   * // returns 'my-component my-second-class ...'
   * concatClass('my-component', 'my-second-class', '...')
   * 
   * @return {string} all the params together as html classes
   */
  function concatClass(...classes) {
    return classes.join(" ").trim();
  }

  /** add base class and a class if certain condition is true 
   * @param condition {boolean} [condition=false] - condition to display de class
   * @param baseClass {string} [baseClass=null] - the base class is always in the return
   * @param classIf {string} [classIf=null] - the class to be returned if condition is true
   * @param classElse {string} [classElse=null] - the class to be returned if condition is false
   * @example
   * // returns 'base-classe on'
   * addClass(true, 'base-class', 'on', 'off')
   * @example
   * // returns 'base-class off'
   * addClass(false, 'base-class', 'on', 'off')
   * 
   * @return {string} the base class and if or else class
   */
  function addClass(
    expression = false,
    defaultClass = null,
    ifConditionalIsTrue = null,
    ifConditionalIsFalse = null
  ) {
    return expression
      ? concatClass(defaultClass, ifConditionalIsTrue)
      : concatClass(defaultClass, ifConditionalIsFalse);
  }
  
  /** A css module function to get and return classes inside styles object
   * @param {object} [styles={}] - The css module object with hashed classes
   * @param {string} [className=''] - The classes separated by space
   * @example
   * 
   * const styles = { 
   *    container: 'Component_container__WQ2uP', 
   *    content: 'Component_content__uP24c' 
   * } 
   * getStyleClass(styles, 'container content')
   * // returns 'Component_container__WQ2uP Component_content__uP24c'
   * 
   * @return {string} string of classes
   */
  function getStyleClass(styles = {}, className = '') {
    const all_class = className.split(/\s/);
  
    return all_class.reduce((acc, current_class) => {
      if (styles[current_class]) {
        if(acc){
          acc = `${acc} ${styles[current_class]}`;
        } else {
          acc = styles[current_class]
        }
      }
  
      return acc;
    }, "");
  }
  
  
  function gst(styles, type) {
    if (type) {
      const types = type.split(/\s/);
  
      if (types.length) {
        return types
          .reduce((acc, currentType) => {
            if (styles[currentType]) {
              acc.push(styles[currentType]);
            }
            return acc;
          }, [])
          .join(" ");
      }
    }
  
    return null;
  }
  
  function c(styles, baseClass, ...restClass){
    return concatClass(getStyleClass(styles, baseClass), ...restClass)
  }

  module.exports = {
    addClassIf,
    concatClass,
    addClass,
    getStyleClass,
    gst,
    c,
  }