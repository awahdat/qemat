// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'https://jsfsrhlnwodccuxkqxqt.supabase.co';  // Replace with your Supabase URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzZnNyaGxud29kY2N1eGtxeHF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczNTM5ODEsImV4cCI6MjAzMjkyOTk4MX0.m7a-JeJPSFQr4myrK4MKhnzSvLy96lzuxahw8tQ494g';  // Replace with your Supabase Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
