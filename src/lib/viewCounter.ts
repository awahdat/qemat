// src/lib/viewCounter.ts
import { supabase } from './supabaseClient';

// Function to get and increment page views
export async function getPageViews(slug: string): Promise<number> {
  // Fetch the current view count for the given slug
  let { data, error } = await supabase
    .from('views')
    .select('count')
    .eq('slug', slug)
    .single();

  // If the slug does not exist, insert a new record with count = 1
  if (error && error.code === 'PGRST116') {
    const { data: newData, error: newError } = await supabase
      .from('views')
      .insert([{ slug, count: 1 }])
      .single();

    if (newError) throw newError;

    return newData.count;
  } else if (error) {
    throw error;
  }

  // Increment the view count
  const currentCount = data.count;
  const { data: updatedData, error: updateError } = await supabase
    .from('views')
    .update({ count: currentCount + 1 })
    .eq('slug', slug)
    .single();

  if (updateError) throw updateError;

  return updatedData.count;
}
