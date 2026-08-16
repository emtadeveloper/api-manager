import { AuthParamDto } from "@/app/dto/auth-param.dto";
import db from "@/lib/sqlite";
export const AuthParamAdd = async (authParamDto: AuthParamDto) => {
  try {
    const safeDto = AuthParamDto.safeParse(authParamDto);

    if (!safeDto.success) {
      return {
        success: false,
        error: safeDto.error.message,
      };
    }
    const newAuthParam = await db.restAuthServiceParam.create({
      data: safeDto.data,
    });

    return {
      success: true,
      data: newAuthParam,
    };
  } catch (error) {
    return {
      success: false,
      error: "خطا در ثبت اطلاعات " + (error as Error).message,
    };
  }
};
