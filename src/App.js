//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { AutoForm,
  AutoField,
  ErrorField,
  SubmitField,
  DateField
} from 'uniforms-semantic';

import { bridge as schema } from './Schema';

function submitHandler(e) {
  console.log('loguje', e);
  
  axios.post('https://sheet.best/api/sheets/4b708e86-ec8a-4aa7-9e0b-fb725149d66b', e)
  .then(response => {
    console.log(response);
  })
}


function App() {
  return (
    <AutoForm schema={schema} onSubmit={submitHandler}>
    <h4 className="text-center text-xl font-bold md:text-lg py-6 text-white">"Kwintecik_ - forms' section</h4>
    <div className="py-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-x-4 space-y-2">
    <AutoField name="sectionName" errorMessage="You have to provide your section name!"className="text-left"/>
    <DateField name="sectionDateStart" className="text-left"/>
    <ErrorField 
    name="sectionDateStart" className="bg-red-500 rounded p-2 text-white"/>
    <DateField name="sectionDateEnd" className="text-left"/>
    <ErrorField 
    name="sectionDateEnd" className="bg-red-500 rounded p-2 text-white"/>
    <SubmitField className="bg-blue-600 text-white hover:bg-blue-800 ring-0 rounded shadow-md hover:shadow-xl"/>
    </div>
    </AutoForm>
  );
}

export default App;
