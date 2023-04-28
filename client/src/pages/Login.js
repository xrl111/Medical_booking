// import { Button, Form, Input } from "antd";
// import React from "react";
// import toast from "react-hot-toast";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { hideLoading, showLoading } from "../redux/alertsSlice";

// function Login() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const onFinish = async (values) => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post("/api/user/login", values);
//       dispatch(hideLoading());
//       if (response.data.success) {
//         toast.success(response.data.message);
//         localStorage.setItem("token", response.data.data);
//         navigate("/");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <div className="authentication">
//       <div className="authentication-form card p-3">
//         <h1 className="card-title">Welcome Back</h1>
//         <Form layout="vertical" onFinish={onFinish}>
//           <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
//             <Input.Password placeholder="Password" />
//           </Form.Item>

          
//           <Button className="primary-button my-2 full-width-button" htmlType="submit">
//             LOGIN
//           </Button>

//           <Link to="/register" className="anchor mt-2">
//             CLICK HERE TO REGISTER
//           </Link>
         
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { Button, Form, Input, Row, Col } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button
                className="primary-button my-2 full-width-button"
                htmlType="submit"
              >
                LOGIN
              </Button>
            </Col>
            <Col span={24}>
              <Link to="/register" className="anchor mt-2">
                CLICK HERE TO REGISTER
              </Link>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default Login;