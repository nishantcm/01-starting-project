import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from './component/Header/Header.jsx';
import { CoreConcept } from './component/CoreConcept.jsx';
import TabButton from './component/TabButton.jsx';
import { EXAMPLES } from './data.js';
function App() {
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton){
    // selectButton => 'components', 'jsx', 'props', state'
    setSelectedTopic(selectedButton)
    console.log(selectedTopic);
   }

   console.log('APP COMPONENT EXECUTING');
   let tabContent = <p>Please select a topic.</p>

   if (selectedTopic) {
    tabContent =( 
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
   }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title}{...conceptItem} />
          )) }
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic ==='components' } onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic ==='jsx' } onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic ==='props' }onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic ==='state' }onSelect={() => handleSelect('state')}>State</TabButton>  
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
