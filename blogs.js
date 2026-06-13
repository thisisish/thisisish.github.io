/* =====================================================================
   BLOG / RESEARCH INDEX  —  single source of truth
   ---------------------------------------------------------------------
   Add a new writeup by copying one block below and editing the fields.
   The homepage (#blogs) and any blog hub read from this file, so you
   never touch index.html to publish a post.

   FIELDS
     title    : headline shown on the card
     category : "Writeups" | "Projects" | "CVEs"   (drives the filter)
     date     : "YYYY-MM-DD"  (newest first — keep the array sorted)
     read     : estimated reading time, e.g. "16 min"
     tag      : one short topic label, e.g. "active-directory"
     link     : relative path to the post, e.g. "writeups/fluffy.html"
                (use a full https:// URL to open an external post in a new tab)
     excerpt  : 1–2 sentence summary
   ===================================================================== */
window.BLOGS = [
  {
    title: "HTB: Fluffy — Shadow Credentials to ADCS ESC16 Domain Admin",
    category: "Writeups",
    date: "2026-05-25",
    read: "16 min",
    tag: "active-directory",
    link: "writeups/fluffy/fluffy.html",
    excerpt: "Full-chain Active Directory compromise on Fluffy (Easy · Windows): CVE-2025-24071 NTLM hash leak, GenericAll/GenericWrite abuse, shadow credentials via PyWhisker, UnPAC-the-Hash, and an ADCS ESC16 UPN-spoof straight to Administrator.",
  },

  // --- Next writeup: copy the block above, edit, and drop it here ---
];
