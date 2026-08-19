import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";

import AddCabin from "../features/cabins/addCabin";
function Cabins() {
  return (
    <>
      <Row type="horizontal">
        {/* <Heading as="h1">All cabins</Heading> */}
        <h1>All Cabins</h1>
        <p>TEST</p>
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
