-- Deploy arkeos:init to pg

BEGIN;
     
DROP TABLE "user_has_badge", 
    "wishlist", 
    "response_rating", 
    "article_rating", 
    "message",
    "comment",
    "photo",
    "article",
    "response",
    "question",
    "badge",
    "species",
    "marketplace",
    "user",
    "category",
    "theme";

   

COMMIT;