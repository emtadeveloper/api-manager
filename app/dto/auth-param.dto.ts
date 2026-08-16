import { PARAMTYPE } from "@/utils/param-type.enum";
import { z } from "zod";

export const AuthParamDto = z.object({
  paramType: z.enum([
    PARAMTYPE.BODY,
    PARAMTYPE.HEADER,
    PARAMTYPE.PATH,
    PARAMTYPE.QUERY,
  ]),
  paramName: z.string({ error: "این فیلد الزامی است" }),
  paramValue: z.string({ error: "این فیلد الزامی است" }),
      restAuthServiceSettingRef: z.number({ error: "این فیلد الزامی است" }),

});

export type AuthParamDto = z.infer<typeof AuthParamDto>;
