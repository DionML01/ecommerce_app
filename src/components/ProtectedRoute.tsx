"use client";

import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const setUser = useAuthStore((s) => s.setUser);

  const [hasHydrated, setHasHydrated] = useState<boolean>(false);
  const [sessionChecked, setSessionChecked] = useState<boolean>(false);

  // Wait for Zustand persistence to finish hydration before making auth decisions
  useEffect(() => {
    type PersistApi = {
      hasHydrated?: () => boolean;
      onFinishHydration?: (cb: () => void) => () => void;
    };

    const persistApi = (useAuthStore as unknown as { persist?: PersistApi })
      .persist;

    // If the persist middleware exposes hasHydrated, use it to set initial state
    const initialHydrationState = persistApi?.hasHydrated?.() ?? false;
    if (initialHydrationState) setHasHydrated(true);

    // Subscribe to finish hydration event
    const unsub = persistApi?.onFinishHydration?.(() => {
      setHasHydrated(true);
    });

    return () => {
      if (typeof unsub === "function") unsub();
    };
  }, []);

  // After hydration, attempt to sync from NextAuth session once
  useEffect(() => {
    if (!hasHydrated || sessionChecked) return;

    (async () => {
      try {
        const session = await getSession();
        if (session?.user) {
          setUser(session.user);
        }
      } finally {
        setSessionChecked(true);
      }
    })();
  }, [hasHydrated, sessionChecked, setUser]);

  // Redirect only after hydration and session check are complete
  useEffect(() => {
    if (!hasHydrated || !sessionChecked) return;
    if (!isAuthenticated) router.replace("/login");
  }, [hasHydrated, sessionChecked, isAuthenticated, router]);

  // Block rendering until we're sure about auth state
  if (!hasHydrated || !sessionChecked) return null;

  return isAuthenticated ? <>{children}</> : null;
};

export default ProtectedRoute;
