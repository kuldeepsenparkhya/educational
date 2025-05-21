// import React from "react";
// import "./appointment.css";

// const Appointment = () => {
//   return (
//     <div className="appointment-container">
//       <div className="appointment-image">
//         <div className="text-center pt-5 ">
//           <h4 className="text-3xl font-bold text-white">Make An Appointment</h4>
//           <p className="text-xl text-white mt-2">
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
//           </p>
//         </div>

//       <div className="bg-white py-8 px-4 shadow-lg max-w-lg mx-auto mt-5 rounded-md">
//         <form className="space-y-5">
//           <div className="relative">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700"
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700"
//             />
//           </div>

//           <div className="relative">
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone"
//               className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700"
//             />
//           </div>

//           <div className="relative">
//             <textarea
//               name="message"
//               placeholder="Message"
//               className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700 resize-none"
//               rows={1}
//             ></textarea>
//           </div>

//           <div className="text-center">
//             <button className="bg-[#B58152] text-white py-2 px-6 rounded-full hover:bg-[#9c7043] transition-colors">
//               Send Message
//             </button>
//           </div>
//         </form>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Appointment;

'use client';

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./appointment.css";
import { toast, ToastContainer } from "react-toastify";

const Appointment = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    helpMessage: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post("http://192.168.0.124:5050/api/v1/createContact", values);
      toast.success("Message sent successfully!");
      console.log("API Response:", response.data);
      resetForm();
    } catch (error) {
      toast.error("Error sending message:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="appointment-container">
      <div className="appointment-image">
        <div className="text-center pt-5">
          <h4 className="text-3xl font-bold text-white">Make An Appointment</h4>
          <p className="text-xl text-white mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.
          </p>
        </div>

        <div className="bg-white py-8 px-4 shadow-lg max-w-lg mx-auto mt-5 rounded-md">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
              helpMessage: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
                <div className="relative">
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative">
                  <Field
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone"
                    className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700"
                  />
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative">
                  <Field
                    as="textarea"
                    name="helpMessage"
                    placeholder="Message"
                    className="border-b-2 border-gray-300 focus:border-[#B58152] outline-none w-full py-2 text-gray-700 resize-none"
                    rows={1}
                  />
                  <ErrorMessage name="helpMessage" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`bg-[#B58152] text-white py-2 px-6 rounded-full transition-colors ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#9c7043]"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Appointment;
