export default function AuthPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-background px-5 text-foreground">
      <section className="w-full max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          FindSpace
        </p>
        <h1 className="mt-4 text-3xl font-bold text-brown">
          Auth flow coming next.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          This landing page is wired to /auth so the CTA stays valid. Add your sign-in or onboarding flow here when it is ready.
        </p>
      </section>
    </main>
  );
}
