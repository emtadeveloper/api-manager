-- Seed the initial administrator account used by the frontend login form.
-- Keep this migration idempotent so it is safe to run against existing databases.
INSERT INTO "users" ("firstName", "lastName", "username", "password")
SELECT 'مدیر', 'سیستم', 'admin@rasan.com', 'scrypt$a4926dd15e4898f648b8a958db13b956$bae6f75e550806d58058ea5d385f871678a6617d7229ee86308960024709744cbc9cd0a8ec3f685d1b390a5cd796e33665c1f3b3aa280a37fdb6068df964d5e2'
WHERE NOT EXISTS (
  SELECT 1
  FROM "users"
  WHERE LOWER("username") = LOWER('admin@rasan.com')
);
