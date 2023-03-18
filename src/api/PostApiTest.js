import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export const PostApiTest = () => {
  const { register, handleSubmit ,formState:{errors}} = useForm(
    {
        mode: "onChange",
    }
  );

  const validationSchema = {
    name: {
        required: "Name is required",
        minLength: {
            value: 3,
            message: "Name should be atleast 3 characters",
        },
    }
  }

  const submit = async (data) => {
    const res = await axios.post(
      "https://node2-rozs.onrender.com/user/user",
      data
    );
    console.log(res);
    if (res.status === 201) {
      toast.success("Data loaded...", {
        position: "top-left",
        autoClose: 50,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" {...register("name",validationSchema.name)} />
          {
                errors.name && <p>{errors.name.message}</p>
          }
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" {...register("password")} />
        </div>
        <div>
          <label htmlFor="Age">AGe</label>
          <input type="text" {...register("age")} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
