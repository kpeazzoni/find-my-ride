async function savedSearches(event) {
    event.preventDefault();
  
    const make = document.createElement('h2');
    const year = document.createElement('h3');
    const model = document.createElement('h3');
    
    try {
        const savedData = await fetch('/api/profile', {
            method: 'POST',
            body: JSON.stringify({
                make,
                model,
                year,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            updateAlertBox(`This vehicle is already saved`);
        }
    } catch (err) {
        console.log(err);
    }
  }

  document.getElementById('save-button').onclick('save-button', addToWatchlist);