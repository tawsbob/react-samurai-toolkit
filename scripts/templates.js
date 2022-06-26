function component(name) {
    return `
import PropTypes from 'prop-types';
import { c } from '@class';
//import { } from '@components';
import styles from './Component.module.scss';
function ${name}({ className }){
    return (
        <div className={c(styles, 'container', className)}>
        </div>
    )
}
${name}.propTypes = {
    className: PropTypes.string
}
${name}.defaultProps = {
    className: '',
}
export default ${name}`;
  }
  
  function scss() {
    return `.container {} `;
  }
  
  function include(component_name, folder_name) {
    return `\n export { default as ${component_name} } from './${folder_name}/index.js';`;
  }
  
  function page() {
    return `import { Header, Page } from '@components';
      //import {  } from '@utils';
      
      
      export default function Page() {
        return (
          <Page title="" description="">
            <main>
              <Header />
            </main>
          </Page>
        );
      }`;
  }
  module.exports = {
    component,
    include,
    scss,
    page,
  };