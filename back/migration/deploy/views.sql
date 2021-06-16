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


-- vue pour les membres (user)

CREATE VIEW "public"."user_view" AS
SELECT
    DISTINCT
    "user"."id",
    "user"."username",
    "user"."city",
    "user"."country",
    "user"."presentation",
    "user"."profile_picture",
    "user"."created_at",
    "marketplace"."id" AS "id_market",
    "marketplace"."scientific_name" AS "animal",
    "marketplace"."price" AS "price",
    "species"."number",
    "species"."genre",
    "species"."species",
    "badge"."name" AS "badge",
    "badge"."picture" AS "url_badge"

FROM "user"

FULL JOIN "marketplace" ON "user"."id" = "marketplace"."author_id"
FULL JOIN "species" ON "user"."id" = "species"."user_id"
FULL JOIN "user_has_badge" ON "user"."id" = "user_has_badge"."user_id"
FULL JOIN "badge" ON "user_has_badge"."user_id" = "badge"."id"

GROUP BY "user"."id", "marketplace"."id", "species"."id", "badge"."id";

-- vue pour afficher tout les badges

CREATE VIEW "public"."user_badge_view" AS
SELECT
    DISTINCT
    "user"."id",
    "badge"."name" AS "badge",
    "badge"."picture" AS "url_badge"

FROM "user"

FULL JOIN "user_has_badge" ON "user"."id" = "user_has_badge"."user_id"
FULL JOIN "badge" ON "user_has_badge"."user_id" = "badge"."id"

GROUP BY "user"."id", "badge"."id";

COMMIT;