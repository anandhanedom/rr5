const { search } = useLocation();
const searchParams = new URLSearchParams(search);

const name = searchParams.get("name");
const age = searchParams.get("age");
