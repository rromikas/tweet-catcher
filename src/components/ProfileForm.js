import React from "react";
import { useFormik } from "formik";
import WarningIcon from "icons/Warning.png";

const ProfileForm = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      credit_card: "",
      postal_code: "",
      exp_month: "",
      exp_year: "",
    },
  });
  return (
    <div className="w-full h-full flex justify-center items-center bg-blue-700 bg-opacity-10">
      <div className="max-w-2xl w-full mx-auto py-3 px-20 rounded-xl bg-blue-1000 text-white font-semibold">
        <div className="text-xl text-center mb-8">Create A Profile</div>
        <form className="mx-auto">
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
              type="email"
              className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
              name="email"
            ></input>
          </div>
          <div className="flex mb-3">
            <div className="w-2/3 pr-2">
              <div className="flex mb-2 items-center">
                <div className="mr-3">Credit Card</div>
                {formik.errors.credit_card && formik.touched.credit_card ? (
                  <img src={WarningIcon} className="max-w-5 max-h-5 w-auto h-auto"></img>
                ) : null}
              </div>
              <input
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="credit_card"
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
                type="text"
                className="bg-blue-700 w-full rounded-2xl border border-transparent outline-none py-2.5 px-4"
                name="cvc"
              ></input>
            </div>
          </div>
          <div className="flex justify-center select-none">
            <div className="active:bg-blue-570 mr-2 bg-blue-500 hover:bg-blue-550 rounded-2xl px-12 text-xl py-3 transition cursor-pointer">
              Discord
            </div>
            <div className="active:bg-blue-570 mr-2 bg-blue-500 hover:bg-blue-550 rounded-2xl px-12 text-xl py-3 transition cursor-pointer">
              Create
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
