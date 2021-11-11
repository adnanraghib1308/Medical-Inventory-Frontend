import React, {useState, useEffect} from 'react';
import { Button, Table, Modal } from "antd";
import * as request from "../../request/sales/request";



const productColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Cost Price",
    dataIndex: "cost_price",
    key: "cost_price",
  },
  {
    title: "Selling Price",
    dataIndex: "selling_price",
    key: "selling_price",
  },
];

const Sales = () => {
  const [salesData, setSalesData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const columns = [
  {
    title: "Customer Name",
    dataIndex: "customer_name",
    key: "name",
  },
  {
    title: "Contact Number",
    dataIndex: "contact_number",
    key: "contact_number",
  },
  {
    title: "Sale Date",
    dataIndex: "createdAt",
    key: "createdAt",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <div>
        <Button type='primary' style={{marginRight: '20px'}} onClick = {() => {
          setSelectedProducts(record.products);
          setIsModalVisible(true);
        }}>View Product</Button>
        <a
          target="_blank"
          href={`http://localhost:8000/api/billing/download/?file_path=${record.bill_path}`}
        >
          <Button type="primary">Download invoice</Button>
        </a>
      </div>
    ),
  },
];

  const loadData = async () => {
    const { data: sales } = await request.getAllSalesData();
    setSalesData(sales);
  };

  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <Table dataSource={salesData} columns={columns}></Table>
      <Modal title="Sold Product Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Table dataSource={selectedProducts} columns={productColumns}></Table>
      </Modal>
    </div>
  );
}

export default Sales;
