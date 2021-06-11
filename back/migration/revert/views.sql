-- Revert arkeos:views from pg

BEGIN;

DROP VIEW "article_without_breeder";

COMMIT;
