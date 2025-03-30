// This is the Supabase module
import { createClient } from '@supabase/supabase-js';

const supaUrl = "https://cjgjmnsqdykfaenamydn.supabase.co/rest/v1/"; //This will grab the url from the supabase created containing the data
const supaAnonKey = process.env.SUPABASE_ANON_KEY; //this is the key from the supabase created containing the data

const supabase = createClient(supaUrl, supaAnonKey); //create a supabase instance

export default supabase;