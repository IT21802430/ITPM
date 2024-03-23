import React from "react"; 
import './ProfileComponent.css'

function ProfileComponent() {
  return (
    <div class="profile-card">
      <img
        src="profile-picture.jpg"
        alt="Profile Picture"
        class="profile-image"
      />
      <div class="profile-info">
      <h2>John Doe</h2>
      <p>johndoe@example.com</p>
      <p>+123 456 7890</p>
      <p>United States</p>
      </div>
    </div>
  );
}

export default ProfileComponent;
