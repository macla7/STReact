import React from "react";
import profileView from "../assets/images/profile_view.png";
import deleteAccountConfirmation from "../assets/images/delete_account_confirmation.png";

const HowTo = () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="content-container">
      <div className="conent-section">
        <h1>Guides</h1>
      </div>

      <div className="conent-section">
        <h2>Groups</h2>

        <h3>Create a Group:</h3>
        <ul className="how-to-list">
          <li>Touch 'Groups' Tab</li>
          <li>Touch 'Create Group' Button</li>
          <li>Name group and create</li>
        </ul>

        <h3>Invite Users:</h3>
        <ul>
          <li>Go to 'My Groups' screen in 'Groups' tab</li>
          <li>Touch the Group you want to invite Users to</li>
          <li>Touch 'Group Details' Button</li>
          <li>Touch 'Invite' Button</li>
          <li>
            Start writing the name or email of the user you want to invite
          </li>
          <li>Select the checkbox against their name and email</li>
          <li>Touch 'Confirm Invites'</li>
          <li>Touch 'Confirm'</li>
        </ul>

        <h3>Join a Group:</h3>
        <ul>
          <li>Touch the 'Discover' Button in the 'Groups' tab</li>
          <li>Write the name of the group you are looking to join</li>
          <li>Select the checkbox against the name</li>
          <li>Touch 'Ask to Join'</li>
          <li>Touch 'Confirm'</li>
          <li>Wait for an Admin of the Group to accept your request</li>
        </ul>
      </div>

      <div className="conent-section">
        <h2>Posts</h2>
        <section>
          <h3>Create a Post</h3>
          <ul>
            <li>Touch 'Create' Tab</li>
            <li>Touch 'Group Not Select' field under 'Group'</li>
            <li>
              Select the group you want to post in, if you are not in any
              groups, please see section 1 above
            </li>
            <li>
              Touch the 'Post Ends' field, to select the date and time you want
              to post to end
            </li>
            <li>
              Touch the 'Add Shift' button, to give the details of the shift
            </li>
            <li>
              Touch the 'Reserve' field, to determine the maximum you are
              willing to pay someone to cover the shift, or the minimum you are
              willing to receive, if you are not willing to pay anything
            </li>
            <li>Add a description as to why you are making the post</li>
          </ul>
        </section>
        <section>
          <h3>Like and Comment on a Post</h3>
          <ul>
            <li>Touch the Love heart icon to 'Like' the post</li>
            <li>
              Touch the Comment icon to go to the 'Post' screen, where you can
              make a comment
            </li>
          </ul>
        </section>
        <section>
          <h3>Bid on Post</h3>
          <ul>
            <li>Touch the 'Bid' Icon on the Post</li>
            <li>
              Move the slider to the amount of dollar you are willing to bid,
              for the shift
            </li>
            <li>Touch 'Create Bid'</li>
            <li>Touch 'Confirm' if you are happy with the amount</li>
          </ul>
        </section>
      </div>

      <div className="conent-section">
        <h2>Profile</h2>
        <section>
          <h3>Change Profile Picture</h3>
          <ul>
            <li>Touch 'Profile' Tab</li>
            <li>Touch 'Edit' next to 'Profile Picture'</li>
            <li>Select a picture from your camera roll</li>
            <li>Touch the 'Save' button</li>
          </ul>
        </section>
        <section>
          <h3>Change Name</h3>
          <ul>
            <li>Touch 'Edit' next to 'Name'</li>
            <li>Write into field desired name</li>
            <li>Touch 'Save'</li>
          </ul>
        </section>
        <section id="delete_profile_section">
          <h3>Delete Profile</h3>
          <ul>
            <li>Touch 'Profile' Tab</li>
            <img
              src={profileView}
              alt="Profile View"
              className="phone-example"
            />
            <li>Touch 'delete account' link emphasized in red</li>
            <img
              src={deleteAccountConfirmation}
              alt="Delete account confirmation"
              className="phone-example "
            />
            <li>
              Touch 'Confirm' to delete your account and its associated data,
              permanently
            </li>
          </ul>
        </section>
      </div>

      <div className="conent-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, please contact us at
          'shift.it.contact.us@gmail.com'
        </p>
      </div>
    </div>
  );
};

export default HowTo;
