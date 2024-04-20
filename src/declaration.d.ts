declare module '*.scss';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare namespace Configuration {
  interface SocialNetwork {
    logoUrl: Record<32, string>;
  }

  interface Root {
    socialNetworks: Record<string, SocialNetwork>;
  }
}

declare namespace HTTPRequest {
  interface Error {
    isAborted: boolean;
    reason: string;
  }

  interface Response<T> {
    data?: T | undefined;
    error?: Error | undefined;
    status: number;
  }
}

declare namespace LoaderDataType {
  interface Authorization {
    shouldLogin: boolean;
  }

  interface Layout {
    authorizationPromise: Promise<Authorization>;
    userPromise: Promise<Model.User>;
  }
}

declare namespace Model {
  interface SocialNetwork {
    userId: string;
    createdAt: string;
    displayName: string;
    followerCount: number;
  }

  interface User {
    id: string;
    name: string;
    networks: string[];
  }
}

declare namespace UseCommonData {
  interface Context {
    portalConfiguration: Configuration.Root;
    user: Model.User;
  }
}