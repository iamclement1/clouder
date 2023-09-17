// import React from 'react'

// const Register = (props) => {
//   return (
//      <Formik
//                     initialValues={{
//                         fName: "",
//                         lName: "",
//                         email: "",
//                         isPassword: "",
//                         password: "",
//                         location: "",
//                     }}
//                     validate={(values: FormValues) => {
//                         const errors: Partial<FormValues> = {};
//                         if (!values.fName) {
//                             errors.fName = "Required";
//                         }

//                         if (!values.lName) {
//                             errors.lName = "Required";
//                         }
//                         if (!values.email) {
//                             errors.email = "Required";
//                         }
//                         if (!values.password) {
//                             errors.password = "Required";
//                         }
//                         if (values.isPassword !== values.password) {
//                             errors.isPassword = "Incorrect Password";
//                         }
//                         if (!values.location) {
//                             errors.lName = "Required";
//                         }

//                         return errors;
//                     }}
//                     onSubmit={(values: FormValues) => {
//                         console.log(values);
//                     }}
//                 >
//                     {({ handleSubmit, errors, touched }) => (
//                         <Form onSubmit={handleSubmit}>
//                             {/* Name secton */}
//                             <Flex
//                                 flexDir={["column", null, "row"]}
//                                 align=""
//                                 gap={["0.5rem", null, "3rem"]}
//                             >
//                                 <CustomInput
//                                     label="First name"
//                                     name="fName"
//                                     type="text"
//                                     errors={errors}
//                                     touched={touched}
//                                 />

//                                 <CustomInput
//                                     label="Last name"
//                                     name="lName"
//                                     type="text"
//                                     errors={errors}
//                                     touched={touched}
//                                 />
//                             </Flex>
//                             {/* Email Address */}

//                             <CustomInput
//                                 label="Email address"
//                                 name="email"
//                                 type="email"
//                                 errors={errors}
//                                 touched={touched}
//                             />

//                             {/* Password section */}
//                             <Flex
//                                 flexDir={["column", null, "row"]}
//                                 align=""
//                                 gap={["0.5rem", null, "3rem"]}
//                             >
//                                 <CustomInput
//                                     label="Password"
//                                     name="password"
//                                     type="password"
//                                     errors={errors}
//                                     touched={touched}
//                                 />

//                                 <CustomInput
//                                     label="Confirm password"
//                                     name="isPassword"
//                                     type="password"
//                                     errors={errors}
//                                     touched={touched}
//                                 />
//                             </Flex>

//                             <button type="submit">submit</button>
//                         </Form>
//                     )}
//                 </Formik>
//   )
// }

// export default Register
