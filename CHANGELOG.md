# Changelog

## [1.7.0](https://github.com/luisstd/retroloop/compare/v1.6.2...v1.7.0) (2024-01-02)


### Features

* add checkout and billing portal link handlers ([ae680e6](https://github.com/luisstd/retroloop/commit/ae680e618bdb776c84ea886dde40ead5f7902815))
* add pricing section ([8ab3a34](https://github.com/luisstd/retroloop/commit/8ab3a3468c766535f705ddcb62bfc600881e8690))
* add redirect for logged out users ([825e051](https://github.com/luisstd/retroloop/commit/825e0513165ce4b2ddb8c03117cd32edbc8504a6))
* add stripe API client ([3c09e2d](https://github.com/luisstd/retroloop/commit/3c09e2dabc313805bedcc0e93d83682325bc6275))
* add stripe trpc router ([d3ebb78](https://github.com/luisstd/retroloop/commit/d3ebb78322be96616cafc25237d35ef660ca7fc2))
* add stripe webhook event handlers ([50a5131](https://github.com/luisstd/retroloop/commit/50a5131e36c1af86bd1a8619980688e1dbb20903))
* add stripe webhook listener route ([436a566](https://github.com/luisstd/retroloop/commit/436a566fb2017b07f0edb93df9901b782f99eecc))
* add subscription type to user table ([9eb5e16](https://github.com/luisstd/retroloop/commit/9eb5e165a223e4fd8a27fd0d998d23199a72e43f))
* display account type in profile ([c86a944](https://github.com/luisstd/retroloop/commit/c86a944f21f888667cb4a9127b0e8a5813d937ef))
* extend dialog to enforce retrospective limit ([f7d2b70](https://github.com/luisstd/retroloop/commit/f7d2b700815917cc2aff254fc7ed7d9bcd05937a))
* only show retros from last 90 days for standard accounts ([f4b5bb5](https://github.com/luisstd/retroloop/commit/f4b5bb5c072b35eb9d1f6c35449ba683b7b21591))


### Bug Fixes

* correctly access version number ([1a8a215](https://github.com/luisstd/retroloop/commit/1a8a21551f6f9656d9e54519f746daecb90a47b3))
* resolve warning about image dimensions ([d678355](https://github.com/luisstd/retroloop/commit/d678355f6db03726883afc63c48f2954d65c8e47))

## [1.6.2](https://github.com/luisstd/retroloop/compare/v1.6.1...v1.6.2) (2023-11-20)


### Bug Fixes

* disable env validation for docker builds ([533f104](https://github.com/luisstd/retroloop/commit/533f104a3884d008768162badef5197115df7cd1))
* set click handler correctly on button element ([fed2670](https://github.com/luisstd/retroloop/commit/fed2670c548edd98bdc9443efc83e4159255c104))
* use correct redirect for app router ([35eef8f](https://github.com/luisstd/retroloop/commit/35eef8f1a78614dd31bd997f06e79ec70e75cbff))

## [1.6.1](https://github.com/luisstd/retroloop/compare/v1.6.0...v1.6.1) (2023-11-04)


### Bug Fixes

* fix check for empty dashboard state ([d426178](https://github.com/luisstd/retroloop/commit/d42617894c3a48b4e9d92f2adc79dd0b3d90a5a2))

## [1.6.0](https://github.com/luisstd/retroloop/compare/v1.5.0...v1.6.0) (2023-11-04)


### Features

* add fallback ui for empty retro section ([5a10dda](https://github.com/luisstd/retroloop/commit/5a10ddafc923de169bb749bc085eb1a378630ba5))
* add fallback ui for empty team section ([d9471f0](https://github.com/luisstd/retroloop/commit/d9471f016ecaa91266ced21d99d203d7634de419))
* add functionality to edit retro titles ([3564045](https://github.com/luisstd/retroloop/commit/3564045511f5c04f4a60d18eb31de39c6dab59d3))
* add generic skeleton component ([a2da2b4](https://github.com/luisstd/retroloop/commit/a2da2b4dc0b31600b1b83fa0f8e65c47b966c6b1))
* add toast notification for every user interaction ([d5c9acc](https://github.com/luisstd/retroloop/commit/d5c9acc92acadee0b56ddbe506bddbc025f2f84a))

## [1.5.0](https://github.com/luisstd/retroloop/compare/v1.4.0...v1.5.0) (2023-10-11)


### Features

* add users as retro participants on page view ([#126](https://github.com/luisstd/retroloop/issues/126)) ([d6c4ee4](https://github.com/luisstd/retroloop/commit/d6c4ee4bf317f884b73b736bf93aefabd5c7553d))

## [1.4.0](https://github.com/luisstd/retroloop/compare/v1.3.1...v1.4.0) (2023-09-30)


### Features

* add generic alert dialog component ([d7ffae7](https://github.com/luisstd/retroloop/commit/d7ffae7c487588700e32bf610a5ed74c473ec39c))
* add generic avatar component ([792c5f8](https://github.com/luisstd/retroloop/commit/792c5f83a415de9c1e16183fa4151b550f3be8b4))
* add generic badge component ([7cef3df](https://github.com/luisstd/retroloop/commit/7cef3df83dde637744ea38a11711e169a2ca1528))
* add generic button component ([34aab81](https://github.com/luisstd/retroloop/commit/34aab8138a4b0d52059b23707b4e0f826f7f35ea))
* add generic card component ([8dd9e46](https://github.com/luisstd/retroloop/commit/8dd9e463c36e95e692925bb1a02770656518a399))
* add generic dialog component ([69d324e](https://github.com/luisstd/retroloop/commit/69d324e3a73e792b1a75c839a15f9dd7d26f9929))
* add generic dropdown menu ([33c1541](https://github.com/luisstd/retroloop/commit/33c1541564a504d35be26206377e54a2ce8c0a5c))
* add generic input component ([3247613](https://github.com/luisstd/retroloop/commit/3247613c8628dc033383371ac3fccd44cd2c8514))
* add generic label component ([de0fa7b](https://github.com/luisstd/retroloop/commit/de0fa7bdd3d17b8941f870dc4f1d70520560ab80))
* add generic nav menu component ([2683c5e](https://github.com/luisstd/retroloop/commit/2683c5ef50f859d56e02d8993543c2d1de64628f))
* add generic popover component ([9c6d963](https://github.com/luisstd/retroloop/commit/9c6d963cc11911dddf0d049ed39e07ad18e580e1))
* add generic separator component ([2542b3b](https://github.com/luisstd/retroloop/commit/2542b3be9097bd9b847b2e806c730a4e3729dd36))
* add generic textarea component ([03cafee](https://github.com/luisstd/retroloop/commit/03cafee8eb98868717db3971a56403a89f501b9b))
* add generic toast components ([782e102](https://github.com/luisstd/retroloop/commit/782e102fe81e46787c82aff5d8244895ad2b5565))
* add improved bg-pattern ([22095ba](https://github.com/luisstd/retroloop/commit/22095ba0d7755068a1520f2b9c498ee1bc098344))
* add position indicator for feedback stack ([4159da9](https://github.com/luisstd/retroloop/commit/4159da99013ea718b86e51819b359cdd989c8031))
* display item type on feedback stack ([642996e](https://github.com/luisstd/retroloop/commit/642996e015b9edbcc4f352d3d060c789c9f2c5ad))


### Bug Fixes

* add missing asChild prop ([0d61da0](https://github.com/luisstd/retroloop/commit/0d61da0fff653d64691ca95fe9df4ed117b86ebc))
* fix compile errors ([ec0f41a](https://github.com/luisstd/retroloop/commit/ec0f41a0c233a48910ba79c3bd5bc534cceb076a))
* fix layout shift with different feedback item sizes ([5425862](https://github.com/luisstd/retroloop/commit/54258624152d2b7ae3ce6ac989c88867d0ae427c))
* fix positioning of feedback widget ([662181c](https://github.com/luisstd/retroloop/commit/662181c237366152fbf9f16251d1484c697206f0))
* remove console.log statement ([b0f316b](https://github.com/luisstd/retroloop/commit/b0f316bc3622c826b115d2c1a578373df3d995be))

## [1.3.1](https://github.com/luisstd/retroloop/compare/v1.3.0...v1.3.1) (2023-06-25)


### Bug Fixes

* add min-height for item columns ([30f48bc](https://github.com/luisstd/retroloop/commit/30f48bcb543e62e3a4d445d1a362d4a28707b607))
* fix vertical overflow for retrospective items ([ba0f049](https://github.com/luisstd/retroloop/commit/ba0f0494dd82e08c959b6e7381ef3dcaf425dc3a))
* fix z-index issue with notification toast ([9fd03da](https://github.com/luisstd/retroloop/commit/9fd03da2e52e67cd8b383d1d8e17a44bf818f6b9))

## [1.3.0](https://github.com/luisstd/retroloop/compare/v1.2.1...v1.3.0) (2023-06-24)


### Features

* add widget for user feedback ([c82d7af](https://github.com/luisstd/retroloop/commit/c82d7af2e7bcfd1695dfce3928952a47fdd114ec))


### Bug Fixes

* fix inconsistent colors for navigation dropdown ([d20aa42](https://github.com/luisstd/retroloop/commit/d20aa42dd39b869b0eb4b1aec4966cff20b78aa2))

## [1.2.1](https://github.com/luisstd/retroloop/compare/v1.2.0...v1.2.1) (2023-06-18)


### Bug Fixes

* make home link logo clickable ([b5830c8](https://github.com/luisstd/retroloop/commit/b5830c8c1da2d4154be645174723565b878cd335))

## [1.2.0](https://github.com/luisstd/retroloop/compare/v1.1.0...v1.2.0) (2023-06-03)


### Features

* redirect to login page on click when unauthenticated ([393431f](https://github.com/luisstd/retroloop/commit/393431facbce6b4a733c986f6f9068601d315708))


### Bug Fixes

* fix button click-target width ([7da2a1b](https://github.com/luisstd/retroloop/commit/7da2a1be03da2da06fae1c3dfdd781c5fa921dda))
* remove trailing comma from renovate config ([178e665](https://github.com/luisstd/retroloop/commit/178e665ec68702ebb9fcb57c5b501c40bd15e6b4))

## [1.1.0](https://github.com/luisstd/retroloop/compare/v1.0.0...v1.1.0) (2023-05-20)


### Features

* only show items created by current user in writing phase ([15acaac](https://github.com/luisstd/retroloop/commit/15acaac02a46ef228b4d829a806b51c8b3855695))


### Bug Fixes

* fix incorrect casing for filename ([0ba29f5](https://github.com/luisstd/retroloop/commit/0ba29f5a1fc0a505cf89ee5d73a3904785732ea7))
* fix layout shift on phase switch ([379e591](https://github.com/luisstd/retroloop/commit/379e591345dc1d21721e8491f3e9439c78577699))

## 1.0.0 (2023-05-01)


### Features

* add .depth class ([10d63d5](https://github.com/luisstd/retroloop/commit/10d63d5e26758899f5de2b66d1f40328ad9cfecf))
* add action buttons for retro view ([7eb9a07](https://github.com/luisstd/retroloop/commit/7eb9a07ed667fc849681519b62834ce51e15f649))
* add basic footer component with placeholder links ([8ebc699](https://github.com/luisstd/retroloop/commit/8ebc6992eaed2071b9ce5f57cab576656963774a))
* add basic user profile ([b98c1a4](https://github.com/luisstd/retroloop/commit/b98c1a4d08519c0c1a827bda0ee5936ea9e4e4d6))
* add button to finish retrospective ([0cf4b65](https://github.com/luisstd/retroloop/commit/0cf4b654f3257ca5f655c9ce96695eab745fc60b))
* add dashboard page ([f8b881b](https://github.com/luisstd/retroloop/commit/f8b881b0d22c58f045fcef53db62dc357c323934))
* add dialog for adding retrospectives ([c4014e3](https://github.com/luisstd/retroloop/commit/c4014e3da2515cd424805ace4edee6395955625a))
* add Dockerfile ([12a610b](https://github.com/luisstd/retroloop/commit/12a610b74de718ffe0ab4875d0b66451a52443f7))
* add dynamic bg-pattern ([513cd01](https://github.com/luisstd/retroloop/commit/513cd011b8cfe106b35f9ce44f6814ef277b99aa))
* add functionality for switching between retro phases ([a6d2d5a](https://github.com/luisstd/retroloop/commit/a6d2d5a6c811222c1d4463463676e68424090a15))
* add functionality to add retro items ([befbfa8](https://github.com/luisstd/retroloop/commit/befbfa8eb3964098d3852d5d234466a0e7e083be))
* add functionality to create a retrospective ([49e566a](https://github.com/luisstd/retroloop/commit/49e566ae91b2768f05d2c7c663e0f1a546a0abc2))
* add functionality to delete retro item ([c5fd670](https://github.com/luisstd/retroloop/commit/c5fd6701f98b6fd29fe4c4540f420350ebc1fc49))
* add functionality to edit a retro item ([d775838](https://github.com/luisstd/retroloop/commit/d775838ebdb728a2807570a575c4aea02eb45ad8))
* add functionality to vote on retro items ([fbe0bb2](https://github.com/luisstd/retroloop/commit/fbe0bb259c0210f58965e88c08ee34959fd635e2))
* add grouping phase to retro view ([f3f29cc](https://github.com/luisstd/retroloop/commit/f3f29ccd974d175198d3324acfff5e7ef56b7194))
* add heading to RetroSection ([27306cb](https://github.com/luisstd/retroloop/commit/27306cb7b13d9aa0c83401bbfd74ca90386190bb))
* add initial landingpage ([880e4c6](https://github.com/luisstd/retroloop/commit/880e4c669f641a4f0d8db97087aec32bfd9330cc))
* add initial version of discussing view ([57fa187](https://github.com/luisstd/retroloop/commit/57fa187851f450126a9026bc6775e3c2f2d52693))
* add initial version of retro view ([defe3ad](https://github.com/luisstd/retroloop/commit/defe3ada75b76f48e8093f52554b87cb47e4aaae))
* add initial version of settings page ([c05d31e](https://github.com/luisstd/retroloop/commit/c05d31e7a12319489c0194b77a5ca61ed5371330))
* add initial version of voting view ([8175ed6](https://github.com/luisstd/retroloop/commit/8175ed6bf0b239932bc703ac0644ae547ad8e8fd))
* add itemCollection trpc router ([e027c3c](https://github.com/luisstd/retroloop/commit/e027c3c121b6c680ce2fc7f77678aef4e71d2f3b))
* add itemCollector columns ([650ae6c](https://github.com/luisstd/retroloop/commit/650ae6caa52e1b25492d19720e0edfcf46a72de5))
* add legal policies ([9139673](https://github.com/luisstd/retroloop/commit/9139673d6065db5e3dcf7cc9f3f0c8bf87e719f9))
* add loading spinners to dashboard sections ([50cc9c9](https://github.com/luisstd/retroloop/commit/50cc9c9165332d95b05d02bdda9060b855d316db))
* add login functionality via next-auth ([bea7c63](https://github.com/luisstd/retroloop/commit/bea7c639953d02778e8198585948e3681f4a288b))
* add MenuBar component ([d2671aa](https://github.com/luisstd/retroloop/commit/d2671aa132464f786f66fc6a5751430ffe15eff7))
* add menubar to landingpage ([9e7159b](https://github.com/luisstd/retroloop/commit/9e7159b4a9f5d8e688fb8d58167c6c797bff0ff5))
* add meta tags to all pages ([9b352cf](https://github.com/luisstd/retroloop/commit/9b352cf47bd475157a3bc1fd7186514d831a58b7))
* add plausible stats ([56894a7](https://github.com/luisstd/retroloop/commit/56894a79244c549ac44d499601d593e2060960b7))
* add RetroSection component ([697196f](https://github.com/luisstd/retroloop/commit/697196fc370cac51de746c119770533b38af5412))
* add robots.txt ([df1402d](https://github.com/luisstd/retroloop/commit/df1402d1a25bd7b2ef12a2c864a1f5795364f8c8))
* add router for retrospective items ([f42b0e4](https://github.com/luisstd/retroloop/commit/f42b0e404f6215db58bbb81034bf6bd52c343691))
* add sentry error logging ([f6b1667](https://github.com/luisstd/retroloop/commit/f6b16674349783d8b08177d9c1cad2e09c96cdf1))
* add signup form for users without username ([282f5bf](https://github.com/luisstd/retroloop/commit/282f5bfb5c23abb85a864cfa9097ca9e1b19f2bb))
* add sitemap.xml ([7c2b5e1](https://github.com/luisstd/retroloop/commit/7c2b5e1fd79ba8e201ed37c692990578e8aa45e9))
* add team section to dashboard ([0c2b04c](https://github.com/luisstd/retroloop/commit/0c2b04cb6eb339a5435514a78ea27144fca2aeba))
* add TeamSection component ([59865bc](https://github.com/luisstd/retroloop/commit/59865bc3070df1aabc037580126156df55aea200))
* add timer for retrospectives ([e18748b](https://github.com/luisstd/retroloop/commit/e18748b525b266232df60e9a6e9ef6183b913edd))
* add user avatar to signup form ([103e396](https://github.com/luisstd/retroloop/commit/103e396d995c6cd9a69d1ecb78a177f9488111f9))
* allow sending login/invite link to team members ([183d22e](https://github.com/luisstd/retroloop/commit/183d22ed8e440f94b5c35dae97fc6bdba97e7ada))
* complete signup form functionality ([a7328da](https://github.com/luisstd/retroloop/commit/a7328da7ef1ea924091956ff186e26be6ed583aa))
* display existing retro items by type ([5f77b64](https://github.com/luisstd/retroloop/commit/5f77b64b7cb98bf857af35b2b571a4f1dbb136ea))
* extend user trpc router ([baa90bc](https://github.com/luisstd/retroloop/commit/baa90bc4cf42ec062cf7b9166a6e541605603cc0))
* hide arrow icons for first and last item ([bddb12d](https://github.com/luisstd/retroloop/commit/bddb12d7cef7e4cf6c69391baccfac0deaf15404))
* hide pages if user is not logged in ([096d62d](https://github.com/luisstd/retroloop/commit/096d62d74aa113045a4c8336bd86a5bcf7ddc208))
* implement dark/light/system theme functionality ([16ca448](https://github.com/luisstd/retroloop/commit/16ca44808c0c1de598267aab7ed05a6a606ea1a3))
* implement indicator to show current retrospective phase ([07d7e41](https://github.com/luisstd/retroloop/commit/07d7e41b7b6d010fb87db73a51236449eca49be6))
* improve item stack layout and styling ([445e1c7](https://github.com/luisstd/retroloop/commit/445e1c7c51e44bc71f27ada056a580c966eda6bf))
* improve layout responsiveness ([c1cc93c](https://github.com/luisstd/retroloop/commit/c1cc93c86759e1ef7230422209a55dad3ed6269d))
* improve positioning of title & close button ([523c7f6](https://github.com/luisstd/retroloop/commit/523c7f69b8b8ae704a2c7e926177272957e78a38))
* improve responsiveness ([ff41c27](https://github.com/luisstd/retroloop/commit/ff41c27a91222287a626e0d5418a25505b480a26))
* only allow voting once on retro items ([1a1b7bc](https://github.com/luisstd/retroloop/commit/1a1b7bcab936c694c02ae671535933361c27492e))
* sort retrospectives by date in dashboard view ([1b506ed](https://github.com/luisstd/retroloop/commit/1b506ede2513258da3dba85e96b7da34df4f3c37))
* update dark mode styling for RetroDialog ([f1f692b](https://github.com/luisstd/retroloop/commit/f1f692b59d93c06951282ff49be6926f5f08f216))


### Bug Fixes

* add missing AppProps ([aec9c6e](https://github.com/luisstd/retroloop/commit/aec9c6ebf79e36b86f89d4810c857673825d500b))
* **deps:** update dependency next to v12.3.4 ([22f9ebe](https://github.com/luisstd/retroloop/commit/22f9ebe4226a3c35e7ce8a2d4d7e7f821ece2dbe))
* fix bug with missing participant on retro creation ([c490bf4](https://github.com/luisstd/retroloop/commit/c490bf4049d4e532282e1a809f2612abfb340ba5))
* fix codecov path ([011450f](https://github.com/luisstd/retroloop/commit/011450f9d4dae2bb532ebd903c85a912fcde0fbd))
* fix condition for phase link visibility ([e999e3a](https://github.com/luisstd/retroloop/commit/e999e3a40ba39584f329222b1a8174eb50f2fa4f))
* fix incorrect button styling ([509d76a](https://github.com/luisstd/retroloop/commit/509d76a0f284f82c413e218d0762f43b0723fb08))
* fix incorrect input types ([8b2f15f](https://github.com/luisstd/retroloop/commit/8b2f15f0e05ce0bffca3ce6e9b1977fdad7f7705))
* fix invalid yaml indentation ([b9a4cd5](https://github.com/luisstd/retroloop/commit/b9a4cd5c87d50d43f2b7a88f726a2df454bea8ad))
* fix issues with timer logic ([f6d724a](https://github.com/luisstd/retroloop/commit/f6d724acff51b6fb9519395e84bdf2e85240e091))
* fix many-to-many relation ([23bccb1](https://github.com/luisstd/retroloop/commit/23bccb196d6c6e47a7219338346a0470a54230fe))
* fix menu items alignment ([e00bb65](https://github.com/luisstd/retroloop/commit/e00bb6587aa023b950f8f4a507b4ecb5520a9fb4))
* fix railway deployment issue ([a1da0b2](https://github.com/luisstd/retroloop/commit/a1da0b257d499c5f99f3034648cbb2c4484e0c4c))
* fix sorting of items by number of votes ([a9d34ca](https://github.com/luisstd/retroloop/commit/a9d34ca34a901453cf81528a608c48431f2c4b21))
* fix timer autostart with 00:00 ([c21edaa](https://github.com/luisstd/retroloop/commit/c21edaa68b6320224e409c18f291a7b04b4fbd69))
* fix timer being incorrectly persisted ([b0b3218](https://github.com/luisstd/retroloop/commit/b0b32187872108b44acfbc89f9b9fee4909e5843))
* fix type error in vitest config ([8c22d7b](https://github.com/luisstd/retroloop/commit/8c22d7b4623bed7a952bd7eb0727d79707095ac3))
* fix type for github oauth token expiry ([5f8f86e](https://github.com/luisstd/retroloop/commit/5f8f86e65d7fe1de11a962305ccd92b81e87a7c8))
* fix unescaped single quote ([d36fe68](https://github.com/luisstd/retroloop/commit/d36fe684985b2df73900da84167f03ec1559c9c8))
* fix votes property being nullable on retroItems ([23ed59c](https://github.com/luisstd/retroloop/commit/23ed59cea1a97be1b1e9bf7d9ae4d61043b24dda))
* fix wrong capitalization of schema properties ([2c86374](https://github.com/luisstd/retroloop/commit/2c8637413f550abd01a8e8bf7f7e4baf6a95ae24))
* fix yaml syntax error ([f5a6bf5](https://github.com/luisstd/retroloop/commit/f5a6bf5a57f04a7eee6a48e77fb695d001d17578))
* initialize votes with 0 instead of null ([67d5cf5](https://github.com/luisstd/retroloop/commit/67d5cf58d19e558f1697182948a503040b72e85b))
* make name optional in user schema to allow signup via email ([9a8b6ae](https://github.com/luisstd/retroloop/commit/9a8b6aea2781b6882c7f46ee7270bb1d5fe48891))
* make user name nullable ([57ebb2a](https://github.com/luisstd/retroloop/commit/57ebb2a0f07dd75499cadc1634ac57b4a492acda))
* only generate final json coverage files ([e766112](https://github.com/luisstd/retroloop/commit/e766112cbaaa29afea41622af2cf56c3bf638ac3))
* pageProps typing ([7cb7a16](https://github.com/luisstd/retroloop/commit/7cb7a166e87493da76e57e1028e5725ffd8768df))
* prevent closing when clicking outside dialog ([f663c7d](https://github.com/luisstd/retroloop/commit/f663c7dba93da17981b96df258263744c8910cbe))
* remove input validation for optional property ([c906cea](https://github.com/luisstd/retroloop/commit/c906cea717d09a18e133d0bf8d39dcf6390e3da6))
* remove unneeded sentry plugin ([b28d6be](https://github.com/luisstd/retroloop/commit/b28d6be44b340dbf186ea53f08f594c2468de833))
* revert to nextauth session defaults ([4e43f7c](https://github.com/luisstd/retroloop/commit/4e43f7c6762abeb995bad8fd723b938071d45614))
* update import location ([a97c671](https://github.com/luisstd/retroloop/commit/a97c671fe47627d9107a3725fecfe3d5c6eddf6a))
