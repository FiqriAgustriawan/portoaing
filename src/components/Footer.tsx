'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]"
      style={{
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-faint)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <span>© {currentYear} Muhammad Fiqri Agustriawan. All rights reserved.</span>
      <span className="italic text-center sm:text-right">
        &ldquo;Simplicity is the ultimate sophistication.&rdquo;
      </span>
    </footer>
  );
}
