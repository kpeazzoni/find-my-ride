async function savedSearches(event) {
    event.preventDefault();
  
    
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