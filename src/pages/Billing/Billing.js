import React, {useState} from 'react'
import {formItemLayout, tailFormItemLayout} from "../../theme/_formLayout";
import {Button, Form, Input, InputNumber, Typography, Row, Col, notification, Spin} from "antd";
import * as request from '../../request/billing/request'
import ProductList from './ProductList';
import withErrorHandler from "../../helpers/withErrorHandler";
const { isProduction, BASE_API_URL, LOCAL_BASE_URL} = require('../../helpers/constant');

const API_URL = isProduction ? BASE_API_URL : LOCAL_BASE_URL;


const { Title } = Typography;
const {Search } = Input
const Billing = (props) => {
  const {getFieldDecorator, resetFields} = props.form;
  const [searchRes, setSearchRes] = useState(null);
  const [productDetail, setProductDetail] = useState([]);
  const [filePath, setFilePath] = useState(null);
  const [productQuantities, setProductQuantities] = useState({});
  const [loader, setLoader] = useState(false);

  const openNotification = ({ message }) => {
    notification.success({
      message,
    });
  }; 

  const handleSubmit = () => {
    props.form.validateFieldsAndScroll(withErrorHandler(async (err, values) => {
      if (!err) {
        try {
          const productDetailWithQuantity = productDetail.map(data => { 
            data.quantity = productQuantities[data._id];
            return data;
          })
          values.products = productDetailWithQuantity;
          setLoader(true);
          const filePathResponse = await request.generateFilePath(values);
          setLoader(false);
          setFilePath(filePathResponse);
        } catch (error) {
          setLoader(false);
          throw error;
        }
        openNotification({ message: "Bill Generation Successful. Please download." });
      }
    }));
  };
  const onSearch = async (value) => {
    const searchResults = await request.searchProduct(value)
    console.log("res", searchResults);
    setSearchRes(searchResults);
  }

   const clearData = () => {
     resetFields();
   };
  return (
    <div>
      <Spin spinning={loader}>
      <Form {...formItemLayout}>
        <Title level={2}>Customer Details</Title>
        {filePath && (
          <a
            target="_blank"
            style={{ paddingBottom: "10px" }}
            href={`${API_URL}billing/download/?file_path=${filePath}`}
          >
            <Button type="primary">Download invoice</Button>
          </a>
        )}
        <Row>
          <Col span={12}>
            <Form.Item label="Customer Name" style={{ marginTop: "30px" }}>
              {getFieldDecorator("customer_name", {
                rules: [
                  {
                    required: true,
                    type: "string",
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Contact Number" style={{ marginTop: "30px" }}>
              {getFieldDecorator("contact_number", {
                rules: [
                  {
                    required: true,
                    type: "string",
                  },
                ],
              })(<Input />)}
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailFormItemLayout} style={{ textAlign: "center" }}>
          <Button
            type="primary"
            style={{ width: "150px" }}
            onClick={handleSubmit}
          >
            {"Generate Bill"}
          </Button>
          <Button
            type="danger"
            style={{ width: "150px", marginLeft: "30px" }}
            onClick={clearData}
          >
            {"Clear"}
          </Button>
        </Form.Item>
      </Form>
      <Title level={2}>Product Details</Title>
      <Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 200 }}
        enterButton
      />
      <ProductList
        searchResults={searchRes}
        setProductDetail={setProductDetail}
        productQuantities={productQuantities}
        setProductQuantities={setProductQuantities}
      />
      </Spin>
    </div>
  );
}

const WrappedBillingForm = Form.create()(Billing);
export default WrappedBillingForm;
