    import { signIn } from "./actions";

    export default async function LoginPage({
      searchParams,
    }: {
      searchParams: Promise<{ error?: string }>;
    }) {
      const { error } = await searchParams;
      const field =
        "w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary";

      return (
        <main className="min-h-screen flex items-center justify-center bg-background px-4">
          <form
            action={signIn}
            className="w-full max-w-sm bg-card border border-border rounded-2xl p-8 space-y-4"
          >
            <h1 className="text-2xl font-bold text-foreground">Kijani Admin</h1>
            {error && <p className="text-sm text-destructive">Invalid email or password.</p>}
            <input name="email" type="email" required autoComplete="username" placeholder="Email" className={field} />
            <input name="password" type="password" required autoComplete="current-password" placeholder="Password" className={field} />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-full font-semibold"
            >
              Sign in
            </button>
          </form>
        </main>
      );
    }