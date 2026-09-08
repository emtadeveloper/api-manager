"use client";
import ServiceIntializeStep from "@/components/service-initialize-step";
import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const Add = () => {
  const router = useRouter();
  return (
    <section>
      <div className="sticky top-0 mb-0.5 z-5 [&>button]:mr-0.5">
        <Button onClick={() => router.back()} icon={<RollbackOutlined />}>
          بازگشت
        </Button>
      </div>
      {/* <hr className="border-t-amber-100 border-t-2 m-2" /> */}
      <ServiceIntializeStep />
    </section>
  );
};

export default Add;
