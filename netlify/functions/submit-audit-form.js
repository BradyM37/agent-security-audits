exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Format data for Netlify Forms
    const formData = new FormData();
    formData.append('form-name', 'audit');
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('company', data.company);
    formData.append('system', data.system);
    formData.append('description', data.description);
    formData.append('scope', data.scope);

    // Submit to Netlify Forms using the form submission endpoint
    const response = await fetch('https://prompt-guard.netlify.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'form-name': 'audit',
        'name': data.name,
        'email': data.email,
        'company': data.company,
        'system': data.system,
        'description': data.description,
        'scope': data.scope,
      }),
    });

    if (!response.ok) {
      throw new Error(`Netlify Forms submission failed: ${response.statusText}`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
