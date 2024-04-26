declare namespace LoaderDataType {
  interface Authorization {
    shouldLogin: boolean;
  }

  interface Layout {
    authorizationPromise: Promise<Authorization>;
    userPromise: Promise<Model.User>;
  }
}