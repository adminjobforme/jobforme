import { Button, Modal } from 'react-bootstrap';
import { DbOrder } from '../../shared/models/db-order-model';
import './OrderCard.css';
import { useEffect, useState } from 'react';
import { getStorageLink } from '../../shared/utils/firestore-utils';
import { OrderStatus } from '../../shared/enums/order-status';
import { setOrderStatus } from '../../shared/utils/firebase-functions';

interface props {
    order: DbOrder;
}

const OrderCard = (props: props) => {
 const {order} = props;
 const [show,setShow] = useState<boolean>(false);
 const [links, setLinks] = useState<string[]>();

 useEffect(() => {
    const getLinks = async () => {
        const urls: string[] = [];
        if(order.files){
            order.files?.forEach(
            async (ref) => {
                await getStorageLink(ref)
                .then((res) => {urls.push(res)}).catch((err) => console.log(err))
            });
        }
        await setLinks(urls)
    }
    
    getLinks();

 },[])

  const handleStatus = async (status: OrderStatus) => {
    setShow(false)
    await setOrderStatus({orderId: order.orderId, orderStatus: status}).then(
        () => {alert(`order: ${order.orderId} has successfully been set to ${status} `); order.orderStatus = status}
    ).catch((err) => console.log(err))
  }

  return (
    <>
        <div className='row d-flex align-items-center border rounded my-2 px-2 ' id='order-card'>
            <p className='col text-light mt-3'>{order.firstname + ' ' + order.surname}</p>
            <p className='col text-light mt-3'>{order.orderId}</p>
            <p className='col text-light mt-3'>{order.orderStatus}</p>
            <div className='col text-light'>
                {order.orderType?.map((type, index) => {
                    return(
                        <p className='row m-0 p-0 text-light' key={index}>
                            {type as string}
                        </p>
                    )
                })}
            </div>
            <Button className='btn-ternary w-25 p-0 m-0 col h-50' onClick={() => setShow(true)}>Show Details</Button>
        </div>
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{order.firstname + ' ' + order.surname}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='col'>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Order ID:
                        </p>
                        <p className='col'>
                            {order.orderId}
                        </p>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Order Type:
                        </p>
                        <div className='col d-flex flex-column'>
                            {order.orderType?.map((type,index) => {
                                return(
                                    <p className='row m-0 p-0' key={index}>
                                        {type}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Email:
                        </p>
                        <p className='col'>
                            <a href={`mailto:${order.email}`} className='text-decoration-none'>{order.email}</a>
                        </p>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Phone:
                        </p>
                        <p className='col'>
                            {order.phone}
                        </p>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Files:
                        </p>
                        <p className='col'>
                            {links?.map((link,index) => {
                                return(
                                    <a className='row m-0 p-0' key={index} href={link} rel='noreferrer' target='_blank'>
                                        {index == 0 ? 'CV' : 'Cover Letter'}
                                    </a>
                                )
                            })}
                        </p>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            LinkedIn:
                        </p>
                        <p className='col'>
                            {order.link? 
                            <a href={order.link} rel='noreferrer' target='_blank'>LinkedIn</a>
                             : 'N/A'}
                        </p>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Order Status:
                        </p>
                        <p className='col'>
                            {order.orderStatus}
                        </p>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Payment Status:
                        </p>
                        <p className='col'>
                            {order.paymentStatus}
                        </p>
                    </div>
                    <div className='row d-flex align-items-center border-bottom'>
                        <p className='col'>
                            Ordered on:
                        </p>
                        <p className='col'>
                            {order.created}
                        </p>
                    </div>
                    <div className='row d-flex align-items-center'>
                        <p className='col'>
                            Amount Paid:
                        </p>
                        <p className='col'>
                            {order.amount}
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='col'>
                <div className='row'>
                    <p className='text-center'>Mark as:</p>
                    <Button className='border' variant="outline" onClick={() => handleStatus(OrderStatus.PROCESSING)}>
                        {OrderStatus.PROCESSING}
                    </Button>
                    <Button variant="success" onClick={() => handleStatus(OrderStatus.DELIVERED)}>
                        {OrderStatus.DELIVERED}
                    </Button>
                    <Button className='text-white' variant="secondary" onClick={() => handleStatus(OrderStatus.DELAYED)}>
                        {OrderStatus.DELAYED}
                    </Button>
                    <Button className='text-white' variant="warning" onClick={() => handleStatus(OrderStatus.CANCELLED)}>
                        {OrderStatus.CANCELLED}
                    </Button>
                    <Button className='text-white' variant="danger" onClick={() => handleStatus(OrderStatus.TERMINATED)}>
                        {OrderStatus.TERMINATED}
                    </Button>
                    <Button className='text-white' variant="primary" onClick={() => handleStatus(OrderStatus.REFUNDED)}>
                        {OrderStatus.REFUNDED}
                    </Button>
                </div>
                <Button variant="danger" onClick={() => setShow(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default OrderCard