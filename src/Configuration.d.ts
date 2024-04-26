declare namespace Configuration {
  interface SocialNetwork {
    logoUrl: Record<32, string>;
  }

  interface Root {
    socialNetworks: Record<string, SocialNetwork>;
  }
}