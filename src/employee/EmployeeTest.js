import React from "react";
import { useForm } from "react-hook-form";

export const EmployeeTest = (props) => {
  //array
  //submit
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
    props.addEmployee(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label>ENTER NAMEs</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>ENTER AGE</label>
          <input type="text" {...register("age")}></input>
        </div>
        <div>
            <label>ENTER GENDER</label>
            MALE<input type="radio" {...register('gender')} name ="gender" value="MALE"></input>
            FEMALE<input type="radio" {...register('gender')} name ="gender" value="FEMALE"></input>
        </div>
        <div>
            <label>ENTER YOUR HOBBIES</label>
            <br/>
            <br/>
            SINGING<input type="checkbox" {...register('hobbies')} name ="hobbies" value="SINGING"></input>
            <br/>
            DANCEING<input type="checkbox" {...register('hobbies')} name ="hobbies" value="DANCING"></input>
            <br/>
            TRAVELING<input type="checkbox" {...register('hobbies')} name ="hobbies" value="TRAVELING"></input>
            <br/>
        </div>
        <div>
            <label>ENTER YOUR CITY</label>
            <select {...register('city')}>
                <option value="MUMBAI">MUMBAI</option>
                <option value="AHEMDABAD">AHEMDABAD</option>
                <option value="BANGLORE">BANGLORE</option>
            </select>
        </div>
        <div>
          <input type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
};
