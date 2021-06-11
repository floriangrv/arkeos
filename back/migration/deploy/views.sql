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


JOIN "user" ON "user"."id" = "article"."author_id"
JOIN "theme" ON "theme"."id" = "article"."theme_id"
JOIN "category" ON "category"."id" = "article"."category_id"
JOIN "article_rating" ON "article_rating"."article_id" = "article"."id"

WHERE "article"."breeding_sheet"='false'
GROUP BY "article"."id", "user"."id", "theme"."id", "category"."id" ;



COMMIT;