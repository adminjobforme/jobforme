import './OrdersOverview.css';
import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../../../shared/utils/firestore-utils';
import OrderCard from '../../../components/order-card/OrderCard';
import { DbOrder } from '../../../shared/models/db-order-model';
import { Dropdown } from 'react-bootstrap';
import { OrderStatus } from '../../../shared/enums/order-status';

const OrdersOverview = () => {
  const [orders, setOrders] = useState<DbOrder[]>();
  const [ordersUnfiltered, setOrdersUnfiltered] = useState<DbOrder[]>();
  const [toggle, setToggle] = useState<string>('Order Status')
  const ORDER_STATUSES = [OrderStatus.CANCELLED,
                          OrderStatus.DELAYED,
                          OrderStatus.DELIVERED,
                          OrderStatus.PROCESSING,
                          OrderStatus.RECEIVED,
                          OrderStatus.REFUNDED,
                          OrderStatus.TERMINATED]

  useEffect(() => {
    const fetchData = async () => {
        const res = await getAllOrders()
            .then((val) => {return val.docs.map((doc) => { return doc.data() as unknown as DbOrder})})
            .catch((err) => console.log(err));
        
        await setOrders(res ? res : undefined);
        await setOrdersUnfiltered(res ? res : undefined);
    };

    fetchData();
  },[])

  const handleStatusFilter = async (status: OrderStatus) => {
    await setToggle(status);
    await setOrders(ordersUnfiltered?.filter((order) => {return order.orderStatus == status}))
  }

  const handleFilters = async (search: string) => {
    await handleNoFilter();
    await setOrders(ordersUnfiltered?.filter((order) => {
        return (
            (order.orderId? order.orderId : '').toLowerCase().includes(search.toLowerCase()) ||
            (order.firstname + ' ' + order.surname).toLowerCase().includes(search.toLowerCase()))
    }))
    
  }


  const handleNoFilter = async () => {
    await setToggle('Order Status');
    await setOrders(ordersUnfiltered);
  }

  return (
    <main className='d-flex flex-column align-items-center justify-content-center w-100 overflow-hidden' id='orders-overview'>
        <div className='d-flex justify-content-around align-items-center my-2 w-100' id='orders-overview-filter'>
            <div className='w-100 d-flex justify-content-center'>
                Filters:
            </div>
            <div className='w-100 d-flex justify-content-around'>
                <input type="text" placeholder='Name / Order No.' onChange={(e) => handleFilters(e.target.value)} />
                <Dropdown>
                    <Dropdown.Toggle className='border-dark' variant="outline">
                        {toggle}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleNoFilter()}>
                                    No Filter
                        </Dropdown.Item>
                        {ORDER_STATUSES.map((status, index) => {
                            return(
                                <Dropdown.Item key={index} onClick={() => handleStatusFilter(status)}>
                                    {status}
                                </Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className='col justify-content-center h-100 w-100 overflow-auto' id='orders-overview-content'>
            {orders?.map((order, index) => {
                return(
                    <div className='d-flex align-items-center justify-content-center w-100' key={index}>
                        <OrderCard key={index} order={order}/>
                    </div>
                );
            })}
        </div>
    </main>
  )
}

export default OrdersOverview