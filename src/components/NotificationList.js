import React, { useState } from "react";

export default function NotificationList() {
  const [data, setData] = useState([]);

  return (
    <>
      <button
        className="button"
        onClick={() => setData(["New Notification", "Another Notification"])}
      >
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {data.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </section>
    </>
  );
}