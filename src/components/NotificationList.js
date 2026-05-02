import React, { useState } from "react";

export default function NotificationList() {
  const [notifications, setNotifications] = useState([]);

  return (
    <>
      <button
        className="button"
        onClick={() => setNotifications(["New Notification"])}
      >
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {notifications.map((n, i) => (
          <div key={i}>{n}</div>
        ))}
      </section>
    </>
  );
}