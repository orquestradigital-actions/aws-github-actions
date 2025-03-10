# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.6.5](https://github.com/clowdhaus/aws-github-actions/compare/v0.6.4...v0.6.5) (2021-06-10)


### Bug Fixes

* **deps:** update dependencies to latest and re-complile to patch reported vulnerabilities ([e82300c](https://github.com/clowdhaus/aws-github-actions/commit/e82300c65249d40a4339831427b3854738c59902))





## [0.6.4](https://github.com/clowdhaus/aws-github-actions/compare/v0.6.3...v0.6.4) (2021-03-16)


### Bug Fixes

* correct old references to `master` to `main` ([74c82f8](https://github.com/clowdhaus/aws-github-actions/commit/74c82f82162ccb6900a372d201f75c9862180bd6))





## [0.6.3](https://github.com/clowdhaus/aws-github-actions/compare/v0.6.2...v0.6.3) (2021-03-16)


### Bug Fixes

* update dependencies to latest to patch reported vulnerabilities ([7b9ef7d](https://github.com/clowdhaus/aws-github-actions/commit/7b9ef7d53756eee5afe4707e48be2720985ad504))





## [0.6.2](https://github.com/clowdhaus/aws-github-actions/compare/v0.6.1...v0.6.2) (2021-02-14)


### Bug Fixes

* rename `master` to `main` and update project dependencies ([89bf0c1](https://github.com/clowdhaus/aws-github-actions/commit/89bf0c1ca521801990fd4f2369780430ff2b25bd))





## [0.6.1](https://github.com/clowdhaus/aws-github-actions/compare/v0.6.0...v0.6.1) (2021-01-24)

**Note:** Version bump only for package aws-github-actions





# [0.6.0](https://github.com/clowdhaus/aws-github-actions/compare/v0.5.1...v0.6.0) (2020-12-21)


### Features

* update dependencies to v3 aws-sdk and fix vulnerable github action output when setting env var ([fb034db](https://github.com/clowdhaus/aws-github-actions/commit/fb034db7a51e33f60c3ba26889cbfafb51c5127d))





## 0.5.1 (2020-09-29)

**Note:** Version bump only for package aws-github-actions





# 0.5.0 (2020-09-24)


* refactor!: move actions up to project root ([7739e2e](https://github.com/clowdhaus/aws-github-actions/commit/7739e2e8c37d412bc44faff493512f816c347ed2))


### BREAKING CHANGES

* action path has been changed to remove `packages/`





## [0.4.8](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.7...v0.4.8) (2020-09-13)

**Note:** Version bump only for package aws-github-actions





## [0.4.7](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.6...v0.4.7) (2020-09-13)

**Note:** Version bump only for package aws-github-actions





## [0.4.6](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.5...v0.4.6) (2020-08-01)

**Note:** Version bump only for package aws-github-actions





## [0.4.5](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.4...v0.4.5) (2020-07-20)

**Note:** Version bump only for package aws-github-actions





## [0.4.4](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.3...v0.4.4) (2020-06-21)


### Bug Fixes

* fix actions on windows runners ([#6](https://github.com/clowdhaus/aws-github-actions/issues/6)) ([e7aac78](https://github.com/clowdhaus/aws-github-actions/commit/e7aac783e5d267e08234ee71bfbf42c966e3d0f2))


### Features

* add additional os testing with matrix strategy for all but cloudfront invalidation ([#5](https://github.com/clowdhaus/aws-github-actions/issues/5)) ([072d6ee](https://github.com/clowdhaus/aws-github-actions/commit/072d6eeae502e94883d3b24e7b809584ecccbb42))





## [0.4.3](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.2...v0.4.3) (2020-06-21)

**Note:** Version bump only for package aws-github-actions





## [0.4.2](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.1...v0.4.2) (2020-05-25)

**Note:** Version bump only for package aws-github-actions





## [0.4.1](https://github.com/clowdhaus/aws-github-actions/compare/v0.4.0...v0.4.1) (2020-05-02)

**Note:** Version bump only for package aws-github-actions





# [0.4.0](https://github.com/clowdhaus/aws-github-actions/compare/v0.3.0...v0.4.0) (2020-04-24)


### Features

* **awscli:** upgrade awscli to v2 ([320481c](https://github.com/clowdhaus/aws-github-actions/commit/320481c27b2d6c9a26760a0fab75ad5222d39182))





# 0.3.0 (2020-04-06)


### Bug Fixes

* fix action path name for monorepo, bump dependencies and recompile ([6d6641c](https://github.com/clowdhaus/aws-github-actions/commit/6d6641ccba42395326c28a2f884ac4d06a375384))


### Features

* **all:** initial commit starting off project with base setup of yarn workspaces, lerna, and ncc ([3f2904a](https://github.com/clowdhaus/aws-github-actions/commit/3f2904a44bc130d2e002b93b45a725d903c991c4))
* **awscli:** make awscli internal package into an action as well, general purpose use of the awscli ([f5f6b5a](https://github.com/clowdhaus/aws-github-actions/commit/f5f6b5abef7e73e852221ad86ba23cec0305214d))
* **cloudfront:** initial implementation of CloudFront cache invalidation action ([47f0063](https://github.com/clowdhaus/aws-github-actions/commit/47f0063cc864085f0d5e48548413a09d7788eb71))
* **s3:** break out awscli from S3 sync to stand on its own ([48de053](https://github.com/clowdhaus/aws-github-actions/commit/48de0535480795e9a45af0f4b64ad7ed68c1c46a))
* **s3:** implement S3 sync using awscli cached locally, no support in javascript sdk ([6ea5d6c](https://github.com/clowdhaus/aws-github-actions/commit/6ea5d6c26865e91e524a90dda7b8a126d8fc96cf))
* **sts:** implment action for setting up IAM credentials in workflow environment ([6d69c04](https://github.com/clowdhaus/aws-github-actions/commit/6d69c045cfc277432d791a7100a9a89168f56225))





# 0.2.0 (2020-03-07)


### Bug Fixes

* fix action path name for monorepo, bump dependencies and recompile ([6d6641c](https://github.com/clowdhaus/aws-github-actions/commit/6d6641ccba42395326c28a2f884ac4d06a375384))


### Features

* **all:** initial commit starting off project with base setup of yarn workspaces, lerna, and ncc ([3f2904a](https://github.com/clowdhaus/aws-github-actions/commit/3f2904a44bc130d2e002b93b45a725d903c991c4))
* **awscli:** make awscli internal package into an action as well, general purpose use of the awscli ([f5f6b5a](https://github.com/clowdhaus/aws-github-actions/commit/f5f6b5abef7e73e852221ad86ba23cec0305214d))
* **cloudfront:** initial implementation of CloudFront cache invalidation action ([47f0063](https://github.com/clowdhaus/aws-github-actions/commit/47f0063cc864085f0d5e48548413a09d7788eb71))
* **s3:** break out awscli from S3 sync to stand on its own ([48de053](https://github.com/clowdhaus/aws-github-actions/commit/48de0535480795e9a45af0f4b64ad7ed68c1c46a))
* **s3:** implement S3 sync using awscli cached locally, no support in javascript sdk ([6ea5d6c](https://github.com/clowdhaus/aws-github-actions/commit/6ea5d6c26865e91e524a90dda7b8a126d8fc96cf))
* **sts:** implment action for setting up IAM credentials in workflow environment ([6d69c04](https://github.com/clowdhaus/aws-github-actions/commit/6d69c045cfc277432d791a7100a9a89168f56225))
