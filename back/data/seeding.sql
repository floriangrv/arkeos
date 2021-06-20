BEGIN;

INSERT INTO "theme" ("name", "color") VALUES 
    ('Soins et pathologies', '#FFAEBC'),
    ('Terrarium', '#FFE9E4'),
    ('Alimentation', '#FBE7C6'),
    ('Génétique', '#A0E7E5'),
    ('Anatomie et biologie', '#F51720'),
    ('Législation', '#FFB067'),
    ('Biotope et histoire naturelle', '#FA26A0');

INSERT INTO "category" ("name") VALUES
    ('Lézards'),
    ('Grenouilles'),
    ('Serpents'),
    ('Tortues');

INSERT INTO "user" ("username", "email", "password", "city", "presentation") VALUES
    ('Kévin', 'kev@gmail.com', 'kevpass', 'dieppe', 'J''adore les pogonas !'),
    ('FloRiLezard', 'flo@gmail.com', 'flopass', 'nancy', 'J''aime les reptiles <3'),
    ('Jean', 'jean@gmail.fr', 'jeanpass', 'paris', ''),
    ('NicoRobin', 'nico@gmail.fr', 'nicopass', 'lille', 'Professionnel et éleveur de tortues Aldabrachelys gigantea sur Lille'),
    ('Paul', 'paul@gmail.com', 'paulpass', 'paris', 'Débutant dans la térariophilie'),
    ('Philipe', 'philipe@gmail.com', 'pommepass', 'lille', ''),
    ('Mohamed', 'momo@gmail.fr', 'momopass', 'rouen', 'Dompteur de cobra et formateur'),
    ('BronzeRaptor', 'bron@gmail.com', 'bronpass', 'paris', 'Je suis une personne très créative. J''aime faire de la musique et je suis aussi photographe pour reptiles.'),
    ('SteakThe', 'steack@gmail.com', 'steakpass', 'marseille', 'J''aime les reptiles, particulièrement les Basiliscus plumifrons'),
    ('CrazyRep', 'rep@gmail.fr', 'reppass', 'paris', 'Fous de reptile depuis tout petit, je n''en possède pas encore, mes parents n''en veulent pas :/'),
    ('FrenchLez', 'french@gmail.fr', 'frenchpass', 'lille', 'Amateur de reptiles'),
    ('LaurentDu75', 'laurent@gmail.com', 'laurentpass', 'paris', 'Débutant dans la térariophilie, je cherche actuellement à acquerir un couple de Gecko'),
    ('Johana', 'johana@gmail.com', 'jopass', 'nantes', 'J''aimerais apprendre à m''occuper d''un terrarium et de petites tortues marine.'),
    ('MattPogonas', 'pogo@gmail.fr', 'pogopass', 'paris', '10 ans de pratique dans lézards martiaux !'),
    ('OlivierVaran', 'oliv@gmail.com', 'olivpass', 'grenoble', 'Je tiens une association de térariophilie, n''hésitez pas à me contacter en cas de questions !'),
    ('SylvieVaran', 'syl@gmail.com', 'sylpass', 'grenoble', 'J''aime les reptiles, et j''aide mon chérie dans cette noble quête'),
    ('GodzillaGren', 'god@gmail.fr', 'godpass', 'paris', ''),
    ('DCGecko', 'geck@gmail.fr', 'geckpass', 'marseille', 'Professionnel dans la vente d''animaux'),
    ('Pierre33', 'pierre@gmail.com', 'pierrepass', 'bordeaux', 'Débutant dans la térariophilie, depuis cet été'),
    ('LauRaptor', 'laura@gmail.com', 'laurapass', 'lille', ''),
    ('RepVador', 'vador@gmail.fr', 'vadorpass', 'rouen', 'Venez découvrir le coté obscure de la force reptilienne !'),
    ('Lila', 'lila@gmail.com', 'lilapass', 'paris', 'Éleveuse d''anaconda dans le 16ème');


INSERT INTO "species" ("number", "genre", "species", "user_id") VALUES
    ('0.2.1', 'Testudo', 'hermanni', 1),
    ('1.2.3', 'Brachylophus', 'fasciatus', 2),
    ('4.2.1', 'Phyllurus', 'platurus', 5),
    ('1.1.0', 'Rana', 'brama', 6),
    ('0.2.1', 'Sanguirana', 'sanguinea', 4),
    ('1.3.3', 'Hypsiboas', 'faber', 4),
    ('0.2.1', 'Cyclura', 'lewisi', 4),
    ('1.0.3', 'Hebius', 'monticola', 2),
    ('0.2.1', 'Drymarchon', 'corais', 8),
    ('1.4.0', 'Loxocemus', 'bicolor', 10),
    ('2.0.5', 'Podarcis', 'muralis', 14);

INSERT INTO "marketplace" ("scientific_name", "born_captivity", "price", "native_country", "birth_date", "content", "author_id", "category_id") VALUES
    ('Afroedura amatolica', true, 245.50, 'France', '1998-06-03',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 1, 1),

    ('Pseudogonatodes gasconi', false, 999.99, 'Papouasie-Nouvelle-Guinée', '2001-04-18', 
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 2, 1),

    ('Delma butleri', true, 50, 'Mexique', '2021-06-10', 
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 3, 3),

    ('Pseudotrapelus sinaitus', true, 445.50, 'France', '2016-08-03',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 4, 1),

    ('Anatololacerta anatolica', true, 599.99, 'Papouasie-Nouvelle-Guinée', '2008-03-28',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 5, 1),

    ('Rana brama', true, 50, 'Italie', '2021-01-18',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 6, 2),

    ('Sanguirana sanguinea', true, 75, 'France', '2019-05-23',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 7, 2),

    ('Dryopsophus aureus', false, 150, 'Espagne', '2021-04-18',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 8, 2),

    ('Hypsiboas faber', true, 22, 'France', '2020-12-10',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 9, 2),

    ('Psammobates geometricus', true, 24504.50, 'Afrique Du Sud', '2005-07-27',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 10, 4),

    ('Hydromedusa tectifera', false, 1269.45, ' Paraguay', '2009-01-17',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 11, 4),

    ('Testudines chelydra', true, 540, 'États-Unis', '2018-03-10',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 12, 4),

    ('Imantodes cenchoa', true, 780, 'Mexique', '2017-06-10',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 3, 3),

    ('Bitis gabonica', true, 925.50, 'France', '2018-08-03',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 4, 3),

    ('Python curtus', false, 678, 'Japon', '2020-09-25',
    'Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.', 4, 3);
    
INSERT INTO "badge" ("name", "picture") VALUES
    ('Débutant', './img/badge/debutant.png'),
    ('Maître', './img/badge/master.png'),
    ('Pro', './img/badge/pro.png'),
    ('Amateur', './img/badge/amateur.png');

INSERT INTO "question" ("title", "content", "author_id", "theme_id", "category_id") VALUES
    ('Comment faire :/', 'Help me please !!!!', 1, 1, 1),
    ('Oh non pas ma tortue :(', 'Je crois que blablabla', 2, 2, 2),
    ('Bonjour jai une question', 'Bravo le seeding qui a merder parce que j avais oublier celle-ci :/',1, 1, 1);

INSERT INTO "response" ("content", "author_id", "question_id") VALUES
    ('Je crois que peut-être non', 3, 1),
    ('Elle est vivante du coup ?', 2, 2),
    ('Il faut faire comme ça !', 1, 1),
    ('je rêve ou je répond à ma propre question o_O', 1, 1);

INSERT INTO "article" ("title", "content", "breeding_sheet", "author_id", "category_id", "theme_id") VALUES
    ('Iguana iguana', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar arcu et libero finibus, a sollicitudin nibh iaculis. 
    Maecenas sed purus pharetra, mollis nibh at, egestas sapien. Suspendisse in eros eget sapien finibus tristique nec consequat velit. 
    Nam cursus volutpat dignissim. Integer id elementum enim, in malesuada lectus. Nulla nec tempus dui. Ut sit amet vulputate felis, vel condimentum nibh. 
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
    Ut ornare justo vulputate mauris bibendum, ornare fringilla odio vehicula. Fusce at interdum sapien. 
    Aliquam consequat a enim gravida ultricies. Pellentesque quam orci, interdum ut tincidunt vel, convallis eu lorem. 
    Integer id dolor rhoncus, ornare nisi et, pellentesque felis. Nulla elementum eu diam iaculis vehicula.

    Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 4, 1, null),


    ('La dysecdysis chez les serpents', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 1, 3, 1),


    ('La stomatite chez les cobras', 'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 4, 3, 1),


    ('Testudo hermanni', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 1, 2, null),


    ('La septicémie chez les tortues', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 1, 4, 1),


    ('Prévenir les fractures de la carapace', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 4, 4, 1),


    ('Alimentation des tortues terrestres', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 10, 4, 3),


    ('Quelle fleur mange les tortues', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 7, 4, 3),


    ('Les bases de la génétique chez les Boas', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 4, 3, 4),


    ('Les gènes récessifs chez la grenouilles', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.', false, 12, 2, 4),


    ('Quel terrarium choisir pour un premier serpent ?', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 2, 3, 2),


    ('Quel chauffage pour des tortues ?', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 4, 4, 2),


    ('Quel antiparasites pour lézards utilisé ?', 
    'Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 6, 1, 1),


    ('Le Boa constrictor', 
    'Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 7, 3, null),


    ('Le Python molurus', 'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 4, 3, null),


    ('La Dryopsophus aureus', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 2, 2, null),


    ('La Trachemys scripta elegans', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 4, 4, null),


    ('L''Eublepharis macularius', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 1, 1, null),


    ('l''Oedodera marmorata', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', true, 8, 1, null),


    ('Le biotope du Timon lepidus', 
    'Praesent facilisis et augue ac dictum. Fusce eu dui quis ligula tempor feugiat. Vestibulum aliquet velit vitae urna ullamcorper suscipit. 
    Aenean sit amet odio risus. Aliquam ultrices rutrum elit vel commodo. Fusce eleifend semper urna. Nullam bibendum leo quis auctor rutrum. 
    Sed turpis eros, faucibus vitae pharetra vel, efficitur vitae metus. Nulla vel lorem placerat, elementum libero in, faucibus ipsum. 
    Vestibulum cursus elementum convallis.

    Pellentesque quis ante odio. Sed purus magna, commodo ut scelerisque id, eleifend ut sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Praesent molestie vel enim ac dignissim. Etiam vitae mollis orci. Aliquam dictum ipsum non dolor semper, sed laoreet orci pharetra. 
    Maecenas ex felis, pellentesque quis tortor et, facilisis interdum massa. Aenean pulvinar justo orci, interdum hendrerit justo bibendum id. 
    In hendrerit commodo risus, a facilisis lorem elementum et. Etiam sed iaculis risus. Vestibulum finibus mattis erat, quis feugiat quam condimentum dignissim. 
    Sed quis commodo nisl. Nunc ex lacus, aliquet in sem a, convallis rhoncus risus. Nullam eu turpis erat. 
    Suspendisse dui sem, mollis pretium enim ac, ultricies rhoncus turpis.

    Nullam a diam et massa tincidunt accumsan non vel nisi. Aliquam mollis nisl vestibulum varius suscipit. 
    Fusce vitae urna et mauris gravida dignissim mattis eu purus. Maecenas tristique velit sapien, eu tincidunt risus malesuada ut. 
    Duis dolor quam, hendrerit a sapien eu, scelerisque ultricies purus. Sed id est vel enim convallis bibendum. Nulla facilisi. 
    Aliquam turpis lectus, mattis nec tincidunt in, vulputate sit amet dolor. Vivamus quis nunc porttitor neque congue finibus.

    Vivamus ac arcu vel ante ultricies interdum sed non diam. Sed et euismod ante, a egestas sapien. Morbi auctor magna diam, ac porta felis dapibus et. 
    Suspendisse a quam a dui imperdiet sollicitudin. 
    Integer bibendum, mauris at luctus pulvinar, elit sapien vestibulum nulla, quis semper lacus lorem sit amet velit. 
    Mauris luctus augue vel justo ultrices dapibus. Nunc mi mi, pellentesque eu libero non, euismod pulvinar nunc. 
    Vivamus in sapien scelerisque, lobortis lorem non, feugiat mi. Nulla eu nibh sit amet dolor vulputate faucibus a eu diam. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.', false, 9, 1, 7);

INSERT INTO "photo" ("location", "url_picture", "article_id", "author_id") VALUES
    ('article', './img/article/img1.png', 1, 1),
    ('article', './img/article/img2.png', 1, 1),
    ('article', './img/article/img3.png', 2, 2),
    ('article', './img/article/img4.png', 2, 2),
    ('article', './img/article/img5.png', 3, 3),
    ('article', './img/article/img6.png', 2, 2),
    ('article', './img/article/img7.png', 3, 3);

INSERT INTO "message" ("content", "receiver_id", "sender_id") VALUES
    ('Salut mec !', 1, 2),
    ('Bonjour bonjour !', 2, 4),
    ('La forme nico ?', 2, 4),
    ('Hello word', 1, 4);

INSERT INTO "comment" ("content", "author_id", "article_id") VALUES
    ('Pas mal ton article !', 3, 3),
    ('Pas mal ton article !', 2, 2),
    ('Pas mal ton article !', 1, 1),
    ('Pas mal ton article !', 2, 2),
    ('Moi je le trouve pas ouf du tout :/', 3, 3),
    ('Moi je le trouve pas ouf du tout :/', 2, 2),
    ('Moi je le trouve pas ouf du tout :/', 1, 1),
    ('Moi je le trouve pas ouf du tout :/', 1, 1),
    ('Super ton article !', 5, 2),
    ('J aime beaucoup le titre de ton article, c est original :p', 1, 1),
    ('J aime beaucoup le titre de ton article, c est original :p', 2, 2),
    ('J aime beaucoup le titre de ton article, c est original :p', 3, 3),
    ('J aime beaucoup le titre de ton article, c est original :p', 3, 3);

-- Tables de liaison --

INSERT INTO "article_rating" ("article_id", "user_id", "rating") VALUES
    (3, 1, -1),
    (1, 2, 1),
    (1, 3, -1),
    (1, 4, 1),
    (1, 1, 1),
    (3, 2, -1),
    (3, 3, -1),
    (2, 4, -1),
    (4, 8, 1),
    (4, 9, 1),
    (4, 10, 1),
    (4, 11, 1),
    (6, 2, -1),
    (9, 3, 1),
    (8, 4, -1),
    (7, 1, 1);

INSERT INTO "response_rating" ("response_id", "user_id", "rating") VALUES
    (1, 2, -1),
    (1, 3, -1),
    (2, 1, 1);

INSERT INTO "wishlist" ("marketplace_id", "user_id") VALUES
    (1, 2),
    (1, 3),
    (2, 1);

INSERT INTO "user_has_badge" ("user_id", "badge_id") VALUES
    (1, 4),
    (2, 3),
    (3, 3),
    (4, 3);

-- fin des tables de liaisons --

COMMIT;