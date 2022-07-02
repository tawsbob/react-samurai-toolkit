/** help method to detect if code runs on server 
 * @example
 * // returns true if is in server
 * isServer()
 * @returns {boolean}
*/
function isServer(){
    return (typeof window === 'undefined')
}

/** help method to detect if code runs on client 
 * @example
 * // returns true if is in server
 * isClient()
 * @returns {boolean}
*/
function isClient(){
    return !isServer()
  }

/** get input value from react ref. 
 * @param {object} - the ref of element
 * @example
 * getRefValue(inputRef)
 * @returns {any} Current value of input
*/
function getRefValue(ref) {
    if (typeof ref?.current?.value === "boolean") {
      return ref?.current?.value;
    }
    return ref?.current?.value || null;
}

/** method to render conditionally a react component. 
 * @param {boolean} [condition=true] - condition to display the component
 * @param {string} [ifComponent=null] - component to render if condition is true
 * @param {string} [elseComponent=null] - component to render if condition is false
 * @example
 * const loading = true
 * renderIf(loading, (<span>loading</span>)) // return <span>loading</span>
 * @example
 * const loading = false
 * renderIf(loading, (<span>loading</span>), (<span>loaded</span>)) // <span>loaded</span>
 * @returns {ReactComponent}
*/
function renderIf(condition = true, ifComponent = null, elseComponent = null) {
    return condition ? ifComponent : elseComponent;
}

/** return this method on getServerSideProps to 404 redirect 
 * @param {object} [redirect=null] - redirect object
 * @example
 * 
export async function getServerSideProps(res){

    try {

        return await SomePromise();

    } catch(e){
        return redirect404()
    }
}
 */
function redirect404(redirect = {
    permanent: false,
    destination: "/not-found",
}){
    return  { redirect }
}

/** Method to format number as money / currency 
 * @param {string} [lang='pt-BR'] - language
 * @param {string} [style='currency'] - style
 * @param {string} [currency='BRL'] - currency
 * @example
 * 
 * const Formarter = moneyFormatter();
 * Formarter.format(10) // 'R$ 10,00'
 * 
 *@returns {Object} - new Intl.NumberFormat(lang, { style, currency })
 */
function moneyFormatter(lang = 'pt-BR', style='currency', currency='BRL'){
    return new Intl.NumberFormat(lang, { style, currency });
}

/** check if  process.env.NODE_ENV === 'production'
 * @example
 * isProduction() // true or false
 *@returns {boolean}
*/
function isProduction(){
    return process.env.NODE_ENV.toLocaleLowerCase() === 'production'
}

/** cache server side props (Only production env) 
 * @param {object} [res] - response object from nextjs
 * @param {string} [maxage='900'] - maxage param
 * @param {string} [revalidate='910'] - revalidate param
 * @example
 * 
export async function getServerSideProps(res){

    //will cache this request
    cacheServeSideProps(res);

    try {
        return await SomePromise();

    } catch(e){
        return redirect404()
    }
}
 */
function cacheServeSideProps (res, maxage='900', revalidate='910'){
    if(isProduction()){
      if(res){
        res.setHeader(
          'Cache-Control',
          `public, s-maxage=${maxage}, stale-while-revalidate=${revalidate}`
        )
      }
    }
  }

  module.exports = {
    isServer,
    isClient,
    getRefValue,
    renderIf,
    redirect404,
    moneyFormatter,
    cacheServeSideProps,
    isProduction,
  }