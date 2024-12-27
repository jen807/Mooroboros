import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Mooroboros </title>
    </Helmet>
  );
};

export default PageTitle;