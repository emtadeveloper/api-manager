-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "username" TEXT,
    "password" TEXT
);

-- CreateTable
CREATE TABLE "database_settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "db_type" TEXT,
    "db_server" TEXT,
    "db_port" TEXT,
    "db_username" TEXT,
    "db_password" TEXT,
    "db_name" TEXT
);

-- CreateTable
CREATE TABLE "rest_services" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "persian_name" TEXT,
    "latin_name" TEXT,
    "http_method" TEXT,
    "rest_type" TEXT
);

-- CreateTable
CREATE TABLE "rest_database_settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "db_type" TEXT,
    "db_server" TEXT,
    "db_port" TEXT,
    "db_username" TEXT,
    "db_password" TEXT,
    "db_name" TEXT,
    "db_view_name" TEXT,
    "rest_service_ref" INTEGER NOT NULL,
    CONSTRAINT "rest_database_settings_rest_service_ref_fkey" FOREIGN KEY ("rest_service_ref") REFERENCES "rest_services" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rest_external_api_settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "base_url" TEXT,
    "has_auth" BOOLEAN,
    "rest_service_ref" INTEGER NOT NULL,
    CONSTRAINT "rest_external_api_settings_rest_service_ref_fkey" FOREIGN KEY ("rest_service_ref") REFERENCES "rest_services" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rest_auth_service_settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "auth_service_url" TEXT,
    "rest_service_ref" INTEGER NOT NULL,
    CONSTRAINT "rest_auth_service_settings_rest_service_ref_fkey" FOREIGN KEY ("rest_service_ref") REFERENCES "rest_services" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rest_auth_service_param" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "param_type" TEXT,
    "param_name" TEXT,
    "param_value" TEXT,
    "rest_auth_service_ref" INTEGER NOT NULL,
    CONSTRAINT "rest_auth_service_param_rest_auth_service_ref_fkey" FOREIGN KEY ("rest_auth_service_ref") REFERENCES "rest_auth_service_settings" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "rest_external_api_param" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "param_type" TEXT,
    "param_name" TEXT,
    "param_value" TEXT,
    "rest_external_api_ref" INTEGER NOT NULL,
    CONSTRAINT "rest_external_api_param_rest_external_api_ref_fkey" FOREIGN KEY ("rest_external_api_ref") REFERENCES "rest_external_api_settings" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "rest_services_latin_name_key" ON "rest_services"("latin_name");

-- CreateIndex
CREATE UNIQUE INDEX "rest_database_settings_rest_service_ref_key" ON "rest_database_settings"("rest_service_ref");

-- CreateIndex
CREATE UNIQUE INDEX "rest_external_api_settings_rest_service_ref_key" ON "rest_external_api_settings"("rest_service_ref");

-- CreateIndex
CREATE UNIQUE INDEX "rest_auth_service_settings_rest_service_ref_key" ON "rest_auth_service_settings"("rest_service_ref");
