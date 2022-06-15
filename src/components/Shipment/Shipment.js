import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {

    const [name, setName] =  useState('');
    const [email, setEmail] =  useState('');
    const [address, setAddress] =  useState('');
    const [phone, setPhone] =  useState('');

    const [user] =useAuthState(auth);


    const handleNameBlur = event => {
        setName(event.target.value);
    };


    const handleAddress = event => {
        setAddress(event.target.value);
    };
    
    const handlePhone = event => {
        setPhone(event.target.value);
    };

    const shopping = [name, email, address, phone];
    console.log(shopping);


    return (
        <div className='form-container'>
        <div>
        <h3 className='form-title'> Email </h3>

                <form>

                    <div className="input-group">
                        <label htmlFor='name'> Name </label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='email'> Email </label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='address'> Address </label>
                        <input onBlur={handleAddress} type="text" name="address" id="" required/>
                    </div>

                    <div className="input-group">
                        <label htmlFor='phone'> Phone </label>
                        <input onBlur={handlePhone} type="password" name="phone" id="" required/>
                    </div>

                    
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>

        </div>
    </div>
    );
};

export default Shipment;