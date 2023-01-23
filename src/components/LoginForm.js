import { useFormik } from "formik";
import {Link,useNavigate} from 'react-router-dom';
const initialValues = {
  name: "",
  email: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
  if(values.name==='jatin' && values.email==='jatin@gmail.com'){
    alert('Welcome Jatin');
  }else{
    alert('Incorrect name or email \n'+JSON.stringify(values,null,4));
  }
  // how to go to the different route after calling a function
};

const validate = (values) => {
  //values.name  values.email
  // errors.name errors.email
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email formate";
  }
  return errors;
};
const LoginForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

   

  // console.log('Form Values  ',formik.values )
//   console.log('Form errors  ',formik.errors )
  console.log('touched  ',formik.touched )
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={formik.handleSubmit}>
        <h1>Food Villa Login</h1>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur = {formik.handleBlur}
          />
          { formik.touched.name &&  formik.errors.name ? <div className="error">{formik.errors.name}</div>: null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur = {formik.handleBlur}
          />
          { formik.touched.email &&  formik.errors.email ? <div className="error">{formik.errors.email}</div>: null}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
