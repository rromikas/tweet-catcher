import React from "react";
import ProfileForm from "components/ProfileForm";
import Modal from "@material-ui/core/Modal";

const Profile = () => {
  return (
    <Modal classes={{ root: "bg-blue-500 bg-opacity-0" }} open={true} hideBackdrop>
      <ProfileForm></ProfileForm>
    </Modal>
  );
};

export default Profile;
