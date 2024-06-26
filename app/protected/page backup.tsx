import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
// import { Checkout } from "@/components/paddle/checkout";
import CheckoutButton from "@/components/paddle/CheckoutButton";
import DeployButton from "@/components/DeployButton";
export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      {/* <Checkout /> */}
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            
            <AuthButton />
          </div>
        </nav>
      </div>
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <Header />
        <CheckoutButton />
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
        © 2024{" "}
          <a
            href="https://web-agi-2ec363.webflow.io/"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            AGIOS
          </a>
          . ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
