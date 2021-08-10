<Link to="/johndoe">John Doe</Link>;

<Link
  to={{
    pathname: "/johndoe",
    state: {
      fromNotifications: true,
    },
  }}
>
  John Doe
</Link>;

const Profile = () => {
  const { username } = useParams();
  const location = useLocation();

  const { fromNotifications } = location.state; // location also returns other properties like 'search' etc
};
