import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import PasswordInput from '../Forms/PasswordInput';
import FormLink from '../Forms/FormLink';
import StandardLayout from '../StandardLayout';

const LOGIN_DATA = {
    email: '',
    password: '',
};

function Login() {
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState(LOGIN_DATA);
    const { email, password } = loginForm;

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setLoginForm({ ...loginForm, [name]: value });
    };

    const loginSubmit = () => {
        // TODO: Necessary backend calling for the authentication

        // Passed
        navigate('/login/home');
    };

    //   Yup validation schema
    const loginValidation = Yup.object({
        email: Yup.string()
            .required('Email address is required')
            .email('Email must be a valid one'),
        password: Yup.string().required('Password is required'),
    });

    return (
        <StandardLayout>
            <div className="h-[80vh] px-[200px]" style={{ marginTop: '150px' }}>
                <div className="flex items-center justify-center pt-3">
                    <div className="w-[400px]">
                        <p className=" text-4xl pb-2">Membership Login</p>
                        <p className="pb-3">Please enter your credentials</p>
                        <Formik
                            enableReinitialize
                            initialValues={{ email, password }}
                            validationSchema={loginValidation}
                            onSubmit={() => loginSubmit()}
                        >
                            {(formik) => (
                                <Form className="flex flex-col gap-2">
                                    <Input
                                        key="email"
                                        type="text"
                                        name="Email"
                                        placeholder="Enter your email"
                                        onChange={handleOnChange}
                                    />
                                    <PasswordInput
                                        key="password"
                                        // type="password"
                                        name="Password"
                                        placeholder="Enter your password"
                                    />

                                    <button
                                        type="submit"
                                        className="bg-gray-800  text-gray-200 p-3 rounded-lg hover:bg-gray-700 transition-all ease-in-out"
                                    >
                                        Login
                                    </button>
                                </Form>
                            )}
                        </Formik>
                        <div className="flex flex-col gap-2 text-center my-6">
                            <FormLink name="Forgot password?" path="/" />
                            <p className="text-sm">
                                Don't have an account?{' '}
                                <FormLink name="Create account" path="/register" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </StandardLayout>
    );
}

export default Login;