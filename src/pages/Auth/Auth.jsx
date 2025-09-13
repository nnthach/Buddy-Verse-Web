import { useParams } from 'react-router-dom';

function Auth() {
  const { type } = useParams();
  return <div>Auth {type}</div>;
}

export default Auth;
