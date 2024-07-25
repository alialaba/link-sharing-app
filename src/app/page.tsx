import Image from "next/image";
// import LoginPage from "./login/page";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';

import { clientConfig, serverConfig } from "../../config";

export default async function  Home() {
  const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  })
  console.log(tokens)

  if(!tokens){
    redirect('/login');
  }
  return (
    <main>

      {/* <LoginPage/> */}
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl mb-4">Super secure home page</h1>
      <p>
        Only <strong>{tokens?.decodedToken.email}</strong> holds the magic key to this kingdom!
      </p>
    </main>

    </main>
       
  );
}
''