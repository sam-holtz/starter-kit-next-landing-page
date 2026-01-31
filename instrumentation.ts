export async function register() {
  // Only run on the server side
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Dynamic import to avoid issues with client-side bundling
    const { searchTravelAgencies } = await import('./lib/flight-search');
    
    // Run the scan after a short delay to ensure the server is fully started
    setTimeout(async () => {
      try {
        await searchTravelAgencies();
      } catch (error) {
        console.error('Error:', error);
      }
    }, 3000); // 3 second delay to ensure server is ready
  }
}

