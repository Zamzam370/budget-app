import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import sinup from '../../assets/signup.jpeg';
import { NavLink, useNavigate, } from 'react-router'; // Use 'react-router-dom' instead of 'react-router'
import { supabase } from '../../config/url';
import Signin from './sign in';

// 

const { Option } = Select;

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async(values) => {
   
    try {
      console.log(values.email)
      console.log(values.password)
        const { data, error } = await supabase.auth.signUp({
    email: values.email,
    password: values.password,
  
  })
  if(data){

      const userId = data.user.id;// ✅ This is the user's ID
  console.log("User ID:", userId);
// navigate("/Signin",)
if(userId){
  navigate("/Signin",)
}
else{
  navigate("/")
}
  }
  if(error){
     console.log("Error:", error.message);
  }
 
} catch (error) {
  
  console.log("Error:", error.message);
}
  
    


  };

  const onFinishFailed = () => {
    alert('Failed: Please fill the form correctly!');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
        <h1 className="text-blue-500 text-center text-3xl mb-4">
          Welcome <br /> Personal Finance Tracker!!
        </h1>

        <img
          src={sinup}
          alt="Signup"
          className="w-44 h-24 mx-auto mb-6 rounded-full shadow-md"
        />

        <Form
          form={form}
          name="signup"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
         
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { type: 'email', message: 'Invalid email format!' },
              { required: true, message: 'Please enter your email!' },
            ]}
          >
            <Input placeholder="example@mail.com" />
          </Form.Item>

          
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter your password!' }]}
            hasFeedback
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          {/* Confirm Password */}
          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match!'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Re-enter password" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
             {/* <NavLink to="/signin"  block> */}
              Sign Up
            {/* </NavLink> */}
            </Button>
          </Form.Item>

          <div className="text-center">
            <span>Already have an account? </span>
            <NavLink to="/signin" className="text-blue-500 hover:underline">
              Sign In
            </NavLink>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
