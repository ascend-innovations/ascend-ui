export default async function getSupabaseSession(supabase) {
  const originalWarn = console.warn;

  // Temporarily override console.warn to suppress the specific Supabase warning
  console.warn = function (...args) {
    const msg = args[0];
    if (
      typeof msg === 'string' &&
      msg.includes('Using the user object as returned from supabase.auth.getSession')
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };

  try {
    return await supabase.auth.getSession();
  } finally {
    // Always restore the original console.warn
    console.warn = originalWarn;
  }
}