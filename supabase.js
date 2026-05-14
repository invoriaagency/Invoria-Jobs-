import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://twhmsejnxieawhtoezli.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3aG1zZWpueGllYXdodG9lemxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MTgyOTAsImV4cCI6MjA5NDI5NDI5MH0.X8nRWvjKJSI4ddeYsQYFpKte_4h3X9iNnpa3RzVXwnI'

export const supabase = createClient(supabaseUrl, supabaseKey)
