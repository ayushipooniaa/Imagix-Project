import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const BuyCredit = () => {
  const { backendUrl, loadCreditsData, user, token, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  // Initialize Razorpay Payment
  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: 'Add Credits to Your Account',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(`${backendUrl}/api/user/verify-razor`, response, {
            headers: { token },
          });

          if (data.success) {
            loadCreditsData();
            navigate('/');
            toast.success('Credits successfully added!');
          }
        } catch (err) {
          toast.error(err.message || 'Payment verification failed');
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Razorpay Payment Trigger
  const paymentRazorpay = async (planId) => {
    try {
      if (!user) return setShowLogin(true);

      const { data } = await axios.post(`${backendUrl}/api/user/pay-razor`, { planId }, {
        headers: { token },
      });

      if (data.success) {
        initPay(data.order);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Stripe Payment Trigger
  const paymentStripe = async (planId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/pay-stripe`, { planId }, {
        headers: { token },
      });

      if (data.success) {
        window.location.replace(data.session_url);
      } else {
        toast.error(data.message || 'Stripe payment failed');
      }
    } catch (err) {
      toast.error(err.message || 'Something went wrong');
    }
  };

  return (
    <motion.section
      className="min-h-[80vh] text-center py-14 px-4"
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <span className="inline-block border border-gray-400 px-6 py-2 text-sm rounded-full mb-6">
        Our Plans
      </span>

      <h1 className="text-3xl font-medium mb-10">Choose a credit plan</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-sm p-10 w-80 hover:scale-105 transition-transform duration-500 text-gray-700"
          >
            <img src={assets.logo_icon} alt="Plan Icon" width={40} />
            <h3 className="mt-4 mb-1 font-semibold">{plan.id}</h3>
            <p className="text-sm text-gray-500">{plan.desc}</p>

            <div className="mt-6 text-lg">
              <span className="text-3xl font-semibold">₹{plan.price}</span>{' '}
              <span className="text-sm text-gray-500">/ {plan.credits} credits</span>
            </div>

            <div className="flex flex-col mt-5 gap-2">
              <button
                onClick={() => paymentRazorpay(plan.id)}
                className="flex justify-center items-center gap-2 border border-gray-400 rounded-md py-2.5 text-sm hover:bg-blue-50 hover:border-blue-500"
              >
                <img src={assets.razorpay_logo} alt="Razorpay" className="h-4" />
                Pay with Razorpay
              </button>

              <button
                onClick={() => paymentStripe(plan.id)}
                className="flex justify-center items-center gap-2 border border-gray-400 rounded-md py-2.5 text-sm hover:bg-blue-50 hover:border-blue-500"
              >
                <img src={assets.stripe_logo} alt="Stripe" className="h-4" />
                Pay with Stripe
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default BuyCredit;
