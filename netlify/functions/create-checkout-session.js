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

    // Build detailed description
    let description = '';
    if (scope === 'quick') {
      description = '10+ test vectors · 24-hour turnaround · Focused vulnerability scan';
    } else if (scope === 'standard') {
      description = '30+ test vectors · 24-hour turnaround · Full attack surface testing · CVSS scoring · Remediation roadmap';
    } else if (scope === 'comprehensive') {
      description = '50+ test vectors · 48-hour turnaround · Multi-model testing · Architecture recommendations · Post-remediation testing';
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `PromptGuard AI Security Audit`,
              description: `${scopeNames[scope] || 'Audit'} for ${system || 'AI system'} — ${description}`,
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
