import {React,useEffect, useContext, useState,Link, useLocation, useNavigate,Form,Button,Container,axios,store,toast,getError,Title,USER_SIGNIN,validateEmail,validatePassword } from '../Imports';

export default function SignInPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      toast.error('Invalid email');
      return;
    }
    if (!validatePassword(password)) {
      toast.error('Invalid password');
      return;
    }
    try {
      const { data } = await axios.post('/api/v1/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: USER_SIGNIN, payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
        toast.error(getError(err));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <Container className="small-container">
      <Title title="Sign In" />
      <h1 className="my-3">Sign In</h1>
      <h5 className='my-2'>(this is a demo app , you may use: 
      email: admin@example.com
      <br/> 
      password: 12345)</h5>
      <Form onSubmit={(e) => submitHandler(e)}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
        <div className="mb-3">
          Forget Password? <Link to={'/forgot-password'}></Link>
        </div>
      </Form>
    </Container>
  );
}
