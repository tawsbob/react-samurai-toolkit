## Classes

Methods that's helps to work with css modules

## Functions

<dl>
<dt><a href="#addClassIf">addClassIf([condition], [ifClass], [elseClass])</a> ⇒ <code>string</code></dt>
<dd><p>add a class if the condition is true.</p>
</dd>
<dt><a href="#concatClass">concatClass(...classes)</a> ⇒ <code>string</code></dt>
<dd><p>concatenate all params as a class</p>
</dd>
<dt><a href="#toggleClass">toggleClass([condition], [baseClass], [classIf], [classElse])</a> ⇒ <code>string</code></dt>
<dd><p>add base class and a class if certain condition is true</p>
</dd>
<dt><a href="#gst">gst([styles], [className])</a> ⇒ <code>string</code></dt>
<dd><p>gst is a acronym to getStyleClass - A css module function to get and return classes inside styles object</p>
</dd>
<dt><a href="#c">c([styles], [baseClass], ...restClass)</a></dt>
<dd><p>A function mix all helpers together, to prevent verbose code like concacClass(gst(styles, &#39;container&#39;), &#39;on&#39;)</p>
</dd>
</dl>

<a name="addClassIf"></a>

## addClassIf([condition], [ifClass], [elseClass]) ⇒ <code>string</code>
add a class if the condition is true.

**Kind**: global function  
**Returns**: <code>string</code> - ifClass or elseClass  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [condition] | <code>boolean</code> | <code>true</code> | condition to display the class |
| [ifClass] | <code>string</code> | <code>null</code> | class to be returned if  condition is true |
| [elseClass] | <code>string</code> | <code>null</code> | class to be returned if  condition is false |

**Example**  
```js
// returns 'on'
addClassIf(true, 'on', 'off')
```
**Example**  
```js
// returns 'off'
addClassIf(false, 'on', 'off') 
```
<a name="concatClass"></a>

## concatClass(...classes) ⇒ <code>string</code>
concatenate all params as a class

**Kind**: global function  
**Returns**: <code>string</code> - all the params together as html classes  

| Param | Type | Description |
| --- | --- | --- |
| ...classes | <code>string</code> | classes to be concatenated |

**Example**  
```js
// returns 'my-component my-second-class ...'
concatClass('my-component', 'my-second-class', '...')
```
<a name="toggleClass"></a>

## toggleClass([condition], [baseClass], [classIf], [classElse]) ⇒ <code>string</code>
add base class and a class if certain condition is true

**Kind**: global function  
**Returns**: <code>string</code> - the base class and if or else class  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [condition] | <code>boolean</code> | <code>false</code> | condition to display de class |
| [baseClass] | <code>string</code> | <code>null</code> | the base class is always in the return |
| [classIf] | <code>string</code> | <code>null</code> | the class to be returned if condition is true |
| [classElse] | <code>string</code> | <code>null</code> | the class to be returned if condition is false |

**Example**  
```js
// returns 'base-classe on'
toggleClass(true, 'base-class', 'on', 'off')
```
**Example**  
```js
// returns 'base-class off'
toggleClass(false, 'base-class', 'on', 'off')
```
<a name="gst"></a>

## gst([styles], [className]) ⇒ <code>string</code>
gst is a acronym to getStyleClass - A css module function to get and return classes inside styles object

**Kind**: global function  
**Returns**: <code>string</code> - string of classes  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [styles] | <code>object</code> | <code>{}</code> | The css module object with hashed classes |
| [className] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | The classes separated by space |

**Example**  
```js
const styles = { 
   container: 'Component_container__WQ2uP', 
   content: 'Component_content__uP24c' 
} 
getStyleClass(styles, 'container content')
// returns 'Component_container__WQ2uP Component_content__uP24c'
```
<a name="c"></a>

## c([styles], [baseClass], ...restClass)
A function mix all helpers together, to prevent verbose code like concacClass(gst(styles, 'container'), 'on')

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [styles] | <code>object</code> | <code>{}</code> | object css module of css or scss file |
| [baseClass] | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code> | A classes in styles object separated by space |
| ...restClass | <code>string</code> |  | strings that will be included (concatenated) with base class |

**Example**  
```js
const styles = { 
   container: 'Component_container__WQ2uP', 
   content: 'Component_content__uP24c' 
} 
c(styles, 'container content', 'my-other-class')
// returns 'Component_container__WQ2uP Component_content__uP24c my-other-class' 
```

## Utils

<dl>
<dt><a href="#isServer">isServer()</a> ⇒ <code>boolean</code></dt>
<dd><p>help method to detect if code runs on server</p>
</dd>
<dt><a href="#isClient">isClient()</a> ⇒ <code>boolean</code></dt>
<dd><p>help method to detect if code runs on client</p>
</dd>
<dt><a href="#getRefValue">getRefValue(ref)</a> ⇒ <code>any</code></dt>
<dd><p>get input value from react ref.</p>
</dd>
<dt><a href="#renderIf">renderIf([condition], [ifComponent], [elseComponent])</a> ⇒ <code>ReactComponent</code></dt>
<dd><p>method to render conditionally a react component.</p>
</dd>
<dt><a href="#redirect404">redirect404([opts])</a></dt>
<dd><p>return this method on getServerSideProps to 404 redirect</p>
</dd>
</dl>

<a name="isServer"></a>

## isServer() ⇒ <code>boolean</code>
help method to detect if code runs on server

**Kind**: global function  
**Example**  
```js
// returns true if is in server
isServer()
```
<a name="isClient"></a>

## isClient() ⇒ <code>boolean</code>
help method to detect if code runs on client

**Kind**: global function  
**Example**  
```js
// returns true if is in server
isClient()
```
<a name="getRefValue"></a>

## getRefValue(ref) ⇒ <code>any</code>
get input value from react ref.

**Kind**: global function  
**Returns**: <code>any</code> - Current value of input  

| Param | Type | Description |
| --- | --- | --- |
| ref | <code>object</code> | the ref of element |

**Example**  
```js
getRefValue(inputRef)
```
<a name="renderIf"></a>

## renderIf([condition], [ifComponent], [elseComponent]) ⇒ <code>ReactComponent</code>
method to render conditionally a react component.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [condition] | <code>boolean</code> | <code>true</code> | condition to display the component |
| [ifComponent] | <code>string</code> | <code>null</code> | component to render if condition is true |
| [elseComponent] | <code>string</code> | <code>null</code> | component to render if condition is false |

**Example**  
```js
const loading = true
renderIf(loading, (<span>loading</span>)) // return <span>loading</span>
```
**Example**  
```js
const loading = false
renderIf(loading, (<span>loading</span>), (<span>loaded</span>)) // <span>loaded</span>
```
<a name="redirect404"></a>

## redirect404([opts])
return this method on getServerSideProps to 404 redirect

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [opts] | <code>object</code> | <code></code> | object to merge with redirect object |

**Example**  
```js
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
```