import Column from "./components/column";
import Row from "./components/row";
import FundingImage from "./components/funding-image";
import FundingInfo from "./components/funding-info";

export default function FundingPage() {
  return (
    <>
      <Row>
        <Column child={<FundingImage />} />
        <Column child={<FundingInfo />} />
      </Row>
    </>
  );
}
