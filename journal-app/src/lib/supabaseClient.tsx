import { createClient } from '@supabase/supabase-js'

// export const supabase = createClient("https://ijrglyefxspcymvrviqo.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqcmdseWVmeHNwY3ltdnJ2aXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MzMzNzYsImV4cCI6MTk5MjUwOTM3Nn0.P9AD6Vhyxkrnu_dFpUMH74UD6DSaEH9S1HEfUnaXndQ")

export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
