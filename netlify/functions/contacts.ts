import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ 
        message: 'Method not allowed' 
      }),
    };
  }

  try {
    // For now, return an empty array
    // In a real implementation, you would fetch from your database
    const contacts = [];

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(contacts),
    };

  } catch (error) {
    console.error('Get contacts error:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Failed to retrieve contacts' 
      }),
    };
  }
};
