import { supabase } from '$lib/supabase';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const { error } = await supabase
            .from('contacts')
            .insert([{ name, email, message }]);

        if (error) throw error;

        return json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Database error:', error);
        return json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
