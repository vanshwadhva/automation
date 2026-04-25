# Security Specification: SendSync

## 1. Data Invariants
- A contact must belong to a contact list owned by the same user.
- A campaign must reference a template and a contact list owned by the user.
- Email logs are strictly tied to a campaign and can only be modified by the campaign owner or the system (though system-only is hard to enforce without functions, we use `isValidLog` helpers).
- Users cannot modify other users' profiles or data.

## 2. The "Dirty Dozen" Payloads (Failure Cases)

1. **Identity Spoofing**: User A tries to create a `ContactList` with `userId` set to User B.
2. **Cross-Tenant List Poisoning**: User A tries to add a `Contact` to User B's `ContactList`.
3. **Template Hijack**: User A tries to read User B's `Template`.
4. **Campaign Fraud**: User A tries to start a `Campaign` using User B's `TemplateId`.
5. **Campaign Status Skip**: User A tries to update a `Campaign` status from `draft` to `completed` without going through `sending`.
6. **Log Injection**: User A tries to create an `EmailLog` for User B's campaign.
7. **Resource Exhaustion**: User A tries to upload a `Contact` with 10MB of `variables` string (enforce size limits).
8. **ID Poisoning**: User A tries to use an extremely long and invalid string as `listId`.
9. **Email Spoofing (Auth)**: User A tries to update their profile email to an admin's email without verification.
10. **Terminal Lock Breach**: User A tries to edit a `Campaign` that is already in `completed` status.
11. **Shadow Update**: User A tries to add an `isAdmin: true` field to their `User` profile.
12. **PII Leak**: User A tries to query all `User` profiles to scrape email addresses.

## 3. Test Runner (Draft)
A `firestore.rules.test.ts` would verify these. (I will implement the rules to prevent these).
