import { PARAMTYPE } from "@/enums/param-type.enum";
import { z } from "zod";
export const RestAuthServiceParamDto = z.object({
  paramName: z.string("نام پارامتر اجباری است"),
  paramValue: z.string("مقدار پارامتر اجباری است"),
  paramType: z.enum([
    PARAMTYPE.BODY,
    PARAMTYPE.HEADER,
    PARAMTYPE.PATH,
    PARAMTYPE.QUERY,
  ]),
});

export type RestAuthServiceParamDto = z.infer<typeof RestAuthServiceParamDto>;
