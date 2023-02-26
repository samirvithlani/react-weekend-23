import React from "react";
import { useForm } from "react-hook-form";

export const Product = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
        mode: "onChange",
    }
  );

  const validationSchema = {
    productName :{
        required: "Product Name is required",
    },
    productPrice :{
        min:{
            value: 100,
            message: "Product Price should be greater than 100",
        },
        max:{
            value: 1000,
            message: "Product Price should be less than 1000",
        },
        required:{
            value: true,
            message:"product price is required..."
        }
    },
    productDescription :{
        minLength:{
            value: 10,
            message: "Product Description should be greater than 10",
        },
        maxLength:{
            value: 100,
            message: "Product Description should be less than 100",
        },
        required:{
            value: true,
            message:"product description is required..."
        }

    },
    contact:{
        pattern:{
            value: /^[6-9]{1}[0-9]{9}$/,
            message: "Contact should be 10 digit number",
        },
        required:{
            value: true,
            message:"contact is required..."
        }
    }
  }

  console.log("error",errors)
  const submit = (data) => {

    console.log(data);
    console.log("submit");
    console.log(errors);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        
          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
              {...register('productName',validationSchema.productName)}
            />
           {
            errors.productName && <span style={{color:"red"}}>{errors.productName.message}</span>
           }
          </div>
          <div className="form-group">
            <label>Product Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Product Price"
              {...register('productPrice',validationSchema.productPrice)}
            />
            {
                errors.productPrice && <span style={{color:"red"}}>{errors.productPrice.message}</span>
            }
          </div>
          <div className="form-group">
            <label>Product Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Description"
              {...register('productDescription',validationSchema.productDescription)}
            />
            {
                errors.productDescription && <span style={{color:"red"}}>{errors.productDescription.message}</span>
            }
          </div>
          <div className="form-group">
            <label>enter COntact</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Product Description"
              {...register('contact',validationSchema.contact)}
            />
            {
                errors.contact && <span style={{color:"red"}}>{errors.contact.message}</span>
            }
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
      </form>
    </div>
  );
};
