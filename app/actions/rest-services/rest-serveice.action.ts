"use server";
import { RestServicesCreateDto } from "../../dto/rest-services-create-dto";
import db from "@/lib/sqlite";

export const createRestService = async (
  id: number,
  restService: RestServicesCreateDto,
) => {
  console.log(restService);
  const result = RestServicesCreateDto.safeParse(restService);
  console.log(result);
  if (!result.success) {
    return { success: false, errors: result.error.issues };
  }
  restService = result.data;
  try {
    const restCreateData = {
      persianName: restService.persianName,
      latinName: restService.latinName,
      httpMethod: restService.httpMethod,
      restType: restService.restType,

      ...(restService.restAuthServiceSetting && {
        restAuthServiceSetting: {
          create: {
            ...restService.restAuthServiceSetting,

            restAuthServiceParam: {
              create: restService.restAuthServiceSetting.restAuthServiceParam,
            },
          },
        },
      }),

      ...(restService.restDatabaseSetting && {
        restDatabaseSetting: {
          create: restService.restDatabaseSetting,
        },
      }),

      ...(restService.restExternalApiSetting && {
        restExternalApiSetting: {
          create: {
            ...restService.restExternalApiSetting,

            restExternalApiParam: {
              create: restService.restExternalApiSetting.restExternalApiParam,
            },
          },
        },
      }),
    };
    const restUpdateData = {
      persianName: restService.persianName,
      latinName: restService.latinName,
      httpMethod: restService.httpMethod,
      restType: restService.restType,

      ...(restService.restAuthServiceSetting && {
        restAuthServiceSetting: {
          upsert: {
            create: {
              ...restService.restAuthServiceSetting,
              restAuthServiceParam: {
                create: restService.restAuthServiceSetting.restAuthServiceParam,
              },
            },
            update: {
              ...restService.restAuthServiceSetting,

              restAuthServiceParam: {
                deleteMany: {},
                create: restService.restAuthServiceSetting.restAuthServiceParam,
              },
            },
          },
        },
      }),

      ...(restService.restDatabaseSetting && {
        restDatabaseSetting: {
          upsert: {
            create: restService.restDatabaseSetting,
            update: restService.restDatabaseSetting,
          },
        },
      }),

      ...(restService.restExternalApiSetting && {
        restExternalApiSetting: {
          upsert: {
            create: {
              ...restService.restExternalApiSetting,
              restExternalApiParam: {
                create: restService.restExternalApiSetting.restExternalApiParam,
              },
            },
            update: {
              ...restService.restExternalApiSetting,
              restExternalApiParam: {
                deleteMany: {},
                create: restService.restExternalApiSetting.restExternalApiParam,
              },
            },
          },
        },
      }),
    };

    const newService = id
      ? await db.restService.upsert({
          where: { id },
          create: restCreateData,
          update: restUpdateData,
          include: {
            restAuthServiceSetting: true,
            restDatabaseSetting: true,
            restExternalApiSetting: true,
          },
        })
      : await db.restService.create({ data: restCreateData });

    return { success: true, data: newService };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      errors: [{ path: [], message: "خطا در ذخیره‌سازی" }],
    };
  }
};

export const getAllRestServices = async () => {
  try {
    const restServices = await db.restService.findMany();
    return { success: true, data: restServices };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      errors: [{ path: [], message: "خطا در فراخوانی" }],
    };
  }
};

export const removeService = async (id: number) => {
  try {
    // console.log(id)
    const removed = await db.restService.delete({
      where: { id },
    });

    return { success: true, data: removed };
  } catch (err) {
    return {
      success: false,
      errors: (err as Error).message,
    };
  }
};

export const findRestServiceById = async (id: number) => {
  try {
    const restService = await db.restService.findFirst({
      where: { id },
      include: {
        restAuthServiceSetting: {
          include: {
            restAuthServiceParam: true,
          },
        },
        restDatabaseSetting: true,
        restExternalApiSetting: {
          include: {
            restExternalApiParam: true,
          },
        },
      },
    });

    return {
      success: true,
      data: restService,
    };
  } catch (error) {
    return {
      success: false,
      error: "خطا در اجرای کوئری" + (error as Error).message,
    };
  }
};
export const findRestServiceByName = async (name: string) => {
  try {
    const restService = await db.restService.findFirst({
      where: { latinName: name },
      include: {
        restAuthServiceSetting: {
          include: {
            restAuthServiceParam: true,
          },
        },
        restDatabaseSetting: true,
        restExternalApiSetting: {
          include: {
            restExternalApiParam: true,
          },
        },
      },
    });

    return {
      success: true,
      data: restService,
    };
  } catch (error) {
    return {
      success: false,
      error: "خطا در اجرای کوئری" + (error as Error).message,
    };
  }
};
