import Head from 'next/head';
import Banner from '../components/banner/Banner';
// import Form from '../components/basic/form';
import LoginForm from '../components/custom/sections/contactcomponent';

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Banner />
      {/* <Form /> */}
      <LoginForm />
    </div>
  );
}
