import React, {useEffect, useState} from 'react'
import { Table } from 'antd';
import * as request from '../../request/inventory/request';

const columns = [
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


const ListInventory = () => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  const loadData = async () => {
    setLoader(true)
    const {data: productData} = await request.getAllProducts();
    setProducts(productData);
    setLoader(false);
  }
  useEffect(() => {
    loadData();
  }, [])
  return (
    <div>
      <Table dataSource={products} columns={columns} loading={loader}>

      </Table>
    </div>
  )
}

export default ListInventory
