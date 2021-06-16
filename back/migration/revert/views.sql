-- Revert arkeos:views from pg

BEGIN;

DROP VIEW "article_without_breeder", "marketplace_view", "user_view", "user_badge_view";

COMMIT;
