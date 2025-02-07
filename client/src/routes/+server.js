import { json } from '@sveltejs/kit';

export async function GET() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();

    return json(data);
}