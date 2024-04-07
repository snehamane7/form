// import { useForm, userForm } from 'react-hook-form';
import './App.css';
import Update from './components/update';
import{Button} from "antd";

function App() {
// const {handleSubmit,formState:{errors}}=useForm();
const onSubmit=(data)=>{
  console.log({data});
};
  return (
    <div style={{marginTop:'30px'}}>
      {/* {console.log("errors",errors)}
      <form onSubmit={handleSubmit(onSubmit)}> */}
        <Update/>
        {/* <Button htmlType='submit' type='primary'>Submit</Button> */}
        {/* onSubmit={onSubmit} */}
        {/* <button type='submit' onSubmit={onSubmit}  className='btn'>Submit</button> */}
      {/* </form> */}
      {/* <input type='submit' /> */}
    </div>
  );
}

export default App;
