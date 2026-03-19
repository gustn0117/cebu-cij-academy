import { useState, useEffect } from 'react';

export default function PopupModal() {
  const [popups, setPopups] = useState([]);
  const [dismissed, setDismissed] = useState({});

  useEffect(() => {
    // Load dismissed state from localStorage
    const stored = {};
    try {
      const raw = localStorage.getItem('cij_popup_dismissed');
      if (raw) {
        const parsed = JSON.parse(raw);
        const now = Date.now();
        Object.entries(parsed).forEach(([id, expiry]) => {
          if (expiry > now) stored[id] = expiry;
        });
        // Clean expired
        localStorage.setItem('cij_popup_dismissed', JSON.stringify(stored));
      }
    } catch {}
    setDismissed(stored);

    // Fetch active popups
    fetch('/api/popups')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPopups(data);
      })
      .catch(() => {});
  }, []);

  const handleClose = (id) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  const handleDismissToday = (id) => {
    const expiry = new Date();
    expiry.setHours(23, 59, 59, 999);
    const newDismissed = { ...dismissed, [id]: expiry.getTime() };
    setDismissed(newDismissed);
    localStorage.setItem('cij_popup_dismissed', JSON.stringify(newDismissed));
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  const visiblePopups = popups.filter((p) => !dismissed[p.id]);

  if (visiblePopups.length === 0) return null;

  return (
    <div className="popup-overlay">
      {visiblePopups.map((popup, index) => (
        <div
          key={popup.id}
          className="popup-container"
          style={{
            zIndex: 10000 + index,
            left: `calc(50% + ${(index - (visiblePopups.length - 1) / 2) * 30}px)`,
            top: `calc(50% + ${index * 10}px)`,
          }}
        >
          <div className="popup-content">
            {popup.link_url ? (
              <a href={popup.link_url} target="_blank" rel="noopener noreferrer">
                <img src={popup.image_url} alt={popup.title} className="popup-image" />
              </a>
            ) : (
              <img src={popup.image_url} alt={popup.title} className="popup-image" />
            )}
            <div className="popup-actions">
              <button
                className="popup-btn-dismiss"
                onClick={() => handleDismissToday(popup.id)}
              >
                Don&apos;t show today
              </button>
              <button
                className="popup-btn-close"
                onClick={() => handleClose(popup.id)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
