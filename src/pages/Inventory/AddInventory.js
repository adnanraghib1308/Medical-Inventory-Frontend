import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Input, Button, notification, Spin, InputNumber } from 'antd';
import { formItemLayout, tailFormItemLayout } from "../../theme/_formLayout";
import withErrorHandler from '../../helpers/withErrorHandler';
import * as request from '../../request/inventory/request';


const AddInventory = (props) => {
  
  const [loader, setLoader] = useState(false);

  const {TextArea} = Input;
  const {getFieldDecorator, resetFields} = props.form;
  
  const handleSubmit = (obj) => (e) => {
    e.preventDefault();

    const openNotification = ({ message }) => {
      notification.success({
        message,
      });
    };

    props.form.validateFieldsAndScroll(withErrorHandler(async (err, values) => {
      if (!err) {
        try {
          setLoader(true);
          await request.addProductData(values);
          setLoader(false);
        } catch (error) {
          setLoader(false);
          throw error;
        }
        openNotification({ message: "Product added Successfully"})
      }
    }));
  };

  const clearData = () => {
    resetFields();
  }
  return (
    <div>
      <Spin spinning={loader}>
        <Row>
          <Col span={21}></Col>
          <Col span={3}>
            <Button onClick={()=> props.history.push('/inventory/list')}>See Product List</Button>
          </Col>
        </Row>
        <Form {...formItemLayout}>
          <Form.Item label="Name" style={{ marginTop: "30px" }}>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  type: "string",
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Quantity In Stock" >
            {getFieldDecorator("quantity_in_stock", {
              rules: [
                {
                  required: true,
                  type: "number",
                },
              ],
            })(<InputNumber style={{width: '370px'}} />)}
          </Form.Item>
          <Form.Item label="Low Stock Warning" >
            {getFieldDecorator("low_stock_warning", {
              rules: [
                {
                  required: true,
                  type: "number",
                },
              ],
            })(<InputNumber style={{width: '370px'}} />)}
          </Form.Item>
          
          <Form.Item label="Cost Price (1 item)" >
            {getFieldDecorator("cost_price", {
              rules: [
                {
                  required: true,
                  type: "number",
                },
              ],
            })(<InputNumber style={{width: '370px'}} />)}
          </Form.Item>
          <Form.Item label="Selling Price (1 item)" >
            {getFieldDecorator("selling_price", {
              rules: [
                {
                  required: true,
                  type: "number",
                },
              ],
            })(<InputNumber style={{width: '370px'}} />)}
          </Form.Item>
          
          <Form.Item {...tailFormItemLayout} style={{textAlign: 'center'}}>
            <Button
              type="primary"
              onClick={handleSubmit()}
              style={{ width: "150px" }}
            >
              {"Add Product"}
            </Button>
            <Button
              type="danger"
              onClick={clearData}
              style={{ width: "150px", marginLeft: "30px" }}
            >
              {"Clear"}
            </Button>
          </Form.Item>
        </Form>
      </Spin>
    </div>
  );
}

const WrappedAddInventoryForm = Form.create({ name: "create" })(AddInventory);
export default WrappedAddInventoryForm;
