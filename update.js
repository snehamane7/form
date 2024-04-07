import {React,useState} from 'react'
import { useForm, initialValues } from 'react-hook-form'
import{Button,Form,Input} from "antd";
import * as Yup from 'yup'

export const data = 
{
  "forms": [
  {
    "code": "form1",
    "name": "Business Related Questions",
    "id": "54921c26-0806-487a-8e0b-a4e75dd4d78c",
    "views":"123",
    "is_enabled": true,
    "questions": [
      {
        "code": "business_name",
        "name": "Business Name",
        "type": "text",
        "options": [],
        "questionnum": 1,
        "is_mandatory": true,
        "is_enabled": true
      },
      {
        "code": "idea_description",
        "name": "Idea/Concept Description",
        "type": "text",
        "options": [],
        "questionnum": 2,
        "is_mandatory": true,
        "is_enabled": true
      },
      {
        "code": "problem_solving",
        "name": "What problem you are solving?",
        "type": "text",
        "options": [],
        "questionnum": 3,
        "is_mandatory": true,
        "is_enabled": true
      },
      {
        "code": "projected_cost",
        "name": "What's the projected cost for each product/service?",
        "type": "text",
        "options": [],
        "questionnum": 4,
        "is_mandatory": true,
        "is_enabled": true
      },
      {
        "code": "customer_acquisition",
        "name": "What's your customer acquisition and distribution strategy?",
        "type": "text",
        "options": [],
        "questionnum": 5,
        "is_mandatory": true,
        "is_enabled": true
      },
      {
        "code": "customer_retention",
        "name": "What's your customer retention strategy?",
        "type": "text",
        "options": [],
        "questionnum": 6,
        "is_mandatory": true,
        "is_enabled": true
      },
      {
        "code": "vision",
        "name": "What is your vision?",
        "type": "text",
        "options": [],
        "questionnum": 7,
        "is_mandatory": true,
        "is_enabled": true
      }
    ]
  }
]
}

// export default function Update() 
// {
//   const {register,formState:{errors}}=useForm();
//   const onSubmit = (data)=>{
//     console.log("data",data)
//   }

//   return (
//     <div className='container'> 
//         {/* <form> */}
//         <div className='form-outer'>
//             <section>
//             {
//               data.forms.map(formsData => {
//                  console.log('formsData',formsData) 
//                 return (
                  
//                   <div key={formsData.id} style={{paddingLeft:"20px"}}>
//                   <h3>{formsData.name}</h3>
//                   <p>{formsData.views}</p>
//                   {/* const [inputData,setInputData] = usestate([ */}
//                   {
//                     formsData.questions.map(inputData => {
                      
//                       console.log('inputData',inputData)
                    
//                       return(
                        
//                         <div className='input'>
//                           <div key={formsData.id}>
//                           <label>{inputData.name}</label>
//                           {/* {console.log("errors",errors)}
//                           <form onSubmit={handleSubmit(onSubmit)}> */}
//                          <input type = {inputData.name} name={inputData.name} required={inputData.required}
//                           placeholder='Enter here' {...register("empty", {required:true})} datatype={inputData.type}  />
//                           {errors.empty && <p role='alert'>Enter Details</p>}
//                           {/* </form> */}
//                           </div>
//                         </div>
//                       )
//                     })
                  
//                   }
//                 </div>
              
//                 )
//             })
//           }
//           </section>
          
//         </div>  
//         {/* </form> */}
//         </div>
    
//   )
// }



function Update(){
  const [values,setValues]=useState({})
  // let {register, handleSubmit,errors } = useForm();
  
  const initialValues={
    user_id:" ",
    form_name:"formsData.name",
    form_id:"formsData.id",
    submission_id:"",
    "questions":[
      {
        question_name:"inputData.name",
        question_code:"inputData.code",
        is_mandatory:"inputData.is_mandatory",
        response:['','']
      },
    ]
  }
  // console.log(initialValues);
  // const onChangeEvent = (e)=>{
  //   setValues({
  //     ...values,
  //     [e.target.name]:e.target.values
      
  //   })
  // }
  const onSubmit=(values)=>{
    console.log({values});
  };

  // const handleSubmit=async (e)=>{
  //   e.preventDefault();
  //   return;
  // }
  // const validationSchema = Yup.object({
  //   name:Yup.string().required('Enter the details '),
  // })

  return (
    
    <div className='container'>
      <div className='form-outer'>
      <ul>
      {
              data.forms.map((formsData,index) => {
                //  console.log('formsData',formsData) 
                <li key={index}>{formsData}</li>
                return (
                  
                  <div key={formsData.id} style={{paddingLeft:"20px"}}>
                     
                  <h3>{formsData.name}</h3>
                  <p>{formsData.views}</p>
                  
                  {
                    
                    formsData.questions.map(inputData => {
                      // console.log('inputData',inputData)
                      return(
                        
                        <div className='input'>
                        <Form 
                        // initialValues={initialValues}
                        onSubmit={onSubmit}>
                          <div key={inputData.code}>
                            <Form.Item label >{inputData.name} 
                            <input type = {inputData.name} name={"inputData.code"}  id={inputData.code}  required={inputData.required}
                               datatype={inputData.type} placeholder='Enter here'
                              //  rules={[
                              //   {required:true, message:"Pleae enter details",},
                              //   {whitespace:true}, {min:3},
                              //  ]}
                                />
                                
                               {/* rules={[
                                {required:true, message:"Pleae enter details",},
                                {whitespace:true}, {min:3},
                               ]} */}
                               {/* <ErrorMessage name="inputData.name>
                               {errorMsg=> <div className="error">{errorMsg}</div>}
                               </ErrorMessage> */}
                               {/* {errors.empty && <p role='alert'>Enter Details</p>} */}
                            </Form.Item >
                            
                          </div>
                          </Form>
                          
                        </div>
                        
                      
                      )
                    })
                  }
                  </div>
                )
                
              })
              
      }
      </ul>
      <Button htmlType='submit' block type='primary'>Submit</Button>
      </div>
    </div>
    
    
    
  );
}
// function onSubmit(data){
//   console.log(data);
// }
export default Update;