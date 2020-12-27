import {Description} from './description.js';

var title="JSX Component";
var items=["alice","bob","charlie", "xavie"]

const list = items.map( next =>
 <li>{next}</li>
);

export const Page = {
  view: () => <div>
    <h2>{title}</h2>
    <ul>
     {list}
    </ul>
     <Description/>
  </div>
}
