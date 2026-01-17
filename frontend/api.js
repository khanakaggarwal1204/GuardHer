// API Base URL - change this to your backend URL
const API_BASE_URL = 'http://localhost:3000'; // Update port if different

// Analyze a single message for threats
export async function analyzeMessage(message) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error analyzing message:', error);
    throw error;
  }
}

// Analyze a conversation (multiple messages)
export async function analyzeConversation(messages) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/analyze-conversation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error analyzing conversation:', error);
    throw error;
  }
}