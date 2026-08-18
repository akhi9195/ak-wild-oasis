import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://obgzlccdiooluhozqukt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iZ3psY2NkaW9vbHVob3pxdWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY4NjM1MDAsImV4cCI6MjEwMjQzOTUwMH0.wicDlHnyy5LYNuE5dCeQukyXRj44ywnp90iaZ0GvBE0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
