import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://api.hsweb.pics';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaXNzIjoic3VwYWJhc2UiLCJpYXQiOjE2NDE3NjkyMDAsImV4cCI6MTc5OTUzNTYwMH0.xTNteRFphY3F9W2PPWOwCQ9PDXD05ySRqkJu5d4Cej0';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'cebu_cij_academy' },
});
