"use client";
import Step from "@/app/rest-services/add/components/service-initialize-step";
import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useParams, useRouter } from "next/navigation";

const Edit = () => {
  const _params = useParams();
  const router = useRouter();
  return (
    <section>
      {/* <h1>ویرایش وب سرویس شناسه : {params.id}</h1> */}
      <div className="sticky top-0 mb-0.5 z-5 [&>button]:mr-0.5">
        <Button onClick={() => router.back()} icon={<RollbackOutlined />}>
          بازگشت
        </Button>
      </div>
      {/* <hr className="border-t-amber-100 border-t-2 m-2" /> */}
      <Step />
    </section>
  );
};

export default Edit;
