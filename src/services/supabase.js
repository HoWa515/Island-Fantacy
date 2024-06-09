import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hwbfzdutjvelhpadjtrg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3YmZ6ZHV0anZlbGhwYWRqdHJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAyNTEyMTksImV4cCI6MjAyNTgyNzIxOX0.u1IyWso33AxIMipJMWgGedlzGXCEVnhINulIknARcI0";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
