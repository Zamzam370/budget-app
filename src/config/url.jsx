import { createClient } from "@supabase/supabase-js";


export const supabase = createClient(
  import.meta.env.VITE_Supa_Link,
  import.meta.env.VITE_Supa_Key,
  {
    auth: {
      storageKey: "user",
    },
  }
);
