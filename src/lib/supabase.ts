// This file is kept for compatibility but not actively used
// since Supabase integration is not needed as per requirements

export const supabase = {
  auth: {
    signInWithPassword: async () => {
      console.log('Supabase auth is disabled');
      return { data: { user: null }, error: null };
    }
  }
};