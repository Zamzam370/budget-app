import React from 'react';
import { Button, Form, Input } from 'antd';
import sinin from "../../assets/signin.png"; // Your image
import { NavLink } from 'react-router';
import { supabase } from '../../config/url';

const Signin = () => {
  const [form] = Form.useForm(); // 

  const onFinish = async(values) => {
  try {
   const { data, error } = await supabase.auth.signInWithPassword({
    email:values.email ,
    password:values.password ,
  })
  if(data){

      const userId = data.user.id;
  console.log("User ID:", userId);
  form.resetFields();

if(userId){
  navigate("/home",)
}
else{
  navigate("/")
}
  }
  if(error){
     alert("Error:", error.message);
  }
} catch (error) {
// Agar error aaye to yeh block chalega
  alert("Error:", error.message);
}
  };
  
//    console.log(values.email)
//    console.log(values.password)
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email:values.email ,
//     password:values.password ,
//   })
//   if(data){
//     console.log("connected with supabase")
//   }
// else{
//   console.log(error)
// }

  const onFinishFailed = (errorInfo) => {
    alert('Failed: Please fill the form correctly!');
  };

 

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        <h1 className='text-blue-500 text-center text-3xl'>Welcome <br />Personal Finance Tracker !!</h1>
        <img
          src={sinin}
          alt="Logo"
          className="w-24 h-24 mx-auto mb-6 rounded-full shadow-md"
        /> 
        

        <Form
          form={form} // ✅ bind here
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label={<span className="text-blue-500 font-medium">Email</span>}
            rules={[
              { type: 'email', message: 'Invalid email format!' },
              { required: true, message: 'Please input your email!' },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span className="text-blue-500 font-medium">Password</span>}
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item className="flex justify-between">
            <Button type="primary" htmlType="submit" >Sing In</Button>
       
          </Form.Item>

          <div className="text-center mt-4 text-sm text-gray-500">
            Don’t have an account?
            <NavLink to="/" className="text-blue-500  ml-2     hover:underline">Go to Sign Up</NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
