const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, auditType, amount } = JSON.parse(event.body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: auditType === 'quick' ? 'Quick AI Agent Security Audit' : 'Deep AI Agent Security Audit',
              description: auditType === 'quick' 
                ? '24-hour turnaround, 10 critical checks'
                : '3-5 day turnaround, 30+ vulnerability vectors',
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      mode: 'payment',
      success_url: `${process.env.URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.URL}/#${auditType}-form`,
      metadata: {
        auditType,
        name,
        email,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    };
  } catch (error) {
    console.error('Stripe error:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
