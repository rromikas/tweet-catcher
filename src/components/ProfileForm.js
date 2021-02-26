import React, { useEffect } from "react";
import { useFormik } from "formik";
import WarningIcon from "icons/Warning.png";

const ProfileForm = ({ onClose, onCreateSubmit, onEditSubmit, initialData }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialData || {
      create: true,
      profile_name: "Profile Name",
      first_name: "",
      last_name: "",
      email: "",
      card_number: "",
      postal_code: "",
      exp_month: "",
      exp_year: "",
    },
    onSubmit: (values) => {
      if (values.create) {
        onCreateSubmit(values);
      } else {
        onEditSubmit(values);
      }
    },
  });

  return (
    <div className="w-full h-full flex  bg-blue-700 bg-opacity-10 overflow-auto" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl w-full m-auto py-3 px-20 rounded-xl bg-blue-1000 text-white font-semibold"
      >
        <div className="text-xl text-center mb-8">
          {formik.values.create ? "Create Profile" : "Edit Profile"}
        </div>
        <form className="mx-auto" onSubmit={formik.handleSubmit}>
          <div className="flex mb-3">
            <div className="w-1/2 pr-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">First Name</div>
                {formik.errors.first_name && formik.touched.first_name ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="first_name"
              ></input>
            </div>
            <div className="w-1/2 pl-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">Last Name</div>
                {formik.errors.last_name && formik.touched.last_name ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.last_name}
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="last_name"
              ></input>
            </div>
          </div>
          <div className="w-full mb-3">
            <div className="flex mb-2 items-center">
              <div className="mr-3">Email</div>
              {formik.errors.email && formik.touched.email ? (
                <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
              ) : null}
            </div>
            <input
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
              className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
              name="email"
            ></input>
          </div>
          <div className="flex mb-3">
            <div className="w-2/3 pr-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">Credit Card</div>
                {formik.errors.card_number && formik.touched.card_number ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.card_number}
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="card_number"
              ></input>
            </div>
            <div className="w-1/3 pl-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">Postal Code</div>
                {formik.errors.postal_code && formik.touched.postal_code ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.postal_code}
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="postal_code"
              ></input>
            </div>
          </div>
          <div className="flex mb-16">
            <div className="w-1/3 pr-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">Month</div>
                {formik.errors.exp_month && formik.touched.exp_month ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.exp_month}
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="exp_month"
              ></input>
            </div>
            <div className="w-1/3 pl-2 pr-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">Year</div>
                {formik.errors.exp_year && formik.touched.exp_year ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.exp_year}
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="exp_year"
              ></input>
            </div>
            <div className="w-1/3 pl-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">CVC</div>
                {formik.errors.cvc && formik.touched.cvc ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                onChange={formik.handleChange}
                value={formik.values.cvc}
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="cvc"
              ></input>
            </div>
          </div>
          <div className="flex justify-center select-none">
            <div className="active:bg-blue-502 mr-2 bg-blue-500 hover:bg-blue-501 rounded-2xl px-12 text-xl py-3 transition cursor-pointer">
              Discord
            </div>
            <button
              type="submit"
              className="font-semibold outline-none active:bg-blue-502 mr-2 bg-blue-500 hover:bg-blue-501 rounded-2xl px-12 text-xl py-3 transition cursor-pointer"
            >
              {formik.values.create ? "Create" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
