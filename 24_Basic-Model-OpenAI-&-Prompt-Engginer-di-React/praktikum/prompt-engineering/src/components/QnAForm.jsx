import React, { useState } from 'react';

const QnAForm = () => {
    const [question, setQuestion] = useState('' + 'menurut para ahli');
    const [answer, setAnswer] = useState('');

    const submitOpenAIRequest = () => {
        // Ganti 'YOUR_OPENAI_API_KEY' dengan kunci API OpenAI Anda
        const apiKey = 'YOUR_OPENAI_API_KEY';

        // Ganti 'davinci-03' sesuai dengan model yang Anda inginkan
        const modelName = 'davinci-03';

        // Buat URL API OpenAI
        const apiUrl = `https://api.openai.com/v1/engines/${modelName}/completions`;

        // Gunakan prompt Q&A sesuai kebutuhan
        const prompt = `Q: ${question}\nA:`;

        // Buat objek data untuk dikirimkan ke API
        const data = {
            prompt: prompt,
            max_tokens: 150,
        };

        // Kirim permintaan ke API OpenAI
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
                // Ambil jawaban dari hasil API
                const answerText = data.choices[0].text;

                // Update state untuk menampilkan jawaban
                setAnswer(answerText);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', maxWidth: '400px', margin: 'auto', paddingTop: '50px' }}>
            <h1>OpenAI Q&A Form</h1>
            <form style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <label style={{ display: 'block', marginBottom: '8px', color: '#333' }} htmlFor="question">Question:</label>
                <input
                    type="text"
                    id="question"
                    name="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value + ' menurut para ahli')}
                    style={{ width: '100%', padding: '10px', marginBottom: '16px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }}
                    required
                />
                <button
                    type="button"
                    onClick={submitOpenAIRequest}
                    style={{ backgroundColor: '#007bff', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%', fontSize: '16px' }}
                >
                    Get Answer
                </button>
            </form>
            <div style={{ marginTop: '20px', textAlign: 'center', color: '#333' }}>
                <p>Answer:</p>
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default QnAForm;
