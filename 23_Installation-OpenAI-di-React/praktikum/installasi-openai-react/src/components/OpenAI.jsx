import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const OpenAI = () => {
    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState('');

    const submitOpenAIRequest = () => {
        // Replace 'YOUR_OPENAI_API_KEY' with your OpenAI API key
        const apiKey = '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';

        // Replace 'davinci-03' with the desired model
        const modelName = 'text-davinci-003';

        // Replace with the appropriate API endpoint
        const apiUrl = `https://api.openai.com/v1/engines/${modelName}/completions`;

        // Create data object to send to the API
        const data = {
            prompt: userInput,
            max_tokens: 150,
        };

        // Send request to the OpenAI API
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                setResponse(data.choices[0].text);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
            <h1>OpenAI Chat Form</h1>
            <form style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#333' }} htmlFor="userInput">Input:</label>
                <input
                    type="text"
                    id="userInput"
                    name="userInput"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
                    required
                />
                <button
                    type="button"
                    onClick={submitOpenAIRequest}
                    style={{ backgroundColor: '#007bff', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '16px' }}
                >
                    Submit
                </button>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'center', color: '#333' }}>
                <p>Response:</p>
                <p style={{ textAlign: 'justify' }}>{response}</p>
            </div>
        </div>
    );
};

export default OpenAI;
