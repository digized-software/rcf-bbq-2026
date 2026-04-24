import { Input } from "../components/Input2";
import { PageLayout } from "../components/layouts/PageLayout";

const bbq_info = {
  location: "245 Etheridge Ave, Milton, ON",
  time: "5:00 PM",
  date: "2026-06-05",
};

const HomePage = () => {
  return <PageLayout {...bbq_info} rsvp_name={<Input />} />;
};

export default HomePage;
