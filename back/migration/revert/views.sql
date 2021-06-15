-- Revert arkeos:views from pg

BEGIN;

DROP VIEW "article_without_breeder", "marketplace_view";

COMMIT;
