import React from 'react';
import '../scss/styles.scss';

function Join() {
  return(
    <div className="joinDetails">
      <h1>Join Weather Underground</h1>
      <ul>
        <li>Choose real-time alerts for your city.</li>
        <li>Choose adding your webcam or personal weather station.</li>
        <li>You can delete your account at any time from your member settings.</li>
      </ul>
      <p>The Weather Company needs your email to create your Weather Underground account.</p>

      <p>Email:</p>
      <p>Password:</p>
      <p>Confirm New Password:</p>
      <h2>Sign up for free</h2>
    </div>
  );
}

export default Join;
