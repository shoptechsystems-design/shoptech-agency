import { ArrowLeft } from "lucide-react";
import { SUPPORT_EMAIL, usePageMeta } from "@/components/SiteLayout";
import { Page } from "./Info";

const UPDATED = "November 3, 2026";
const MIN_AGE = 16;
const GOVERNING_LAW = "Pakistan";
const DELETION_DAYS = 30;

const Back = () => (
  <a href="/apps/penvita" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white">
    <ArrowLeft className="h-4 w-4" /> Back to Penvita
  </a>
);

export function PenvitaPrivacy() {
  usePageMeta("Penvita Privacy Policy | ShopTech Systems", "How the Penvita resume builder app collects, uses and protects your information.");
  return (
    <Page eyebrow="Penvita" title="Penvita Privacy Policy" intro={`Last updated: ${UPDATED}`}>
      <Back />
      <p>
        Penvita is a resume and CV builder app developed by ShopTech Systems ("we", "us"). This policy explains
        what information the Penvita app collects, how it is used, and the choices you have. Penvita is free, shows no
        ads, has no in-app purchases, and does not use analytics or crash reporting.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Account details:</strong> your name, email address and password. Your password is stored only as a salted hash.</li>
        <li><strong>Resume content:</strong> contact details, work and education history, and any text you type into your resumes.</li>
        <li><strong>Headshot photo (optional):</strong> if you add one.</li>
        <li><strong>Imported files (optional):</strong> a PDF or DOCX you upload to import a resume. It is processed to extract its text and is not stored.</li>
      </ul>

      <h2>Information we do not collect</h2>
      <p>
        Penvita does not collect your location, contacts, device or advertising identifiers, microphone data,
        payment information or health data.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use your information only for account management and to provide the resume features of the app. We do not
        sell your data and we do not use it for advertising.
      </p>

      <h2>How your data is transmitted and stored</h2>
      <p>
        Your data is sent over HTTPS to our server and stored in our database and file storage. Our hosting and
        storage providers act as processors on our behalf.
      </p>

      <h2>Third-party services</h2>
      <p>
        The app loads fonts from Google Fonts. Google receives your IP address when the fonts are loaded. See{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
      </p>

      <h2>Retention and deletion</h2>
      <p>
        We keep your data until you delete it or delete your account. You can delete your account in the app or by
        email; see <a href="/apps/penvita/delete-account">how to delete your account and data</a>.
      </p>

      <h2>Age requirement</h2>
      <p>Penvita is intended for people aged {MIN_AGE} or older.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy. The "last updated" date above shows when it was last changed.</p>

      <h2>Contact</h2>
      <p>Questions about this policy? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
    </Page>
  );
}

export function PenvitaTerms() {
  usePageMeta("Penvita Terms of Use | ShopTech Systems", "The terms that apply when you use the Penvita resume builder app.");
  return (
    <Page eyebrow="Penvita" title="Penvita Terms of Use" intro={`Last updated: ${UPDATED}`}>
      <Back />
      <p>
        These terms apply to your use of the Penvita app, developed by ShopTech Systems. By creating an account or
        using the app you agree to them. If you do not agree, please do not use Penvita.
      </p>

      <h2>Eligibility</h2>
      <p>You must be at least {MIN_AGE} years old to use Penvita.</p>

      <h2>Your account</h2>
      <p>
        You are responsible for the information you provide, for keeping your password confidential, and for activity
        under your account. Please give accurate details and tell us if you think your account has been misused.
      </p>

      <h2>Your content</h2>
      <p>
        You keep ownership of the resume content, photos and files you add. You give us permission to store and process
        them only to run the app for you, as described in our <a href="/apps/penvita/privacy">Privacy Policy</a>.
        You are responsible for making sure that what you add is accurate and that you have the right to use it.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use Penvita for anything unlawful or to harm others.</li>
        <li>Do not attempt to access other users' data or interfere with the app or our servers.</li>
        <li>Do not copy, resell or reverse engineer the app except where the law allows.</li>
      </ul>

      <h2>Free service</h2>
      <p>Penvita is free to use, with no ads and no in-app purchases.</p>

      <h2>Ending your use</h2>
      <p>
        You can stop using Penvita and delete your account at any time. We may suspend or remove accounts that break
        these terms.
      </p>

      <h2>Disclaimer and liability</h2>
      <p>
        Penvita is provided "as is" without warranties. We do not guarantee that a resume created with it will lead to
        any job or interview. To the extent permitted by law, ShopTech Systems is not liable for indirect or
        consequential loss arising from use of the app. Keep a copy of your resume, because you are responsible for
        your own backups.
      </p>

      <h2>Changes</h2>
      <p>We may update these terms. Continuing to use Penvita after a change means you accept the updated terms.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of {GOVERNING_LAW}.</p>

      <h2>Contact</h2>
      <p>Questions? Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.</p>
    </Page>
  );
}

export function PenvitaDelete() {
  usePageMeta("Delete Your Penvita Account | ShopTech Systems", "How to delete your Penvita account and all associated data, in the app or by email.");
  return (
    <Page eyebrow="Penvita" title="Delete your Penvita account and data" intro={`Last updated: ${UPDATED}`}>
      <Back />
      <p>
        This page explains how to delete your Penvita account and data. Penvita is developed by ShopTech Systems.
      </p>

      <h2>Option 1: Delete in the app</h2>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Open Penvita and sign in.</li>
        <li>Go to <strong>Profile</strong>.</li>
        <li>Tap <strong>Delete account</strong> and confirm.</li>
      </ol>

      <h2>Option 2: Request deletion by email</h2>
      <p>
        Email <a href={`mailto:${SUPPORT_EMAIL}?subject=Delete%20my%20Penvita%20account`}>{SUPPORT_EMAIL}</a> from
        the email address registered to your account, with the subject <strong>"Delete my Penvita account"</strong>.
        We process requests within {DELETION_DAYS} days.
      </p>

      <h2>What is deleted</h2>
      <ul>
        <li>Your account</li>
        <li>Your resumes</li>
        <li>Your photo records and photo files</li>
      </ul>
      <p>
        Files you upload to import a resume (PDF or DOCX) are processed to extract text and are not stored. For more
        detail on what we collect, see the <a href="/apps/penvita/privacy">Privacy Policy</a>.
      </p>
    </Page>
  );
}
