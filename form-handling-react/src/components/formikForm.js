import { Formik } from "formik";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Form submitted:", values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Register</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <Field type="text" name="username" className="w-full p-2 border rounded" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Field type="email" name="email" className="w-full p-2 border rounded" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <Field type="password" name="password" className="w-full p-2 border rounded" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
