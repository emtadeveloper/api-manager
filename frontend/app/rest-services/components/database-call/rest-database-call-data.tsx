"use client";
import RestDatabaseCallDetails from "./rest-database-call-details";
interface Props {
  data: Record<string, unknown>[];
}
const RestShowDatabaseCallData = ({ data }: Props) => {
  return <RestDatabaseCallDetails data={data} handleSelectedKey={() => {}} />;
};

export default RestShowDatabaseCallData;
