import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://kdjldtspcgfafgiqvjij.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkamxkdHNwY2dmYWZnaXF2amlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwMzU5MzEsImV4cCI6MjA3ODYxMTkzMX0.RILnamamjnUA2Rao8ECAFMf5NL2Pjx9wlgolg0fqdng"
);
