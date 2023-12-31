'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1592ba1661de0e2b9b2888a9dc41ad16",
"index.html": "274dc529df0b3e56d683142062c9091b",
"/": "274dc529df0b3e56d683142062c9091b",
"main.dart.js": "5cdfdb86146fd4900658f927125e2633",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d2f7aa993ac6f9b44bddd3adfb1e08fb",
".git/config": "c980768d7fa79d23036a7048204dcd99",
".git/objects/61/dfc0ad664308ef83c9205f44a1010187106f0d": "9d2044790538c9b0d93d4e15cbbe9b19",
".git/objects/59/90181b33d8882de13af1483a5ae3acd5cfd227": "711c5a6d1bc0d3b31b5a0d15a76f17a4",
".git/objects/66/f796e3fa92b2c8c5b4cc0846ac5d0b420138bd": "c23583ed6eb72297fd004a06da1d6b50",
".git/objects/3b/fd3ce5471c36a72e8eed2dde54a530dd605941": "67b437b78774054853a5365c46251bd7",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/fd3ad9c8f91d7fa0573387641045b664446898": "a50b8b6fc20f990642a591aa3eff1d22",
".git/objects/3c/2ec5d1cc9efaf4af4928beb55cc4f73f0c91a1": "9303f9b5c4402451e332e1cb00e92a0d",
".git/objects/3c/c0909e10e871bf0ee025f34393f7b83d411079": "e54912840842fe17820bc8c70bb7dc42",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/94/3f8b9cd0f2b3b3bfce9b948221b668d1513d69": "321834c7c7cbbdad80ad5c772ef241e6",
".git/objects/5f/2b8b6569cd4c14c6c869eb7dc219339d5395a5": "d64bd17c89eeb16dbbe0d991f99a39db",
".git/objects/a3/dc0003e89fd1af1437e4e52fca850ea6721ec1": "1cfacc24e5c1c912bf2d7792ced3d6d1",
".git/objects/a3/7ba5f70fbb22b7e17d6ff9b59c5b8b81ef4a25": "2dd10234a902615a629aa6cb305a69da",
".git/objects/d9/7a7ebb53c114d6d82ef01ceb964a3a7eff023a": "b295306e83d880f00e0c43b58b79aae7",
".git/objects/ad/d4662b01c21479ac10ba042fe12217ad0fec44": "0fee231f02dbcdf8e49b12342b3a5dc1",
".git/objects/ad/dae08553bcf7d0957f49aac385554f828dad03": "6bea8d041181521fa0cc97e8862e608d",
".git/objects/d0/3acf68c31863248eb38c188624288e92d49e79": "5f56aea53fbe169962f759f531dc5215",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/85b9a513903a36731a5958088593282334f3cf": "8a55521ef388ca3b0cf9a74d74e864d1",
".git/objects/be/8229aa21c93c7e16a3673625ebcd8ea3c4ea04": "f343fbf66ed96c751f817e6f15ad02f5",
".git/objects/df/31420d5dffd6854ae9a26083450f12ec20b0dd": "fc7f8df252a505ba2a3d7257fe342f35",
".git/objects/df/0ee2dbce52bbed01b56fff0ef4f048a7c71b6f": "6b7813243b19b9f3cb7753361b0da27a",
".git/objects/da/01e1beea47ec7f78d55d2b623b534b5b87a0d8": "de78234aa66971ef127dd98fdae5db1a",
".git/objects/da/d20c1c985fcb435560c60cd7ad06302e1304cf": "03a00fad0677f8d8f8c82d1fdc38d99d",
".git/objects/bd/90c0cadf2d217c95e12895dad8b693f9b1ee5f": "c9667ebfb2a79b66f3d5a7f9f3877e84",
".git/objects/d6/e5b7a96379bfdabaf1b87da68b31113ab36a77": "43cbccc87844ff3ccba5f5f98adc1b06",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f1b332d8ee233c7a7f0935088f7c065384da88": "cefb74ab629eec9d8d2c3b7929396104",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/f5/b3d45611cdfeeb8c8d9eeb67c843dae5873c82": "c244003a6c8d71af923db5ebbd31015c",
".git/objects/e4/1f4a62791c727b8c22c74864d4fc254d2a810f": "570271697ff5bad515a2aaff67f2b7cb",
".git/objects/c6/04ff3377c8c170e49e5d0faf733fd988be1a99": "08cd4d9fa70a89497648bb9e12bd1887",
".git/objects/27/118e700bf1f474ad53d70d8b504e060480f249": "092d11fc8ab3ca086076094eb816c06c",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/29/48163dd19a569e7f6359e60b63f38f9e5b2298": "ae109733e9d05cc879d1f13b2b599b87",
".git/objects/7c/585277607d10efa3fd81e0cd150fb6b6a09e52": "80d1915e5e931eccf658eec0aa70ce83",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/16/7a6d8f7c61f57a22fd0452ba3099a6527f7bf4": "3681a60223eea1308ee441865b66577c",
".git/objects/73/2403b8f2e5ed0cebd18ee39f3bcac8310a7cdb": "3396357096b6df58e85e50746bf730b2",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/fc62f66754861cbacc95cf82d2f29ae95bab71": "e4c065d944333dd9a773e94ffa2f57c4",
".git/objects/87/f25aa672cbea98251fea49a1e09193d0f2433f": "8fdc49c15fc5e38e98bee295c777792f",
".git/objects/74/2291a3da81a96bc034f503e81fd8fc8cd9af96": "f41727ccb091b239401295edf14fc275",
".git/objects/1a/e4c29c93a97db8f8415f77a19fcfcf8ccb6a7d": "e147484d5428fb803fd07e35dcfdb098",
".git/objects/28/8cce6470ec1906f5953f0490ccdb0c2b747d09": "5aeff160c1b845f25c2c45c630648c56",
".git/objects/7b/fb85e10ff3dd51770a96115bb3fa4a3ebf37b2": "92bbe41031ea1ccf140dec9680903a9a",
".git/objects/7b/cdf6c11e99bf25d09b61d4a68783222a869cd0": "ec2340abbed63844ad3568073ea08a4d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/3516c0370bfbd02ed9614c49601ec95d91aea3": "6470b9ba531d0d8d10b2639f9febf3fb",
".git/objects/4c/d8e55871bb3bd5792b23469721cdda3fe4891a": "ba6bc2aea2ba0ecfb78acfdaf0c5648d",
".git/objects/21/fb96a02134bd2c360855e906764cd785844376": "de8762ea731b9ef083d97ba6970d91ee",
".git/objects/4d/e41807c02de227c1464338852038bf193bb66e": "0381567052c3b8ae6de8e532b20e2aa9",
".git/objects/81/86dcc4044866b6c88299434529fe9e053b0e0e": "553457f43a275b544e10674ff9a4e7a9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/b1ceec01e552a492360c008654615a0eaa695a": "d39f1df4302be151ba5bca9b9c5a347d",
".git/objects/00/98ec25dd43d242dddfc2973d4890cdccd5715c": "24cfb450395213ae216f3a7f1f3cecdc",
".git/objects/00/73b2274aba24e4f759e99a6faccc586f26c09c": "f410fde738b60a954b5735a0f563fd95",
".git/objects/6e/1b9ec61562c4ba5e1f464198707a5ec899f2b9": "d3bee73f48132918559d8371fe2a1a35",
".git/objects/9a/17d17d080f7f20e7e3042cddae3cbc0014344b": "dc5c04be4c7046b8f3626c091c3750f4",
".git/objects/5c/9d6ca5f6e3e562ce5993d0d250849377b6d837": "f9b5f528590c690beebc358aef6a6475",
".git/objects/09/36ceee236a94f37a97aed24d134643e6560669": "a988e72a7be26b61843ac913f9afe8cd",
".git/objects/91/cf0c07c0a7dbfcfc189a7530f87c23e4673311": "fa07d21e75a4dc03780142ee5b1c091d",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/53/067b7418de49c679dc46436bcd5c5bb04646e7": "005e93b745c0bc344a854df899a6dc54",
".git/objects/3f/894d3b951f95a6fe1d58c0a686d221741659c2": "fed1e22addf00cbfa6e61a2d06ea851f",
".git/objects/5e/9495a6e8c171caddfbba18f5875a5c296f18c5": "691918969a88fc2805f8d0da25da5336",
".git/objects/5e/8cb5da0ccbd9f78a1c73eafe211f3f0b38b59b": "7a31d335ac54ef0d974fb6e57fe7e37c",
".git/objects/5b/ab9df12867a64b9f7bfdc342bf56df9bcf6904": "2285657bdbf765dfc1b92a5585536ed0",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6d/708aad819dc409849c43ea0db604f4894d5ed3": "ce2722e011c5847f1accaf5b9e48fec0",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/99/72b0aef7027b8d758a888cbd4b39925b4d0c32": "3066512fdf19c9040bf688a126e425c9",
".git/objects/55/ed9b1b17bd7f633b5c76dd85f9dcf2ee5f70c1": "9b1a2e724118cf5d6aa5ef76b933369b",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/63/5664b9299c23af7611ba37199c31a3f461db1a": "d55e5cfbb3521ef5f8fe0df84a2e9149",
".git/objects/90/5b6e4b6d1795b49be33b45658b4b6dab1048f6": "d5cb08fa6f81942158f564907e92bae7",
".git/objects/bf/ea95ef153c0025da9dd636153f6db7bdccb55f": "ef75c1714e80659e21950f7deccaac48",
".git/objects/bf/def2aef0c4fafc80c832363b611f5d9241a81e": "50c9d687d5903f5b9a76d278a2732f07",
".git/objects/d4/0fb9eb297840bc1c05fa4922b93d5b6b2b1214": "5509357ed6e336dfba0d724b4f053d5b",
".git/objects/a0/d13f4ba6a6b4adb6c025ce008e408007fb77f6": "febd984f6e963d1ee23c5042b0a45ac2",
".git/objects/a0/f91cddb4653f5bca6e24760fa2af98841828b8": "e8a88bced4b7062c3a4b7c57fb8f2fed",
".git/objects/b1/6528fcece5d473f3107a1175ddc355991845f7": "545d6065b8e58782169b9219456fc81e",
".git/objects/dd/742375528de8e337208002b0626c92c370e404": "10305b82a36d856c8538d1626cd89354",
".git/objects/b6/25a4ca0e3335b0c36a9984f1c428972ce3fadc": "71c67e528926e74b56e8b3c83a06d577",
".git/objects/b6/9034b8d275cbe531e573d5ad59b765c1a23f1a": "1a92a24243dd61f032fabe646cc2fd93",
".git/objects/a9/5225dad7c679c046e9e4265acfbc1726df8f8d": "930b1ad2d819aa880a62b1a8fcff4f56",
".git/objects/d2/374fc5db3469a1afff7d26448361bd3184c264": "73fd15a343f5dea800aa9e2ed34298c6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/5b9a8c8cbb12361d1653d2e7bedd70fce95cd8": "e8aa7b2d584a61e8683378bf6a298b41",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/f206c1fca220e0b6bb846cf759111e2956530b": "1affe4ecb0a14b703a8214091363c205",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/2195bd0bf3a9179a44060a3356521069186c32": "e1b34ad96c8f5adfadebdad484dcba13",
".git/objects/e6/53cace3edb24ca7ede258017cf212e31ee4381": "c352030b7c9f6560dcaf32c96d7b17f3",
".git/objects/f9/4c5bf66ab517058e8c2ace17783958461ad11a": "f9e61f2195438f407dce387107dfad70",
".git/objects/f7/328c0c97e39c008a5307faa17ce5e5eeed0bcb": "07927e1039d5790286e1af0b432ab6d9",
".git/objects/ff/10be10008f5fb84567721fab14be752983e286": "7d4f87f56394da1057fa7bdcd051883c",
".git/objects/f8/77c9c6465ff13c0be6160088a4d95f2294e0c7": "11252caa8daaacf9b829d012ed581148",
".git/objects/2c/64356b85c0af74238aee9391593c60bcdd3988": "a1881429f9265d2a32d5c21c7c95007b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/518c855614c821d3e80479fa08e1a3ab0a2e5f": "f25d5ed5e432f99265214a202c6ed747",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/2b541584947bf56d84e208262e29e7faa4d508": "67110f7f3d0e7d5634412177f35a0f87",
".git/objects/77/6db1e10366e1e5f69ed4268610acfcc94ecc89": "ba1ae49d2d8e5c1da04159fac923f58e",
".git/objects/77/378984634bae9690b118ae5fbc94c595917bf6": "f4d638d2425bb776d7b111554fb35b1b",
".git/objects/70/552c345652176953411ac15033dfc1503e0187": "473ad52936fb007925fbe039615c4929",
".git/objects/1e/b39b46166d5cadfb28bbb950d8aa522ede6b2f": "ab675909e71b97ad4355e3abf3998919",
".git/objects/84/e869ccd3dd7e8d26d3f46cfb47ba027f57e586": "66a4380af7d07d3f4b94b4b540fb7f92",
".git/objects/84/e0246e2abfe71c66e98e6427bffaa25620c542": "844f887c4721240eff5d2230a46e25e7",
".git/objects/23/241443804e77a83e60963982dabbc923b4b03b": "e0593d178f3a4f0c432730d436390a44",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/15/42007f31c557cb874b7d01e853e9edc43e8909": "7ca8845763dbcf076ee8d221883b0a0c",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/c2cfbc2290e2c115c198edd02c9d6f3232eb8a": "50b16548629304426ed653214d979d50",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/1d/dd51e64df24a4eb691397b295664d2766a2c0f": "6ec606cd0b582df3e71db1c340b91172",
".git/objects/71/daf991121e7e34d64052760e86832a5157ee05": "8d621291b681f362a441d89701346258",
".git/objects/71/6de121c9c390ad4b5fe7ce7b99ecdf38d91f39": "ee79a378ecc17844a0411416c77b4d27",
".git/objects/40/eb698ecccef4405dd9f3a21eaba0593d59b898": "43d1e7f1a0ec31cb6016c5eb0af44210",
".git/objects/2b/ffed7893f4ec4a4303761352c3d86aa6a58b3d": "9b41c1dcb48b69f5f66ebbf8eecb1237",
".git/objects/7a/afbe01c1f71426be6cb687921503cb10edf6ef": "1b5b30307b21b3e416c26b0cb9ad83f1",
".git/objects/8e/f1f31fd49af3b90f6e1b2d47bbc6a333eedca1": "8fea62edec157874bbb3130e907b1574",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c57fabc291bd44850d12366ac7f49c5f",
".git/logs/refs/heads/main": "c57fabc291bd44850d12366ac7f49c5f",
".git/logs/refs/remotes/origin/main": "7c54f7c6efc8f64185d217b53e139af1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "9cc3011503a1b5a8c6f60f27aa90313b",
".git/refs/remotes/origin/main": "9cc3011503a1b5a8c6f60f27aa90313b",
".git/index": "5316c48f12736a3473217c5ef00ff961",
".git/COMMIT_EDITMSG": "d786376f25734f757b93b5f5d381ae63",
".git/FETCH_HEAD": "fc7c348f1a9739a7907418e183ba235d",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/NOTICES": "9250de352e31ccc6f55430f539171a21",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
