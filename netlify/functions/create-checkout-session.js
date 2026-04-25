const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, company, system, scope, amount } = JSON.parse(event.body);

    // Map scope to product name
    const scopeNames = {
      'quick': 'Quick Assessment',
      'standard': 'Standard Audit',
      'comprehensive': 'Comprehensive Review'
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `PromptGuard - ${scopeNames[scope] || 'AI Security Audit'}`,
              description: `Security audit for ${system || 'AI system'}`,
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      customer_email: email,
      mode: 'payment',
      success_url: `https://prompt-guard.netlify.app/#contact`,
      cancel_url: `https://prompt-guard.netlify.app/#contact`,
      metadata: {
        scope,
        name,
        email,
        company,
        system,
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
