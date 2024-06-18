import axios from 'axios';

export default async function handler(req, res) {
    const API_URL = 'http://localhost:3000/api/tasks';
    try {
        if (req.method === "GET") {
            const response = await axios.get(API_URL);
            res.status(200).json(response.data);
        } else if (req.method === "POST") {
            const response = await axios.post(API_URL, req.body);
            res.status(200).json(response.data);
        } else if (req.method === "PUT") {
            const { id, ...updateData } = req.body;
            const response = await axios.put(`${API_URL}/${id}`, updateData);
            res.status(200).json(response.data);
        } else if (req.method === "DELETE") {
            const { id } = req.query;
            await axios.delete(`${API_URL}/${id}`);
            res.status(200).end();
        }
        } catch (e) {
            res.status(500).json({ error: "Internal Server Error"});
        }
    };