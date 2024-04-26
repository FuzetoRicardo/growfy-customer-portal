declare namespace Model {
  interface SocialNetwork {
    userId: string;
    createdAt: string;
    displayName: string;
    followerCount: number;
  }

  interface User {
    birthDate: string;
    city: string;
    country: string;
    id: string;
    languages: string[];
    name: string;
    state: string;
    networks: string[];
  }
}