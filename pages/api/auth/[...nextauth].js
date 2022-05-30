//for google login and logout.
import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import GoogleProvider from "next-auth/providers/google";

export default async function auth(req, res) {
    return await NextAuth(req, res, {
      adapter: MongoDBAdapter(
         clientPromise
      ),
      providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
        }),
      ],
      callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
          return true;
        },
        async session({ session, token, user }) {
          session.user._id = user.id;
          return session;
        },
        async jwt(token, account){
            if(account?.accessToken){
                token.accessToken = account.accessToken;
            }
            return token;
        },
    },
    });
}
/*export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
          clientId: process.env.GOOGLE_ID,
          clientSecret: process.env.GOOGLE_SECRET,
          authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      })
      
      // ...add more providers here
    ],
    jwt : {
        encryption : true,
    },
    secret: process.env.secret,
    callbacks:{
        async jwt(token, account){
            if(account?.accessToken){
                token.accessToken = account.accessToken;
            }
            return token;
        },
        redirect: async (url, _baseUrl) => {
            if( url === '/profile'){
                return Promise.resolve('/');
            }
            return Promise.resolve('/');
        }
    }
  });*/

  