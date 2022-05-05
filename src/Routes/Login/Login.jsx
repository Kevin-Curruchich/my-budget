import Header from "../../Components/Header/Header";
import FormLayout from "../../Components/Form/FormLayout";
import * as Yup from "yup";
import "./Login.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Insert email"),
  password: Yup.string().required("Insert Password"),
});

export default function Login() {
  return (
    <>
      <Header />
      <main className="main--onboard">
        <FormLayout
          title="Welcome Back"
          initialValues={{ email: "", password: "" }}
          validation={loginSchema}
          inputs={[
            { label: "Email", name: "email", type: "email" },
            { label: "Password", name: "password", type: "password" },
          ]}
          buttons={[
            {
              type: "submit",
              label: "Login",
              className: "button buttons--xlarge solid",
            },
            {
              type: "button",
              label: "Google",
              className: "button buttons--xlarge border",
              onClick: () => {
                console.log("Hello");
              },
            },
          ]}
        />
      </main>
    </>
  );
}
