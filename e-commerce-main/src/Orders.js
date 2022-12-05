import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order';
// import {query, collection, onSnapshot, orderBy} from 'firebase/firestore';

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    //     const ref = collection(db, 'users', user?.uid, 'orders')
    //     const orderedOrders = query(ref, orderBy('created', 'desc'))
    //     onSnapshot(orderedOrders, snapshot => {
    //     setOrders(snapshot.docs.map(doc => ({
    //        id: doc.id,
    //        data: doc.data()
    //     })))
    //   })

    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map((order, index) => (
                    <Order order={order} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Orders;