
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DatabaseSetting
 * 
 */
export type DatabaseSetting = $Result.DefaultSelection<Prisma.$DatabaseSettingPayload>
/**
 * Model RestService
 * 
 */
export type RestService = $Result.DefaultSelection<Prisma.$RestServicePayload>
/**
 * Model RestDatabaseSetting
 * 
 */
export type RestDatabaseSetting = $Result.DefaultSelection<Prisma.$RestDatabaseSettingPayload>
/**
 * Model RestExternalApiSetting
 * 
 */
export type RestExternalApiSetting = $Result.DefaultSelection<Prisma.$RestExternalApiSettingPayload>
/**
 * Model RestAuthServiceSetting
 * 
 */
export type RestAuthServiceSetting = $Result.DefaultSelection<Prisma.$RestAuthServiceSettingPayload>
/**
 * Model RestAuthServiceParam
 * 
 */
export type RestAuthServiceParam = $Result.DefaultSelection<Prisma.$RestAuthServiceParamPayload>
/**
 * Model RestExternalApiParam
 * 
 */
export type RestExternalApiParam = $Result.DefaultSelection<Prisma.$RestExternalApiParamPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.databaseSetting`: Exposes CRUD operations for the **DatabaseSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatabaseSettings
    * const databaseSettings = await prisma.databaseSetting.findMany()
    * ```
    */
  get databaseSetting(): Prisma.DatabaseSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restService`: Exposes CRUD operations for the **RestService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestServices
    * const restServices = await prisma.restService.findMany()
    * ```
    */
  get restService(): Prisma.RestServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restDatabaseSetting`: Exposes CRUD operations for the **RestDatabaseSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestDatabaseSettings
    * const restDatabaseSettings = await prisma.restDatabaseSetting.findMany()
    * ```
    */
  get restDatabaseSetting(): Prisma.RestDatabaseSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restExternalApiSetting`: Exposes CRUD operations for the **RestExternalApiSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestExternalApiSettings
    * const restExternalApiSettings = await prisma.restExternalApiSetting.findMany()
    * ```
    */
  get restExternalApiSetting(): Prisma.RestExternalApiSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restAuthServiceSetting`: Exposes CRUD operations for the **RestAuthServiceSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestAuthServiceSettings
    * const restAuthServiceSettings = await prisma.restAuthServiceSetting.findMany()
    * ```
    */
  get restAuthServiceSetting(): Prisma.RestAuthServiceSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restAuthServiceParam`: Exposes CRUD operations for the **RestAuthServiceParam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestAuthServiceParams
    * const restAuthServiceParams = await prisma.restAuthServiceParam.findMany()
    * ```
    */
  get restAuthServiceParam(): Prisma.RestAuthServiceParamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restExternalApiParam`: Exposes CRUD operations for the **RestExternalApiParam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestExternalApiParams
    * const restExternalApiParams = await prisma.restExternalApiParam.findMany()
    * ```
    */
  get restExternalApiParam(): Prisma.RestExternalApiParamDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    DatabaseSetting: 'DatabaseSetting',
    RestService: 'RestService',
    RestDatabaseSetting: 'RestDatabaseSetting',
    RestExternalApiSetting: 'RestExternalApiSetting',
    RestAuthServiceSetting: 'RestAuthServiceSetting',
    RestAuthServiceParam: 'RestAuthServiceParam',
    RestExternalApiParam: 'RestExternalApiParam'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "databaseSetting" | "restService" | "restDatabaseSetting" | "restExternalApiSetting" | "restAuthServiceSetting" | "restAuthServiceParam" | "restExternalApiParam"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      DatabaseSetting: {
        payload: Prisma.$DatabaseSettingPayload<ExtArgs>
        fields: Prisma.DatabaseSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatabaseSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatabaseSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>
          }
          findFirst: {
            args: Prisma.DatabaseSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatabaseSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>
          }
          findMany: {
            args: Prisma.DatabaseSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>[]
          }
          create: {
            args: Prisma.DatabaseSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>
          }
          createMany: {
            args: Prisma.DatabaseSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatabaseSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>[]
          }
          delete: {
            args: Prisma.DatabaseSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>
          }
          update: {
            args: Prisma.DatabaseSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>
          }
          deleteMany: {
            args: Prisma.DatabaseSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatabaseSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatabaseSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>[]
          }
          upsert: {
            args: Prisma.DatabaseSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatabaseSettingPayload>
          }
          aggregate: {
            args: Prisma.DatabaseSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatabaseSetting>
          }
          groupBy: {
            args: Prisma.DatabaseSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatabaseSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatabaseSettingCountArgs<ExtArgs>
            result: $Utils.Optional<DatabaseSettingCountAggregateOutputType> | number
          }
        }
      }
      RestService: {
        payload: Prisma.$RestServicePayload<ExtArgs>
        fields: Prisma.RestServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>
          }
          findFirst: {
            args: Prisma.RestServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>
          }
          findMany: {
            args: Prisma.RestServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>[]
          }
          create: {
            args: Prisma.RestServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>
          }
          createMany: {
            args: Prisma.RestServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>[]
          }
          delete: {
            args: Prisma.RestServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>
          }
          update: {
            args: Prisma.RestServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>
          }
          deleteMany: {
            args: Prisma.RestServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>[]
          }
          upsert: {
            args: Prisma.RestServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestServicePayload>
          }
          aggregate: {
            args: Prisma.RestServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestService>
          }
          groupBy: {
            args: Prisma.RestServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestServiceCountArgs<ExtArgs>
            result: $Utils.Optional<RestServiceCountAggregateOutputType> | number
          }
        }
      }
      RestDatabaseSetting: {
        payload: Prisma.$RestDatabaseSettingPayload<ExtArgs>
        fields: Prisma.RestDatabaseSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestDatabaseSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestDatabaseSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>
          }
          findFirst: {
            args: Prisma.RestDatabaseSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestDatabaseSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>
          }
          findMany: {
            args: Prisma.RestDatabaseSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>[]
          }
          create: {
            args: Prisma.RestDatabaseSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>
          }
          createMany: {
            args: Prisma.RestDatabaseSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestDatabaseSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>[]
          }
          delete: {
            args: Prisma.RestDatabaseSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>
          }
          update: {
            args: Prisma.RestDatabaseSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>
          }
          deleteMany: {
            args: Prisma.RestDatabaseSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestDatabaseSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestDatabaseSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>[]
          }
          upsert: {
            args: Prisma.RestDatabaseSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestDatabaseSettingPayload>
          }
          aggregate: {
            args: Prisma.RestDatabaseSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestDatabaseSetting>
          }
          groupBy: {
            args: Prisma.RestDatabaseSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestDatabaseSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestDatabaseSettingCountArgs<ExtArgs>
            result: $Utils.Optional<RestDatabaseSettingCountAggregateOutputType> | number
          }
        }
      }
      RestExternalApiSetting: {
        payload: Prisma.$RestExternalApiSettingPayload<ExtArgs>
        fields: Prisma.RestExternalApiSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestExternalApiSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestExternalApiSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>
          }
          findFirst: {
            args: Prisma.RestExternalApiSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestExternalApiSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>
          }
          findMany: {
            args: Prisma.RestExternalApiSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>[]
          }
          create: {
            args: Prisma.RestExternalApiSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>
          }
          createMany: {
            args: Prisma.RestExternalApiSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestExternalApiSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>[]
          }
          delete: {
            args: Prisma.RestExternalApiSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>
          }
          update: {
            args: Prisma.RestExternalApiSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>
          }
          deleteMany: {
            args: Prisma.RestExternalApiSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestExternalApiSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestExternalApiSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>[]
          }
          upsert: {
            args: Prisma.RestExternalApiSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiSettingPayload>
          }
          aggregate: {
            args: Prisma.RestExternalApiSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestExternalApiSetting>
          }
          groupBy: {
            args: Prisma.RestExternalApiSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestExternalApiSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestExternalApiSettingCountArgs<ExtArgs>
            result: $Utils.Optional<RestExternalApiSettingCountAggregateOutputType> | number
          }
        }
      }
      RestAuthServiceSetting: {
        payload: Prisma.$RestAuthServiceSettingPayload<ExtArgs>
        fields: Prisma.RestAuthServiceSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestAuthServiceSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestAuthServiceSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>
          }
          findFirst: {
            args: Prisma.RestAuthServiceSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestAuthServiceSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>
          }
          findMany: {
            args: Prisma.RestAuthServiceSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>[]
          }
          create: {
            args: Prisma.RestAuthServiceSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>
          }
          createMany: {
            args: Prisma.RestAuthServiceSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestAuthServiceSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>[]
          }
          delete: {
            args: Prisma.RestAuthServiceSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>
          }
          update: {
            args: Prisma.RestAuthServiceSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>
          }
          deleteMany: {
            args: Prisma.RestAuthServiceSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestAuthServiceSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestAuthServiceSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>[]
          }
          upsert: {
            args: Prisma.RestAuthServiceSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceSettingPayload>
          }
          aggregate: {
            args: Prisma.RestAuthServiceSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestAuthServiceSetting>
          }
          groupBy: {
            args: Prisma.RestAuthServiceSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestAuthServiceSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestAuthServiceSettingCountArgs<ExtArgs>
            result: $Utils.Optional<RestAuthServiceSettingCountAggregateOutputType> | number
          }
        }
      }
      RestAuthServiceParam: {
        payload: Prisma.$RestAuthServiceParamPayload<ExtArgs>
        fields: Prisma.RestAuthServiceParamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestAuthServiceParamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestAuthServiceParamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>
          }
          findFirst: {
            args: Prisma.RestAuthServiceParamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestAuthServiceParamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>
          }
          findMany: {
            args: Prisma.RestAuthServiceParamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>[]
          }
          create: {
            args: Prisma.RestAuthServiceParamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>
          }
          createMany: {
            args: Prisma.RestAuthServiceParamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestAuthServiceParamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>[]
          }
          delete: {
            args: Prisma.RestAuthServiceParamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>
          }
          update: {
            args: Prisma.RestAuthServiceParamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>
          }
          deleteMany: {
            args: Prisma.RestAuthServiceParamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestAuthServiceParamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestAuthServiceParamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>[]
          }
          upsert: {
            args: Prisma.RestAuthServiceParamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestAuthServiceParamPayload>
          }
          aggregate: {
            args: Prisma.RestAuthServiceParamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestAuthServiceParam>
          }
          groupBy: {
            args: Prisma.RestAuthServiceParamGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestAuthServiceParamGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestAuthServiceParamCountArgs<ExtArgs>
            result: $Utils.Optional<RestAuthServiceParamCountAggregateOutputType> | number
          }
        }
      }
      RestExternalApiParam: {
        payload: Prisma.$RestExternalApiParamPayload<ExtArgs>
        fields: Prisma.RestExternalApiParamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestExternalApiParamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestExternalApiParamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>
          }
          findFirst: {
            args: Prisma.RestExternalApiParamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestExternalApiParamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>
          }
          findMany: {
            args: Prisma.RestExternalApiParamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>[]
          }
          create: {
            args: Prisma.RestExternalApiParamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>
          }
          createMany: {
            args: Prisma.RestExternalApiParamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RestExternalApiParamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>[]
          }
          delete: {
            args: Prisma.RestExternalApiParamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>
          }
          update: {
            args: Prisma.RestExternalApiParamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>
          }
          deleteMany: {
            args: Prisma.RestExternalApiParamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestExternalApiParamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RestExternalApiParamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>[]
          }
          upsert: {
            args: Prisma.RestExternalApiParamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestExternalApiParamPayload>
          }
          aggregate: {
            args: Prisma.RestExternalApiParamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestExternalApiParam>
          }
          groupBy: {
            args: Prisma.RestExternalApiParamGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestExternalApiParamGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestExternalApiParamCountArgs<ExtArgs>
            result: $Utils.Optional<RestExternalApiParamCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    databaseSetting?: DatabaseSettingOmit
    restService?: RestServiceOmit
    restDatabaseSetting?: RestDatabaseSettingOmit
    restExternalApiSetting?: RestExternalApiSettingOmit
    restAuthServiceSetting?: RestAuthServiceSettingOmit
    restAuthServiceParam?: RestAuthServiceParamOmit
    restExternalApiParam?: RestExternalApiParamOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RestExternalApiSettingCountOutputType
   */

  export type RestExternalApiSettingCountOutputType = {
    restExternalApiParam: number
  }

  export type RestExternalApiSettingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restExternalApiParam?: boolean | RestExternalApiSettingCountOutputTypeCountRestExternalApiParamArgs
  }

  // Custom InputTypes
  /**
   * RestExternalApiSettingCountOutputType without action
   */
  export type RestExternalApiSettingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSettingCountOutputType
     */
    select?: RestExternalApiSettingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestExternalApiSettingCountOutputType without action
   */
  export type RestExternalApiSettingCountOutputTypeCountRestExternalApiParamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestExternalApiParamWhereInput
  }


  /**
   * Count Type RestAuthServiceSettingCountOutputType
   */

  export type RestAuthServiceSettingCountOutputType = {
    restAuthServiceParam: number
  }

  export type RestAuthServiceSettingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restAuthServiceParam?: boolean | RestAuthServiceSettingCountOutputTypeCountRestAuthServiceParamArgs
  }

  // Custom InputTypes
  /**
   * RestAuthServiceSettingCountOutputType without action
   */
  export type RestAuthServiceSettingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSettingCountOutputType
     */
    select?: RestAuthServiceSettingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestAuthServiceSettingCountOutputType without action
   */
  export type RestAuthServiceSettingCountOutputTypeCountRestAuthServiceParamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestAuthServiceParamWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    username: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string | null
    lastName: string | null
    username: string | null
    password: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "username" | "password", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string | null
      lastName: string | null
      username: string | null
      password: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model DatabaseSetting
   */

  export type AggregateDatabaseSetting = {
    _count: DatabaseSettingCountAggregateOutputType | null
    _avg: DatabaseSettingAvgAggregateOutputType | null
    _sum: DatabaseSettingSumAggregateOutputType | null
    _min: DatabaseSettingMinAggregateOutputType | null
    _max: DatabaseSettingMaxAggregateOutputType | null
  }

  export type DatabaseSettingAvgAggregateOutputType = {
    id: number | null
  }

  export type DatabaseSettingSumAggregateOutputType = {
    id: number | null
  }

  export type DatabaseSettingMinAggregateOutputType = {
    id: number | null
    dbType: string | null
    dbServer: string | null
    dbPort: string | null
    dbUsername: string | null
    dbPassword: string | null
    dbName: string | null
  }

  export type DatabaseSettingMaxAggregateOutputType = {
    id: number | null
    dbType: string | null
    dbServer: string | null
    dbPort: string | null
    dbUsername: string | null
    dbPassword: string | null
    dbName: string | null
  }

  export type DatabaseSettingCountAggregateOutputType = {
    id: number
    dbType: number
    dbServer: number
    dbPort: number
    dbUsername: number
    dbPassword: number
    dbName: number
    _all: number
  }


  export type DatabaseSettingAvgAggregateInputType = {
    id?: true
  }

  export type DatabaseSettingSumAggregateInputType = {
    id?: true
  }

  export type DatabaseSettingMinAggregateInputType = {
    id?: true
    dbType?: true
    dbServer?: true
    dbPort?: true
    dbUsername?: true
    dbPassword?: true
    dbName?: true
  }

  export type DatabaseSettingMaxAggregateInputType = {
    id?: true
    dbType?: true
    dbServer?: true
    dbPort?: true
    dbUsername?: true
    dbPassword?: true
    dbName?: true
  }

  export type DatabaseSettingCountAggregateInputType = {
    id?: true
    dbType?: true
    dbServer?: true
    dbPort?: true
    dbUsername?: true
    dbPassword?: true
    dbName?: true
    _all?: true
  }

  export type DatabaseSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatabaseSetting to aggregate.
     */
    where?: DatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseSettings to fetch.
     */
    orderBy?: DatabaseSettingOrderByWithRelationInput | DatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatabaseSettings
    **/
    _count?: true | DatabaseSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatabaseSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatabaseSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseSettingMaxAggregateInputType
  }

  export type GetDatabaseSettingAggregateType<T extends DatabaseSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabaseSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabaseSetting[P]>
      : GetScalarType<T[P], AggregateDatabaseSetting[P]>
  }




  export type DatabaseSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatabaseSettingWhereInput
    orderBy?: DatabaseSettingOrderByWithAggregationInput | DatabaseSettingOrderByWithAggregationInput[]
    by: DatabaseSettingScalarFieldEnum[] | DatabaseSettingScalarFieldEnum
    having?: DatabaseSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseSettingCountAggregateInputType | true
    _avg?: DatabaseSettingAvgAggregateInputType
    _sum?: DatabaseSettingSumAggregateInputType
    _min?: DatabaseSettingMinAggregateInputType
    _max?: DatabaseSettingMaxAggregateInputType
  }

  export type DatabaseSettingGroupByOutputType = {
    id: number
    dbType: string | null
    dbServer: string | null
    dbPort: string | null
    dbUsername: string | null
    dbPassword: string | null
    dbName: string | null
    _count: DatabaseSettingCountAggregateOutputType | null
    _avg: DatabaseSettingAvgAggregateOutputType | null
    _sum: DatabaseSettingSumAggregateOutputType | null
    _min: DatabaseSettingMinAggregateOutputType | null
    _max: DatabaseSettingMaxAggregateOutputType | null
  }

  type GetDatabaseSettingGroupByPayload<T extends DatabaseSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatabaseSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseSettingGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseSettingGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
  }, ExtArgs["result"]["databaseSetting"]>

  export type DatabaseSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
  }, ExtArgs["result"]["databaseSetting"]>

  export type DatabaseSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
  }, ExtArgs["result"]["databaseSetting"]>

  export type DatabaseSettingSelectScalar = {
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
  }

  export type DatabaseSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dbType" | "dbServer" | "dbPort" | "dbUsername" | "dbPassword" | "dbName", ExtArgs["result"]["databaseSetting"]>

  export type $DatabaseSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatabaseSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dbType: string | null
      dbServer: string | null
      dbPort: string | null
      dbUsername: string | null
      dbPassword: string | null
      dbName: string | null
    }, ExtArgs["result"]["databaseSetting"]>
    composites: {}
  }

  type DatabaseSettingGetPayload<S extends boolean | null | undefined | DatabaseSettingDefaultArgs> = $Result.GetResult<Prisma.$DatabaseSettingPayload, S>

  type DatabaseSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatabaseSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatabaseSettingCountAggregateInputType | true
    }

  export interface DatabaseSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatabaseSetting'], meta: { name: 'DatabaseSetting' } }
    /**
     * Find zero or one DatabaseSetting that matches the filter.
     * @param {DatabaseSettingFindUniqueArgs} args - Arguments to find a DatabaseSetting
     * @example
     * // Get one DatabaseSetting
     * const databaseSetting = await prisma.databaseSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatabaseSettingFindUniqueArgs>(args: SelectSubset<T, DatabaseSettingFindUniqueArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatabaseSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatabaseSettingFindUniqueOrThrowArgs} args - Arguments to find a DatabaseSetting
     * @example
     * // Get one DatabaseSetting
     * const databaseSetting = await prisma.databaseSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatabaseSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, DatabaseSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatabaseSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseSettingFindFirstArgs} args - Arguments to find a DatabaseSetting
     * @example
     * // Get one DatabaseSetting
     * const databaseSetting = await prisma.databaseSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatabaseSettingFindFirstArgs>(args?: SelectSubset<T, DatabaseSettingFindFirstArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatabaseSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseSettingFindFirstOrThrowArgs} args - Arguments to find a DatabaseSetting
     * @example
     * // Get one DatabaseSetting
     * const databaseSetting = await prisma.databaseSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatabaseSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, DatabaseSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatabaseSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatabaseSettings
     * const databaseSettings = await prisma.databaseSetting.findMany()
     * 
     * // Get first 10 DatabaseSettings
     * const databaseSettings = await prisma.databaseSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseSettingWithIdOnly = await prisma.databaseSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatabaseSettingFindManyArgs>(args?: SelectSubset<T, DatabaseSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatabaseSetting.
     * @param {DatabaseSettingCreateArgs} args - Arguments to create a DatabaseSetting.
     * @example
     * // Create one DatabaseSetting
     * const DatabaseSetting = await prisma.databaseSetting.create({
     *   data: {
     *     // ... data to create a DatabaseSetting
     *   }
     * })
     * 
     */
    create<T extends DatabaseSettingCreateArgs>(args: SelectSubset<T, DatabaseSettingCreateArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatabaseSettings.
     * @param {DatabaseSettingCreateManyArgs} args - Arguments to create many DatabaseSettings.
     * @example
     * // Create many DatabaseSettings
     * const databaseSetting = await prisma.databaseSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatabaseSettingCreateManyArgs>(args?: SelectSubset<T, DatabaseSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DatabaseSettings and returns the data saved in the database.
     * @param {DatabaseSettingCreateManyAndReturnArgs} args - Arguments to create many DatabaseSettings.
     * @example
     * // Create many DatabaseSettings
     * const databaseSetting = await prisma.databaseSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DatabaseSettings and only return the `id`
     * const databaseSettingWithIdOnly = await prisma.databaseSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatabaseSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, DatabaseSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DatabaseSetting.
     * @param {DatabaseSettingDeleteArgs} args - Arguments to delete one DatabaseSetting.
     * @example
     * // Delete one DatabaseSetting
     * const DatabaseSetting = await prisma.databaseSetting.delete({
     *   where: {
     *     // ... filter to delete one DatabaseSetting
     *   }
     * })
     * 
     */
    delete<T extends DatabaseSettingDeleteArgs>(args: SelectSubset<T, DatabaseSettingDeleteArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatabaseSetting.
     * @param {DatabaseSettingUpdateArgs} args - Arguments to update one DatabaseSetting.
     * @example
     * // Update one DatabaseSetting
     * const databaseSetting = await prisma.databaseSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatabaseSettingUpdateArgs>(args: SelectSubset<T, DatabaseSettingUpdateArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatabaseSettings.
     * @param {DatabaseSettingDeleteManyArgs} args - Arguments to filter DatabaseSettings to delete.
     * @example
     * // Delete a few DatabaseSettings
     * const { count } = await prisma.databaseSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatabaseSettingDeleteManyArgs>(args?: SelectSubset<T, DatabaseSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatabaseSettings
     * const databaseSetting = await prisma.databaseSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatabaseSettingUpdateManyArgs>(args: SelectSubset<T, DatabaseSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatabaseSettings and returns the data updated in the database.
     * @param {DatabaseSettingUpdateManyAndReturnArgs} args - Arguments to update many DatabaseSettings.
     * @example
     * // Update many DatabaseSettings
     * const databaseSetting = await prisma.databaseSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DatabaseSettings and only return the `id`
     * const databaseSettingWithIdOnly = await prisma.databaseSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatabaseSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, DatabaseSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DatabaseSetting.
     * @param {DatabaseSettingUpsertArgs} args - Arguments to update or create a DatabaseSetting.
     * @example
     * // Update or create a DatabaseSetting
     * const databaseSetting = await prisma.databaseSetting.upsert({
     *   create: {
     *     // ... data to create a DatabaseSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatabaseSetting we want to update
     *   }
     * })
     */
    upsert<T extends DatabaseSettingUpsertArgs>(args: SelectSubset<T, DatabaseSettingUpsertArgs<ExtArgs>>): Prisma__DatabaseSettingClient<$Result.GetResult<Prisma.$DatabaseSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatabaseSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseSettingCountArgs} args - Arguments to filter DatabaseSettings to count.
     * @example
     * // Count the number of DatabaseSettings
     * const count = await prisma.databaseSetting.count({
     *   where: {
     *     // ... the filter for the DatabaseSettings we want to count
     *   }
     * })
    **/
    count<T extends DatabaseSettingCountArgs>(
      args?: Subset<T, DatabaseSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatabaseSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabaseSettingAggregateArgs>(args: Subset<T, DatabaseSettingAggregateArgs>): Prisma.PrismaPromise<GetDatabaseSettingAggregateType<T>>

    /**
     * Group by DatabaseSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabaseSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseSettingGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabaseSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatabaseSetting model
   */
  readonly fields: DatabaseSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatabaseSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatabaseSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DatabaseSetting model
   */
  interface DatabaseSettingFieldRefs {
    readonly id: FieldRef<"DatabaseSetting", 'Int'>
    readonly dbType: FieldRef<"DatabaseSetting", 'String'>
    readonly dbServer: FieldRef<"DatabaseSetting", 'String'>
    readonly dbPort: FieldRef<"DatabaseSetting", 'String'>
    readonly dbUsername: FieldRef<"DatabaseSetting", 'String'>
    readonly dbPassword: FieldRef<"DatabaseSetting", 'String'>
    readonly dbName: FieldRef<"DatabaseSetting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DatabaseSetting findUnique
   */
  export type DatabaseSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * Filter, which DatabaseSetting to fetch.
     */
    where: DatabaseSettingWhereUniqueInput
  }

  /**
   * DatabaseSetting findUniqueOrThrow
   */
  export type DatabaseSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * Filter, which DatabaseSetting to fetch.
     */
    where: DatabaseSettingWhereUniqueInput
  }

  /**
   * DatabaseSetting findFirst
   */
  export type DatabaseSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * Filter, which DatabaseSetting to fetch.
     */
    where?: DatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseSettings to fetch.
     */
    orderBy?: DatabaseSettingOrderByWithRelationInput | DatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseSettings.
     */
    cursor?: DatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseSettings.
     */
    distinct?: DatabaseSettingScalarFieldEnum | DatabaseSettingScalarFieldEnum[]
  }

  /**
   * DatabaseSetting findFirstOrThrow
   */
  export type DatabaseSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * Filter, which DatabaseSetting to fetch.
     */
    where?: DatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseSettings to fetch.
     */
    orderBy?: DatabaseSettingOrderByWithRelationInput | DatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatabaseSettings.
     */
    cursor?: DatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseSettings.
     */
    distinct?: DatabaseSettingScalarFieldEnum | DatabaseSettingScalarFieldEnum[]
  }

  /**
   * DatabaseSetting findMany
   */
  export type DatabaseSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * Filter, which DatabaseSettings to fetch.
     */
    where?: DatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatabaseSettings to fetch.
     */
    orderBy?: DatabaseSettingOrderByWithRelationInput | DatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatabaseSettings.
     */
    cursor?: DatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatabaseSettings.
     */
    distinct?: DatabaseSettingScalarFieldEnum | DatabaseSettingScalarFieldEnum[]
  }

  /**
   * DatabaseSetting create
   */
  export type DatabaseSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a DatabaseSetting.
     */
    data?: XOR<DatabaseSettingCreateInput, DatabaseSettingUncheckedCreateInput>
  }

  /**
   * DatabaseSetting createMany
   */
  export type DatabaseSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatabaseSettings.
     */
    data: DatabaseSettingCreateManyInput | DatabaseSettingCreateManyInput[]
  }

  /**
   * DatabaseSetting createManyAndReturn
   */
  export type DatabaseSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * The data used to create many DatabaseSettings.
     */
    data: DatabaseSettingCreateManyInput | DatabaseSettingCreateManyInput[]
  }

  /**
   * DatabaseSetting update
   */
  export type DatabaseSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a DatabaseSetting.
     */
    data: XOR<DatabaseSettingUpdateInput, DatabaseSettingUncheckedUpdateInput>
    /**
     * Choose, which DatabaseSetting to update.
     */
    where: DatabaseSettingWhereUniqueInput
  }

  /**
   * DatabaseSetting updateMany
   */
  export type DatabaseSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatabaseSettings.
     */
    data: XOR<DatabaseSettingUpdateManyMutationInput, DatabaseSettingUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseSettings to update
     */
    where?: DatabaseSettingWhereInput
    /**
     * Limit how many DatabaseSettings to update.
     */
    limit?: number
  }

  /**
   * DatabaseSetting updateManyAndReturn
   */
  export type DatabaseSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * The data used to update DatabaseSettings.
     */
    data: XOR<DatabaseSettingUpdateManyMutationInput, DatabaseSettingUncheckedUpdateManyInput>
    /**
     * Filter which DatabaseSettings to update
     */
    where?: DatabaseSettingWhereInput
    /**
     * Limit how many DatabaseSettings to update.
     */
    limit?: number
  }

  /**
   * DatabaseSetting upsert
   */
  export type DatabaseSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the DatabaseSetting to update in case it exists.
     */
    where: DatabaseSettingWhereUniqueInput
    /**
     * In case the DatabaseSetting found by the `where` argument doesn't exist, create a new DatabaseSetting with this data.
     */
    create: XOR<DatabaseSettingCreateInput, DatabaseSettingUncheckedCreateInput>
    /**
     * In case the DatabaseSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatabaseSettingUpdateInput, DatabaseSettingUncheckedUpdateInput>
  }

  /**
   * DatabaseSetting delete
   */
  export type DatabaseSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
    /**
     * Filter which DatabaseSetting to delete.
     */
    where: DatabaseSettingWhereUniqueInput
  }

  /**
   * DatabaseSetting deleteMany
   */
  export type DatabaseSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatabaseSettings to delete
     */
    where?: DatabaseSettingWhereInput
    /**
     * Limit how many DatabaseSettings to delete.
     */
    limit?: number
  }

  /**
   * DatabaseSetting without action
   */
  export type DatabaseSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseSetting
     */
    select?: DatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatabaseSetting
     */
    omit?: DatabaseSettingOmit<ExtArgs> | null
  }


  /**
   * Model RestService
   */

  export type AggregateRestService = {
    _count: RestServiceCountAggregateOutputType | null
    _avg: RestServiceAvgAggregateOutputType | null
    _sum: RestServiceSumAggregateOutputType | null
    _min: RestServiceMinAggregateOutputType | null
    _max: RestServiceMaxAggregateOutputType | null
  }

  export type RestServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type RestServiceSumAggregateOutputType = {
    id: number | null
  }

  export type RestServiceMinAggregateOutputType = {
    id: number | null
    persianName: string | null
    latinName: string | null
    httpMethod: string | null
    restType: string | null
  }

  export type RestServiceMaxAggregateOutputType = {
    id: number | null
    persianName: string | null
    latinName: string | null
    httpMethod: string | null
    restType: string | null
  }

  export type RestServiceCountAggregateOutputType = {
    id: number
    persianName: number
    latinName: number
    httpMethod: number
    restType: number
    _all: number
  }


  export type RestServiceAvgAggregateInputType = {
    id?: true
  }

  export type RestServiceSumAggregateInputType = {
    id?: true
  }

  export type RestServiceMinAggregateInputType = {
    id?: true
    persianName?: true
    latinName?: true
    httpMethod?: true
    restType?: true
  }

  export type RestServiceMaxAggregateInputType = {
    id?: true
    persianName?: true
    latinName?: true
    httpMethod?: true
    restType?: true
  }

  export type RestServiceCountAggregateInputType = {
    id?: true
    persianName?: true
    latinName?: true
    httpMethod?: true
    restType?: true
    _all?: true
  }

  export type RestServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestService to aggregate.
     */
    where?: RestServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestServices to fetch.
     */
    orderBy?: RestServiceOrderByWithRelationInput | RestServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestServices
    **/
    _count?: true | RestServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestServiceMaxAggregateInputType
  }

  export type GetRestServiceAggregateType<T extends RestServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateRestService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestService[P]>
      : GetScalarType<T[P], AggregateRestService[P]>
  }




  export type RestServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestServiceWhereInput
    orderBy?: RestServiceOrderByWithAggregationInput | RestServiceOrderByWithAggregationInput[]
    by: RestServiceScalarFieldEnum[] | RestServiceScalarFieldEnum
    having?: RestServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestServiceCountAggregateInputType | true
    _avg?: RestServiceAvgAggregateInputType
    _sum?: RestServiceSumAggregateInputType
    _min?: RestServiceMinAggregateInputType
    _max?: RestServiceMaxAggregateInputType
  }

  export type RestServiceGroupByOutputType = {
    id: number
    persianName: string | null
    latinName: string | null
    httpMethod: string | null
    restType: string | null
    _count: RestServiceCountAggregateOutputType | null
    _avg: RestServiceAvgAggregateOutputType | null
    _sum: RestServiceSumAggregateOutputType | null
    _min: RestServiceMinAggregateOutputType | null
    _max: RestServiceMaxAggregateOutputType | null
  }

  type GetRestServiceGroupByPayload<T extends RestServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestServiceGroupByOutputType[P]>
            : GetScalarType<T[P], RestServiceGroupByOutputType[P]>
        }
      >
    >


  export type RestServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persianName?: boolean
    latinName?: boolean
    httpMethod?: boolean
    restType?: boolean
    restDatabaseSetting?: boolean | RestService$restDatabaseSettingArgs<ExtArgs>
    restExternalApiSetting?: boolean | RestService$restExternalApiSettingArgs<ExtArgs>
    restAuthServiceSetting?: boolean | RestService$restAuthServiceSettingArgs<ExtArgs>
  }, ExtArgs["result"]["restService"]>

  export type RestServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persianName?: boolean
    latinName?: boolean
    httpMethod?: boolean
    restType?: boolean
  }, ExtArgs["result"]["restService"]>

  export type RestServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    persianName?: boolean
    latinName?: boolean
    httpMethod?: boolean
    restType?: boolean
  }, ExtArgs["result"]["restService"]>

  export type RestServiceSelectScalar = {
    id?: boolean
    persianName?: boolean
    latinName?: boolean
    httpMethod?: boolean
    restType?: boolean
  }

  export type RestServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "persianName" | "latinName" | "httpMethod" | "restType", ExtArgs["result"]["restService"]>
  export type RestServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restDatabaseSetting?: boolean | RestService$restDatabaseSettingArgs<ExtArgs>
    restExternalApiSetting?: boolean | RestService$restExternalApiSettingArgs<ExtArgs>
    restAuthServiceSetting?: boolean | RestService$restAuthServiceSettingArgs<ExtArgs>
  }
  export type RestServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RestServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RestServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestService"
    objects: {
      restDatabaseSetting: Prisma.$RestDatabaseSettingPayload<ExtArgs> | null
      restExternalApiSetting: Prisma.$RestExternalApiSettingPayload<ExtArgs> | null
      restAuthServiceSetting: Prisma.$RestAuthServiceSettingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      persianName: string | null
      latinName: string | null
      httpMethod: string | null
      restType: string | null
    }, ExtArgs["result"]["restService"]>
    composites: {}
  }

  type RestServiceGetPayload<S extends boolean | null | undefined | RestServiceDefaultArgs> = $Result.GetResult<Prisma.$RestServicePayload, S>

  type RestServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestServiceCountAggregateInputType | true
    }

  export interface RestServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestService'], meta: { name: 'RestService' } }
    /**
     * Find zero or one RestService that matches the filter.
     * @param {RestServiceFindUniqueArgs} args - Arguments to find a RestService
     * @example
     * // Get one RestService
     * const restService = await prisma.restService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestServiceFindUniqueArgs>(args: SelectSubset<T, RestServiceFindUniqueArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestServiceFindUniqueOrThrowArgs} args - Arguments to find a RestService
     * @example
     * // Get one RestService
     * const restService = await prisma.restService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, RestServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestServiceFindFirstArgs} args - Arguments to find a RestService
     * @example
     * // Get one RestService
     * const restService = await prisma.restService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestServiceFindFirstArgs>(args?: SelectSubset<T, RestServiceFindFirstArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestServiceFindFirstOrThrowArgs} args - Arguments to find a RestService
     * @example
     * // Get one RestService
     * const restService = await prisma.restService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, RestServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestServices
     * const restServices = await prisma.restService.findMany()
     * 
     * // Get first 10 RestServices
     * const restServices = await prisma.restService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restServiceWithIdOnly = await prisma.restService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestServiceFindManyArgs>(args?: SelectSubset<T, RestServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestService.
     * @param {RestServiceCreateArgs} args - Arguments to create a RestService.
     * @example
     * // Create one RestService
     * const RestService = await prisma.restService.create({
     *   data: {
     *     // ... data to create a RestService
     *   }
     * })
     * 
     */
    create<T extends RestServiceCreateArgs>(args: SelectSubset<T, RestServiceCreateArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestServices.
     * @param {RestServiceCreateManyArgs} args - Arguments to create many RestServices.
     * @example
     * // Create many RestServices
     * const restService = await prisma.restService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestServiceCreateManyArgs>(args?: SelectSubset<T, RestServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestServices and returns the data saved in the database.
     * @param {RestServiceCreateManyAndReturnArgs} args - Arguments to create many RestServices.
     * @example
     * // Create many RestServices
     * const restService = await prisma.restService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestServices and only return the `id`
     * const restServiceWithIdOnly = await prisma.restService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, RestServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestService.
     * @param {RestServiceDeleteArgs} args - Arguments to delete one RestService.
     * @example
     * // Delete one RestService
     * const RestService = await prisma.restService.delete({
     *   where: {
     *     // ... filter to delete one RestService
     *   }
     * })
     * 
     */
    delete<T extends RestServiceDeleteArgs>(args: SelectSubset<T, RestServiceDeleteArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestService.
     * @param {RestServiceUpdateArgs} args - Arguments to update one RestService.
     * @example
     * // Update one RestService
     * const restService = await prisma.restService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestServiceUpdateArgs>(args: SelectSubset<T, RestServiceUpdateArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestServices.
     * @param {RestServiceDeleteManyArgs} args - Arguments to filter RestServices to delete.
     * @example
     * // Delete a few RestServices
     * const { count } = await prisma.restService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestServiceDeleteManyArgs>(args?: SelectSubset<T, RestServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestServices
     * const restService = await prisma.restService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestServiceUpdateManyArgs>(args: SelectSubset<T, RestServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestServices and returns the data updated in the database.
     * @param {RestServiceUpdateManyAndReturnArgs} args - Arguments to update many RestServices.
     * @example
     * // Update many RestServices
     * const restService = await prisma.restService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestServices and only return the `id`
     * const restServiceWithIdOnly = await prisma.restService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, RestServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestService.
     * @param {RestServiceUpsertArgs} args - Arguments to update or create a RestService.
     * @example
     * // Update or create a RestService
     * const restService = await prisma.restService.upsert({
     *   create: {
     *     // ... data to create a RestService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestService we want to update
     *   }
     * })
     */
    upsert<T extends RestServiceUpsertArgs>(args: SelectSubset<T, RestServiceUpsertArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestServiceCountArgs} args - Arguments to filter RestServices to count.
     * @example
     * // Count the number of RestServices
     * const count = await prisma.restService.count({
     *   where: {
     *     // ... the filter for the RestServices we want to count
     *   }
     * })
    **/
    count<T extends RestServiceCountArgs>(
      args?: Subset<T, RestServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestServiceAggregateArgs>(args: Subset<T, RestServiceAggregateArgs>): Prisma.PrismaPromise<GetRestServiceAggregateType<T>>

    /**
     * Group by RestService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestServiceGroupByArgs['orderBy'] }
        : { orderBy?: RestServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestService model
   */
  readonly fields: RestServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restDatabaseSetting<T extends RestService$restDatabaseSettingArgs<ExtArgs> = {}>(args?: Subset<T, RestService$restDatabaseSettingArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restExternalApiSetting<T extends RestService$restExternalApiSettingArgs<ExtArgs> = {}>(args?: Subset<T, RestService$restExternalApiSettingArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    restAuthServiceSetting<T extends RestService$restAuthServiceSettingArgs<ExtArgs> = {}>(args?: Subset<T, RestService$restAuthServiceSettingArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestService model
   */
  interface RestServiceFieldRefs {
    readonly id: FieldRef<"RestService", 'Int'>
    readonly persianName: FieldRef<"RestService", 'String'>
    readonly latinName: FieldRef<"RestService", 'String'>
    readonly httpMethod: FieldRef<"RestService", 'String'>
    readonly restType: FieldRef<"RestService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RestService findUnique
   */
  export type RestServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * Filter, which RestService to fetch.
     */
    where: RestServiceWhereUniqueInput
  }

  /**
   * RestService findUniqueOrThrow
   */
  export type RestServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * Filter, which RestService to fetch.
     */
    where: RestServiceWhereUniqueInput
  }

  /**
   * RestService findFirst
   */
  export type RestServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * Filter, which RestService to fetch.
     */
    where?: RestServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestServices to fetch.
     */
    orderBy?: RestServiceOrderByWithRelationInput | RestServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestServices.
     */
    cursor?: RestServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestServices.
     */
    distinct?: RestServiceScalarFieldEnum | RestServiceScalarFieldEnum[]
  }

  /**
   * RestService findFirstOrThrow
   */
  export type RestServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * Filter, which RestService to fetch.
     */
    where?: RestServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestServices to fetch.
     */
    orderBy?: RestServiceOrderByWithRelationInput | RestServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestServices.
     */
    cursor?: RestServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestServices.
     */
    distinct?: RestServiceScalarFieldEnum | RestServiceScalarFieldEnum[]
  }

  /**
   * RestService findMany
   */
  export type RestServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * Filter, which RestServices to fetch.
     */
    where?: RestServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestServices to fetch.
     */
    orderBy?: RestServiceOrderByWithRelationInput | RestServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestServices.
     */
    cursor?: RestServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestServices.
     */
    distinct?: RestServiceScalarFieldEnum | RestServiceScalarFieldEnum[]
  }

  /**
   * RestService create
   */
  export type RestServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a RestService.
     */
    data?: XOR<RestServiceCreateInput, RestServiceUncheckedCreateInput>
  }

  /**
   * RestService createMany
   */
  export type RestServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestServices.
     */
    data: RestServiceCreateManyInput | RestServiceCreateManyInput[]
  }

  /**
   * RestService createManyAndReturn
   */
  export type RestServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * The data used to create many RestServices.
     */
    data: RestServiceCreateManyInput | RestServiceCreateManyInput[]
  }

  /**
   * RestService update
   */
  export type RestServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a RestService.
     */
    data: XOR<RestServiceUpdateInput, RestServiceUncheckedUpdateInput>
    /**
     * Choose, which RestService to update.
     */
    where: RestServiceWhereUniqueInput
  }

  /**
   * RestService updateMany
   */
  export type RestServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestServices.
     */
    data: XOR<RestServiceUpdateManyMutationInput, RestServiceUncheckedUpdateManyInput>
    /**
     * Filter which RestServices to update
     */
    where?: RestServiceWhereInput
    /**
     * Limit how many RestServices to update.
     */
    limit?: number
  }

  /**
   * RestService updateManyAndReturn
   */
  export type RestServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * The data used to update RestServices.
     */
    data: XOR<RestServiceUpdateManyMutationInput, RestServiceUncheckedUpdateManyInput>
    /**
     * Filter which RestServices to update
     */
    where?: RestServiceWhereInput
    /**
     * Limit how many RestServices to update.
     */
    limit?: number
  }

  /**
   * RestService upsert
   */
  export type RestServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the RestService to update in case it exists.
     */
    where: RestServiceWhereUniqueInput
    /**
     * In case the RestService found by the `where` argument doesn't exist, create a new RestService with this data.
     */
    create: XOR<RestServiceCreateInput, RestServiceUncheckedCreateInput>
    /**
     * In case the RestService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestServiceUpdateInput, RestServiceUncheckedUpdateInput>
  }

  /**
   * RestService delete
   */
  export type RestServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
    /**
     * Filter which RestService to delete.
     */
    where: RestServiceWhereUniqueInput
  }

  /**
   * RestService deleteMany
   */
  export type RestServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestServices to delete
     */
    where?: RestServiceWhereInput
    /**
     * Limit how many RestServices to delete.
     */
    limit?: number
  }

  /**
   * RestService.restDatabaseSetting
   */
  export type RestService$restDatabaseSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    where?: RestDatabaseSettingWhereInput
  }

  /**
   * RestService.restExternalApiSetting
   */
  export type RestService$restExternalApiSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    where?: RestExternalApiSettingWhereInput
  }

  /**
   * RestService.restAuthServiceSetting
   */
  export type RestService$restAuthServiceSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    where?: RestAuthServiceSettingWhereInput
  }

  /**
   * RestService without action
   */
  export type RestServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestService
     */
    select?: RestServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestService
     */
    omit?: RestServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestServiceInclude<ExtArgs> | null
  }


  /**
   * Model RestDatabaseSetting
   */

  export type AggregateRestDatabaseSetting = {
    _count: RestDatabaseSettingCountAggregateOutputType | null
    _avg: RestDatabaseSettingAvgAggregateOutputType | null
    _sum: RestDatabaseSettingSumAggregateOutputType | null
    _min: RestDatabaseSettingMinAggregateOutputType | null
    _max: RestDatabaseSettingMaxAggregateOutputType | null
  }

  export type RestDatabaseSettingAvgAggregateOutputType = {
    id: number | null
    restServiceRef: number | null
  }

  export type RestDatabaseSettingSumAggregateOutputType = {
    id: number | null
    restServiceRef: number | null
  }

  export type RestDatabaseSettingMinAggregateOutputType = {
    id: number | null
    dbType: string | null
    dbServer: string | null
    dbPort: string | null
    dbUsername: string | null
    dbPassword: string | null
    dbName: string | null
    dbViewName: string | null
    restServiceRef: number | null
  }

  export type RestDatabaseSettingMaxAggregateOutputType = {
    id: number | null
    dbType: string | null
    dbServer: string | null
    dbPort: string | null
    dbUsername: string | null
    dbPassword: string | null
    dbName: string | null
    dbViewName: string | null
    restServiceRef: number | null
  }

  export type RestDatabaseSettingCountAggregateOutputType = {
    id: number
    dbType: number
    dbServer: number
    dbPort: number
    dbUsername: number
    dbPassword: number
    dbName: number
    dbViewName: number
    restServiceRef: number
    _all: number
  }


  export type RestDatabaseSettingAvgAggregateInputType = {
    id?: true
    restServiceRef?: true
  }

  export type RestDatabaseSettingSumAggregateInputType = {
    id?: true
    restServiceRef?: true
  }

  export type RestDatabaseSettingMinAggregateInputType = {
    id?: true
    dbType?: true
    dbServer?: true
    dbPort?: true
    dbUsername?: true
    dbPassword?: true
    dbName?: true
    dbViewName?: true
    restServiceRef?: true
  }

  export type RestDatabaseSettingMaxAggregateInputType = {
    id?: true
    dbType?: true
    dbServer?: true
    dbPort?: true
    dbUsername?: true
    dbPassword?: true
    dbName?: true
    dbViewName?: true
    restServiceRef?: true
  }

  export type RestDatabaseSettingCountAggregateInputType = {
    id?: true
    dbType?: true
    dbServer?: true
    dbPort?: true
    dbUsername?: true
    dbPassword?: true
    dbName?: true
    dbViewName?: true
    restServiceRef?: true
    _all?: true
  }

  export type RestDatabaseSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestDatabaseSetting to aggregate.
     */
    where?: RestDatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestDatabaseSettings to fetch.
     */
    orderBy?: RestDatabaseSettingOrderByWithRelationInput | RestDatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestDatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestDatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestDatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestDatabaseSettings
    **/
    _count?: true | RestDatabaseSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestDatabaseSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestDatabaseSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestDatabaseSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestDatabaseSettingMaxAggregateInputType
  }

  export type GetRestDatabaseSettingAggregateType<T extends RestDatabaseSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateRestDatabaseSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestDatabaseSetting[P]>
      : GetScalarType<T[P], AggregateRestDatabaseSetting[P]>
  }




  export type RestDatabaseSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestDatabaseSettingWhereInput
    orderBy?: RestDatabaseSettingOrderByWithAggregationInput | RestDatabaseSettingOrderByWithAggregationInput[]
    by: RestDatabaseSettingScalarFieldEnum[] | RestDatabaseSettingScalarFieldEnum
    having?: RestDatabaseSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestDatabaseSettingCountAggregateInputType | true
    _avg?: RestDatabaseSettingAvgAggregateInputType
    _sum?: RestDatabaseSettingSumAggregateInputType
    _min?: RestDatabaseSettingMinAggregateInputType
    _max?: RestDatabaseSettingMaxAggregateInputType
  }

  export type RestDatabaseSettingGroupByOutputType = {
    id: number
    dbType: string | null
    dbServer: string | null
    dbPort: string | null
    dbUsername: string | null
    dbPassword: string | null
    dbName: string | null
    dbViewName: string | null
    restServiceRef: number
    _count: RestDatabaseSettingCountAggregateOutputType | null
    _avg: RestDatabaseSettingAvgAggregateOutputType | null
    _sum: RestDatabaseSettingSumAggregateOutputType | null
    _min: RestDatabaseSettingMinAggregateOutputType | null
    _max: RestDatabaseSettingMaxAggregateOutputType | null
  }

  type GetRestDatabaseSettingGroupByPayload<T extends RestDatabaseSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestDatabaseSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestDatabaseSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestDatabaseSettingGroupByOutputType[P]>
            : GetScalarType<T[P], RestDatabaseSettingGroupByOutputType[P]>
        }
      >
    >


  export type RestDatabaseSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
    dbViewName?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restDatabaseSetting"]>

  export type RestDatabaseSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
    dbViewName?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restDatabaseSetting"]>

  export type RestDatabaseSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
    dbViewName?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restDatabaseSetting"]>

  export type RestDatabaseSettingSelectScalar = {
    id?: boolean
    dbType?: boolean
    dbServer?: boolean
    dbPort?: boolean
    dbUsername?: boolean
    dbPassword?: boolean
    dbName?: boolean
    dbViewName?: boolean
    restServiceRef?: boolean
  }

  export type RestDatabaseSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dbType" | "dbServer" | "dbPort" | "dbUsername" | "dbPassword" | "dbName" | "dbViewName" | "restServiceRef", ExtArgs["result"]["restDatabaseSetting"]>
  export type RestDatabaseSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }
  export type RestDatabaseSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }
  export type RestDatabaseSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }

  export type $RestDatabaseSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestDatabaseSetting"
    objects: {
      restService: Prisma.$RestServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dbType: string | null
      dbServer: string | null
      dbPort: string | null
      dbUsername: string | null
      dbPassword: string | null
      dbName: string | null
      dbViewName: string | null
      restServiceRef: number
    }, ExtArgs["result"]["restDatabaseSetting"]>
    composites: {}
  }

  type RestDatabaseSettingGetPayload<S extends boolean | null | undefined | RestDatabaseSettingDefaultArgs> = $Result.GetResult<Prisma.$RestDatabaseSettingPayload, S>

  type RestDatabaseSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestDatabaseSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestDatabaseSettingCountAggregateInputType | true
    }

  export interface RestDatabaseSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestDatabaseSetting'], meta: { name: 'RestDatabaseSetting' } }
    /**
     * Find zero or one RestDatabaseSetting that matches the filter.
     * @param {RestDatabaseSettingFindUniqueArgs} args - Arguments to find a RestDatabaseSetting
     * @example
     * // Get one RestDatabaseSetting
     * const restDatabaseSetting = await prisma.restDatabaseSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestDatabaseSettingFindUniqueArgs>(args: SelectSubset<T, RestDatabaseSettingFindUniqueArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestDatabaseSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestDatabaseSettingFindUniqueOrThrowArgs} args - Arguments to find a RestDatabaseSetting
     * @example
     * // Get one RestDatabaseSetting
     * const restDatabaseSetting = await prisma.restDatabaseSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestDatabaseSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, RestDatabaseSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestDatabaseSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestDatabaseSettingFindFirstArgs} args - Arguments to find a RestDatabaseSetting
     * @example
     * // Get one RestDatabaseSetting
     * const restDatabaseSetting = await prisma.restDatabaseSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestDatabaseSettingFindFirstArgs>(args?: SelectSubset<T, RestDatabaseSettingFindFirstArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestDatabaseSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestDatabaseSettingFindFirstOrThrowArgs} args - Arguments to find a RestDatabaseSetting
     * @example
     * // Get one RestDatabaseSetting
     * const restDatabaseSetting = await prisma.restDatabaseSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestDatabaseSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, RestDatabaseSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestDatabaseSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestDatabaseSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestDatabaseSettings
     * const restDatabaseSettings = await prisma.restDatabaseSetting.findMany()
     * 
     * // Get first 10 RestDatabaseSettings
     * const restDatabaseSettings = await prisma.restDatabaseSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restDatabaseSettingWithIdOnly = await prisma.restDatabaseSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestDatabaseSettingFindManyArgs>(args?: SelectSubset<T, RestDatabaseSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestDatabaseSetting.
     * @param {RestDatabaseSettingCreateArgs} args - Arguments to create a RestDatabaseSetting.
     * @example
     * // Create one RestDatabaseSetting
     * const RestDatabaseSetting = await prisma.restDatabaseSetting.create({
     *   data: {
     *     // ... data to create a RestDatabaseSetting
     *   }
     * })
     * 
     */
    create<T extends RestDatabaseSettingCreateArgs>(args: SelectSubset<T, RestDatabaseSettingCreateArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestDatabaseSettings.
     * @param {RestDatabaseSettingCreateManyArgs} args - Arguments to create many RestDatabaseSettings.
     * @example
     * // Create many RestDatabaseSettings
     * const restDatabaseSetting = await prisma.restDatabaseSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestDatabaseSettingCreateManyArgs>(args?: SelectSubset<T, RestDatabaseSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestDatabaseSettings and returns the data saved in the database.
     * @param {RestDatabaseSettingCreateManyAndReturnArgs} args - Arguments to create many RestDatabaseSettings.
     * @example
     * // Create many RestDatabaseSettings
     * const restDatabaseSetting = await prisma.restDatabaseSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestDatabaseSettings and only return the `id`
     * const restDatabaseSettingWithIdOnly = await prisma.restDatabaseSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestDatabaseSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, RestDatabaseSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestDatabaseSetting.
     * @param {RestDatabaseSettingDeleteArgs} args - Arguments to delete one RestDatabaseSetting.
     * @example
     * // Delete one RestDatabaseSetting
     * const RestDatabaseSetting = await prisma.restDatabaseSetting.delete({
     *   where: {
     *     // ... filter to delete one RestDatabaseSetting
     *   }
     * })
     * 
     */
    delete<T extends RestDatabaseSettingDeleteArgs>(args: SelectSubset<T, RestDatabaseSettingDeleteArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestDatabaseSetting.
     * @param {RestDatabaseSettingUpdateArgs} args - Arguments to update one RestDatabaseSetting.
     * @example
     * // Update one RestDatabaseSetting
     * const restDatabaseSetting = await prisma.restDatabaseSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestDatabaseSettingUpdateArgs>(args: SelectSubset<T, RestDatabaseSettingUpdateArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestDatabaseSettings.
     * @param {RestDatabaseSettingDeleteManyArgs} args - Arguments to filter RestDatabaseSettings to delete.
     * @example
     * // Delete a few RestDatabaseSettings
     * const { count } = await prisma.restDatabaseSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestDatabaseSettingDeleteManyArgs>(args?: SelectSubset<T, RestDatabaseSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestDatabaseSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestDatabaseSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestDatabaseSettings
     * const restDatabaseSetting = await prisma.restDatabaseSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestDatabaseSettingUpdateManyArgs>(args: SelectSubset<T, RestDatabaseSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestDatabaseSettings and returns the data updated in the database.
     * @param {RestDatabaseSettingUpdateManyAndReturnArgs} args - Arguments to update many RestDatabaseSettings.
     * @example
     * // Update many RestDatabaseSettings
     * const restDatabaseSetting = await prisma.restDatabaseSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestDatabaseSettings and only return the `id`
     * const restDatabaseSettingWithIdOnly = await prisma.restDatabaseSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestDatabaseSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, RestDatabaseSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestDatabaseSetting.
     * @param {RestDatabaseSettingUpsertArgs} args - Arguments to update or create a RestDatabaseSetting.
     * @example
     * // Update or create a RestDatabaseSetting
     * const restDatabaseSetting = await prisma.restDatabaseSetting.upsert({
     *   create: {
     *     // ... data to create a RestDatabaseSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestDatabaseSetting we want to update
     *   }
     * })
     */
    upsert<T extends RestDatabaseSettingUpsertArgs>(args: SelectSubset<T, RestDatabaseSettingUpsertArgs<ExtArgs>>): Prisma__RestDatabaseSettingClient<$Result.GetResult<Prisma.$RestDatabaseSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestDatabaseSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestDatabaseSettingCountArgs} args - Arguments to filter RestDatabaseSettings to count.
     * @example
     * // Count the number of RestDatabaseSettings
     * const count = await prisma.restDatabaseSetting.count({
     *   where: {
     *     // ... the filter for the RestDatabaseSettings we want to count
     *   }
     * })
    **/
    count<T extends RestDatabaseSettingCountArgs>(
      args?: Subset<T, RestDatabaseSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestDatabaseSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestDatabaseSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestDatabaseSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestDatabaseSettingAggregateArgs>(args: Subset<T, RestDatabaseSettingAggregateArgs>): Prisma.PrismaPromise<GetRestDatabaseSettingAggregateType<T>>

    /**
     * Group by RestDatabaseSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestDatabaseSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestDatabaseSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestDatabaseSettingGroupByArgs['orderBy'] }
        : { orderBy?: RestDatabaseSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestDatabaseSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestDatabaseSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestDatabaseSetting model
   */
  readonly fields: RestDatabaseSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestDatabaseSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestDatabaseSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restService<T extends RestServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestServiceDefaultArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestDatabaseSetting model
   */
  interface RestDatabaseSettingFieldRefs {
    readonly id: FieldRef<"RestDatabaseSetting", 'Int'>
    readonly dbType: FieldRef<"RestDatabaseSetting", 'String'>
    readonly dbServer: FieldRef<"RestDatabaseSetting", 'String'>
    readonly dbPort: FieldRef<"RestDatabaseSetting", 'String'>
    readonly dbUsername: FieldRef<"RestDatabaseSetting", 'String'>
    readonly dbPassword: FieldRef<"RestDatabaseSetting", 'String'>
    readonly dbName: FieldRef<"RestDatabaseSetting", 'String'>
    readonly dbViewName: FieldRef<"RestDatabaseSetting", 'String'>
    readonly restServiceRef: FieldRef<"RestDatabaseSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RestDatabaseSetting findUnique
   */
  export type RestDatabaseSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestDatabaseSetting to fetch.
     */
    where: RestDatabaseSettingWhereUniqueInput
  }

  /**
   * RestDatabaseSetting findUniqueOrThrow
   */
  export type RestDatabaseSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestDatabaseSetting to fetch.
     */
    where: RestDatabaseSettingWhereUniqueInput
  }

  /**
   * RestDatabaseSetting findFirst
   */
  export type RestDatabaseSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestDatabaseSetting to fetch.
     */
    where?: RestDatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestDatabaseSettings to fetch.
     */
    orderBy?: RestDatabaseSettingOrderByWithRelationInput | RestDatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestDatabaseSettings.
     */
    cursor?: RestDatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestDatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestDatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestDatabaseSettings.
     */
    distinct?: RestDatabaseSettingScalarFieldEnum | RestDatabaseSettingScalarFieldEnum[]
  }

  /**
   * RestDatabaseSetting findFirstOrThrow
   */
  export type RestDatabaseSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestDatabaseSetting to fetch.
     */
    where?: RestDatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestDatabaseSettings to fetch.
     */
    orderBy?: RestDatabaseSettingOrderByWithRelationInput | RestDatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestDatabaseSettings.
     */
    cursor?: RestDatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestDatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestDatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestDatabaseSettings.
     */
    distinct?: RestDatabaseSettingScalarFieldEnum | RestDatabaseSettingScalarFieldEnum[]
  }

  /**
   * RestDatabaseSetting findMany
   */
  export type RestDatabaseSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestDatabaseSettings to fetch.
     */
    where?: RestDatabaseSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestDatabaseSettings to fetch.
     */
    orderBy?: RestDatabaseSettingOrderByWithRelationInput | RestDatabaseSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestDatabaseSettings.
     */
    cursor?: RestDatabaseSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestDatabaseSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestDatabaseSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestDatabaseSettings.
     */
    distinct?: RestDatabaseSettingScalarFieldEnum | RestDatabaseSettingScalarFieldEnum[]
  }

  /**
   * RestDatabaseSetting create
   */
  export type RestDatabaseSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a RestDatabaseSetting.
     */
    data: XOR<RestDatabaseSettingCreateInput, RestDatabaseSettingUncheckedCreateInput>
  }

  /**
   * RestDatabaseSetting createMany
   */
  export type RestDatabaseSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestDatabaseSettings.
     */
    data: RestDatabaseSettingCreateManyInput | RestDatabaseSettingCreateManyInput[]
  }

  /**
   * RestDatabaseSetting createManyAndReturn
   */
  export type RestDatabaseSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * The data used to create many RestDatabaseSettings.
     */
    data: RestDatabaseSettingCreateManyInput | RestDatabaseSettingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestDatabaseSetting update
   */
  export type RestDatabaseSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a RestDatabaseSetting.
     */
    data: XOR<RestDatabaseSettingUpdateInput, RestDatabaseSettingUncheckedUpdateInput>
    /**
     * Choose, which RestDatabaseSetting to update.
     */
    where: RestDatabaseSettingWhereUniqueInput
  }

  /**
   * RestDatabaseSetting updateMany
   */
  export type RestDatabaseSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestDatabaseSettings.
     */
    data: XOR<RestDatabaseSettingUpdateManyMutationInput, RestDatabaseSettingUncheckedUpdateManyInput>
    /**
     * Filter which RestDatabaseSettings to update
     */
    where?: RestDatabaseSettingWhereInput
    /**
     * Limit how many RestDatabaseSettings to update.
     */
    limit?: number
  }

  /**
   * RestDatabaseSetting updateManyAndReturn
   */
  export type RestDatabaseSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * The data used to update RestDatabaseSettings.
     */
    data: XOR<RestDatabaseSettingUpdateManyMutationInput, RestDatabaseSettingUncheckedUpdateManyInput>
    /**
     * Filter which RestDatabaseSettings to update
     */
    where?: RestDatabaseSettingWhereInput
    /**
     * Limit how many RestDatabaseSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestDatabaseSetting upsert
   */
  export type RestDatabaseSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the RestDatabaseSetting to update in case it exists.
     */
    where: RestDatabaseSettingWhereUniqueInput
    /**
     * In case the RestDatabaseSetting found by the `where` argument doesn't exist, create a new RestDatabaseSetting with this data.
     */
    create: XOR<RestDatabaseSettingCreateInput, RestDatabaseSettingUncheckedCreateInput>
    /**
     * In case the RestDatabaseSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestDatabaseSettingUpdateInput, RestDatabaseSettingUncheckedUpdateInput>
  }

  /**
   * RestDatabaseSetting delete
   */
  export type RestDatabaseSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
    /**
     * Filter which RestDatabaseSetting to delete.
     */
    where: RestDatabaseSettingWhereUniqueInput
  }

  /**
   * RestDatabaseSetting deleteMany
   */
  export type RestDatabaseSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestDatabaseSettings to delete
     */
    where?: RestDatabaseSettingWhereInput
    /**
     * Limit how many RestDatabaseSettings to delete.
     */
    limit?: number
  }

  /**
   * RestDatabaseSetting without action
   */
  export type RestDatabaseSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestDatabaseSetting
     */
    select?: RestDatabaseSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestDatabaseSetting
     */
    omit?: RestDatabaseSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestDatabaseSettingInclude<ExtArgs> | null
  }


  /**
   * Model RestExternalApiSetting
   */

  export type AggregateRestExternalApiSetting = {
    _count: RestExternalApiSettingCountAggregateOutputType | null
    _avg: RestExternalApiSettingAvgAggregateOutputType | null
    _sum: RestExternalApiSettingSumAggregateOutputType | null
    _min: RestExternalApiSettingMinAggregateOutputType | null
    _max: RestExternalApiSettingMaxAggregateOutputType | null
  }

  export type RestExternalApiSettingAvgAggregateOutputType = {
    id: number | null
    restServiceRef: number | null
  }

  export type RestExternalApiSettingSumAggregateOutputType = {
    id: number | null
    restServiceRef: number | null
  }

  export type RestExternalApiSettingMinAggregateOutputType = {
    id: number | null
    baseUrl: string | null
    hasAuth: boolean | null
    restServiceRef: number | null
  }

  export type RestExternalApiSettingMaxAggregateOutputType = {
    id: number | null
    baseUrl: string | null
    hasAuth: boolean | null
    restServiceRef: number | null
  }

  export type RestExternalApiSettingCountAggregateOutputType = {
    id: number
    baseUrl: number
    hasAuth: number
    restServiceRef: number
    _all: number
  }


  export type RestExternalApiSettingAvgAggregateInputType = {
    id?: true
    restServiceRef?: true
  }

  export type RestExternalApiSettingSumAggregateInputType = {
    id?: true
    restServiceRef?: true
  }

  export type RestExternalApiSettingMinAggregateInputType = {
    id?: true
    baseUrl?: true
    hasAuth?: true
    restServiceRef?: true
  }

  export type RestExternalApiSettingMaxAggregateInputType = {
    id?: true
    baseUrl?: true
    hasAuth?: true
    restServiceRef?: true
  }

  export type RestExternalApiSettingCountAggregateInputType = {
    id?: true
    baseUrl?: true
    hasAuth?: true
    restServiceRef?: true
    _all?: true
  }

  export type RestExternalApiSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestExternalApiSetting to aggregate.
     */
    where?: RestExternalApiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiSettings to fetch.
     */
    orderBy?: RestExternalApiSettingOrderByWithRelationInput | RestExternalApiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestExternalApiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestExternalApiSettings
    **/
    _count?: true | RestExternalApiSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestExternalApiSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestExternalApiSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestExternalApiSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestExternalApiSettingMaxAggregateInputType
  }

  export type GetRestExternalApiSettingAggregateType<T extends RestExternalApiSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateRestExternalApiSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestExternalApiSetting[P]>
      : GetScalarType<T[P], AggregateRestExternalApiSetting[P]>
  }




  export type RestExternalApiSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestExternalApiSettingWhereInput
    orderBy?: RestExternalApiSettingOrderByWithAggregationInput | RestExternalApiSettingOrderByWithAggregationInput[]
    by: RestExternalApiSettingScalarFieldEnum[] | RestExternalApiSettingScalarFieldEnum
    having?: RestExternalApiSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestExternalApiSettingCountAggregateInputType | true
    _avg?: RestExternalApiSettingAvgAggregateInputType
    _sum?: RestExternalApiSettingSumAggregateInputType
    _min?: RestExternalApiSettingMinAggregateInputType
    _max?: RestExternalApiSettingMaxAggregateInputType
  }

  export type RestExternalApiSettingGroupByOutputType = {
    id: number
    baseUrl: string | null
    hasAuth: boolean | null
    restServiceRef: number
    _count: RestExternalApiSettingCountAggregateOutputType | null
    _avg: RestExternalApiSettingAvgAggregateOutputType | null
    _sum: RestExternalApiSettingSumAggregateOutputType | null
    _min: RestExternalApiSettingMinAggregateOutputType | null
    _max: RestExternalApiSettingMaxAggregateOutputType | null
  }

  type GetRestExternalApiSettingGroupByPayload<T extends RestExternalApiSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestExternalApiSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestExternalApiSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestExternalApiSettingGroupByOutputType[P]>
            : GetScalarType<T[P], RestExternalApiSettingGroupByOutputType[P]>
        }
      >
    >


  export type RestExternalApiSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseUrl?: boolean
    hasAuth?: boolean
    restServiceRef?: boolean
    restExternalApiParam?: boolean | RestExternalApiSetting$restExternalApiParamArgs<ExtArgs>
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
    _count?: boolean | RestExternalApiSettingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restExternalApiSetting"]>

  export type RestExternalApiSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseUrl?: boolean
    hasAuth?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restExternalApiSetting"]>

  export type RestExternalApiSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    baseUrl?: boolean
    hasAuth?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restExternalApiSetting"]>

  export type RestExternalApiSettingSelectScalar = {
    id?: boolean
    baseUrl?: boolean
    hasAuth?: boolean
    restServiceRef?: boolean
  }

  export type RestExternalApiSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "baseUrl" | "hasAuth" | "restServiceRef", ExtArgs["result"]["restExternalApiSetting"]>
  export type RestExternalApiSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restExternalApiParam?: boolean | RestExternalApiSetting$restExternalApiParamArgs<ExtArgs>
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
    _count?: boolean | RestExternalApiSettingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestExternalApiSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }
  export type RestExternalApiSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }

  export type $RestExternalApiSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestExternalApiSetting"
    objects: {
      restExternalApiParam: Prisma.$RestExternalApiParamPayload<ExtArgs>[]
      restService: Prisma.$RestServicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      baseUrl: string | null
      hasAuth: boolean | null
      restServiceRef: number
    }, ExtArgs["result"]["restExternalApiSetting"]>
    composites: {}
  }

  type RestExternalApiSettingGetPayload<S extends boolean | null | undefined | RestExternalApiSettingDefaultArgs> = $Result.GetResult<Prisma.$RestExternalApiSettingPayload, S>

  type RestExternalApiSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestExternalApiSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestExternalApiSettingCountAggregateInputType | true
    }

  export interface RestExternalApiSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestExternalApiSetting'], meta: { name: 'RestExternalApiSetting' } }
    /**
     * Find zero or one RestExternalApiSetting that matches the filter.
     * @param {RestExternalApiSettingFindUniqueArgs} args - Arguments to find a RestExternalApiSetting
     * @example
     * // Get one RestExternalApiSetting
     * const restExternalApiSetting = await prisma.restExternalApiSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestExternalApiSettingFindUniqueArgs>(args: SelectSubset<T, RestExternalApiSettingFindUniqueArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestExternalApiSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestExternalApiSettingFindUniqueOrThrowArgs} args - Arguments to find a RestExternalApiSetting
     * @example
     * // Get one RestExternalApiSetting
     * const restExternalApiSetting = await prisma.restExternalApiSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestExternalApiSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, RestExternalApiSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestExternalApiSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiSettingFindFirstArgs} args - Arguments to find a RestExternalApiSetting
     * @example
     * // Get one RestExternalApiSetting
     * const restExternalApiSetting = await prisma.restExternalApiSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestExternalApiSettingFindFirstArgs>(args?: SelectSubset<T, RestExternalApiSettingFindFirstArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestExternalApiSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiSettingFindFirstOrThrowArgs} args - Arguments to find a RestExternalApiSetting
     * @example
     * // Get one RestExternalApiSetting
     * const restExternalApiSetting = await prisma.restExternalApiSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestExternalApiSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, RestExternalApiSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestExternalApiSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestExternalApiSettings
     * const restExternalApiSettings = await prisma.restExternalApiSetting.findMany()
     * 
     * // Get first 10 RestExternalApiSettings
     * const restExternalApiSettings = await prisma.restExternalApiSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restExternalApiSettingWithIdOnly = await prisma.restExternalApiSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestExternalApiSettingFindManyArgs>(args?: SelectSubset<T, RestExternalApiSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestExternalApiSetting.
     * @param {RestExternalApiSettingCreateArgs} args - Arguments to create a RestExternalApiSetting.
     * @example
     * // Create one RestExternalApiSetting
     * const RestExternalApiSetting = await prisma.restExternalApiSetting.create({
     *   data: {
     *     // ... data to create a RestExternalApiSetting
     *   }
     * })
     * 
     */
    create<T extends RestExternalApiSettingCreateArgs>(args: SelectSubset<T, RestExternalApiSettingCreateArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestExternalApiSettings.
     * @param {RestExternalApiSettingCreateManyArgs} args - Arguments to create many RestExternalApiSettings.
     * @example
     * // Create many RestExternalApiSettings
     * const restExternalApiSetting = await prisma.restExternalApiSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestExternalApiSettingCreateManyArgs>(args?: SelectSubset<T, RestExternalApiSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestExternalApiSettings and returns the data saved in the database.
     * @param {RestExternalApiSettingCreateManyAndReturnArgs} args - Arguments to create many RestExternalApiSettings.
     * @example
     * // Create many RestExternalApiSettings
     * const restExternalApiSetting = await prisma.restExternalApiSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestExternalApiSettings and only return the `id`
     * const restExternalApiSettingWithIdOnly = await prisma.restExternalApiSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestExternalApiSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, RestExternalApiSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestExternalApiSetting.
     * @param {RestExternalApiSettingDeleteArgs} args - Arguments to delete one RestExternalApiSetting.
     * @example
     * // Delete one RestExternalApiSetting
     * const RestExternalApiSetting = await prisma.restExternalApiSetting.delete({
     *   where: {
     *     // ... filter to delete one RestExternalApiSetting
     *   }
     * })
     * 
     */
    delete<T extends RestExternalApiSettingDeleteArgs>(args: SelectSubset<T, RestExternalApiSettingDeleteArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestExternalApiSetting.
     * @param {RestExternalApiSettingUpdateArgs} args - Arguments to update one RestExternalApiSetting.
     * @example
     * // Update one RestExternalApiSetting
     * const restExternalApiSetting = await prisma.restExternalApiSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestExternalApiSettingUpdateArgs>(args: SelectSubset<T, RestExternalApiSettingUpdateArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestExternalApiSettings.
     * @param {RestExternalApiSettingDeleteManyArgs} args - Arguments to filter RestExternalApiSettings to delete.
     * @example
     * // Delete a few RestExternalApiSettings
     * const { count } = await prisma.restExternalApiSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestExternalApiSettingDeleteManyArgs>(args?: SelectSubset<T, RestExternalApiSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestExternalApiSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestExternalApiSettings
     * const restExternalApiSetting = await prisma.restExternalApiSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestExternalApiSettingUpdateManyArgs>(args: SelectSubset<T, RestExternalApiSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestExternalApiSettings and returns the data updated in the database.
     * @param {RestExternalApiSettingUpdateManyAndReturnArgs} args - Arguments to update many RestExternalApiSettings.
     * @example
     * // Update many RestExternalApiSettings
     * const restExternalApiSetting = await prisma.restExternalApiSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestExternalApiSettings and only return the `id`
     * const restExternalApiSettingWithIdOnly = await prisma.restExternalApiSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestExternalApiSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, RestExternalApiSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestExternalApiSetting.
     * @param {RestExternalApiSettingUpsertArgs} args - Arguments to update or create a RestExternalApiSetting.
     * @example
     * // Update or create a RestExternalApiSetting
     * const restExternalApiSetting = await prisma.restExternalApiSetting.upsert({
     *   create: {
     *     // ... data to create a RestExternalApiSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestExternalApiSetting we want to update
     *   }
     * })
     */
    upsert<T extends RestExternalApiSettingUpsertArgs>(args: SelectSubset<T, RestExternalApiSettingUpsertArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestExternalApiSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiSettingCountArgs} args - Arguments to filter RestExternalApiSettings to count.
     * @example
     * // Count the number of RestExternalApiSettings
     * const count = await prisma.restExternalApiSetting.count({
     *   where: {
     *     // ... the filter for the RestExternalApiSettings we want to count
     *   }
     * })
    **/
    count<T extends RestExternalApiSettingCountArgs>(
      args?: Subset<T, RestExternalApiSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestExternalApiSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestExternalApiSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestExternalApiSettingAggregateArgs>(args: Subset<T, RestExternalApiSettingAggregateArgs>): Prisma.PrismaPromise<GetRestExternalApiSettingAggregateType<T>>

    /**
     * Group by RestExternalApiSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestExternalApiSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestExternalApiSettingGroupByArgs['orderBy'] }
        : { orderBy?: RestExternalApiSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestExternalApiSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestExternalApiSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestExternalApiSetting model
   */
  readonly fields: RestExternalApiSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestExternalApiSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestExternalApiSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restExternalApiParam<T extends RestExternalApiSetting$restExternalApiParamArgs<ExtArgs> = {}>(args?: Subset<T, RestExternalApiSetting$restExternalApiParamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    restService<T extends RestServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestServiceDefaultArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestExternalApiSetting model
   */
  interface RestExternalApiSettingFieldRefs {
    readonly id: FieldRef<"RestExternalApiSetting", 'Int'>
    readonly baseUrl: FieldRef<"RestExternalApiSetting", 'String'>
    readonly hasAuth: FieldRef<"RestExternalApiSetting", 'Boolean'>
    readonly restServiceRef: FieldRef<"RestExternalApiSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RestExternalApiSetting findUnique
   */
  export type RestExternalApiSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiSetting to fetch.
     */
    where: RestExternalApiSettingWhereUniqueInput
  }

  /**
   * RestExternalApiSetting findUniqueOrThrow
   */
  export type RestExternalApiSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiSetting to fetch.
     */
    where: RestExternalApiSettingWhereUniqueInput
  }

  /**
   * RestExternalApiSetting findFirst
   */
  export type RestExternalApiSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiSetting to fetch.
     */
    where?: RestExternalApiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiSettings to fetch.
     */
    orderBy?: RestExternalApiSettingOrderByWithRelationInput | RestExternalApiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestExternalApiSettings.
     */
    cursor?: RestExternalApiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestExternalApiSettings.
     */
    distinct?: RestExternalApiSettingScalarFieldEnum | RestExternalApiSettingScalarFieldEnum[]
  }

  /**
   * RestExternalApiSetting findFirstOrThrow
   */
  export type RestExternalApiSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiSetting to fetch.
     */
    where?: RestExternalApiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiSettings to fetch.
     */
    orderBy?: RestExternalApiSettingOrderByWithRelationInput | RestExternalApiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestExternalApiSettings.
     */
    cursor?: RestExternalApiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestExternalApiSettings.
     */
    distinct?: RestExternalApiSettingScalarFieldEnum | RestExternalApiSettingScalarFieldEnum[]
  }

  /**
   * RestExternalApiSetting findMany
   */
  export type RestExternalApiSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiSettings to fetch.
     */
    where?: RestExternalApiSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiSettings to fetch.
     */
    orderBy?: RestExternalApiSettingOrderByWithRelationInput | RestExternalApiSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestExternalApiSettings.
     */
    cursor?: RestExternalApiSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestExternalApiSettings.
     */
    distinct?: RestExternalApiSettingScalarFieldEnum | RestExternalApiSettingScalarFieldEnum[]
  }

  /**
   * RestExternalApiSetting create
   */
  export type RestExternalApiSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a RestExternalApiSetting.
     */
    data: XOR<RestExternalApiSettingCreateInput, RestExternalApiSettingUncheckedCreateInput>
  }

  /**
   * RestExternalApiSetting createMany
   */
  export type RestExternalApiSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestExternalApiSettings.
     */
    data: RestExternalApiSettingCreateManyInput | RestExternalApiSettingCreateManyInput[]
  }

  /**
   * RestExternalApiSetting createManyAndReturn
   */
  export type RestExternalApiSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * The data used to create many RestExternalApiSettings.
     */
    data: RestExternalApiSettingCreateManyInput | RestExternalApiSettingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestExternalApiSetting update
   */
  export type RestExternalApiSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a RestExternalApiSetting.
     */
    data: XOR<RestExternalApiSettingUpdateInput, RestExternalApiSettingUncheckedUpdateInput>
    /**
     * Choose, which RestExternalApiSetting to update.
     */
    where: RestExternalApiSettingWhereUniqueInput
  }

  /**
   * RestExternalApiSetting updateMany
   */
  export type RestExternalApiSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestExternalApiSettings.
     */
    data: XOR<RestExternalApiSettingUpdateManyMutationInput, RestExternalApiSettingUncheckedUpdateManyInput>
    /**
     * Filter which RestExternalApiSettings to update
     */
    where?: RestExternalApiSettingWhereInput
    /**
     * Limit how many RestExternalApiSettings to update.
     */
    limit?: number
  }

  /**
   * RestExternalApiSetting updateManyAndReturn
   */
  export type RestExternalApiSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * The data used to update RestExternalApiSettings.
     */
    data: XOR<RestExternalApiSettingUpdateManyMutationInput, RestExternalApiSettingUncheckedUpdateManyInput>
    /**
     * Filter which RestExternalApiSettings to update
     */
    where?: RestExternalApiSettingWhereInput
    /**
     * Limit how many RestExternalApiSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestExternalApiSetting upsert
   */
  export type RestExternalApiSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the RestExternalApiSetting to update in case it exists.
     */
    where: RestExternalApiSettingWhereUniqueInput
    /**
     * In case the RestExternalApiSetting found by the `where` argument doesn't exist, create a new RestExternalApiSetting with this data.
     */
    create: XOR<RestExternalApiSettingCreateInput, RestExternalApiSettingUncheckedCreateInput>
    /**
     * In case the RestExternalApiSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestExternalApiSettingUpdateInput, RestExternalApiSettingUncheckedUpdateInput>
  }

  /**
   * RestExternalApiSetting delete
   */
  export type RestExternalApiSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
    /**
     * Filter which RestExternalApiSetting to delete.
     */
    where: RestExternalApiSettingWhereUniqueInput
  }

  /**
   * RestExternalApiSetting deleteMany
   */
  export type RestExternalApiSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestExternalApiSettings to delete
     */
    where?: RestExternalApiSettingWhereInput
    /**
     * Limit how many RestExternalApiSettings to delete.
     */
    limit?: number
  }

  /**
   * RestExternalApiSetting.restExternalApiParam
   */
  export type RestExternalApiSetting$restExternalApiParamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    where?: RestExternalApiParamWhereInput
    orderBy?: RestExternalApiParamOrderByWithRelationInput | RestExternalApiParamOrderByWithRelationInput[]
    cursor?: RestExternalApiParamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestExternalApiParamScalarFieldEnum | RestExternalApiParamScalarFieldEnum[]
  }

  /**
   * RestExternalApiSetting without action
   */
  export type RestExternalApiSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiSetting
     */
    select?: RestExternalApiSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiSetting
     */
    omit?: RestExternalApiSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiSettingInclude<ExtArgs> | null
  }


  /**
   * Model RestAuthServiceSetting
   */

  export type AggregateRestAuthServiceSetting = {
    _count: RestAuthServiceSettingCountAggregateOutputType | null
    _avg: RestAuthServiceSettingAvgAggregateOutputType | null
    _sum: RestAuthServiceSettingSumAggregateOutputType | null
    _min: RestAuthServiceSettingMinAggregateOutputType | null
    _max: RestAuthServiceSettingMaxAggregateOutputType | null
  }

  export type RestAuthServiceSettingAvgAggregateOutputType = {
    id: number | null
    restServiceRef: number | null
  }

  export type RestAuthServiceSettingSumAggregateOutputType = {
    id: number | null
    restServiceRef: number | null
  }

  export type RestAuthServiceSettingMinAggregateOutputType = {
    id: number | null
    authServiceUrl: string | null
    authMethod: string | null
    restServiceRef: number | null
  }

  export type RestAuthServiceSettingMaxAggregateOutputType = {
    id: number | null
    authServiceUrl: string | null
    authMethod: string | null
    restServiceRef: number | null
  }

  export type RestAuthServiceSettingCountAggregateOutputType = {
    id: number
    authServiceUrl: number
    authMethod: number
    restServiceRef: number
    _all: number
  }


  export type RestAuthServiceSettingAvgAggregateInputType = {
    id?: true
    restServiceRef?: true
  }

  export type RestAuthServiceSettingSumAggregateInputType = {
    id?: true
    restServiceRef?: true
  }

  export type RestAuthServiceSettingMinAggregateInputType = {
    id?: true
    authServiceUrl?: true
    authMethod?: true
    restServiceRef?: true
  }

  export type RestAuthServiceSettingMaxAggregateInputType = {
    id?: true
    authServiceUrl?: true
    authMethod?: true
    restServiceRef?: true
  }

  export type RestAuthServiceSettingCountAggregateInputType = {
    id?: true
    authServiceUrl?: true
    authMethod?: true
    restServiceRef?: true
    _all?: true
  }

  export type RestAuthServiceSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestAuthServiceSetting to aggregate.
     */
    where?: RestAuthServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceSettings to fetch.
     */
    orderBy?: RestAuthServiceSettingOrderByWithRelationInput | RestAuthServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestAuthServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestAuthServiceSettings
    **/
    _count?: true | RestAuthServiceSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestAuthServiceSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestAuthServiceSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestAuthServiceSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestAuthServiceSettingMaxAggregateInputType
  }

  export type GetRestAuthServiceSettingAggregateType<T extends RestAuthServiceSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateRestAuthServiceSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestAuthServiceSetting[P]>
      : GetScalarType<T[P], AggregateRestAuthServiceSetting[P]>
  }




  export type RestAuthServiceSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestAuthServiceSettingWhereInput
    orderBy?: RestAuthServiceSettingOrderByWithAggregationInput | RestAuthServiceSettingOrderByWithAggregationInput[]
    by: RestAuthServiceSettingScalarFieldEnum[] | RestAuthServiceSettingScalarFieldEnum
    having?: RestAuthServiceSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestAuthServiceSettingCountAggregateInputType | true
    _avg?: RestAuthServiceSettingAvgAggregateInputType
    _sum?: RestAuthServiceSettingSumAggregateInputType
    _min?: RestAuthServiceSettingMinAggregateInputType
    _max?: RestAuthServiceSettingMaxAggregateInputType
  }

  export type RestAuthServiceSettingGroupByOutputType = {
    id: number
    authServiceUrl: string | null
    authMethod: string | null
    restServiceRef: number
    _count: RestAuthServiceSettingCountAggregateOutputType | null
    _avg: RestAuthServiceSettingAvgAggregateOutputType | null
    _sum: RestAuthServiceSettingSumAggregateOutputType | null
    _min: RestAuthServiceSettingMinAggregateOutputType | null
    _max: RestAuthServiceSettingMaxAggregateOutputType | null
  }

  type GetRestAuthServiceSettingGroupByPayload<T extends RestAuthServiceSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestAuthServiceSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestAuthServiceSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestAuthServiceSettingGroupByOutputType[P]>
            : GetScalarType<T[P], RestAuthServiceSettingGroupByOutputType[P]>
        }
      >
    >


  export type RestAuthServiceSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authServiceUrl?: boolean
    authMethod?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
    restAuthServiceParam?: boolean | RestAuthServiceSetting$restAuthServiceParamArgs<ExtArgs>
    _count?: boolean | RestAuthServiceSettingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restAuthServiceSetting"]>

  export type RestAuthServiceSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authServiceUrl?: boolean
    authMethod?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restAuthServiceSetting"]>

  export type RestAuthServiceSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authServiceUrl?: boolean
    authMethod?: boolean
    restServiceRef?: boolean
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restAuthServiceSetting"]>

  export type RestAuthServiceSettingSelectScalar = {
    id?: boolean
    authServiceUrl?: boolean
    authMethod?: boolean
    restServiceRef?: boolean
  }

  export type RestAuthServiceSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authServiceUrl" | "authMethod" | "restServiceRef", ExtArgs["result"]["restAuthServiceSetting"]>
  export type RestAuthServiceSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
    restAuthServiceParam?: boolean | RestAuthServiceSetting$restAuthServiceParamArgs<ExtArgs>
    _count?: boolean | RestAuthServiceSettingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RestAuthServiceSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }
  export type RestAuthServiceSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restService?: boolean | RestServiceDefaultArgs<ExtArgs>
  }

  export type $RestAuthServiceSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestAuthServiceSetting"
    objects: {
      restService: Prisma.$RestServicePayload<ExtArgs>
      restAuthServiceParam: Prisma.$RestAuthServiceParamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      authServiceUrl: string | null
      authMethod: string | null
      restServiceRef: number
    }, ExtArgs["result"]["restAuthServiceSetting"]>
    composites: {}
  }

  type RestAuthServiceSettingGetPayload<S extends boolean | null | undefined | RestAuthServiceSettingDefaultArgs> = $Result.GetResult<Prisma.$RestAuthServiceSettingPayload, S>

  type RestAuthServiceSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestAuthServiceSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestAuthServiceSettingCountAggregateInputType | true
    }

  export interface RestAuthServiceSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestAuthServiceSetting'], meta: { name: 'RestAuthServiceSetting' } }
    /**
     * Find zero or one RestAuthServiceSetting that matches the filter.
     * @param {RestAuthServiceSettingFindUniqueArgs} args - Arguments to find a RestAuthServiceSetting
     * @example
     * // Get one RestAuthServiceSetting
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestAuthServiceSettingFindUniqueArgs>(args: SelectSubset<T, RestAuthServiceSettingFindUniqueArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestAuthServiceSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestAuthServiceSettingFindUniqueOrThrowArgs} args - Arguments to find a RestAuthServiceSetting
     * @example
     * // Get one RestAuthServiceSetting
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestAuthServiceSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, RestAuthServiceSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestAuthServiceSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceSettingFindFirstArgs} args - Arguments to find a RestAuthServiceSetting
     * @example
     * // Get one RestAuthServiceSetting
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestAuthServiceSettingFindFirstArgs>(args?: SelectSubset<T, RestAuthServiceSettingFindFirstArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestAuthServiceSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceSettingFindFirstOrThrowArgs} args - Arguments to find a RestAuthServiceSetting
     * @example
     * // Get one RestAuthServiceSetting
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestAuthServiceSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, RestAuthServiceSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestAuthServiceSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestAuthServiceSettings
     * const restAuthServiceSettings = await prisma.restAuthServiceSetting.findMany()
     * 
     * // Get first 10 RestAuthServiceSettings
     * const restAuthServiceSettings = await prisma.restAuthServiceSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restAuthServiceSettingWithIdOnly = await prisma.restAuthServiceSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestAuthServiceSettingFindManyArgs>(args?: SelectSubset<T, RestAuthServiceSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestAuthServiceSetting.
     * @param {RestAuthServiceSettingCreateArgs} args - Arguments to create a RestAuthServiceSetting.
     * @example
     * // Create one RestAuthServiceSetting
     * const RestAuthServiceSetting = await prisma.restAuthServiceSetting.create({
     *   data: {
     *     // ... data to create a RestAuthServiceSetting
     *   }
     * })
     * 
     */
    create<T extends RestAuthServiceSettingCreateArgs>(args: SelectSubset<T, RestAuthServiceSettingCreateArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestAuthServiceSettings.
     * @param {RestAuthServiceSettingCreateManyArgs} args - Arguments to create many RestAuthServiceSettings.
     * @example
     * // Create many RestAuthServiceSettings
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestAuthServiceSettingCreateManyArgs>(args?: SelectSubset<T, RestAuthServiceSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestAuthServiceSettings and returns the data saved in the database.
     * @param {RestAuthServiceSettingCreateManyAndReturnArgs} args - Arguments to create many RestAuthServiceSettings.
     * @example
     * // Create many RestAuthServiceSettings
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestAuthServiceSettings and only return the `id`
     * const restAuthServiceSettingWithIdOnly = await prisma.restAuthServiceSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestAuthServiceSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, RestAuthServiceSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestAuthServiceSetting.
     * @param {RestAuthServiceSettingDeleteArgs} args - Arguments to delete one RestAuthServiceSetting.
     * @example
     * // Delete one RestAuthServiceSetting
     * const RestAuthServiceSetting = await prisma.restAuthServiceSetting.delete({
     *   where: {
     *     // ... filter to delete one RestAuthServiceSetting
     *   }
     * })
     * 
     */
    delete<T extends RestAuthServiceSettingDeleteArgs>(args: SelectSubset<T, RestAuthServiceSettingDeleteArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestAuthServiceSetting.
     * @param {RestAuthServiceSettingUpdateArgs} args - Arguments to update one RestAuthServiceSetting.
     * @example
     * // Update one RestAuthServiceSetting
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestAuthServiceSettingUpdateArgs>(args: SelectSubset<T, RestAuthServiceSettingUpdateArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestAuthServiceSettings.
     * @param {RestAuthServiceSettingDeleteManyArgs} args - Arguments to filter RestAuthServiceSettings to delete.
     * @example
     * // Delete a few RestAuthServiceSettings
     * const { count } = await prisma.restAuthServiceSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestAuthServiceSettingDeleteManyArgs>(args?: SelectSubset<T, RestAuthServiceSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestAuthServiceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestAuthServiceSettings
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestAuthServiceSettingUpdateManyArgs>(args: SelectSubset<T, RestAuthServiceSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestAuthServiceSettings and returns the data updated in the database.
     * @param {RestAuthServiceSettingUpdateManyAndReturnArgs} args - Arguments to update many RestAuthServiceSettings.
     * @example
     * // Update many RestAuthServiceSettings
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestAuthServiceSettings and only return the `id`
     * const restAuthServiceSettingWithIdOnly = await prisma.restAuthServiceSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestAuthServiceSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, RestAuthServiceSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestAuthServiceSetting.
     * @param {RestAuthServiceSettingUpsertArgs} args - Arguments to update or create a RestAuthServiceSetting.
     * @example
     * // Update or create a RestAuthServiceSetting
     * const restAuthServiceSetting = await prisma.restAuthServiceSetting.upsert({
     *   create: {
     *     // ... data to create a RestAuthServiceSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestAuthServiceSetting we want to update
     *   }
     * })
     */
    upsert<T extends RestAuthServiceSettingUpsertArgs>(args: SelectSubset<T, RestAuthServiceSettingUpsertArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestAuthServiceSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceSettingCountArgs} args - Arguments to filter RestAuthServiceSettings to count.
     * @example
     * // Count the number of RestAuthServiceSettings
     * const count = await prisma.restAuthServiceSetting.count({
     *   where: {
     *     // ... the filter for the RestAuthServiceSettings we want to count
     *   }
     * })
    **/
    count<T extends RestAuthServiceSettingCountArgs>(
      args?: Subset<T, RestAuthServiceSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestAuthServiceSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestAuthServiceSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestAuthServiceSettingAggregateArgs>(args: Subset<T, RestAuthServiceSettingAggregateArgs>): Prisma.PrismaPromise<GetRestAuthServiceSettingAggregateType<T>>

    /**
     * Group by RestAuthServiceSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestAuthServiceSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestAuthServiceSettingGroupByArgs['orderBy'] }
        : { orderBy?: RestAuthServiceSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestAuthServiceSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestAuthServiceSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestAuthServiceSetting model
   */
  readonly fields: RestAuthServiceSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestAuthServiceSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestAuthServiceSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restService<T extends RestServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestServiceDefaultArgs<ExtArgs>>): Prisma__RestServiceClient<$Result.GetResult<Prisma.$RestServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restAuthServiceParam<T extends RestAuthServiceSetting$restAuthServiceParamArgs<ExtArgs> = {}>(args?: Subset<T, RestAuthServiceSetting$restAuthServiceParamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestAuthServiceSetting model
   */
  interface RestAuthServiceSettingFieldRefs {
    readonly id: FieldRef<"RestAuthServiceSetting", 'Int'>
    readonly authServiceUrl: FieldRef<"RestAuthServiceSetting", 'String'>
    readonly authMethod: FieldRef<"RestAuthServiceSetting", 'String'>
    readonly restServiceRef: FieldRef<"RestAuthServiceSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RestAuthServiceSetting findUnique
   */
  export type RestAuthServiceSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceSetting to fetch.
     */
    where: RestAuthServiceSettingWhereUniqueInput
  }

  /**
   * RestAuthServiceSetting findUniqueOrThrow
   */
  export type RestAuthServiceSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceSetting to fetch.
     */
    where: RestAuthServiceSettingWhereUniqueInput
  }

  /**
   * RestAuthServiceSetting findFirst
   */
  export type RestAuthServiceSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceSetting to fetch.
     */
    where?: RestAuthServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceSettings to fetch.
     */
    orderBy?: RestAuthServiceSettingOrderByWithRelationInput | RestAuthServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestAuthServiceSettings.
     */
    cursor?: RestAuthServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestAuthServiceSettings.
     */
    distinct?: RestAuthServiceSettingScalarFieldEnum | RestAuthServiceSettingScalarFieldEnum[]
  }

  /**
   * RestAuthServiceSetting findFirstOrThrow
   */
  export type RestAuthServiceSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceSetting to fetch.
     */
    where?: RestAuthServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceSettings to fetch.
     */
    orderBy?: RestAuthServiceSettingOrderByWithRelationInput | RestAuthServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestAuthServiceSettings.
     */
    cursor?: RestAuthServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestAuthServiceSettings.
     */
    distinct?: RestAuthServiceSettingScalarFieldEnum | RestAuthServiceSettingScalarFieldEnum[]
  }

  /**
   * RestAuthServiceSetting findMany
   */
  export type RestAuthServiceSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceSettings to fetch.
     */
    where?: RestAuthServiceSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceSettings to fetch.
     */
    orderBy?: RestAuthServiceSettingOrderByWithRelationInput | RestAuthServiceSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestAuthServiceSettings.
     */
    cursor?: RestAuthServiceSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestAuthServiceSettings.
     */
    distinct?: RestAuthServiceSettingScalarFieldEnum | RestAuthServiceSettingScalarFieldEnum[]
  }

  /**
   * RestAuthServiceSetting create
   */
  export type RestAuthServiceSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a RestAuthServiceSetting.
     */
    data: XOR<RestAuthServiceSettingCreateInput, RestAuthServiceSettingUncheckedCreateInput>
  }

  /**
   * RestAuthServiceSetting createMany
   */
  export type RestAuthServiceSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestAuthServiceSettings.
     */
    data: RestAuthServiceSettingCreateManyInput | RestAuthServiceSettingCreateManyInput[]
  }

  /**
   * RestAuthServiceSetting createManyAndReturn
   */
  export type RestAuthServiceSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * The data used to create many RestAuthServiceSettings.
     */
    data: RestAuthServiceSettingCreateManyInput | RestAuthServiceSettingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestAuthServiceSetting update
   */
  export type RestAuthServiceSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a RestAuthServiceSetting.
     */
    data: XOR<RestAuthServiceSettingUpdateInput, RestAuthServiceSettingUncheckedUpdateInput>
    /**
     * Choose, which RestAuthServiceSetting to update.
     */
    where: RestAuthServiceSettingWhereUniqueInput
  }

  /**
   * RestAuthServiceSetting updateMany
   */
  export type RestAuthServiceSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestAuthServiceSettings.
     */
    data: XOR<RestAuthServiceSettingUpdateManyMutationInput, RestAuthServiceSettingUncheckedUpdateManyInput>
    /**
     * Filter which RestAuthServiceSettings to update
     */
    where?: RestAuthServiceSettingWhereInput
    /**
     * Limit how many RestAuthServiceSettings to update.
     */
    limit?: number
  }

  /**
   * RestAuthServiceSetting updateManyAndReturn
   */
  export type RestAuthServiceSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * The data used to update RestAuthServiceSettings.
     */
    data: XOR<RestAuthServiceSettingUpdateManyMutationInput, RestAuthServiceSettingUncheckedUpdateManyInput>
    /**
     * Filter which RestAuthServiceSettings to update
     */
    where?: RestAuthServiceSettingWhereInput
    /**
     * Limit how many RestAuthServiceSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestAuthServiceSetting upsert
   */
  export type RestAuthServiceSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the RestAuthServiceSetting to update in case it exists.
     */
    where: RestAuthServiceSettingWhereUniqueInput
    /**
     * In case the RestAuthServiceSetting found by the `where` argument doesn't exist, create a new RestAuthServiceSetting with this data.
     */
    create: XOR<RestAuthServiceSettingCreateInput, RestAuthServiceSettingUncheckedCreateInput>
    /**
     * In case the RestAuthServiceSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestAuthServiceSettingUpdateInput, RestAuthServiceSettingUncheckedUpdateInput>
  }

  /**
   * RestAuthServiceSetting delete
   */
  export type RestAuthServiceSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
    /**
     * Filter which RestAuthServiceSetting to delete.
     */
    where: RestAuthServiceSettingWhereUniqueInput
  }

  /**
   * RestAuthServiceSetting deleteMany
   */
  export type RestAuthServiceSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestAuthServiceSettings to delete
     */
    where?: RestAuthServiceSettingWhereInput
    /**
     * Limit how many RestAuthServiceSettings to delete.
     */
    limit?: number
  }

  /**
   * RestAuthServiceSetting.restAuthServiceParam
   */
  export type RestAuthServiceSetting$restAuthServiceParamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    where?: RestAuthServiceParamWhereInput
    orderBy?: RestAuthServiceParamOrderByWithRelationInput | RestAuthServiceParamOrderByWithRelationInput[]
    cursor?: RestAuthServiceParamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestAuthServiceParamScalarFieldEnum | RestAuthServiceParamScalarFieldEnum[]
  }

  /**
   * RestAuthServiceSetting without action
   */
  export type RestAuthServiceSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceSetting
     */
    select?: RestAuthServiceSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceSetting
     */
    omit?: RestAuthServiceSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceSettingInclude<ExtArgs> | null
  }


  /**
   * Model RestAuthServiceParam
   */

  export type AggregateRestAuthServiceParam = {
    _count: RestAuthServiceParamCountAggregateOutputType | null
    _avg: RestAuthServiceParamAvgAggregateOutputType | null
    _sum: RestAuthServiceParamSumAggregateOutputType | null
    _min: RestAuthServiceParamMinAggregateOutputType | null
    _max: RestAuthServiceParamMaxAggregateOutputType | null
  }

  export type RestAuthServiceParamAvgAggregateOutputType = {
    id: number | null
    restAuthServiceSettingRef: number | null
  }

  export type RestAuthServiceParamSumAggregateOutputType = {
    id: number | null
    restAuthServiceSettingRef: number | null
  }

  export type RestAuthServiceParamMinAggregateOutputType = {
    id: number | null
    paramType: string | null
    paramName: string | null
    paramValue: string | null
    restAuthServiceSettingRef: number | null
  }

  export type RestAuthServiceParamMaxAggregateOutputType = {
    id: number | null
    paramType: string | null
    paramName: string | null
    paramValue: string | null
    restAuthServiceSettingRef: number | null
  }

  export type RestAuthServiceParamCountAggregateOutputType = {
    id: number
    paramType: number
    paramName: number
    paramValue: number
    restAuthServiceSettingRef: number
    _all: number
  }


  export type RestAuthServiceParamAvgAggregateInputType = {
    id?: true
    restAuthServiceSettingRef?: true
  }

  export type RestAuthServiceParamSumAggregateInputType = {
    id?: true
    restAuthServiceSettingRef?: true
  }

  export type RestAuthServiceParamMinAggregateInputType = {
    id?: true
    paramType?: true
    paramName?: true
    paramValue?: true
    restAuthServiceSettingRef?: true
  }

  export type RestAuthServiceParamMaxAggregateInputType = {
    id?: true
    paramType?: true
    paramName?: true
    paramValue?: true
    restAuthServiceSettingRef?: true
  }

  export type RestAuthServiceParamCountAggregateInputType = {
    id?: true
    paramType?: true
    paramName?: true
    paramValue?: true
    restAuthServiceSettingRef?: true
    _all?: true
  }

  export type RestAuthServiceParamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestAuthServiceParam to aggregate.
     */
    where?: RestAuthServiceParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceParams to fetch.
     */
    orderBy?: RestAuthServiceParamOrderByWithRelationInput | RestAuthServiceParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestAuthServiceParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestAuthServiceParams
    **/
    _count?: true | RestAuthServiceParamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestAuthServiceParamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestAuthServiceParamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestAuthServiceParamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestAuthServiceParamMaxAggregateInputType
  }

  export type GetRestAuthServiceParamAggregateType<T extends RestAuthServiceParamAggregateArgs> = {
        [P in keyof T & keyof AggregateRestAuthServiceParam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestAuthServiceParam[P]>
      : GetScalarType<T[P], AggregateRestAuthServiceParam[P]>
  }




  export type RestAuthServiceParamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestAuthServiceParamWhereInput
    orderBy?: RestAuthServiceParamOrderByWithAggregationInput | RestAuthServiceParamOrderByWithAggregationInput[]
    by: RestAuthServiceParamScalarFieldEnum[] | RestAuthServiceParamScalarFieldEnum
    having?: RestAuthServiceParamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestAuthServiceParamCountAggregateInputType | true
    _avg?: RestAuthServiceParamAvgAggregateInputType
    _sum?: RestAuthServiceParamSumAggregateInputType
    _min?: RestAuthServiceParamMinAggregateInputType
    _max?: RestAuthServiceParamMaxAggregateInputType
  }

  export type RestAuthServiceParamGroupByOutputType = {
    id: number
    paramType: string | null
    paramName: string | null
    paramValue: string | null
    restAuthServiceSettingRef: number
    _count: RestAuthServiceParamCountAggregateOutputType | null
    _avg: RestAuthServiceParamAvgAggregateOutputType | null
    _sum: RestAuthServiceParamSumAggregateOutputType | null
    _min: RestAuthServiceParamMinAggregateOutputType | null
    _max: RestAuthServiceParamMaxAggregateOutputType | null
  }

  type GetRestAuthServiceParamGroupByPayload<T extends RestAuthServiceParamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestAuthServiceParamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestAuthServiceParamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestAuthServiceParamGroupByOutputType[P]>
            : GetScalarType<T[P], RestAuthServiceParamGroupByOutputType[P]>
        }
      >
    >


  export type RestAuthServiceParamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restAuthServiceSettingRef?: boolean
    restAuthServiceSetting?: boolean | RestAuthServiceSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restAuthServiceParam"]>

  export type RestAuthServiceParamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restAuthServiceSettingRef?: boolean
    restAuthServiceSetting?: boolean | RestAuthServiceSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restAuthServiceParam"]>

  export type RestAuthServiceParamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restAuthServiceSettingRef?: boolean
    restAuthServiceSetting?: boolean | RestAuthServiceSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restAuthServiceParam"]>

  export type RestAuthServiceParamSelectScalar = {
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restAuthServiceSettingRef?: boolean
  }

  export type RestAuthServiceParamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paramType" | "paramName" | "paramValue" | "restAuthServiceSettingRef", ExtArgs["result"]["restAuthServiceParam"]>
  export type RestAuthServiceParamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restAuthServiceSetting?: boolean | RestAuthServiceSettingDefaultArgs<ExtArgs>
  }
  export type RestAuthServiceParamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restAuthServiceSetting?: boolean | RestAuthServiceSettingDefaultArgs<ExtArgs>
  }
  export type RestAuthServiceParamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restAuthServiceSetting?: boolean | RestAuthServiceSettingDefaultArgs<ExtArgs>
  }

  export type $RestAuthServiceParamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestAuthServiceParam"
    objects: {
      restAuthServiceSetting: Prisma.$RestAuthServiceSettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paramType: string | null
      paramName: string | null
      paramValue: string | null
      restAuthServiceSettingRef: number
    }, ExtArgs["result"]["restAuthServiceParam"]>
    composites: {}
  }

  type RestAuthServiceParamGetPayload<S extends boolean | null | undefined | RestAuthServiceParamDefaultArgs> = $Result.GetResult<Prisma.$RestAuthServiceParamPayload, S>

  type RestAuthServiceParamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestAuthServiceParamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestAuthServiceParamCountAggregateInputType | true
    }

  export interface RestAuthServiceParamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestAuthServiceParam'], meta: { name: 'RestAuthServiceParam' } }
    /**
     * Find zero or one RestAuthServiceParam that matches the filter.
     * @param {RestAuthServiceParamFindUniqueArgs} args - Arguments to find a RestAuthServiceParam
     * @example
     * // Get one RestAuthServiceParam
     * const restAuthServiceParam = await prisma.restAuthServiceParam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestAuthServiceParamFindUniqueArgs>(args: SelectSubset<T, RestAuthServiceParamFindUniqueArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestAuthServiceParam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestAuthServiceParamFindUniqueOrThrowArgs} args - Arguments to find a RestAuthServiceParam
     * @example
     * // Get one RestAuthServiceParam
     * const restAuthServiceParam = await prisma.restAuthServiceParam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestAuthServiceParamFindUniqueOrThrowArgs>(args: SelectSubset<T, RestAuthServiceParamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestAuthServiceParam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceParamFindFirstArgs} args - Arguments to find a RestAuthServiceParam
     * @example
     * // Get one RestAuthServiceParam
     * const restAuthServiceParam = await prisma.restAuthServiceParam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestAuthServiceParamFindFirstArgs>(args?: SelectSubset<T, RestAuthServiceParamFindFirstArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestAuthServiceParam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceParamFindFirstOrThrowArgs} args - Arguments to find a RestAuthServiceParam
     * @example
     * // Get one RestAuthServiceParam
     * const restAuthServiceParam = await prisma.restAuthServiceParam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestAuthServiceParamFindFirstOrThrowArgs>(args?: SelectSubset<T, RestAuthServiceParamFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestAuthServiceParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceParamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestAuthServiceParams
     * const restAuthServiceParams = await prisma.restAuthServiceParam.findMany()
     * 
     * // Get first 10 RestAuthServiceParams
     * const restAuthServiceParams = await prisma.restAuthServiceParam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restAuthServiceParamWithIdOnly = await prisma.restAuthServiceParam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestAuthServiceParamFindManyArgs>(args?: SelectSubset<T, RestAuthServiceParamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestAuthServiceParam.
     * @param {RestAuthServiceParamCreateArgs} args - Arguments to create a RestAuthServiceParam.
     * @example
     * // Create one RestAuthServiceParam
     * const RestAuthServiceParam = await prisma.restAuthServiceParam.create({
     *   data: {
     *     // ... data to create a RestAuthServiceParam
     *   }
     * })
     * 
     */
    create<T extends RestAuthServiceParamCreateArgs>(args: SelectSubset<T, RestAuthServiceParamCreateArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestAuthServiceParams.
     * @param {RestAuthServiceParamCreateManyArgs} args - Arguments to create many RestAuthServiceParams.
     * @example
     * // Create many RestAuthServiceParams
     * const restAuthServiceParam = await prisma.restAuthServiceParam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestAuthServiceParamCreateManyArgs>(args?: SelectSubset<T, RestAuthServiceParamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestAuthServiceParams and returns the data saved in the database.
     * @param {RestAuthServiceParamCreateManyAndReturnArgs} args - Arguments to create many RestAuthServiceParams.
     * @example
     * // Create many RestAuthServiceParams
     * const restAuthServiceParam = await prisma.restAuthServiceParam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestAuthServiceParams and only return the `id`
     * const restAuthServiceParamWithIdOnly = await prisma.restAuthServiceParam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestAuthServiceParamCreateManyAndReturnArgs>(args?: SelectSubset<T, RestAuthServiceParamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestAuthServiceParam.
     * @param {RestAuthServiceParamDeleteArgs} args - Arguments to delete one RestAuthServiceParam.
     * @example
     * // Delete one RestAuthServiceParam
     * const RestAuthServiceParam = await prisma.restAuthServiceParam.delete({
     *   where: {
     *     // ... filter to delete one RestAuthServiceParam
     *   }
     * })
     * 
     */
    delete<T extends RestAuthServiceParamDeleteArgs>(args: SelectSubset<T, RestAuthServiceParamDeleteArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestAuthServiceParam.
     * @param {RestAuthServiceParamUpdateArgs} args - Arguments to update one RestAuthServiceParam.
     * @example
     * // Update one RestAuthServiceParam
     * const restAuthServiceParam = await prisma.restAuthServiceParam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestAuthServiceParamUpdateArgs>(args: SelectSubset<T, RestAuthServiceParamUpdateArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestAuthServiceParams.
     * @param {RestAuthServiceParamDeleteManyArgs} args - Arguments to filter RestAuthServiceParams to delete.
     * @example
     * // Delete a few RestAuthServiceParams
     * const { count } = await prisma.restAuthServiceParam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestAuthServiceParamDeleteManyArgs>(args?: SelectSubset<T, RestAuthServiceParamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestAuthServiceParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceParamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestAuthServiceParams
     * const restAuthServiceParam = await prisma.restAuthServiceParam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestAuthServiceParamUpdateManyArgs>(args: SelectSubset<T, RestAuthServiceParamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestAuthServiceParams and returns the data updated in the database.
     * @param {RestAuthServiceParamUpdateManyAndReturnArgs} args - Arguments to update many RestAuthServiceParams.
     * @example
     * // Update many RestAuthServiceParams
     * const restAuthServiceParam = await prisma.restAuthServiceParam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestAuthServiceParams and only return the `id`
     * const restAuthServiceParamWithIdOnly = await prisma.restAuthServiceParam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestAuthServiceParamUpdateManyAndReturnArgs>(args: SelectSubset<T, RestAuthServiceParamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestAuthServiceParam.
     * @param {RestAuthServiceParamUpsertArgs} args - Arguments to update or create a RestAuthServiceParam.
     * @example
     * // Update or create a RestAuthServiceParam
     * const restAuthServiceParam = await prisma.restAuthServiceParam.upsert({
     *   create: {
     *     // ... data to create a RestAuthServiceParam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestAuthServiceParam we want to update
     *   }
     * })
     */
    upsert<T extends RestAuthServiceParamUpsertArgs>(args: SelectSubset<T, RestAuthServiceParamUpsertArgs<ExtArgs>>): Prisma__RestAuthServiceParamClient<$Result.GetResult<Prisma.$RestAuthServiceParamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestAuthServiceParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceParamCountArgs} args - Arguments to filter RestAuthServiceParams to count.
     * @example
     * // Count the number of RestAuthServiceParams
     * const count = await prisma.restAuthServiceParam.count({
     *   where: {
     *     // ... the filter for the RestAuthServiceParams we want to count
     *   }
     * })
    **/
    count<T extends RestAuthServiceParamCountArgs>(
      args?: Subset<T, RestAuthServiceParamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestAuthServiceParamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestAuthServiceParam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceParamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestAuthServiceParamAggregateArgs>(args: Subset<T, RestAuthServiceParamAggregateArgs>): Prisma.PrismaPromise<GetRestAuthServiceParamAggregateType<T>>

    /**
     * Group by RestAuthServiceParam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestAuthServiceParamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestAuthServiceParamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestAuthServiceParamGroupByArgs['orderBy'] }
        : { orderBy?: RestAuthServiceParamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestAuthServiceParamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestAuthServiceParamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestAuthServiceParam model
   */
  readonly fields: RestAuthServiceParamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestAuthServiceParam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestAuthServiceParamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restAuthServiceSetting<T extends RestAuthServiceSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestAuthServiceSettingDefaultArgs<ExtArgs>>): Prisma__RestAuthServiceSettingClient<$Result.GetResult<Prisma.$RestAuthServiceSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestAuthServiceParam model
   */
  interface RestAuthServiceParamFieldRefs {
    readonly id: FieldRef<"RestAuthServiceParam", 'Int'>
    readonly paramType: FieldRef<"RestAuthServiceParam", 'String'>
    readonly paramName: FieldRef<"RestAuthServiceParam", 'String'>
    readonly paramValue: FieldRef<"RestAuthServiceParam", 'String'>
    readonly restAuthServiceSettingRef: FieldRef<"RestAuthServiceParam", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RestAuthServiceParam findUnique
   */
  export type RestAuthServiceParamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceParam to fetch.
     */
    where: RestAuthServiceParamWhereUniqueInput
  }

  /**
   * RestAuthServiceParam findUniqueOrThrow
   */
  export type RestAuthServiceParamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceParam to fetch.
     */
    where: RestAuthServiceParamWhereUniqueInput
  }

  /**
   * RestAuthServiceParam findFirst
   */
  export type RestAuthServiceParamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceParam to fetch.
     */
    where?: RestAuthServiceParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceParams to fetch.
     */
    orderBy?: RestAuthServiceParamOrderByWithRelationInput | RestAuthServiceParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestAuthServiceParams.
     */
    cursor?: RestAuthServiceParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestAuthServiceParams.
     */
    distinct?: RestAuthServiceParamScalarFieldEnum | RestAuthServiceParamScalarFieldEnum[]
  }

  /**
   * RestAuthServiceParam findFirstOrThrow
   */
  export type RestAuthServiceParamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceParam to fetch.
     */
    where?: RestAuthServiceParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceParams to fetch.
     */
    orderBy?: RestAuthServiceParamOrderByWithRelationInput | RestAuthServiceParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestAuthServiceParams.
     */
    cursor?: RestAuthServiceParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestAuthServiceParams.
     */
    distinct?: RestAuthServiceParamScalarFieldEnum | RestAuthServiceParamScalarFieldEnum[]
  }

  /**
   * RestAuthServiceParam findMany
   */
  export type RestAuthServiceParamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * Filter, which RestAuthServiceParams to fetch.
     */
    where?: RestAuthServiceParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestAuthServiceParams to fetch.
     */
    orderBy?: RestAuthServiceParamOrderByWithRelationInput | RestAuthServiceParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestAuthServiceParams.
     */
    cursor?: RestAuthServiceParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestAuthServiceParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestAuthServiceParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestAuthServiceParams.
     */
    distinct?: RestAuthServiceParamScalarFieldEnum | RestAuthServiceParamScalarFieldEnum[]
  }

  /**
   * RestAuthServiceParam create
   */
  export type RestAuthServiceParamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * The data needed to create a RestAuthServiceParam.
     */
    data: XOR<RestAuthServiceParamCreateInput, RestAuthServiceParamUncheckedCreateInput>
  }

  /**
   * RestAuthServiceParam createMany
   */
  export type RestAuthServiceParamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestAuthServiceParams.
     */
    data: RestAuthServiceParamCreateManyInput | RestAuthServiceParamCreateManyInput[]
  }

  /**
   * RestAuthServiceParam createManyAndReturn
   */
  export type RestAuthServiceParamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * The data used to create many RestAuthServiceParams.
     */
    data: RestAuthServiceParamCreateManyInput | RestAuthServiceParamCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestAuthServiceParam update
   */
  export type RestAuthServiceParamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * The data needed to update a RestAuthServiceParam.
     */
    data: XOR<RestAuthServiceParamUpdateInput, RestAuthServiceParamUncheckedUpdateInput>
    /**
     * Choose, which RestAuthServiceParam to update.
     */
    where: RestAuthServiceParamWhereUniqueInput
  }

  /**
   * RestAuthServiceParam updateMany
   */
  export type RestAuthServiceParamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestAuthServiceParams.
     */
    data: XOR<RestAuthServiceParamUpdateManyMutationInput, RestAuthServiceParamUncheckedUpdateManyInput>
    /**
     * Filter which RestAuthServiceParams to update
     */
    where?: RestAuthServiceParamWhereInput
    /**
     * Limit how many RestAuthServiceParams to update.
     */
    limit?: number
  }

  /**
   * RestAuthServiceParam updateManyAndReturn
   */
  export type RestAuthServiceParamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * The data used to update RestAuthServiceParams.
     */
    data: XOR<RestAuthServiceParamUpdateManyMutationInput, RestAuthServiceParamUncheckedUpdateManyInput>
    /**
     * Filter which RestAuthServiceParams to update
     */
    where?: RestAuthServiceParamWhereInput
    /**
     * Limit how many RestAuthServiceParams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestAuthServiceParam upsert
   */
  export type RestAuthServiceParamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * The filter to search for the RestAuthServiceParam to update in case it exists.
     */
    where: RestAuthServiceParamWhereUniqueInput
    /**
     * In case the RestAuthServiceParam found by the `where` argument doesn't exist, create a new RestAuthServiceParam with this data.
     */
    create: XOR<RestAuthServiceParamCreateInput, RestAuthServiceParamUncheckedCreateInput>
    /**
     * In case the RestAuthServiceParam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestAuthServiceParamUpdateInput, RestAuthServiceParamUncheckedUpdateInput>
  }

  /**
   * RestAuthServiceParam delete
   */
  export type RestAuthServiceParamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
    /**
     * Filter which RestAuthServiceParam to delete.
     */
    where: RestAuthServiceParamWhereUniqueInput
  }

  /**
   * RestAuthServiceParam deleteMany
   */
  export type RestAuthServiceParamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestAuthServiceParams to delete
     */
    where?: RestAuthServiceParamWhereInput
    /**
     * Limit how many RestAuthServiceParams to delete.
     */
    limit?: number
  }

  /**
   * RestAuthServiceParam without action
   */
  export type RestAuthServiceParamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestAuthServiceParam
     */
    select?: RestAuthServiceParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestAuthServiceParam
     */
    omit?: RestAuthServiceParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestAuthServiceParamInclude<ExtArgs> | null
  }


  /**
   * Model RestExternalApiParam
   */

  export type AggregateRestExternalApiParam = {
    _count: RestExternalApiParamCountAggregateOutputType | null
    _avg: RestExternalApiParamAvgAggregateOutputType | null
    _sum: RestExternalApiParamSumAggregateOutputType | null
    _min: RestExternalApiParamMinAggregateOutputType | null
    _max: RestExternalApiParamMaxAggregateOutputType | null
  }

  export type RestExternalApiParamAvgAggregateOutputType = {
    id: number | null
    restExternalApiRef: number | null
  }

  export type RestExternalApiParamSumAggregateOutputType = {
    id: number | null
    restExternalApiRef: number | null
  }

  export type RestExternalApiParamMinAggregateOutputType = {
    id: number | null
    paramType: string | null
    paramName: string | null
    paramValue: string | null
    restExternalApiRef: number | null
  }

  export type RestExternalApiParamMaxAggregateOutputType = {
    id: number | null
    paramType: string | null
    paramName: string | null
    paramValue: string | null
    restExternalApiRef: number | null
  }

  export type RestExternalApiParamCountAggregateOutputType = {
    id: number
    paramType: number
    paramName: number
    paramValue: number
    restExternalApiRef: number
    _all: number
  }


  export type RestExternalApiParamAvgAggregateInputType = {
    id?: true
    restExternalApiRef?: true
  }

  export type RestExternalApiParamSumAggregateInputType = {
    id?: true
    restExternalApiRef?: true
  }

  export type RestExternalApiParamMinAggregateInputType = {
    id?: true
    paramType?: true
    paramName?: true
    paramValue?: true
    restExternalApiRef?: true
  }

  export type RestExternalApiParamMaxAggregateInputType = {
    id?: true
    paramType?: true
    paramName?: true
    paramValue?: true
    restExternalApiRef?: true
  }

  export type RestExternalApiParamCountAggregateInputType = {
    id?: true
    paramType?: true
    paramName?: true
    paramValue?: true
    restExternalApiRef?: true
    _all?: true
  }

  export type RestExternalApiParamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestExternalApiParam to aggregate.
     */
    where?: RestExternalApiParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiParams to fetch.
     */
    orderBy?: RestExternalApiParamOrderByWithRelationInput | RestExternalApiParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestExternalApiParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestExternalApiParams
    **/
    _count?: true | RestExternalApiParamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestExternalApiParamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestExternalApiParamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestExternalApiParamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestExternalApiParamMaxAggregateInputType
  }

  export type GetRestExternalApiParamAggregateType<T extends RestExternalApiParamAggregateArgs> = {
        [P in keyof T & keyof AggregateRestExternalApiParam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestExternalApiParam[P]>
      : GetScalarType<T[P], AggregateRestExternalApiParam[P]>
  }




  export type RestExternalApiParamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestExternalApiParamWhereInput
    orderBy?: RestExternalApiParamOrderByWithAggregationInput | RestExternalApiParamOrderByWithAggregationInput[]
    by: RestExternalApiParamScalarFieldEnum[] | RestExternalApiParamScalarFieldEnum
    having?: RestExternalApiParamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestExternalApiParamCountAggregateInputType | true
    _avg?: RestExternalApiParamAvgAggregateInputType
    _sum?: RestExternalApiParamSumAggregateInputType
    _min?: RestExternalApiParamMinAggregateInputType
    _max?: RestExternalApiParamMaxAggregateInputType
  }

  export type RestExternalApiParamGroupByOutputType = {
    id: number
    paramType: string | null
    paramName: string | null
    paramValue: string | null
    restExternalApiRef: number
    _count: RestExternalApiParamCountAggregateOutputType | null
    _avg: RestExternalApiParamAvgAggregateOutputType | null
    _sum: RestExternalApiParamSumAggregateOutputType | null
    _min: RestExternalApiParamMinAggregateOutputType | null
    _max: RestExternalApiParamMaxAggregateOutputType | null
  }

  type GetRestExternalApiParamGroupByPayload<T extends RestExternalApiParamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestExternalApiParamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestExternalApiParamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestExternalApiParamGroupByOutputType[P]>
            : GetScalarType<T[P], RestExternalApiParamGroupByOutputType[P]>
        }
      >
    >


  export type RestExternalApiParamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restExternalApiRef?: boolean
    restExternalApi?: boolean | RestExternalApiSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restExternalApiParam"]>

  export type RestExternalApiParamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restExternalApiRef?: boolean
    restExternalApi?: boolean | RestExternalApiSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restExternalApiParam"]>

  export type RestExternalApiParamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restExternalApiRef?: boolean
    restExternalApi?: boolean | RestExternalApiSettingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restExternalApiParam"]>

  export type RestExternalApiParamSelectScalar = {
    id?: boolean
    paramType?: boolean
    paramName?: boolean
    paramValue?: boolean
    restExternalApiRef?: boolean
  }

  export type RestExternalApiParamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paramType" | "paramName" | "paramValue" | "restExternalApiRef", ExtArgs["result"]["restExternalApiParam"]>
  export type RestExternalApiParamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restExternalApi?: boolean | RestExternalApiSettingDefaultArgs<ExtArgs>
  }
  export type RestExternalApiParamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restExternalApi?: boolean | RestExternalApiSettingDefaultArgs<ExtArgs>
  }
  export type RestExternalApiParamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restExternalApi?: boolean | RestExternalApiSettingDefaultArgs<ExtArgs>
  }

  export type $RestExternalApiParamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestExternalApiParam"
    objects: {
      restExternalApi: Prisma.$RestExternalApiSettingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      paramType: string | null
      paramName: string | null
      paramValue: string | null
      restExternalApiRef: number
    }, ExtArgs["result"]["restExternalApiParam"]>
    composites: {}
  }

  type RestExternalApiParamGetPayload<S extends boolean | null | undefined | RestExternalApiParamDefaultArgs> = $Result.GetResult<Prisma.$RestExternalApiParamPayload, S>

  type RestExternalApiParamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestExternalApiParamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestExternalApiParamCountAggregateInputType | true
    }

  export interface RestExternalApiParamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestExternalApiParam'], meta: { name: 'RestExternalApiParam' } }
    /**
     * Find zero or one RestExternalApiParam that matches the filter.
     * @param {RestExternalApiParamFindUniqueArgs} args - Arguments to find a RestExternalApiParam
     * @example
     * // Get one RestExternalApiParam
     * const restExternalApiParam = await prisma.restExternalApiParam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestExternalApiParamFindUniqueArgs>(args: SelectSubset<T, RestExternalApiParamFindUniqueArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestExternalApiParam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestExternalApiParamFindUniqueOrThrowArgs} args - Arguments to find a RestExternalApiParam
     * @example
     * // Get one RestExternalApiParam
     * const restExternalApiParam = await prisma.restExternalApiParam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestExternalApiParamFindUniqueOrThrowArgs>(args: SelectSubset<T, RestExternalApiParamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestExternalApiParam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiParamFindFirstArgs} args - Arguments to find a RestExternalApiParam
     * @example
     * // Get one RestExternalApiParam
     * const restExternalApiParam = await prisma.restExternalApiParam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestExternalApiParamFindFirstArgs>(args?: SelectSubset<T, RestExternalApiParamFindFirstArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestExternalApiParam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiParamFindFirstOrThrowArgs} args - Arguments to find a RestExternalApiParam
     * @example
     * // Get one RestExternalApiParam
     * const restExternalApiParam = await prisma.restExternalApiParam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestExternalApiParamFindFirstOrThrowArgs>(args?: SelectSubset<T, RestExternalApiParamFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestExternalApiParams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiParamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestExternalApiParams
     * const restExternalApiParams = await prisma.restExternalApiParam.findMany()
     * 
     * // Get first 10 RestExternalApiParams
     * const restExternalApiParams = await prisma.restExternalApiParam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restExternalApiParamWithIdOnly = await prisma.restExternalApiParam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestExternalApiParamFindManyArgs>(args?: SelectSubset<T, RestExternalApiParamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestExternalApiParam.
     * @param {RestExternalApiParamCreateArgs} args - Arguments to create a RestExternalApiParam.
     * @example
     * // Create one RestExternalApiParam
     * const RestExternalApiParam = await prisma.restExternalApiParam.create({
     *   data: {
     *     // ... data to create a RestExternalApiParam
     *   }
     * })
     * 
     */
    create<T extends RestExternalApiParamCreateArgs>(args: SelectSubset<T, RestExternalApiParamCreateArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestExternalApiParams.
     * @param {RestExternalApiParamCreateManyArgs} args - Arguments to create many RestExternalApiParams.
     * @example
     * // Create many RestExternalApiParams
     * const restExternalApiParam = await prisma.restExternalApiParam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestExternalApiParamCreateManyArgs>(args?: SelectSubset<T, RestExternalApiParamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RestExternalApiParams and returns the data saved in the database.
     * @param {RestExternalApiParamCreateManyAndReturnArgs} args - Arguments to create many RestExternalApiParams.
     * @example
     * // Create many RestExternalApiParams
     * const restExternalApiParam = await prisma.restExternalApiParam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RestExternalApiParams and only return the `id`
     * const restExternalApiParamWithIdOnly = await prisma.restExternalApiParam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RestExternalApiParamCreateManyAndReturnArgs>(args?: SelectSubset<T, RestExternalApiParamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RestExternalApiParam.
     * @param {RestExternalApiParamDeleteArgs} args - Arguments to delete one RestExternalApiParam.
     * @example
     * // Delete one RestExternalApiParam
     * const RestExternalApiParam = await prisma.restExternalApiParam.delete({
     *   where: {
     *     // ... filter to delete one RestExternalApiParam
     *   }
     * })
     * 
     */
    delete<T extends RestExternalApiParamDeleteArgs>(args: SelectSubset<T, RestExternalApiParamDeleteArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestExternalApiParam.
     * @param {RestExternalApiParamUpdateArgs} args - Arguments to update one RestExternalApiParam.
     * @example
     * // Update one RestExternalApiParam
     * const restExternalApiParam = await prisma.restExternalApiParam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestExternalApiParamUpdateArgs>(args: SelectSubset<T, RestExternalApiParamUpdateArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestExternalApiParams.
     * @param {RestExternalApiParamDeleteManyArgs} args - Arguments to filter RestExternalApiParams to delete.
     * @example
     * // Delete a few RestExternalApiParams
     * const { count } = await prisma.restExternalApiParam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestExternalApiParamDeleteManyArgs>(args?: SelectSubset<T, RestExternalApiParamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestExternalApiParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiParamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestExternalApiParams
     * const restExternalApiParam = await prisma.restExternalApiParam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestExternalApiParamUpdateManyArgs>(args: SelectSubset<T, RestExternalApiParamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestExternalApiParams and returns the data updated in the database.
     * @param {RestExternalApiParamUpdateManyAndReturnArgs} args - Arguments to update many RestExternalApiParams.
     * @example
     * // Update many RestExternalApiParams
     * const restExternalApiParam = await prisma.restExternalApiParam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RestExternalApiParams and only return the `id`
     * const restExternalApiParamWithIdOnly = await prisma.restExternalApiParam.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RestExternalApiParamUpdateManyAndReturnArgs>(args: SelectSubset<T, RestExternalApiParamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RestExternalApiParam.
     * @param {RestExternalApiParamUpsertArgs} args - Arguments to update or create a RestExternalApiParam.
     * @example
     * // Update or create a RestExternalApiParam
     * const restExternalApiParam = await prisma.restExternalApiParam.upsert({
     *   create: {
     *     // ... data to create a RestExternalApiParam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestExternalApiParam we want to update
     *   }
     * })
     */
    upsert<T extends RestExternalApiParamUpsertArgs>(args: SelectSubset<T, RestExternalApiParamUpsertArgs<ExtArgs>>): Prisma__RestExternalApiParamClient<$Result.GetResult<Prisma.$RestExternalApiParamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestExternalApiParams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiParamCountArgs} args - Arguments to filter RestExternalApiParams to count.
     * @example
     * // Count the number of RestExternalApiParams
     * const count = await prisma.restExternalApiParam.count({
     *   where: {
     *     // ... the filter for the RestExternalApiParams we want to count
     *   }
     * })
    **/
    count<T extends RestExternalApiParamCountArgs>(
      args?: Subset<T, RestExternalApiParamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestExternalApiParamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestExternalApiParam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiParamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RestExternalApiParamAggregateArgs>(args: Subset<T, RestExternalApiParamAggregateArgs>): Prisma.PrismaPromise<GetRestExternalApiParamAggregateType<T>>

    /**
     * Group by RestExternalApiParam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestExternalApiParamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RestExternalApiParamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestExternalApiParamGroupByArgs['orderBy'] }
        : { orderBy?: RestExternalApiParamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RestExternalApiParamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestExternalApiParamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestExternalApiParam model
   */
  readonly fields: RestExternalApiParamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestExternalApiParam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestExternalApiParamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restExternalApi<T extends RestExternalApiSettingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestExternalApiSettingDefaultArgs<ExtArgs>>): Prisma__RestExternalApiSettingClient<$Result.GetResult<Prisma.$RestExternalApiSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RestExternalApiParam model
   */
  interface RestExternalApiParamFieldRefs {
    readonly id: FieldRef<"RestExternalApiParam", 'Int'>
    readonly paramType: FieldRef<"RestExternalApiParam", 'String'>
    readonly paramName: FieldRef<"RestExternalApiParam", 'String'>
    readonly paramValue: FieldRef<"RestExternalApiParam", 'String'>
    readonly restExternalApiRef: FieldRef<"RestExternalApiParam", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RestExternalApiParam findUnique
   */
  export type RestExternalApiParamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiParam to fetch.
     */
    where: RestExternalApiParamWhereUniqueInput
  }

  /**
   * RestExternalApiParam findUniqueOrThrow
   */
  export type RestExternalApiParamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiParam to fetch.
     */
    where: RestExternalApiParamWhereUniqueInput
  }

  /**
   * RestExternalApiParam findFirst
   */
  export type RestExternalApiParamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiParam to fetch.
     */
    where?: RestExternalApiParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiParams to fetch.
     */
    orderBy?: RestExternalApiParamOrderByWithRelationInput | RestExternalApiParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestExternalApiParams.
     */
    cursor?: RestExternalApiParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestExternalApiParams.
     */
    distinct?: RestExternalApiParamScalarFieldEnum | RestExternalApiParamScalarFieldEnum[]
  }

  /**
   * RestExternalApiParam findFirstOrThrow
   */
  export type RestExternalApiParamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiParam to fetch.
     */
    where?: RestExternalApiParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiParams to fetch.
     */
    orderBy?: RestExternalApiParamOrderByWithRelationInput | RestExternalApiParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestExternalApiParams.
     */
    cursor?: RestExternalApiParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestExternalApiParams.
     */
    distinct?: RestExternalApiParamScalarFieldEnum | RestExternalApiParamScalarFieldEnum[]
  }

  /**
   * RestExternalApiParam findMany
   */
  export type RestExternalApiParamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * Filter, which RestExternalApiParams to fetch.
     */
    where?: RestExternalApiParamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestExternalApiParams to fetch.
     */
    orderBy?: RestExternalApiParamOrderByWithRelationInput | RestExternalApiParamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestExternalApiParams.
     */
    cursor?: RestExternalApiParamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestExternalApiParams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestExternalApiParams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestExternalApiParams.
     */
    distinct?: RestExternalApiParamScalarFieldEnum | RestExternalApiParamScalarFieldEnum[]
  }

  /**
   * RestExternalApiParam create
   */
  export type RestExternalApiParamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * The data needed to create a RestExternalApiParam.
     */
    data: XOR<RestExternalApiParamCreateInput, RestExternalApiParamUncheckedCreateInput>
  }

  /**
   * RestExternalApiParam createMany
   */
  export type RestExternalApiParamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestExternalApiParams.
     */
    data: RestExternalApiParamCreateManyInput | RestExternalApiParamCreateManyInput[]
  }

  /**
   * RestExternalApiParam createManyAndReturn
   */
  export type RestExternalApiParamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * The data used to create many RestExternalApiParams.
     */
    data: RestExternalApiParamCreateManyInput | RestExternalApiParamCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestExternalApiParam update
   */
  export type RestExternalApiParamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * The data needed to update a RestExternalApiParam.
     */
    data: XOR<RestExternalApiParamUpdateInput, RestExternalApiParamUncheckedUpdateInput>
    /**
     * Choose, which RestExternalApiParam to update.
     */
    where: RestExternalApiParamWhereUniqueInput
  }

  /**
   * RestExternalApiParam updateMany
   */
  export type RestExternalApiParamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestExternalApiParams.
     */
    data: XOR<RestExternalApiParamUpdateManyMutationInput, RestExternalApiParamUncheckedUpdateManyInput>
    /**
     * Filter which RestExternalApiParams to update
     */
    where?: RestExternalApiParamWhereInput
    /**
     * Limit how many RestExternalApiParams to update.
     */
    limit?: number
  }

  /**
   * RestExternalApiParam updateManyAndReturn
   */
  export type RestExternalApiParamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * The data used to update RestExternalApiParams.
     */
    data: XOR<RestExternalApiParamUpdateManyMutationInput, RestExternalApiParamUncheckedUpdateManyInput>
    /**
     * Filter which RestExternalApiParams to update
     */
    where?: RestExternalApiParamWhereInput
    /**
     * Limit how many RestExternalApiParams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RestExternalApiParam upsert
   */
  export type RestExternalApiParamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * The filter to search for the RestExternalApiParam to update in case it exists.
     */
    where: RestExternalApiParamWhereUniqueInput
    /**
     * In case the RestExternalApiParam found by the `where` argument doesn't exist, create a new RestExternalApiParam with this data.
     */
    create: XOR<RestExternalApiParamCreateInput, RestExternalApiParamUncheckedCreateInput>
    /**
     * In case the RestExternalApiParam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestExternalApiParamUpdateInput, RestExternalApiParamUncheckedUpdateInput>
  }

  /**
   * RestExternalApiParam delete
   */
  export type RestExternalApiParamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
    /**
     * Filter which RestExternalApiParam to delete.
     */
    where: RestExternalApiParamWhereUniqueInput
  }

  /**
   * RestExternalApiParam deleteMany
   */
  export type RestExternalApiParamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestExternalApiParams to delete
     */
    where?: RestExternalApiParamWhereInput
    /**
     * Limit how many RestExternalApiParams to delete.
     */
    limit?: number
  }

  /**
   * RestExternalApiParam without action
   */
  export type RestExternalApiParamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestExternalApiParam
     */
    select?: RestExternalApiParamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestExternalApiParam
     */
    omit?: RestExternalApiParamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestExternalApiParamInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DatabaseSettingScalarFieldEnum: {
    id: 'id',
    dbType: 'dbType',
    dbServer: 'dbServer',
    dbPort: 'dbPort',
    dbUsername: 'dbUsername',
    dbPassword: 'dbPassword',
    dbName: 'dbName'
  };

  export type DatabaseSettingScalarFieldEnum = (typeof DatabaseSettingScalarFieldEnum)[keyof typeof DatabaseSettingScalarFieldEnum]


  export const RestServiceScalarFieldEnum: {
    id: 'id',
    persianName: 'persianName',
    latinName: 'latinName',
    httpMethod: 'httpMethod',
    restType: 'restType'
  };

  export type RestServiceScalarFieldEnum = (typeof RestServiceScalarFieldEnum)[keyof typeof RestServiceScalarFieldEnum]


  export const RestDatabaseSettingScalarFieldEnum: {
    id: 'id',
    dbType: 'dbType',
    dbServer: 'dbServer',
    dbPort: 'dbPort',
    dbUsername: 'dbUsername',
    dbPassword: 'dbPassword',
    dbName: 'dbName',
    dbViewName: 'dbViewName',
    restServiceRef: 'restServiceRef'
  };

  export type RestDatabaseSettingScalarFieldEnum = (typeof RestDatabaseSettingScalarFieldEnum)[keyof typeof RestDatabaseSettingScalarFieldEnum]


  export const RestExternalApiSettingScalarFieldEnum: {
    id: 'id',
    baseUrl: 'baseUrl',
    hasAuth: 'hasAuth',
    restServiceRef: 'restServiceRef'
  };

  export type RestExternalApiSettingScalarFieldEnum = (typeof RestExternalApiSettingScalarFieldEnum)[keyof typeof RestExternalApiSettingScalarFieldEnum]


  export const RestAuthServiceSettingScalarFieldEnum: {
    id: 'id',
    authServiceUrl: 'authServiceUrl',
    authMethod: 'authMethod',
    restServiceRef: 'restServiceRef'
  };

  export type RestAuthServiceSettingScalarFieldEnum = (typeof RestAuthServiceSettingScalarFieldEnum)[keyof typeof RestAuthServiceSettingScalarFieldEnum]


  export const RestAuthServiceParamScalarFieldEnum: {
    id: 'id',
    paramType: 'paramType',
    paramName: 'paramName',
    paramValue: 'paramValue',
    restAuthServiceSettingRef: 'restAuthServiceSettingRef'
  };

  export type RestAuthServiceParamScalarFieldEnum = (typeof RestAuthServiceParamScalarFieldEnum)[keyof typeof RestAuthServiceParamScalarFieldEnum]


  export const RestExternalApiParamScalarFieldEnum: {
    id: 'id',
    paramType: 'paramType',
    paramName: 'paramName',
    paramValue: 'paramValue',
    restExternalApiRef: 'restExternalApiRef'
  };

  export type RestExternalApiParamScalarFieldEnum = (typeof RestExternalApiParamScalarFieldEnum)[keyof typeof RestExternalApiParamScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DatabaseSettingWhereInput = {
    AND?: DatabaseSettingWhereInput | DatabaseSettingWhereInput[]
    OR?: DatabaseSettingWhereInput[]
    NOT?: DatabaseSettingWhereInput | DatabaseSettingWhereInput[]
    id?: IntFilter<"DatabaseSetting"> | number
    dbType?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbServer?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbPort?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbUsername?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbPassword?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbName?: StringNullableFilter<"DatabaseSetting"> | string | null
  }

  export type DatabaseSettingOrderByWithRelationInput = {
    id?: SortOrder
    dbType?: SortOrderInput | SortOrder
    dbServer?: SortOrderInput | SortOrder
    dbPort?: SortOrderInput | SortOrder
    dbUsername?: SortOrderInput | SortOrder
    dbPassword?: SortOrderInput | SortOrder
    dbName?: SortOrderInput | SortOrder
  }

  export type DatabaseSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DatabaseSettingWhereInput | DatabaseSettingWhereInput[]
    OR?: DatabaseSettingWhereInput[]
    NOT?: DatabaseSettingWhereInput | DatabaseSettingWhereInput[]
    dbType?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbServer?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbPort?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbUsername?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbPassword?: StringNullableFilter<"DatabaseSetting"> | string | null
    dbName?: StringNullableFilter<"DatabaseSetting"> | string | null
  }, "id">

  export type DatabaseSettingOrderByWithAggregationInput = {
    id?: SortOrder
    dbType?: SortOrderInput | SortOrder
    dbServer?: SortOrderInput | SortOrder
    dbPort?: SortOrderInput | SortOrder
    dbUsername?: SortOrderInput | SortOrder
    dbPassword?: SortOrderInput | SortOrder
    dbName?: SortOrderInput | SortOrder
    _count?: DatabaseSettingCountOrderByAggregateInput
    _avg?: DatabaseSettingAvgOrderByAggregateInput
    _max?: DatabaseSettingMaxOrderByAggregateInput
    _min?: DatabaseSettingMinOrderByAggregateInput
    _sum?: DatabaseSettingSumOrderByAggregateInput
  }

  export type DatabaseSettingScalarWhereWithAggregatesInput = {
    AND?: DatabaseSettingScalarWhereWithAggregatesInput | DatabaseSettingScalarWhereWithAggregatesInput[]
    OR?: DatabaseSettingScalarWhereWithAggregatesInput[]
    NOT?: DatabaseSettingScalarWhereWithAggregatesInput | DatabaseSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DatabaseSetting"> | number
    dbType?: StringNullableWithAggregatesFilter<"DatabaseSetting"> | string | null
    dbServer?: StringNullableWithAggregatesFilter<"DatabaseSetting"> | string | null
    dbPort?: StringNullableWithAggregatesFilter<"DatabaseSetting"> | string | null
    dbUsername?: StringNullableWithAggregatesFilter<"DatabaseSetting"> | string | null
    dbPassword?: StringNullableWithAggregatesFilter<"DatabaseSetting"> | string | null
    dbName?: StringNullableWithAggregatesFilter<"DatabaseSetting"> | string | null
  }

  export type RestServiceWhereInput = {
    AND?: RestServiceWhereInput | RestServiceWhereInput[]
    OR?: RestServiceWhereInput[]
    NOT?: RestServiceWhereInput | RestServiceWhereInput[]
    id?: IntFilter<"RestService"> | number
    persianName?: StringNullableFilter<"RestService"> | string | null
    latinName?: StringNullableFilter<"RestService"> | string | null
    httpMethod?: StringNullableFilter<"RestService"> | string | null
    restType?: StringNullableFilter<"RestService"> | string | null
    restDatabaseSetting?: XOR<RestDatabaseSettingNullableScalarRelationFilter, RestDatabaseSettingWhereInput> | null
    restExternalApiSetting?: XOR<RestExternalApiSettingNullableScalarRelationFilter, RestExternalApiSettingWhereInput> | null
    restAuthServiceSetting?: XOR<RestAuthServiceSettingNullableScalarRelationFilter, RestAuthServiceSettingWhereInput> | null
  }

  export type RestServiceOrderByWithRelationInput = {
    id?: SortOrder
    persianName?: SortOrderInput | SortOrder
    latinName?: SortOrderInput | SortOrder
    httpMethod?: SortOrderInput | SortOrder
    restType?: SortOrderInput | SortOrder
    restDatabaseSetting?: RestDatabaseSettingOrderByWithRelationInput
    restExternalApiSetting?: RestExternalApiSettingOrderByWithRelationInput
    restAuthServiceSetting?: RestAuthServiceSettingOrderByWithRelationInput
  }

  export type RestServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    latinName?: string
    AND?: RestServiceWhereInput | RestServiceWhereInput[]
    OR?: RestServiceWhereInput[]
    NOT?: RestServiceWhereInput | RestServiceWhereInput[]
    persianName?: StringNullableFilter<"RestService"> | string | null
    httpMethod?: StringNullableFilter<"RestService"> | string | null
    restType?: StringNullableFilter<"RestService"> | string | null
    restDatabaseSetting?: XOR<RestDatabaseSettingNullableScalarRelationFilter, RestDatabaseSettingWhereInput> | null
    restExternalApiSetting?: XOR<RestExternalApiSettingNullableScalarRelationFilter, RestExternalApiSettingWhereInput> | null
    restAuthServiceSetting?: XOR<RestAuthServiceSettingNullableScalarRelationFilter, RestAuthServiceSettingWhereInput> | null
  }, "id" | "latinName">

  export type RestServiceOrderByWithAggregationInput = {
    id?: SortOrder
    persianName?: SortOrderInput | SortOrder
    latinName?: SortOrderInput | SortOrder
    httpMethod?: SortOrderInput | SortOrder
    restType?: SortOrderInput | SortOrder
    _count?: RestServiceCountOrderByAggregateInput
    _avg?: RestServiceAvgOrderByAggregateInput
    _max?: RestServiceMaxOrderByAggregateInput
    _min?: RestServiceMinOrderByAggregateInput
    _sum?: RestServiceSumOrderByAggregateInput
  }

  export type RestServiceScalarWhereWithAggregatesInput = {
    AND?: RestServiceScalarWhereWithAggregatesInput | RestServiceScalarWhereWithAggregatesInput[]
    OR?: RestServiceScalarWhereWithAggregatesInput[]
    NOT?: RestServiceScalarWhereWithAggregatesInput | RestServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestService"> | number
    persianName?: StringNullableWithAggregatesFilter<"RestService"> | string | null
    latinName?: StringNullableWithAggregatesFilter<"RestService"> | string | null
    httpMethod?: StringNullableWithAggregatesFilter<"RestService"> | string | null
    restType?: StringNullableWithAggregatesFilter<"RestService"> | string | null
  }

  export type RestDatabaseSettingWhereInput = {
    AND?: RestDatabaseSettingWhereInput | RestDatabaseSettingWhereInput[]
    OR?: RestDatabaseSettingWhereInput[]
    NOT?: RestDatabaseSettingWhereInput | RestDatabaseSettingWhereInput[]
    id?: IntFilter<"RestDatabaseSetting"> | number
    dbType?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbServer?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbPort?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbUsername?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbPassword?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbName?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbViewName?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    restServiceRef?: IntFilter<"RestDatabaseSetting"> | number
    restService?: XOR<RestServiceScalarRelationFilter, RestServiceWhereInput>
  }

  export type RestDatabaseSettingOrderByWithRelationInput = {
    id?: SortOrder
    dbType?: SortOrderInput | SortOrder
    dbServer?: SortOrderInput | SortOrder
    dbPort?: SortOrderInput | SortOrder
    dbUsername?: SortOrderInput | SortOrder
    dbPassword?: SortOrderInput | SortOrder
    dbName?: SortOrderInput | SortOrder
    dbViewName?: SortOrderInput | SortOrder
    restServiceRef?: SortOrder
    restService?: RestServiceOrderByWithRelationInput
  }

  export type RestDatabaseSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    restServiceRef?: number
    AND?: RestDatabaseSettingWhereInput | RestDatabaseSettingWhereInput[]
    OR?: RestDatabaseSettingWhereInput[]
    NOT?: RestDatabaseSettingWhereInput | RestDatabaseSettingWhereInput[]
    dbType?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbServer?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbPort?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbUsername?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbPassword?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbName?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    dbViewName?: StringNullableFilter<"RestDatabaseSetting"> | string | null
    restService?: XOR<RestServiceScalarRelationFilter, RestServiceWhereInput>
  }, "id" | "restServiceRef">

  export type RestDatabaseSettingOrderByWithAggregationInput = {
    id?: SortOrder
    dbType?: SortOrderInput | SortOrder
    dbServer?: SortOrderInput | SortOrder
    dbPort?: SortOrderInput | SortOrder
    dbUsername?: SortOrderInput | SortOrder
    dbPassword?: SortOrderInput | SortOrder
    dbName?: SortOrderInput | SortOrder
    dbViewName?: SortOrderInput | SortOrder
    restServiceRef?: SortOrder
    _count?: RestDatabaseSettingCountOrderByAggregateInput
    _avg?: RestDatabaseSettingAvgOrderByAggregateInput
    _max?: RestDatabaseSettingMaxOrderByAggregateInput
    _min?: RestDatabaseSettingMinOrderByAggregateInput
    _sum?: RestDatabaseSettingSumOrderByAggregateInput
  }

  export type RestDatabaseSettingScalarWhereWithAggregatesInput = {
    AND?: RestDatabaseSettingScalarWhereWithAggregatesInput | RestDatabaseSettingScalarWhereWithAggregatesInput[]
    OR?: RestDatabaseSettingScalarWhereWithAggregatesInput[]
    NOT?: RestDatabaseSettingScalarWhereWithAggregatesInput | RestDatabaseSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestDatabaseSetting"> | number
    dbType?: StringNullableWithAggregatesFilter<"RestDatabaseSetting"> | string | null
    dbServer?: StringNullableWithAggregatesFilter<"RestDatabaseSetting"> | string | null
    dbPort?: StringNullableWithAggregatesFilter<"RestDatabaseSetting"> | string | null
    dbUsername?: StringNullableWithAggregatesFilter<"RestDatabaseSetting"> | string | null
    dbPassword?: StringNullableWithAggregatesFilter<"RestDatabaseSetting"> | string | null
    dbName?: StringNullableWithAggregatesFilter<"RestDatabaseSetting"> | string | null
    dbViewName?: StringNullableWithAggregatesFilter<"RestDatabaseSetting"> | string | null
    restServiceRef?: IntWithAggregatesFilter<"RestDatabaseSetting"> | number
  }

  export type RestExternalApiSettingWhereInput = {
    AND?: RestExternalApiSettingWhereInput | RestExternalApiSettingWhereInput[]
    OR?: RestExternalApiSettingWhereInput[]
    NOT?: RestExternalApiSettingWhereInput | RestExternalApiSettingWhereInput[]
    id?: IntFilter<"RestExternalApiSetting"> | number
    baseUrl?: StringNullableFilter<"RestExternalApiSetting"> | string | null
    hasAuth?: BoolNullableFilter<"RestExternalApiSetting"> | boolean | null
    restServiceRef?: IntFilter<"RestExternalApiSetting"> | number
    restExternalApiParam?: RestExternalApiParamListRelationFilter
    restService?: XOR<RestServiceScalarRelationFilter, RestServiceWhereInput>
  }

  export type RestExternalApiSettingOrderByWithRelationInput = {
    id?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    hasAuth?: SortOrderInput | SortOrder
    restServiceRef?: SortOrder
    restExternalApiParam?: RestExternalApiParamOrderByRelationAggregateInput
    restService?: RestServiceOrderByWithRelationInput
  }

  export type RestExternalApiSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    restServiceRef?: number
    AND?: RestExternalApiSettingWhereInput | RestExternalApiSettingWhereInput[]
    OR?: RestExternalApiSettingWhereInput[]
    NOT?: RestExternalApiSettingWhereInput | RestExternalApiSettingWhereInput[]
    baseUrl?: StringNullableFilter<"RestExternalApiSetting"> | string | null
    hasAuth?: BoolNullableFilter<"RestExternalApiSetting"> | boolean | null
    restExternalApiParam?: RestExternalApiParamListRelationFilter
    restService?: XOR<RestServiceScalarRelationFilter, RestServiceWhereInput>
  }, "id" | "restServiceRef">

  export type RestExternalApiSettingOrderByWithAggregationInput = {
    id?: SortOrder
    baseUrl?: SortOrderInput | SortOrder
    hasAuth?: SortOrderInput | SortOrder
    restServiceRef?: SortOrder
    _count?: RestExternalApiSettingCountOrderByAggregateInput
    _avg?: RestExternalApiSettingAvgOrderByAggregateInput
    _max?: RestExternalApiSettingMaxOrderByAggregateInput
    _min?: RestExternalApiSettingMinOrderByAggregateInput
    _sum?: RestExternalApiSettingSumOrderByAggregateInput
  }

  export type RestExternalApiSettingScalarWhereWithAggregatesInput = {
    AND?: RestExternalApiSettingScalarWhereWithAggregatesInput | RestExternalApiSettingScalarWhereWithAggregatesInput[]
    OR?: RestExternalApiSettingScalarWhereWithAggregatesInput[]
    NOT?: RestExternalApiSettingScalarWhereWithAggregatesInput | RestExternalApiSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestExternalApiSetting"> | number
    baseUrl?: StringNullableWithAggregatesFilter<"RestExternalApiSetting"> | string | null
    hasAuth?: BoolNullableWithAggregatesFilter<"RestExternalApiSetting"> | boolean | null
    restServiceRef?: IntWithAggregatesFilter<"RestExternalApiSetting"> | number
  }

  export type RestAuthServiceSettingWhereInput = {
    AND?: RestAuthServiceSettingWhereInput | RestAuthServiceSettingWhereInput[]
    OR?: RestAuthServiceSettingWhereInput[]
    NOT?: RestAuthServiceSettingWhereInput | RestAuthServiceSettingWhereInput[]
    id?: IntFilter<"RestAuthServiceSetting"> | number
    authServiceUrl?: StringNullableFilter<"RestAuthServiceSetting"> | string | null
    authMethod?: StringNullableFilter<"RestAuthServiceSetting"> | string | null
    restServiceRef?: IntFilter<"RestAuthServiceSetting"> | number
    restService?: XOR<RestServiceScalarRelationFilter, RestServiceWhereInput>
    restAuthServiceParam?: RestAuthServiceParamListRelationFilter
  }

  export type RestAuthServiceSettingOrderByWithRelationInput = {
    id?: SortOrder
    authServiceUrl?: SortOrderInput | SortOrder
    authMethod?: SortOrderInput | SortOrder
    restServiceRef?: SortOrder
    restService?: RestServiceOrderByWithRelationInput
    restAuthServiceParam?: RestAuthServiceParamOrderByRelationAggregateInput
  }

  export type RestAuthServiceSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    restServiceRef?: number
    AND?: RestAuthServiceSettingWhereInput | RestAuthServiceSettingWhereInput[]
    OR?: RestAuthServiceSettingWhereInput[]
    NOT?: RestAuthServiceSettingWhereInput | RestAuthServiceSettingWhereInput[]
    authServiceUrl?: StringNullableFilter<"RestAuthServiceSetting"> | string | null
    authMethod?: StringNullableFilter<"RestAuthServiceSetting"> | string | null
    restService?: XOR<RestServiceScalarRelationFilter, RestServiceWhereInput>
    restAuthServiceParam?: RestAuthServiceParamListRelationFilter
  }, "id" | "restServiceRef">

  export type RestAuthServiceSettingOrderByWithAggregationInput = {
    id?: SortOrder
    authServiceUrl?: SortOrderInput | SortOrder
    authMethod?: SortOrderInput | SortOrder
    restServiceRef?: SortOrder
    _count?: RestAuthServiceSettingCountOrderByAggregateInput
    _avg?: RestAuthServiceSettingAvgOrderByAggregateInput
    _max?: RestAuthServiceSettingMaxOrderByAggregateInput
    _min?: RestAuthServiceSettingMinOrderByAggregateInput
    _sum?: RestAuthServiceSettingSumOrderByAggregateInput
  }

  export type RestAuthServiceSettingScalarWhereWithAggregatesInput = {
    AND?: RestAuthServiceSettingScalarWhereWithAggregatesInput | RestAuthServiceSettingScalarWhereWithAggregatesInput[]
    OR?: RestAuthServiceSettingScalarWhereWithAggregatesInput[]
    NOT?: RestAuthServiceSettingScalarWhereWithAggregatesInput | RestAuthServiceSettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestAuthServiceSetting"> | number
    authServiceUrl?: StringNullableWithAggregatesFilter<"RestAuthServiceSetting"> | string | null
    authMethod?: StringNullableWithAggregatesFilter<"RestAuthServiceSetting"> | string | null
    restServiceRef?: IntWithAggregatesFilter<"RestAuthServiceSetting"> | number
  }

  export type RestAuthServiceParamWhereInput = {
    AND?: RestAuthServiceParamWhereInput | RestAuthServiceParamWhereInput[]
    OR?: RestAuthServiceParamWhereInput[]
    NOT?: RestAuthServiceParamWhereInput | RestAuthServiceParamWhereInput[]
    id?: IntFilter<"RestAuthServiceParam"> | number
    paramType?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    paramName?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    paramValue?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    restAuthServiceSettingRef?: IntFilter<"RestAuthServiceParam"> | number
    restAuthServiceSetting?: XOR<RestAuthServiceSettingScalarRelationFilter, RestAuthServiceSettingWhereInput>
  }

  export type RestAuthServiceParamOrderByWithRelationInput = {
    id?: SortOrder
    paramType?: SortOrderInput | SortOrder
    paramName?: SortOrderInput | SortOrder
    paramValue?: SortOrderInput | SortOrder
    restAuthServiceSettingRef?: SortOrder
    restAuthServiceSetting?: RestAuthServiceSettingOrderByWithRelationInput
  }

  export type RestAuthServiceParamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestAuthServiceParamWhereInput | RestAuthServiceParamWhereInput[]
    OR?: RestAuthServiceParamWhereInput[]
    NOT?: RestAuthServiceParamWhereInput | RestAuthServiceParamWhereInput[]
    paramType?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    paramName?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    paramValue?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    restAuthServiceSettingRef?: IntFilter<"RestAuthServiceParam"> | number
    restAuthServiceSetting?: XOR<RestAuthServiceSettingScalarRelationFilter, RestAuthServiceSettingWhereInput>
  }, "id">

  export type RestAuthServiceParamOrderByWithAggregationInput = {
    id?: SortOrder
    paramType?: SortOrderInput | SortOrder
    paramName?: SortOrderInput | SortOrder
    paramValue?: SortOrderInput | SortOrder
    restAuthServiceSettingRef?: SortOrder
    _count?: RestAuthServiceParamCountOrderByAggregateInput
    _avg?: RestAuthServiceParamAvgOrderByAggregateInput
    _max?: RestAuthServiceParamMaxOrderByAggregateInput
    _min?: RestAuthServiceParamMinOrderByAggregateInput
    _sum?: RestAuthServiceParamSumOrderByAggregateInput
  }

  export type RestAuthServiceParamScalarWhereWithAggregatesInput = {
    AND?: RestAuthServiceParamScalarWhereWithAggregatesInput | RestAuthServiceParamScalarWhereWithAggregatesInput[]
    OR?: RestAuthServiceParamScalarWhereWithAggregatesInput[]
    NOT?: RestAuthServiceParamScalarWhereWithAggregatesInput | RestAuthServiceParamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestAuthServiceParam"> | number
    paramType?: StringNullableWithAggregatesFilter<"RestAuthServiceParam"> | string | null
    paramName?: StringNullableWithAggregatesFilter<"RestAuthServiceParam"> | string | null
    paramValue?: StringNullableWithAggregatesFilter<"RestAuthServiceParam"> | string | null
    restAuthServiceSettingRef?: IntWithAggregatesFilter<"RestAuthServiceParam"> | number
  }

  export type RestExternalApiParamWhereInput = {
    AND?: RestExternalApiParamWhereInput | RestExternalApiParamWhereInput[]
    OR?: RestExternalApiParamWhereInput[]
    NOT?: RestExternalApiParamWhereInput | RestExternalApiParamWhereInput[]
    id?: IntFilter<"RestExternalApiParam"> | number
    paramType?: StringNullableFilter<"RestExternalApiParam"> | string | null
    paramName?: StringNullableFilter<"RestExternalApiParam"> | string | null
    paramValue?: StringNullableFilter<"RestExternalApiParam"> | string | null
    restExternalApiRef?: IntFilter<"RestExternalApiParam"> | number
    restExternalApi?: XOR<RestExternalApiSettingScalarRelationFilter, RestExternalApiSettingWhereInput>
  }

  export type RestExternalApiParamOrderByWithRelationInput = {
    id?: SortOrder
    paramType?: SortOrderInput | SortOrder
    paramName?: SortOrderInput | SortOrder
    paramValue?: SortOrderInput | SortOrder
    restExternalApiRef?: SortOrder
    restExternalApi?: RestExternalApiSettingOrderByWithRelationInput
  }

  export type RestExternalApiParamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RestExternalApiParamWhereInput | RestExternalApiParamWhereInput[]
    OR?: RestExternalApiParamWhereInput[]
    NOT?: RestExternalApiParamWhereInput | RestExternalApiParamWhereInput[]
    paramType?: StringNullableFilter<"RestExternalApiParam"> | string | null
    paramName?: StringNullableFilter<"RestExternalApiParam"> | string | null
    paramValue?: StringNullableFilter<"RestExternalApiParam"> | string | null
    restExternalApiRef?: IntFilter<"RestExternalApiParam"> | number
    restExternalApi?: XOR<RestExternalApiSettingScalarRelationFilter, RestExternalApiSettingWhereInput>
  }, "id">

  export type RestExternalApiParamOrderByWithAggregationInput = {
    id?: SortOrder
    paramType?: SortOrderInput | SortOrder
    paramName?: SortOrderInput | SortOrder
    paramValue?: SortOrderInput | SortOrder
    restExternalApiRef?: SortOrder
    _count?: RestExternalApiParamCountOrderByAggregateInput
    _avg?: RestExternalApiParamAvgOrderByAggregateInput
    _max?: RestExternalApiParamMaxOrderByAggregateInput
    _min?: RestExternalApiParamMinOrderByAggregateInput
    _sum?: RestExternalApiParamSumOrderByAggregateInput
  }

  export type RestExternalApiParamScalarWhereWithAggregatesInput = {
    AND?: RestExternalApiParamScalarWhereWithAggregatesInput | RestExternalApiParamScalarWhereWithAggregatesInput[]
    OR?: RestExternalApiParamScalarWhereWithAggregatesInput[]
    NOT?: RestExternalApiParamScalarWhereWithAggregatesInput | RestExternalApiParamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RestExternalApiParam"> | number
    paramType?: StringNullableWithAggregatesFilter<"RestExternalApiParam"> | string | null
    paramName?: StringNullableWithAggregatesFilter<"RestExternalApiParam"> | string | null
    paramValue?: StringNullableWithAggregatesFilter<"RestExternalApiParam"> | string | null
    restExternalApiRef?: IntWithAggregatesFilter<"RestExternalApiParam"> | number
  }

  export type UserCreateInput = {
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    password?: string | null
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    password?: string | null
  }

  export type UserUpdateInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: number
    firstName?: string | null
    lastName?: string | null
    username?: string | null
    password?: string | null
  }

  export type UserUpdateManyMutationInput = {
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatabaseSettingCreateInput = {
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
  }

  export type DatabaseSettingUncheckedCreateInput = {
    id?: number
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
  }

  export type DatabaseSettingUpdateInput = {
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatabaseSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatabaseSettingCreateManyInput = {
    id?: number
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
  }

  export type DatabaseSettingUpdateManyMutationInput = {
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DatabaseSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestServiceCreateInput = {
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restDatabaseSetting?: RestDatabaseSettingCreateNestedOneWithoutRestServiceInput
    restExternalApiSetting?: RestExternalApiSettingCreateNestedOneWithoutRestServiceInput
    restAuthServiceSetting?: RestAuthServiceSettingCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceUncheckedCreateInput = {
    id?: number
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restDatabaseSetting?: RestDatabaseSettingUncheckedCreateNestedOneWithoutRestServiceInput
    restExternalApiSetting?: RestExternalApiSettingUncheckedCreateNestedOneWithoutRestServiceInput
    restAuthServiceSetting?: RestAuthServiceSettingUncheckedCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceUpdateInput = {
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restDatabaseSetting?: RestDatabaseSettingUpdateOneWithoutRestServiceNestedInput
    restExternalApiSetting?: RestExternalApiSettingUpdateOneWithoutRestServiceNestedInput
    restAuthServiceSetting?: RestAuthServiceSettingUpdateOneWithoutRestServiceNestedInput
  }

  export type RestServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restDatabaseSetting?: RestDatabaseSettingUncheckedUpdateOneWithoutRestServiceNestedInput
    restExternalApiSetting?: RestExternalApiSettingUncheckedUpdateOneWithoutRestServiceNestedInput
    restAuthServiceSetting?: RestAuthServiceSettingUncheckedUpdateOneWithoutRestServiceNestedInput
  }

  export type RestServiceCreateManyInput = {
    id?: number
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
  }

  export type RestServiceUpdateManyMutationInput = {
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestDatabaseSettingCreateInput = {
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
    dbViewName?: string | null
    restService: RestServiceCreateNestedOneWithoutRestDatabaseSettingInput
  }

  export type RestDatabaseSettingUncheckedCreateInput = {
    id?: number
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
    dbViewName?: string | null
    restServiceRef: number
  }

  export type RestDatabaseSettingUpdateInput = {
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
    dbViewName?: NullableStringFieldUpdateOperationsInput | string | null
    restService?: RestServiceUpdateOneRequiredWithoutRestDatabaseSettingNestedInput
  }

  export type RestDatabaseSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
    dbViewName?: NullableStringFieldUpdateOperationsInput | string | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestDatabaseSettingCreateManyInput = {
    id?: number
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
    dbViewName?: string | null
    restServiceRef: number
  }

  export type RestDatabaseSettingUpdateManyMutationInput = {
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
    dbViewName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestDatabaseSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
    dbViewName?: NullableStringFieldUpdateOperationsInput | string | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestExternalApiSettingCreateInput = {
    baseUrl?: string | null
    hasAuth?: boolean | null
    restExternalApiParam?: RestExternalApiParamCreateNestedManyWithoutRestExternalApiInput
    restService: RestServiceCreateNestedOneWithoutRestExternalApiSettingInput
  }

  export type RestExternalApiSettingUncheckedCreateInput = {
    id?: number
    baseUrl?: string | null
    hasAuth?: boolean | null
    restServiceRef: number
    restExternalApiParam?: RestExternalApiParamUncheckedCreateNestedManyWithoutRestExternalApiInput
  }

  export type RestExternalApiSettingUpdateInput = {
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restExternalApiParam?: RestExternalApiParamUpdateManyWithoutRestExternalApiNestedInput
    restService?: RestServiceUpdateOneRequiredWithoutRestExternalApiSettingNestedInput
  }

  export type RestExternalApiSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
    restExternalApiParam?: RestExternalApiParamUncheckedUpdateManyWithoutRestExternalApiNestedInput
  }

  export type RestExternalApiSettingCreateManyInput = {
    id?: number
    baseUrl?: string | null
    hasAuth?: boolean | null
    restServiceRef: number
  }

  export type RestExternalApiSettingUpdateManyMutationInput = {
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type RestExternalApiSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestAuthServiceSettingCreateInput = {
    authServiceUrl?: string | null
    authMethod?: string | null
    restService: RestServiceCreateNestedOneWithoutRestAuthServiceSettingInput
    restAuthServiceParam?: RestAuthServiceParamCreateNestedManyWithoutRestAuthServiceSettingInput
  }

  export type RestAuthServiceSettingUncheckedCreateInput = {
    id?: number
    authServiceUrl?: string | null
    authMethod?: string | null
    restServiceRef: number
    restAuthServiceParam?: RestAuthServiceParamUncheckedCreateNestedManyWithoutRestAuthServiceSettingInput
  }

  export type RestAuthServiceSettingUpdateInput = {
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restService?: RestServiceUpdateOneRequiredWithoutRestAuthServiceSettingNestedInput
    restAuthServiceParam?: RestAuthServiceParamUpdateManyWithoutRestAuthServiceSettingNestedInput
  }

  export type RestAuthServiceSettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
    restAuthServiceParam?: RestAuthServiceParamUncheckedUpdateManyWithoutRestAuthServiceSettingNestedInput
  }

  export type RestAuthServiceSettingCreateManyInput = {
    id?: number
    authServiceUrl?: string | null
    authMethod?: string | null
    restServiceRef: number
  }

  export type RestAuthServiceSettingUpdateManyMutationInput = {
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestAuthServiceSettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestAuthServiceParamCreateInput = {
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
    restAuthServiceSetting: RestAuthServiceSettingCreateNestedOneWithoutRestAuthServiceParamInput
  }

  export type RestAuthServiceParamUncheckedCreateInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
    restAuthServiceSettingRef: number
  }

  export type RestAuthServiceParamUpdateInput = {
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
    restAuthServiceSetting?: RestAuthServiceSettingUpdateOneRequiredWithoutRestAuthServiceParamNestedInput
  }

  export type RestAuthServiceParamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
    restAuthServiceSettingRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestAuthServiceParamCreateManyInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
    restAuthServiceSettingRef: number
  }

  export type RestAuthServiceParamUpdateManyMutationInput = {
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestAuthServiceParamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
    restAuthServiceSettingRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestExternalApiParamCreateInput = {
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
    restExternalApi: RestExternalApiSettingCreateNestedOneWithoutRestExternalApiParamInput
  }

  export type RestExternalApiParamUncheckedCreateInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
    restExternalApiRef: number
  }

  export type RestExternalApiParamUpdateInput = {
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
    restExternalApi?: RestExternalApiSettingUpdateOneRequiredWithoutRestExternalApiParamNestedInput
  }

  export type RestExternalApiParamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
    restExternalApiRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestExternalApiParamCreateManyInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
    restExternalApiRef: number
  }

  export type RestExternalApiParamUpdateManyMutationInput = {
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestExternalApiParamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
    restExternalApiRef?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DatabaseSettingCountOrderByAggregateInput = {
    id?: SortOrder
    dbType?: SortOrder
    dbServer?: SortOrder
    dbPort?: SortOrder
    dbUsername?: SortOrder
    dbPassword?: SortOrder
    dbName?: SortOrder
  }

  export type DatabaseSettingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DatabaseSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    dbType?: SortOrder
    dbServer?: SortOrder
    dbPort?: SortOrder
    dbUsername?: SortOrder
    dbPassword?: SortOrder
    dbName?: SortOrder
  }

  export type DatabaseSettingMinOrderByAggregateInput = {
    id?: SortOrder
    dbType?: SortOrder
    dbServer?: SortOrder
    dbPort?: SortOrder
    dbUsername?: SortOrder
    dbPassword?: SortOrder
    dbName?: SortOrder
  }

  export type DatabaseSettingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RestDatabaseSettingNullableScalarRelationFilter = {
    is?: RestDatabaseSettingWhereInput | null
    isNot?: RestDatabaseSettingWhereInput | null
  }

  export type RestExternalApiSettingNullableScalarRelationFilter = {
    is?: RestExternalApiSettingWhereInput | null
    isNot?: RestExternalApiSettingWhereInput | null
  }

  export type RestAuthServiceSettingNullableScalarRelationFilter = {
    is?: RestAuthServiceSettingWhereInput | null
    isNot?: RestAuthServiceSettingWhereInput | null
  }

  export type RestServiceCountOrderByAggregateInput = {
    id?: SortOrder
    persianName?: SortOrder
    latinName?: SortOrder
    httpMethod?: SortOrder
    restType?: SortOrder
  }

  export type RestServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RestServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    persianName?: SortOrder
    latinName?: SortOrder
    httpMethod?: SortOrder
    restType?: SortOrder
  }

  export type RestServiceMinOrderByAggregateInput = {
    id?: SortOrder
    persianName?: SortOrder
    latinName?: SortOrder
    httpMethod?: SortOrder
    restType?: SortOrder
  }

  export type RestServiceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RestServiceScalarRelationFilter = {
    is?: RestServiceWhereInput
    isNot?: RestServiceWhereInput
  }

  export type RestDatabaseSettingCountOrderByAggregateInput = {
    id?: SortOrder
    dbType?: SortOrder
    dbServer?: SortOrder
    dbPort?: SortOrder
    dbUsername?: SortOrder
    dbPassword?: SortOrder
    dbName?: SortOrder
    dbViewName?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestDatabaseSettingAvgOrderByAggregateInput = {
    id?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestDatabaseSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    dbType?: SortOrder
    dbServer?: SortOrder
    dbPort?: SortOrder
    dbUsername?: SortOrder
    dbPassword?: SortOrder
    dbName?: SortOrder
    dbViewName?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestDatabaseSettingMinOrderByAggregateInput = {
    id?: SortOrder
    dbType?: SortOrder
    dbServer?: SortOrder
    dbPort?: SortOrder
    dbUsername?: SortOrder
    dbPassword?: SortOrder
    dbName?: SortOrder
    dbViewName?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestDatabaseSettingSumOrderByAggregateInput = {
    id?: SortOrder
    restServiceRef?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type RestExternalApiParamListRelationFilter = {
    every?: RestExternalApiParamWhereInput
    some?: RestExternalApiParamWhereInput
    none?: RestExternalApiParamWhereInput
  }

  export type RestExternalApiParamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestExternalApiSettingCountOrderByAggregateInput = {
    id?: SortOrder
    baseUrl?: SortOrder
    hasAuth?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestExternalApiSettingAvgOrderByAggregateInput = {
    id?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestExternalApiSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    baseUrl?: SortOrder
    hasAuth?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestExternalApiSettingMinOrderByAggregateInput = {
    id?: SortOrder
    baseUrl?: SortOrder
    hasAuth?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestExternalApiSettingSumOrderByAggregateInput = {
    id?: SortOrder
    restServiceRef?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RestAuthServiceParamListRelationFilter = {
    every?: RestAuthServiceParamWhereInput
    some?: RestAuthServiceParamWhereInput
    none?: RestAuthServiceParamWhereInput
  }

  export type RestAuthServiceParamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestAuthServiceSettingCountOrderByAggregateInput = {
    id?: SortOrder
    authServiceUrl?: SortOrder
    authMethod?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestAuthServiceSettingAvgOrderByAggregateInput = {
    id?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestAuthServiceSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    authServiceUrl?: SortOrder
    authMethod?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestAuthServiceSettingMinOrderByAggregateInput = {
    id?: SortOrder
    authServiceUrl?: SortOrder
    authMethod?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestAuthServiceSettingSumOrderByAggregateInput = {
    id?: SortOrder
    restServiceRef?: SortOrder
  }

  export type RestAuthServiceSettingScalarRelationFilter = {
    is?: RestAuthServiceSettingWhereInput
    isNot?: RestAuthServiceSettingWhereInput
  }

  export type RestAuthServiceParamCountOrderByAggregateInput = {
    id?: SortOrder
    paramType?: SortOrder
    paramName?: SortOrder
    paramValue?: SortOrder
    restAuthServiceSettingRef?: SortOrder
  }

  export type RestAuthServiceParamAvgOrderByAggregateInput = {
    id?: SortOrder
    restAuthServiceSettingRef?: SortOrder
  }

  export type RestAuthServiceParamMaxOrderByAggregateInput = {
    id?: SortOrder
    paramType?: SortOrder
    paramName?: SortOrder
    paramValue?: SortOrder
    restAuthServiceSettingRef?: SortOrder
  }

  export type RestAuthServiceParamMinOrderByAggregateInput = {
    id?: SortOrder
    paramType?: SortOrder
    paramName?: SortOrder
    paramValue?: SortOrder
    restAuthServiceSettingRef?: SortOrder
  }

  export type RestAuthServiceParamSumOrderByAggregateInput = {
    id?: SortOrder
    restAuthServiceSettingRef?: SortOrder
  }

  export type RestExternalApiSettingScalarRelationFilter = {
    is?: RestExternalApiSettingWhereInput
    isNot?: RestExternalApiSettingWhereInput
  }

  export type RestExternalApiParamCountOrderByAggregateInput = {
    id?: SortOrder
    paramType?: SortOrder
    paramName?: SortOrder
    paramValue?: SortOrder
    restExternalApiRef?: SortOrder
  }

  export type RestExternalApiParamAvgOrderByAggregateInput = {
    id?: SortOrder
    restExternalApiRef?: SortOrder
  }

  export type RestExternalApiParamMaxOrderByAggregateInput = {
    id?: SortOrder
    paramType?: SortOrder
    paramName?: SortOrder
    paramValue?: SortOrder
    restExternalApiRef?: SortOrder
  }

  export type RestExternalApiParamMinOrderByAggregateInput = {
    id?: SortOrder
    paramType?: SortOrder
    paramName?: SortOrder
    paramValue?: SortOrder
    restExternalApiRef?: SortOrder
  }

  export type RestExternalApiParamSumOrderByAggregateInput = {
    id?: SortOrder
    restExternalApiRef?: SortOrder
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RestDatabaseSettingCreateNestedOneWithoutRestServiceInput = {
    create?: XOR<RestDatabaseSettingCreateWithoutRestServiceInput, RestDatabaseSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestDatabaseSettingCreateOrConnectWithoutRestServiceInput
    connect?: RestDatabaseSettingWhereUniqueInput
  }

  export type RestExternalApiSettingCreateNestedOneWithoutRestServiceInput = {
    create?: XOR<RestExternalApiSettingCreateWithoutRestServiceInput, RestExternalApiSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestExternalApiSettingCreateOrConnectWithoutRestServiceInput
    connect?: RestExternalApiSettingWhereUniqueInput
  }

  export type RestAuthServiceSettingCreateNestedOneWithoutRestServiceInput = {
    create?: XOR<RestAuthServiceSettingCreateWithoutRestServiceInput, RestAuthServiceSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestAuthServiceSettingCreateOrConnectWithoutRestServiceInput
    connect?: RestAuthServiceSettingWhereUniqueInput
  }

  export type RestDatabaseSettingUncheckedCreateNestedOneWithoutRestServiceInput = {
    create?: XOR<RestDatabaseSettingCreateWithoutRestServiceInput, RestDatabaseSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestDatabaseSettingCreateOrConnectWithoutRestServiceInput
    connect?: RestDatabaseSettingWhereUniqueInput
  }

  export type RestExternalApiSettingUncheckedCreateNestedOneWithoutRestServiceInput = {
    create?: XOR<RestExternalApiSettingCreateWithoutRestServiceInput, RestExternalApiSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestExternalApiSettingCreateOrConnectWithoutRestServiceInput
    connect?: RestExternalApiSettingWhereUniqueInput
  }

  export type RestAuthServiceSettingUncheckedCreateNestedOneWithoutRestServiceInput = {
    create?: XOR<RestAuthServiceSettingCreateWithoutRestServiceInput, RestAuthServiceSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestAuthServiceSettingCreateOrConnectWithoutRestServiceInput
    connect?: RestAuthServiceSettingWhereUniqueInput
  }

  export type RestDatabaseSettingUpdateOneWithoutRestServiceNestedInput = {
    create?: XOR<RestDatabaseSettingCreateWithoutRestServiceInput, RestDatabaseSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestDatabaseSettingCreateOrConnectWithoutRestServiceInput
    upsert?: RestDatabaseSettingUpsertWithoutRestServiceInput
    disconnect?: RestDatabaseSettingWhereInput | boolean
    delete?: RestDatabaseSettingWhereInput | boolean
    connect?: RestDatabaseSettingWhereUniqueInput
    update?: XOR<XOR<RestDatabaseSettingUpdateToOneWithWhereWithoutRestServiceInput, RestDatabaseSettingUpdateWithoutRestServiceInput>, RestDatabaseSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestExternalApiSettingUpdateOneWithoutRestServiceNestedInput = {
    create?: XOR<RestExternalApiSettingCreateWithoutRestServiceInput, RestExternalApiSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestExternalApiSettingCreateOrConnectWithoutRestServiceInput
    upsert?: RestExternalApiSettingUpsertWithoutRestServiceInput
    disconnect?: RestExternalApiSettingWhereInput | boolean
    delete?: RestExternalApiSettingWhereInput | boolean
    connect?: RestExternalApiSettingWhereUniqueInput
    update?: XOR<XOR<RestExternalApiSettingUpdateToOneWithWhereWithoutRestServiceInput, RestExternalApiSettingUpdateWithoutRestServiceInput>, RestExternalApiSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestAuthServiceSettingUpdateOneWithoutRestServiceNestedInput = {
    create?: XOR<RestAuthServiceSettingCreateWithoutRestServiceInput, RestAuthServiceSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestAuthServiceSettingCreateOrConnectWithoutRestServiceInput
    upsert?: RestAuthServiceSettingUpsertWithoutRestServiceInput
    disconnect?: RestAuthServiceSettingWhereInput | boolean
    delete?: RestAuthServiceSettingWhereInput | boolean
    connect?: RestAuthServiceSettingWhereUniqueInput
    update?: XOR<XOR<RestAuthServiceSettingUpdateToOneWithWhereWithoutRestServiceInput, RestAuthServiceSettingUpdateWithoutRestServiceInput>, RestAuthServiceSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestDatabaseSettingUncheckedUpdateOneWithoutRestServiceNestedInput = {
    create?: XOR<RestDatabaseSettingCreateWithoutRestServiceInput, RestDatabaseSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestDatabaseSettingCreateOrConnectWithoutRestServiceInput
    upsert?: RestDatabaseSettingUpsertWithoutRestServiceInput
    disconnect?: RestDatabaseSettingWhereInput | boolean
    delete?: RestDatabaseSettingWhereInput | boolean
    connect?: RestDatabaseSettingWhereUniqueInput
    update?: XOR<XOR<RestDatabaseSettingUpdateToOneWithWhereWithoutRestServiceInput, RestDatabaseSettingUpdateWithoutRestServiceInput>, RestDatabaseSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestExternalApiSettingUncheckedUpdateOneWithoutRestServiceNestedInput = {
    create?: XOR<RestExternalApiSettingCreateWithoutRestServiceInput, RestExternalApiSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestExternalApiSettingCreateOrConnectWithoutRestServiceInput
    upsert?: RestExternalApiSettingUpsertWithoutRestServiceInput
    disconnect?: RestExternalApiSettingWhereInput | boolean
    delete?: RestExternalApiSettingWhereInput | boolean
    connect?: RestExternalApiSettingWhereUniqueInput
    update?: XOR<XOR<RestExternalApiSettingUpdateToOneWithWhereWithoutRestServiceInput, RestExternalApiSettingUpdateWithoutRestServiceInput>, RestExternalApiSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestAuthServiceSettingUncheckedUpdateOneWithoutRestServiceNestedInput = {
    create?: XOR<RestAuthServiceSettingCreateWithoutRestServiceInput, RestAuthServiceSettingUncheckedCreateWithoutRestServiceInput>
    connectOrCreate?: RestAuthServiceSettingCreateOrConnectWithoutRestServiceInput
    upsert?: RestAuthServiceSettingUpsertWithoutRestServiceInput
    disconnect?: RestAuthServiceSettingWhereInput | boolean
    delete?: RestAuthServiceSettingWhereInput | boolean
    connect?: RestAuthServiceSettingWhereUniqueInput
    update?: XOR<XOR<RestAuthServiceSettingUpdateToOneWithWhereWithoutRestServiceInput, RestAuthServiceSettingUpdateWithoutRestServiceInput>, RestAuthServiceSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestServiceCreateNestedOneWithoutRestDatabaseSettingInput = {
    create?: XOR<RestServiceCreateWithoutRestDatabaseSettingInput, RestServiceUncheckedCreateWithoutRestDatabaseSettingInput>
    connectOrCreate?: RestServiceCreateOrConnectWithoutRestDatabaseSettingInput
    connect?: RestServiceWhereUniqueInput
  }

  export type RestServiceUpdateOneRequiredWithoutRestDatabaseSettingNestedInput = {
    create?: XOR<RestServiceCreateWithoutRestDatabaseSettingInput, RestServiceUncheckedCreateWithoutRestDatabaseSettingInput>
    connectOrCreate?: RestServiceCreateOrConnectWithoutRestDatabaseSettingInput
    upsert?: RestServiceUpsertWithoutRestDatabaseSettingInput
    connect?: RestServiceWhereUniqueInput
    update?: XOR<XOR<RestServiceUpdateToOneWithWhereWithoutRestDatabaseSettingInput, RestServiceUpdateWithoutRestDatabaseSettingInput>, RestServiceUncheckedUpdateWithoutRestDatabaseSettingInput>
  }

  export type RestExternalApiParamCreateNestedManyWithoutRestExternalApiInput = {
    create?: XOR<RestExternalApiParamCreateWithoutRestExternalApiInput, RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput> | RestExternalApiParamCreateWithoutRestExternalApiInput[] | RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput[]
    connectOrCreate?: RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput | RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput[]
    createMany?: RestExternalApiParamCreateManyRestExternalApiInputEnvelope
    connect?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
  }

  export type RestServiceCreateNestedOneWithoutRestExternalApiSettingInput = {
    create?: XOR<RestServiceCreateWithoutRestExternalApiSettingInput, RestServiceUncheckedCreateWithoutRestExternalApiSettingInput>
    connectOrCreate?: RestServiceCreateOrConnectWithoutRestExternalApiSettingInput
    connect?: RestServiceWhereUniqueInput
  }

  export type RestExternalApiParamUncheckedCreateNestedManyWithoutRestExternalApiInput = {
    create?: XOR<RestExternalApiParamCreateWithoutRestExternalApiInput, RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput> | RestExternalApiParamCreateWithoutRestExternalApiInput[] | RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput[]
    connectOrCreate?: RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput | RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput[]
    createMany?: RestExternalApiParamCreateManyRestExternalApiInputEnvelope
    connect?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type RestExternalApiParamUpdateManyWithoutRestExternalApiNestedInput = {
    create?: XOR<RestExternalApiParamCreateWithoutRestExternalApiInput, RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput> | RestExternalApiParamCreateWithoutRestExternalApiInput[] | RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput[]
    connectOrCreate?: RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput | RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput[]
    upsert?: RestExternalApiParamUpsertWithWhereUniqueWithoutRestExternalApiInput | RestExternalApiParamUpsertWithWhereUniqueWithoutRestExternalApiInput[]
    createMany?: RestExternalApiParamCreateManyRestExternalApiInputEnvelope
    set?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    disconnect?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    delete?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    connect?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    update?: RestExternalApiParamUpdateWithWhereUniqueWithoutRestExternalApiInput | RestExternalApiParamUpdateWithWhereUniqueWithoutRestExternalApiInput[]
    updateMany?: RestExternalApiParamUpdateManyWithWhereWithoutRestExternalApiInput | RestExternalApiParamUpdateManyWithWhereWithoutRestExternalApiInput[]
    deleteMany?: RestExternalApiParamScalarWhereInput | RestExternalApiParamScalarWhereInput[]
  }

  export type RestServiceUpdateOneRequiredWithoutRestExternalApiSettingNestedInput = {
    create?: XOR<RestServiceCreateWithoutRestExternalApiSettingInput, RestServiceUncheckedCreateWithoutRestExternalApiSettingInput>
    connectOrCreate?: RestServiceCreateOrConnectWithoutRestExternalApiSettingInput
    upsert?: RestServiceUpsertWithoutRestExternalApiSettingInput
    connect?: RestServiceWhereUniqueInput
    update?: XOR<XOR<RestServiceUpdateToOneWithWhereWithoutRestExternalApiSettingInput, RestServiceUpdateWithoutRestExternalApiSettingInput>, RestServiceUncheckedUpdateWithoutRestExternalApiSettingInput>
  }

  export type RestExternalApiParamUncheckedUpdateManyWithoutRestExternalApiNestedInput = {
    create?: XOR<RestExternalApiParamCreateWithoutRestExternalApiInput, RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput> | RestExternalApiParamCreateWithoutRestExternalApiInput[] | RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput[]
    connectOrCreate?: RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput | RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput[]
    upsert?: RestExternalApiParamUpsertWithWhereUniqueWithoutRestExternalApiInput | RestExternalApiParamUpsertWithWhereUniqueWithoutRestExternalApiInput[]
    createMany?: RestExternalApiParamCreateManyRestExternalApiInputEnvelope
    set?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    disconnect?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    delete?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    connect?: RestExternalApiParamWhereUniqueInput | RestExternalApiParamWhereUniqueInput[]
    update?: RestExternalApiParamUpdateWithWhereUniqueWithoutRestExternalApiInput | RestExternalApiParamUpdateWithWhereUniqueWithoutRestExternalApiInput[]
    updateMany?: RestExternalApiParamUpdateManyWithWhereWithoutRestExternalApiInput | RestExternalApiParamUpdateManyWithWhereWithoutRestExternalApiInput[]
    deleteMany?: RestExternalApiParamScalarWhereInput | RestExternalApiParamScalarWhereInput[]
  }

  export type RestServiceCreateNestedOneWithoutRestAuthServiceSettingInput = {
    create?: XOR<RestServiceCreateWithoutRestAuthServiceSettingInput, RestServiceUncheckedCreateWithoutRestAuthServiceSettingInput>
    connectOrCreate?: RestServiceCreateOrConnectWithoutRestAuthServiceSettingInput
    connect?: RestServiceWhereUniqueInput
  }

  export type RestAuthServiceParamCreateNestedManyWithoutRestAuthServiceSettingInput = {
    create?: XOR<RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput> | RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput[] | RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput[]
    connectOrCreate?: RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput | RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput[]
    createMany?: RestAuthServiceParamCreateManyRestAuthServiceSettingInputEnvelope
    connect?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
  }

  export type RestAuthServiceParamUncheckedCreateNestedManyWithoutRestAuthServiceSettingInput = {
    create?: XOR<RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput> | RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput[] | RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput[]
    connectOrCreate?: RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput | RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput[]
    createMany?: RestAuthServiceParamCreateManyRestAuthServiceSettingInputEnvelope
    connect?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
  }

  export type RestServiceUpdateOneRequiredWithoutRestAuthServiceSettingNestedInput = {
    create?: XOR<RestServiceCreateWithoutRestAuthServiceSettingInput, RestServiceUncheckedCreateWithoutRestAuthServiceSettingInput>
    connectOrCreate?: RestServiceCreateOrConnectWithoutRestAuthServiceSettingInput
    upsert?: RestServiceUpsertWithoutRestAuthServiceSettingInput
    connect?: RestServiceWhereUniqueInput
    update?: XOR<XOR<RestServiceUpdateToOneWithWhereWithoutRestAuthServiceSettingInput, RestServiceUpdateWithoutRestAuthServiceSettingInput>, RestServiceUncheckedUpdateWithoutRestAuthServiceSettingInput>
  }

  export type RestAuthServiceParamUpdateManyWithoutRestAuthServiceSettingNestedInput = {
    create?: XOR<RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput> | RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput[] | RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput[]
    connectOrCreate?: RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput | RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput[]
    upsert?: RestAuthServiceParamUpsertWithWhereUniqueWithoutRestAuthServiceSettingInput | RestAuthServiceParamUpsertWithWhereUniqueWithoutRestAuthServiceSettingInput[]
    createMany?: RestAuthServiceParamCreateManyRestAuthServiceSettingInputEnvelope
    set?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    disconnect?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    delete?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    connect?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    update?: RestAuthServiceParamUpdateWithWhereUniqueWithoutRestAuthServiceSettingInput | RestAuthServiceParamUpdateWithWhereUniqueWithoutRestAuthServiceSettingInput[]
    updateMany?: RestAuthServiceParamUpdateManyWithWhereWithoutRestAuthServiceSettingInput | RestAuthServiceParamUpdateManyWithWhereWithoutRestAuthServiceSettingInput[]
    deleteMany?: RestAuthServiceParamScalarWhereInput | RestAuthServiceParamScalarWhereInput[]
  }

  export type RestAuthServiceParamUncheckedUpdateManyWithoutRestAuthServiceSettingNestedInput = {
    create?: XOR<RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput> | RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput[] | RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput[]
    connectOrCreate?: RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput | RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput[]
    upsert?: RestAuthServiceParamUpsertWithWhereUniqueWithoutRestAuthServiceSettingInput | RestAuthServiceParamUpsertWithWhereUniqueWithoutRestAuthServiceSettingInput[]
    createMany?: RestAuthServiceParamCreateManyRestAuthServiceSettingInputEnvelope
    set?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    disconnect?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    delete?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    connect?: RestAuthServiceParamWhereUniqueInput | RestAuthServiceParamWhereUniqueInput[]
    update?: RestAuthServiceParamUpdateWithWhereUniqueWithoutRestAuthServiceSettingInput | RestAuthServiceParamUpdateWithWhereUniqueWithoutRestAuthServiceSettingInput[]
    updateMany?: RestAuthServiceParamUpdateManyWithWhereWithoutRestAuthServiceSettingInput | RestAuthServiceParamUpdateManyWithWhereWithoutRestAuthServiceSettingInput[]
    deleteMany?: RestAuthServiceParamScalarWhereInput | RestAuthServiceParamScalarWhereInput[]
  }

  export type RestAuthServiceSettingCreateNestedOneWithoutRestAuthServiceParamInput = {
    create?: XOR<RestAuthServiceSettingCreateWithoutRestAuthServiceParamInput, RestAuthServiceSettingUncheckedCreateWithoutRestAuthServiceParamInput>
    connectOrCreate?: RestAuthServiceSettingCreateOrConnectWithoutRestAuthServiceParamInput
    connect?: RestAuthServiceSettingWhereUniqueInput
  }

  export type RestAuthServiceSettingUpdateOneRequiredWithoutRestAuthServiceParamNestedInput = {
    create?: XOR<RestAuthServiceSettingCreateWithoutRestAuthServiceParamInput, RestAuthServiceSettingUncheckedCreateWithoutRestAuthServiceParamInput>
    connectOrCreate?: RestAuthServiceSettingCreateOrConnectWithoutRestAuthServiceParamInput
    upsert?: RestAuthServiceSettingUpsertWithoutRestAuthServiceParamInput
    connect?: RestAuthServiceSettingWhereUniqueInput
    update?: XOR<XOR<RestAuthServiceSettingUpdateToOneWithWhereWithoutRestAuthServiceParamInput, RestAuthServiceSettingUpdateWithoutRestAuthServiceParamInput>, RestAuthServiceSettingUncheckedUpdateWithoutRestAuthServiceParamInput>
  }

  export type RestExternalApiSettingCreateNestedOneWithoutRestExternalApiParamInput = {
    create?: XOR<RestExternalApiSettingCreateWithoutRestExternalApiParamInput, RestExternalApiSettingUncheckedCreateWithoutRestExternalApiParamInput>
    connectOrCreate?: RestExternalApiSettingCreateOrConnectWithoutRestExternalApiParamInput
    connect?: RestExternalApiSettingWhereUniqueInput
  }

  export type RestExternalApiSettingUpdateOneRequiredWithoutRestExternalApiParamNestedInput = {
    create?: XOR<RestExternalApiSettingCreateWithoutRestExternalApiParamInput, RestExternalApiSettingUncheckedCreateWithoutRestExternalApiParamInput>
    connectOrCreate?: RestExternalApiSettingCreateOrConnectWithoutRestExternalApiParamInput
    upsert?: RestExternalApiSettingUpsertWithoutRestExternalApiParamInput
    connect?: RestExternalApiSettingWhereUniqueInput
    update?: XOR<XOR<RestExternalApiSettingUpdateToOneWithWhereWithoutRestExternalApiParamInput, RestExternalApiSettingUpdateWithoutRestExternalApiParamInput>, RestExternalApiSettingUncheckedUpdateWithoutRestExternalApiParamInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type RestDatabaseSettingCreateWithoutRestServiceInput = {
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
    dbViewName?: string | null
  }

  export type RestDatabaseSettingUncheckedCreateWithoutRestServiceInput = {
    id?: number
    dbType?: string | null
    dbServer?: string | null
    dbPort?: string | null
    dbUsername?: string | null
    dbPassword?: string | null
    dbName?: string | null
    dbViewName?: string | null
  }

  export type RestDatabaseSettingCreateOrConnectWithoutRestServiceInput = {
    where: RestDatabaseSettingWhereUniqueInput
    create: XOR<RestDatabaseSettingCreateWithoutRestServiceInput, RestDatabaseSettingUncheckedCreateWithoutRestServiceInput>
  }

  export type RestExternalApiSettingCreateWithoutRestServiceInput = {
    baseUrl?: string | null
    hasAuth?: boolean | null
    restExternalApiParam?: RestExternalApiParamCreateNestedManyWithoutRestExternalApiInput
  }

  export type RestExternalApiSettingUncheckedCreateWithoutRestServiceInput = {
    id?: number
    baseUrl?: string | null
    hasAuth?: boolean | null
    restExternalApiParam?: RestExternalApiParamUncheckedCreateNestedManyWithoutRestExternalApiInput
  }

  export type RestExternalApiSettingCreateOrConnectWithoutRestServiceInput = {
    where: RestExternalApiSettingWhereUniqueInput
    create: XOR<RestExternalApiSettingCreateWithoutRestServiceInput, RestExternalApiSettingUncheckedCreateWithoutRestServiceInput>
  }

  export type RestAuthServiceSettingCreateWithoutRestServiceInput = {
    authServiceUrl?: string | null
    authMethod?: string | null
    restAuthServiceParam?: RestAuthServiceParamCreateNestedManyWithoutRestAuthServiceSettingInput
  }

  export type RestAuthServiceSettingUncheckedCreateWithoutRestServiceInput = {
    id?: number
    authServiceUrl?: string | null
    authMethod?: string | null
    restAuthServiceParam?: RestAuthServiceParamUncheckedCreateNestedManyWithoutRestAuthServiceSettingInput
  }

  export type RestAuthServiceSettingCreateOrConnectWithoutRestServiceInput = {
    where: RestAuthServiceSettingWhereUniqueInput
    create: XOR<RestAuthServiceSettingCreateWithoutRestServiceInput, RestAuthServiceSettingUncheckedCreateWithoutRestServiceInput>
  }

  export type RestDatabaseSettingUpsertWithoutRestServiceInput = {
    update: XOR<RestDatabaseSettingUpdateWithoutRestServiceInput, RestDatabaseSettingUncheckedUpdateWithoutRestServiceInput>
    create: XOR<RestDatabaseSettingCreateWithoutRestServiceInput, RestDatabaseSettingUncheckedCreateWithoutRestServiceInput>
    where?: RestDatabaseSettingWhereInput
  }

  export type RestDatabaseSettingUpdateToOneWithWhereWithoutRestServiceInput = {
    where?: RestDatabaseSettingWhereInput
    data: XOR<RestDatabaseSettingUpdateWithoutRestServiceInput, RestDatabaseSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestDatabaseSettingUpdateWithoutRestServiceInput = {
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
    dbViewName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestDatabaseSettingUncheckedUpdateWithoutRestServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    dbType?: NullableStringFieldUpdateOperationsInput | string | null
    dbServer?: NullableStringFieldUpdateOperationsInput | string | null
    dbPort?: NullableStringFieldUpdateOperationsInput | string | null
    dbUsername?: NullableStringFieldUpdateOperationsInput | string | null
    dbPassword?: NullableStringFieldUpdateOperationsInput | string | null
    dbName?: NullableStringFieldUpdateOperationsInput | string | null
    dbViewName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestExternalApiSettingUpsertWithoutRestServiceInput = {
    update: XOR<RestExternalApiSettingUpdateWithoutRestServiceInput, RestExternalApiSettingUncheckedUpdateWithoutRestServiceInput>
    create: XOR<RestExternalApiSettingCreateWithoutRestServiceInput, RestExternalApiSettingUncheckedCreateWithoutRestServiceInput>
    where?: RestExternalApiSettingWhereInput
  }

  export type RestExternalApiSettingUpdateToOneWithWhereWithoutRestServiceInput = {
    where?: RestExternalApiSettingWhereInput
    data: XOR<RestExternalApiSettingUpdateWithoutRestServiceInput, RestExternalApiSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestExternalApiSettingUpdateWithoutRestServiceInput = {
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restExternalApiParam?: RestExternalApiParamUpdateManyWithoutRestExternalApiNestedInput
  }

  export type RestExternalApiSettingUncheckedUpdateWithoutRestServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restExternalApiParam?: RestExternalApiParamUncheckedUpdateManyWithoutRestExternalApiNestedInput
  }

  export type RestAuthServiceSettingUpsertWithoutRestServiceInput = {
    update: XOR<RestAuthServiceSettingUpdateWithoutRestServiceInput, RestAuthServiceSettingUncheckedUpdateWithoutRestServiceInput>
    create: XOR<RestAuthServiceSettingCreateWithoutRestServiceInput, RestAuthServiceSettingUncheckedCreateWithoutRestServiceInput>
    where?: RestAuthServiceSettingWhereInput
  }

  export type RestAuthServiceSettingUpdateToOneWithWhereWithoutRestServiceInput = {
    where?: RestAuthServiceSettingWhereInput
    data: XOR<RestAuthServiceSettingUpdateWithoutRestServiceInput, RestAuthServiceSettingUncheckedUpdateWithoutRestServiceInput>
  }

  export type RestAuthServiceSettingUpdateWithoutRestServiceInput = {
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restAuthServiceParam?: RestAuthServiceParamUpdateManyWithoutRestAuthServiceSettingNestedInput
  }

  export type RestAuthServiceSettingUncheckedUpdateWithoutRestServiceInput = {
    id?: IntFieldUpdateOperationsInput | number
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restAuthServiceParam?: RestAuthServiceParamUncheckedUpdateManyWithoutRestAuthServiceSettingNestedInput
  }

  export type RestServiceCreateWithoutRestDatabaseSettingInput = {
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restExternalApiSetting?: RestExternalApiSettingCreateNestedOneWithoutRestServiceInput
    restAuthServiceSetting?: RestAuthServiceSettingCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceUncheckedCreateWithoutRestDatabaseSettingInput = {
    id?: number
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restExternalApiSetting?: RestExternalApiSettingUncheckedCreateNestedOneWithoutRestServiceInput
    restAuthServiceSetting?: RestAuthServiceSettingUncheckedCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceCreateOrConnectWithoutRestDatabaseSettingInput = {
    where: RestServiceWhereUniqueInput
    create: XOR<RestServiceCreateWithoutRestDatabaseSettingInput, RestServiceUncheckedCreateWithoutRestDatabaseSettingInput>
  }

  export type RestServiceUpsertWithoutRestDatabaseSettingInput = {
    update: XOR<RestServiceUpdateWithoutRestDatabaseSettingInput, RestServiceUncheckedUpdateWithoutRestDatabaseSettingInput>
    create: XOR<RestServiceCreateWithoutRestDatabaseSettingInput, RestServiceUncheckedCreateWithoutRestDatabaseSettingInput>
    where?: RestServiceWhereInput
  }

  export type RestServiceUpdateToOneWithWhereWithoutRestDatabaseSettingInput = {
    where?: RestServiceWhereInput
    data: XOR<RestServiceUpdateWithoutRestDatabaseSettingInput, RestServiceUncheckedUpdateWithoutRestDatabaseSettingInput>
  }

  export type RestServiceUpdateWithoutRestDatabaseSettingInput = {
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restExternalApiSetting?: RestExternalApiSettingUpdateOneWithoutRestServiceNestedInput
    restAuthServiceSetting?: RestAuthServiceSettingUpdateOneWithoutRestServiceNestedInput
  }

  export type RestServiceUncheckedUpdateWithoutRestDatabaseSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restExternalApiSetting?: RestExternalApiSettingUncheckedUpdateOneWithoutRestServiceNestedInput
    restAuthServiceSetting?: RestAuthServiceSettingUncheckedUpdateOneWithoutRestServiceNestedInput
  }

  export type RestExternalApiParamCreateWithoutRestExternalApiInput = {
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
  }

  export type RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
  }

  export type RestExternalApiParamCreateOrConnectWithoutRestExternalApiInput = {
    where: RestExternalApiParamWhereUniqueInput
    create: XOR<RestExternalApiParamCreateWithoutRestExternalApiInput, RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput>
  }

  export type RestExternalApiParamCreateManyRestExternalApiInputEnvelope = {
    data: RestExternalApiParamCreateManyRestExternalApiInput | RestExternalApiParamCreateManyRestExternalApiInput[]
  }

  export type RestServiceCreateWithoutRestExternalApiSettingInput = {
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restDatabaseSetting?: RestDatabaseSettingCreateNestedOneWithoutRestServiceInput
    restAuthServiceSetting?: RestAuthServiceSettingCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceUncheckedCreateWithoutRestExternalApiSettingInput = {
    id?: number
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restDatabaseSetting?: RestDatabaseSettingUncheckedCreateNestedOneWithoutRestServiceInput
    restAuthServiceSetting?: RestAuthServiceSettingUncheckedCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceCreateOrConnectWithoutRestExternalApiSettingInput = {
    where: RestServiceWhereUniqueInput
    create: XOR<RestServiceCreateWithoutRestExternalApiSettingInput, RestServiceUncheckedCreateWithoutRestExternalApiSettingInput>
  }

  export type RestExternalApiParamUpsertWithWhereUniqueWithoutRestExternalApiInput = {
    where: RestExternalApiParamWhereUniqueInput
    update: XOR<RestExternalApiParamUpdateWithoutRestExternalApiInput, RestExternalApiParamUncheckedUpdateWithoutRestExternalApiInput>
    create: XOR<RestExternalApiParamCreateWithoutRestExternalApiInput, RestExternalApiParamUncheckedCreateWithoutRestExternalApiInput>
  }

  export type RestExternalApiParamUpdateWithWhereUniqueWithoutRestExternalApiInput = {
    where: RestExternalApiParamWhereUniqueInput
    data: XOR<RestExternalApiParamUpdateWithoutRestExternalApiInput, RestExternalApiParamUncheckedUpdateWithoutRestExternalApiInput>
  }

  export type RestExternalApiParamUpdateManyWithWhereWithoutRestExternalApiInput = {
    where: RestExternalApiParamScalarWhereInput
    data: XOR<RestExternalApiParamUpdateManyMutationInput, RestExternalApiParamUncheckedUpdateManyWithoutRestExternalApiInput>
  }

  export type RestExternalApiParamScalarWhereInput = {
    AND?: RestExternalApiParamScalarWhereInput | RestExternalApiParamScalarWhereInput[]
    OR?: RestExternalApiParamScalarWhereInput[]
    NOT?: RestExternalApiParamScalarWhereInput | RestExternalApiParamScalarWhereInput[]
    id?: IntFilter<"RestExternalApiParam"> | number
    paramType?: StringNullableFilter<"RestExternalApiParam"> | string | null
    paramName?: StringNullableFilter<"RestExternalApiParam"> | string | null
    paramValue?: StringNullableFilter<"RestExternalApiParam"> | string | null
    restExternalApiRef?: IntFilter<"RestExternalApiParam"> | number
  }

  export type RestServiceUpsertWithoutRestExternalApiSettingInput = {
    update: XOR<RestServiceUpdateWithoutRestExternalApiSettingInput, RestServiceUncheckedUpdateWithoutRestExternalApiSettingInput>
    create: XOR<RestServiceCreateWithoutRestExternalApiSettingInput, RestServiceUncheckedCreateWithoutRestExternalApiSettingInput>
    where?: RestServiceWhereInput
  }

  export type RestServiceUpdateToOneWithWhereWithoutRestExternalApiSettingInput = {
    where?: RestServiceWhereInput
    data: XOR<RestServiceUpdateWithoutRestExternalApiSettingInput, RestServiceUncheckedUpdateWithoutRestExternalApiSettingInput>
  }

  export type RestServiceUpdateWithoutRestExternalApiSettingInput = {
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restDatabaseSetting?: RestDatabaseSettingUpdateOneWithoutRestServiceNestedInput
    restAuthServiceSetting?: RestAuthServiceSettingUpdateOneWithoutRestServiceNestedInput
  }

  export type RestServiceUncheckedUpdateWithoutRestExternalApiSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restDatabaseSetting?: RestDatabaseSettingUncheckedUpdateOneWithoutRestServiceNestedInput
    restAuthServiceSetting?: RestAuthServiceSettingUncheckedUpdateOneWithoutRestServiceNestedInput
  }

  export type RestServiceCreateWithoutRestAuthServiceSettingInput = {
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restDatabaseSetting?: RestDatabaseSettingCreateNestedOneWithoutRestServiceInput
    restExternalApiSetting?: RestExternalApiSettingCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceUncheckedCreateWithoutRestAuthServiceSettingInput = {
    id?: number
    persianName?: string | null
    latinName?: string | null
    httpMethod?: string | null
    restType?: string | null
    restDatabaseSetting?: RestDatabaseSettingUncheckedCreateNestedOneWithoutRestServiceInput
    restExternalApiSetting?: RestExternalApiSettingUncheckedCreateNestedOneWithoutRestServiceInput
  }

  export type RestServiceCreateOrConnectWithoutRestAuthServiceSettingInput = {
    where: RestServiceWhereUniqueInput
    create: XOR<RestServiceCreateWithoutRestAuthServiceSettingInput, RestServiceUncheckedCreateWithoutRestAuthServiceSettingInput>
  }

  export type RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput = {
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
  }

  export type RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
  }

  export type RestAuthServiceParamCreateOrConnectWithoutRestAuthServiceSettingInput = {
    where: RestAuthServiceParamWhereUniqueInput
    create: XOR<RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput>
  }

  export type RestAuthServiceParamCreateManyRestAuthServiceSettingInputEnvelope = {
    data: RestAuthServiceParamCreateManyRestAuthServiceSettingInput | RestAuthServiceParamCreateManyRestAuthServiceSettingInput[]
  }

  export type RestServiceUpsertWithoutRestAuthServiceSettingInput = {
    update: XOR<RestServiceUpdateWithoutRestAuthServiceSettingInput, RestServiceUncheckedUpdateWithoutRestAuthServiceSettingInput>
    create: XOR<RestServiceCreateWithoutRestAuthServiceSettingInput, RestServiceUncheckedCreateWithoutRestAuthServiceSettingInput>
    where?: RestServiceWhereInput
  }

  export type RestServiceUpdateToOneWithWhereWithoutRestAuthServiceSettingInput = {
    where?: RestServiceWhereInput
    data: XOR<RestServiceUpdateWithoutRestAuthServiceSettingInput, RestServiceUncheckedUpdateWithoutRestAuthServiceSettingInput>
  }

  export type RestServiceUpdateWithoutRestAuthServiceSettingInput = {
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restDatabaseSetting?: RestDatabaseSettingUpdateOneWithoutRestServiceNestedInput
    restExternalApiSetting?: RestExternalApiSettingUpdateOneWithoutRestServiceNestedInput
  }

  export type RestServiceUncheckedUpdateWithoutRestAuthServiceSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    persianName?: NullableStringFieldUpdateOperationsInput | string | null
    latinName?: NullableStringFieldUpdateOperationsInput | string | null
    httpMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restType?: NullableStringFieldUpdateOperationsInput | string | null
    restDatabaseSetting?: RestDatabaseSettingUncheckedUpdateOneWithoutRestServiceNestedInput
    restExternalApiSetting?: RestExternalApiSettingUncheckedUpdateOneWithoutRestServiceNestedInput
  }

  export type RestAuthServiceParamUpsertWithWhereUniqueWithoutRestAuthServiceSettingInput = {
    where: RestAuthServiceParamWhereUniqueInput
    update: XOR<RestAuthServiceParamUpdateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedUpdateWithoutRestAuthServiceSettingInput>
    create: XOR<RestAuthServiceParamCreateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedCreateWithoutRestAuthServiceSettingInput>
  }

  export type RestAuthServiceParamUpdateWithWhereUniqueWithoutRestAuthServiceSettingInput = {
    where: RestAuthServiceParamWhereUniqueInput
    data: XOR<RestAuthServiceParamUpdateWithoutRestAuthServiceSettingInput, RestAuthServiceParamUncheckedUpdateWithoutRestAuthServiceSettingInput>
  }

  export type RestAuthServiceParamUpdateManyWithWhereWithoutRestAuthServiceSettingInput = {
    where: RestAuthServiceParamScalarWhereInput
    data: XOR<RestAuthServiceParamUpdateManyMutationInput, RestAuthServiceParamUncheckedUpdateManyWithoutRestAuthServiceSettingInput>
  }

  export type RestAuthServiceParamScalarWhereInput = {
    AND?: RestAuthServiceParamScalarWhereInput | RestAuthServiceParamScalarWhereInput[]
    OR?: RestAuthServiceParamScalarWhereInput[]
    NOT?: RestAuthServiceParamScalarWhereInput | RestAuthServiceParamScalarWhereInput[]
    id?: IntFilter<"RestAuthServiceParam"> | number
    paramType?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    paramName?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    paramValue?: StringNullableFilter<"RestAuthServiceParam"> | string | null
    restAuthServiceSettingRef?: IntFilter<"RestAuthServiceParam"> | number
  }

  export type RestAuthServiceSettingCreateWithoutRestAuthServiceParamInput = {
    authServiceUrl?: string | null
    authMethod?: string | null
    restService: RestServiceCreateNestedOneWithoutRestAuthServiceSettingInput
  }

  export type RestAuthServiceSettingUncheckedCreateWithoutRestAuthServiceParamInput = {
    id?: number
    authServiceUrl?: string | null
    authMethod?: string | null
    restServiceRef: number
  }

  export type RestAuthServiceSettingCreateOrConnectWithoutRestAuthServiceParamInput = {
    where: RestAuthServiceSettingWhereUniqueInput
    create: XOR<RestAuthServiceSettingCreateWithoutRestAuthServiceParamInput, RestAuthServiceSettingUncheckedCreateWithoutRestAuthServiceParamInput>
  }

  export type RestAuthServiceSettingUpsertWithoutRestAuthServiceParamInput = {
    update: XOR<RestAuthServiceSettingUpdateWithoutRestAuthServiceParamInput, RestAuthServiceSettingUncheckedUpdateWithoutRestAuthServiceParamInput>
    create: XOR<RestAuthServiceSettingCreateWithoutRestAuthServiceParamInput, RestAuthServiceSettingUncheckedCreateWithoutRestAuthServiceParamInput>
    where?: RestAuthServiceSettingWhereInput
  }

  export type RestAuthServiceSettingUpdateToOneWithWhereWithoutRestAuthServiceParamInput = {
    where?: RestAuthServiceSettingWhereInput
    data: XOR<RestAuthServiceSettingUpdateWithoutRestAuthServiceParamInput, RestAuthServiceSettingUncheckedUpdateWithoutRestAuthServiceParamInput>
  }

  export type RestAuthServiceSettingUpdateWithoutRestAuthServiceParamInput = {
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restService?: RestServiceUpdateOneRequiredWithoutRestAuthServiceSettingNestedInput
  }

  export type RestAuthServiceSettingUncheckedUpdateWithoutRestAuthServiceParamInput = {
    id?: IntFieldUpdateOperationsInput | number
    authServiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    authMethod?: NullableStringFieldUpdateOperationsInput | string | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestExternalApiSettingCreateWithoutRestExternalApiParamInput = {
    baseUrl?: string | null
    hasAuth?: boolean | null
    restService: RestServiceCreateNestedOneWithoutRestExternalApiSettingInput
  }

  export type RestExternalApiSettingUncheckedCreateWithoutRestExternalApiParamInput = {
    id?: number
    baseUrl?: string | null
    hasAuth?: boolean | null
    restServiceRef: number
  }

  export type RestExternalApiSettingCreateOrConnectWithoutRestExternalApiParamInput = {
    where: RestExternalApiSettingWhereUniqueInput
    create: XOR<RestExternalApiSettingCreateWithoutRestExternalApiParamInput, RestExternalApiSettingUncheckedCreateWithoutRestExternalApiParamInput>
  }

  export type RestExternalApiSettingUpsertWithoutRestExternalApiParamInput = {
    update: XOR<RestExternalApiSettingUpdateWithoutRestExternalApiParamInput, RestExternalApiSettingUncheckedUpdateWithoutRestExternalApiParamInput>
    create: XOR<RestExternalApiSettingCreateWithoutRestExternalApiParamInput, RestExternalApiSettingUncheckedCreateWithoutRestExternalApiParamInput>
    where?: RestExternalApiSettingWhereInput
  }

  export type RestExternalApiSettingUpdateToOneWithWhereWithoutRestExternalApiParamInput = {
    where?: RestExternalApiSettingWhereInput
    data: XOR<RestExternalApiSettingUpdateWithoutRestExternalApiParamInput, RestExternalApiSettingUncheckedUpdateWithoutRestExternalApiParamInput>
  }

  export type RestExternalApiSettingUpdateWithoutRestExternalApiParamInput = {
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restService?: RestServiceUpdateOneRequiredWithoutRestExternalApiSettingNestedInput
  }

  export type RestExternalApiSettingUncheckedUpdateWithoutRestExternalApiParamInput = {
    id?: IntFieldUpdateOperationsInput | number
    baseUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hasAuth?: NullableBoolFieldUpdateOperationsInput | boolean | null
    restServiceRef?: IntFieldUpdateOperationsInput | number
  }

  export type RestExternalApiParamCreateManyRestExternalApiInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
  }

  export type RestExternalApiParamUpdateWithoutRestExternalApiInput = {
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestExternalApiParamUncheckedUpdateWithoutRestExternalApiInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestExternalApiParamUncheckedUpdateManyWithoutRestExternalApiInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestAuthServiceParamCreateManyRestAuthServiceSettingInput = {
    id?: number
    paramType?: string | null
    paramName?: string | null
    paramValue?: string | null
  }

  export type RestAuthServiceParamUpdateWithoutRestAuthServiceSettingInput = {
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestAuthServiceParamUncheckedUpdateWithoutRestAuthServiceSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RestAuthServiceParamUncheckedUpdateManyWithoutRestAuthServiceSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    paramType?: NullableStringFieldUpdateOperationsInput | string | null
    paramName?: NullableStringFieldUpdateOperationsInput | string | null
    paramValue?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}