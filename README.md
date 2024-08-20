# Continuous Integration/Continuous Delivery

Small project built to implement continuous integration(CI) with <b>GitHub Actions</b> and continuous delivery(CD) with <b>AWS Codebuild</b> and <b>AWS S3</b>

<hr>

Pipeline - CI:

1. build node
2. install dependencies
3. execute typescript type checking
4. execute tests

<hr>

Checks CI in these pull requests:

- [broken tests](https://github.com/silvavitor/ci-actions/pull/1)

- [broken type](https://github.com/silvavitor/ci-actions/pull/2)

- [correct new feature](https://github.com/silvavitor/ci-actions/pull/3)

<hr>

Pipeline - CD:

1. install packages
2. build project
3. send built project to s3
