# Portfolio maintenance

This document records the repeatable process used to keep project information
accurate without exposing private source code.

## Project update checklist

1. Confirm the latest implemented features from the project repository and the
   deployed application.
2. Keep the Home description concise and the Projects description
   evidence-based and detailed.
3. Remove source links for repositories that are no longer public.
4. Replace the project preview when the deployed interface changes materially.
5. Run lint, formatting, type, production-build, responsive-layout, and
   sensitive-information checks before committing.
6. Commit and push only after the verified diff has been reviewed.

## 2026-07-28 — StitchFlow

- Removed StitchFlow source-code links from Home and Projects.
- Repositioned the project as a full-stack product for Australian graduate and
  junior software developer applications.
- Updated the description for Supabase authentication, PostgreSQL persistence,
  row-level security, private image storage, cross-device sync, measurement
  profiles, search, and image optimisation.
- Removed the OpenAI Build Week label and implementation-partner highlight.
- Added an accessible hover and keyboard-focus preview using a current capture
  of the deployed product. Touch devices keep the existing compact card layout.
