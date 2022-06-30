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
 * @param {object} [opts=null] - object to merge with redirect object
 * @example
 * 
export async function getServerSideProps(res){

    try {

        const { data } = await SomePromise();

        if(data && data.length){
            return {
                props: {
                    courses: data
                }
            }
        }

    } catch(e){
        return redirect404()
    }
}
 */
function redirect404(opts  = null){
    return  {
      redirect: {
          permanent: false,
          destination: "/not-found",
          ...opts,
        }
    }
  }

function moneyFormatter(lang = 'pt-BR', style='currency', currency='BRL'){
    return new Intl.NumberFormat(lang, { style, currency });
}
  
  export function cacheServeSideProps (res, maxage='900', revalidate='910'){
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
  }