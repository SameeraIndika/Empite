import React from "react";
import Button from "./Button";

const Newsletter = () => {
  return (
    <div className="flex flex-col md:flex-row gap-0 gap-y-4 bg-dark-1">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Your email address"
        className="bg-transparent text-secondary px-6 py-4 rounded-md placeholder-dark-4 muli-regular-22 focus:border-dark-4"
      />
      <Button
        type="button"
        title="Subscribe"
        variant="btn_gray"
        className="muli-bold-22 text-secondary"
      />
    </div>
  );
};

export default Newsletter;
