import { useNavigate, useParams/* other hooks */ } from 'react-router-dom'; 

const withRouter = (Component) => props => {
  const navigate = useNavigate();
  // other hooks
  const params = useParams();

  return (
    < Component
      {...props}
      {...{ navigate, params/* other hooks */ }}
    />
  );
};

export default withRouter;