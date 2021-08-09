const { search } = useLocation();
const searcParams = new URLSearchParams(search);

const name = searchParams.get("name");
const age = searchParams.get("age");
