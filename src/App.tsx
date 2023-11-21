import React from 'react';
import { useForm } from "react-hook-form";
import handIMG from "./assets/images/hand.jpg";

const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
  console.log("errors", errors);

  return (
    <div className="container">
      <div className="row">
        {/* Form Column */}
        <div className="column">
          <div className="left-half">
            <h1>Contact Us</h1>
            <p>We're open for any suggestion or just to have a chat.</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <p className="input-label">Name *</p>
              <input
                className="input"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <span className="error">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length of name is 80 char."}
                </span>
              )}

              {/* Email */}
              <p className="input-label">Email *</p>
              <input
                className="input"
                type="text"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <span className="error">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email Address."}
                </span>
              )}

              {/* Phone number */}
              <p className="input-label">Phone</p>
              <input
                className="input"
                type="text"
                placeholder="Phone #"
                {...register("phoneNumber", {
                  pattern:
                    /^(?:(?:(?:\+|00)33[\s.-]?)|0)[1-9](?:(?:[\s.-]?[0-9]{2}){4})$/,
                })}
              />
              {errors.phoneNumber && (
                <span className="error">Invalid Phone Number</span>
              )}

              {/* Message */}
              <p className="input-label">Message *</p>
              <input
                className="input"
                type="text"
                placeholder="Write your message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="error">This field is required.</span>
              )}

              {/* Submit */}
              <div>
                <input className="submit" type="submit" value="Send Message" />
              </div>
            </form>
          </div>
        </div>

        {/* Image Column */}
        <div className="column">
          <img src={handIMG} alt="hand" />
        </div>
      </div>
    </div>
  );
}

export default App;
