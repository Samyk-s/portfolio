"use client";

export default function GradientBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {/* Top-left violet blob */}
      <div
        className="blob w-[600px] h-[600px] -top-40 -left-40 opacity-[0.04] dark:opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }}
      />
      {/* Top-right pink blob */}
      <div
        className="blob w-[500px] h-[500px] -top-20 right-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }}
      />
      {/* Bottom-center teal blob */}
      <div
        className="blob w-[700px] h-[400px] bottom-0 left-1/2 -translate-x-1/2 opacity-[0.03] dark:opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
      />
    </div>
  );
}
