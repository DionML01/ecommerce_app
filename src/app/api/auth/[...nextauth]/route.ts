// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

interface User {
  id: string;
  name: string;
  email: string;
}

async function authenticateUser(
  email: string,
  name: string,
  password: string
): Promise<User | null> {
  // TODO: replace with proper DB/API check
  if (email && name && password?.length >= 6) {
    return { id: Date.now().toString(), name, email };
  }
  return null;
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        name: { label: "Name", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Return null for any invalid/missing credentials
        if (!credentials?.email || !credentials.name || !credentials.password) {
          return null;
        }

        const user = await authenticateUser(
          credentials.email,
          credentials.name,
          credentials.password
        );
        return user ?? null; // return null on invalid login
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user = {
        id: token.id,
        name: token.name,
        email: token.email,
      };
      return session;
    },
  },

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
