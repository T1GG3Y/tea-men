import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key';

// Initialize the Supabase client.
// Replace the URL and anon key with your own Supabase project's credentials.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
