
import { Helmet } from "react-helmet";

interface CanonicalTagProps {
  url: string;
}

export const CanonicalTag = ({ url }: CanonicalTagProps) => {
  return (
    <Helmet>
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default CanonicalTag;
