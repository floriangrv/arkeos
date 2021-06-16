-- Deploy arkeos:views to pg

BEGIN;

-- vue qui permet de voir tout les articles sans les fiches d'élevage, avec toutes les infos utile

CREATE VIEW "public"."article_without_breeder" AS
SELECT
    "article"."id",
    "article"."title",
    "article"."content",
    "article"."created_at",
    "article"."updated_at",
    "user"."username" AS "author",
    "theme"."name" AS "theme_name",
    "theme"."color" AS "theme_color",
    "category"."name" AS "category_name",
    SUM("article_rating"."rating") "rating"

FROM "article"

FULL JOIN "user" ON "user"."id" = "article"."author_id"
FULL JOIN "theme" ON "theme"."id" = "article"."theme_id"
FULL JOIN "category" ON "category"."id" = "article"."category_id"
FULL JOIN "article_rating" ON "article_rating"."article_id" = "article"."id"

WHERE "article"."breeding_sheet"='false'
GROUP BY "article"."id", "user"."id", "theme"."id", "category"."id";


-- vue pour la marketplace

CREATE VIEW "public"."marketplace_view" AS
SELECT
    "marketplace"."id",
    "marketplace"."scientific_name",
    "marketplace"."locality",
    "marketplace"."phase",
    "marketplace"."born_captivity",
    "marketplace"."price",
    "marketplace"."native_country",
    "marketplace"."birth_date",
    "marketplace"."content",
    "marketplace"."created_at",
    "marketplace"."updated_at",
    "user"."username" AS "author",
    "category"."name" AS "category_name"

FROM "marketplace"

JOIN "user" ON "user"."id" = "marketplace"."author_id"
JOIN "category" ON "category"."id" = "marketplace"."category_id";

COMMIT;